/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import React, { useState } from 'react';

import SideNav from './_components/SideNav';
import TopHeader from './_components/TopHeader';

function layout({ children }) {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div
        className=" fixed inset-y-0 z-30 
        hidden h-full w-64 flex-col bg-white md:flex"
      >
        <SideNav closeSideBar={() => setToggle(false)} />
      </div>

      {toggle ? (
        <div
          className=" fixed inset-y-0 z-30 
        flex h-full w-64 flex-col bg-white"
        >
          <SideNav closeSideBar={() => setToggle(false)} />
        </div>
      ) : null}

      <div className="md:ml-64">
        <TopHeader setToggleBar={() => setToggle(true)} />
        {children}
      </div>
    </div>
  );
}

export default layout;
