import React, { useEffect, useState } from 'react';
import './Lab.css';
import SectionLab from '../../components/SectionLab/SectionLab';
import Loader from '../../components/Loader/Loader';
import Sorting from '../../components/Filters/Sorting/Sorting';
import Filtering from '../../components/Filters/Filtering/Filtering';

const repoExclude = 'wbs-tajam';

const Lab = () => {
  const [repoList, setRepoList] = useState();
  const [repoListFiltered, setRepoListFiltered] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch('https://us-central1-my-portfolio-7def9.cloudfunctions.net/app/repos')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setRepoList(data);
        setRepoListFiltered(data);
        setLoader(false);
      })
      .catch((err) => console.log(err));
  }, []);

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
    setRepoListFiltered(
      repoListFiltered.slice().sort((a, b) => sortBy(a, b, option.value))
    );
  };

  const filterBy = (option) => {
    const repoUpdate = repoList.filter((repo) => {
      // If select all option
      if (option.name) {
        return repo;
      } else {
        return repo[option.type].includes(option.value);
      }
    });
    return repoUpdate;
  };

  const handleFilterSelection = (option) => {
    setRepoListFiltered(filterBy(option));
  };

  return (
    <>
      <div className="lab-page-filters row">
        <div className="col-6">
          {repoList && <Sorting onChangeSelect={handleSortSelection} />}
        </div>
        <div className="col-6">
          {repoList && (
            <Filtering
              repoList={repoList}
              onChangeSelect={handleFilterSelection}
            />
          )}
        </div>
      </div>

      {loader && <Loader />}
      {repoListFiltered &&
        repoListFiltered.map((repo) =>
          repoExclude.includes(repo.name) ? null : (
            <SectionLab key={repo.id} repo={repo} />
          )
        )}
    </>
  );
};

export default Lab;
