import React, { useEffect, useState } from 'react';
import './Lab.css';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionLab from '../../components/SectionLab/SectionLab';
import Loader from '../../components/Loader/Loader';
import Sorting from '../../components/Filters/Sorting/Sorting';
import Filtering from '../../components/Filters/Filtering/Filtering';
import AlertPortfolio from '../../components/AlertPortfolio/AlertPortfolio';

const Lab = () => {
  const [repoList, setRepoList] = useState();
  const [loader, setLoader] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: '' });
  const [filterOption, setFilterOption] = useState({
    label: 'All repository',
    name: 'all',
  });

  useEffect(() => {
    fetchRepos(process.env.REACT_APP_PORTFOLIO_API_URL + '/repos');
  }, []);

  const fetchRepos = async (url) => {
    setLoader(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (res.ok) {
        setRepoList(data.data);
        setLoader(false);
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      setLoader(false);
      setAlert({ show: true, message: err.message });
    }
  };

  const sortBy = (a, b, name) => {
    // if property value is null replace it
    // with empty sting for a correct work of the compare function
    a[name] = a[name] === null ? '' : a[name];
    b[name] = b[name] === null ? '' : b[name];
    // Assign weight for sorting
    if (a[name] < b[name]) return 1;
    if (a[name] > b[name]) return -1;
  };

  const handleSortSelection = (option) => {
    setRepoList(repoList.slice().sort((a, b) => sortBy(a, b, option.value)));
  };

  const handleFilterSelection = (option) => {
    setFilterOption(option);
  };

  const handleCloseAlert = () => {
    setAlert({ show: false, message: '' });
  };

  return (
    <>
      {loader && <Loader />}
      {alert.show && (
        <AlertPortfolio
          variant="danger"
          {...alert}
          onCloseAlert={handleCloseAlert}
          icon={faExclamationCircle}
          dismissible={false}
        />
      )}
      {repoList && (
        <Row className="lab-page-filters">
          <Col xs={6}>
            <Sorting onChangeSelect={handleSortSelection} />
          </Col>
          <Col xs={6}>
            <Filtering
              repoList={repoList}
              onChangeSelect={handleFilterSelection}
            />
          </Col>
        </Row>
      )}

      {repoList &&
        repoList
          .filter((repo) =>
            filterOption.name
              ? repo
              : repo[filterOption.type].includes(filterOption.value)
          )
          .map((repo) => <SectionLab key={repo.id} repo={repo} />)}
    </>
  );
};

export default Lab;
