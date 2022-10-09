import React from 'react';
import { Affix } from 'antd';
// import PropTypes from 'prop-types';

import Sidebar from '../navigation/Sidebar';

function Header() {
  return (
    <Affix offsetTop={0}>
      <div className="level is-mobile">
        <div className="level-left">
          <div className="level-item">
            <Sidebar />
          </div>
          <div className="level-item">
            <span className="is-size-5-mobile has-text-centered">BIDIT SHOP</span>
          </div>
        </div>
      </div>
    </Affix>
  );
}

Header.propTypes = {};

export default Header;
