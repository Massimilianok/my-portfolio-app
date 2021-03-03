import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.scrollY === 0) {
      document.querySelector('main').scrollTo(0, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
