import React, { useState } from 'react';
import { Button, Popup, AutoCenter, SideBar } from 'antd-mobile';
import { Menu, X } from 'react-feather';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';s

function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Button
        shape="rectangular"
        color="primary"
        size="mini"
        onClick={() => {
          setShowMenu(!showMenu);
        }}>
        {showMenu ? <X size={16} /> : <Menu size={16} />}
      </Button>

      <Popup visible={showMenu} onMaskClick={() => setShowMenu(false)} position="left">
        <AutoCenter>
          <SideBar>
            <SideBar.Item
              title={<Link to="/dashboard">Home</Link>}
              key={<Link to="/dashboard">Home</Link>}
            />
            <SideBar.Item title="Sign-Up" key="Sign-Up" />
          </SideBar>
        </AutoCenter>
      </Popup>
    </>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
