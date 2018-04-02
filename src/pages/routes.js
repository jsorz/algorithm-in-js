import React from 'react';
import DataStructure from './data-structure/index';
import Sorting from './sorting/index';

export default [
  {
    path: '/',
    exact: true,
    label: 'Home',
    // component: () => <h2>Home</h2>
    component: Sorting
  },
  {
    path: '/structures',
    label: 'Data Structure',
    component: DataStructure
  },
  {
    path: '/sorting',
    label: 'Sorting',
    component: Sorting
  }
];
