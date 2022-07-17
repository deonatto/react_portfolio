import React from 'react';
import Sidebar from './../../components/Sidebar/Sidebar';
import Info from '../../components/Info/Info';

const HomeView = () => {
  return (
    <div className='home-container'>
        <Sidebar/>
        <Info/>
    </div>
  )
}

export default HomeView;