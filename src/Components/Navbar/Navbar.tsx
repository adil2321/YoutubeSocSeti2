import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
      <div className={s.nav}>
          <div><NavLink to='/Profile' className={({ isActive }) => (isActive ? s.active : s.item)}>Profile</NavLink></div>
          <div><NavLink to={'/message'}  className={({ isActive }) => (isActive ? s.active : s.item)}>Message</NavLink></div>
          <div><NavLink to={'/News'}  className={({ isActive }) => (isActive ? s.active : s.item)}>News</NavLink></div>
          <div ><NavLink to={'/Music'} className={({ isActive }) => (isActive ? s.active : s.item)}>Music</NavLink></div>
          <div><NavLink to={'/Settings'} className={({ isActive }) => (isActive ? s.active : s.item)}>Settings</NavLink></div>
      </div>

    );
};


