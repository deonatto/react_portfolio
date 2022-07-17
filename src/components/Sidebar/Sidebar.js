import React, { Fragment, useState } from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState('hide');

  const showSidebar=()=>{
    if(sidebar === ''){
      setSidebar('hide');
    }else{
      setSidebar('');
    }
  }

  return (
    <Fragment>
      <div className='topbar'>
        <i className="fa-solid fa-bars icon" onClick={showSidebar}/>
      </div>
      <div className={`sidebar-container ${sidebar}`}>
        <div className='icon-container'>
          <i className="fa-solid fa-x icon" onClick={showSidebar}/>
        </div>
        <div className='links-container'>
          <Link className='link' to="/"><i className="fa-solid fa-house link-icon"/> Home</Link>
          <Link className='link' to="/"><i className="fa-solid fa-list-check link-icon"/> Projects</Link>
        </div>
      </div>
    </Fragment>
  )
}

export default Sidebar;