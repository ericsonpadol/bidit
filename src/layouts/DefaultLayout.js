import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

// import PropTypes from 'prop-types';

import Header from '../components/commons/Header';
import Footer from '../components/commons/Footer';

function DefaultLayout() {
  const location = useLocation();
  const [renderPage, setRenderPage] = useState(null);

  console.log(location?.pathname);
  useEffect(() => {
    if (location?.pathname === '/') {
      return setRenderPage(<div>bayag</div>);
    }
    return setRenderPage(<Outlet />);
  }, [location?.pathname]);

  return (
    <div className="container is-mobile">
      <Header />
      <section className="section" style={{ minHeight: '100vh' }}>
        {renderPage}
      </section>
      <Footer />
    </div>
  );
}

DefaultLayout.propTypes = {};

export default DefaultLayout;
