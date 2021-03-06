import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Link, NavLink } from "react-router-dom";
import * as sessionActions from '../../store/session';
import './Navigation.css'
import { useHistory } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };

  return (
    <>
      <NavLink className="nav-buttons" to="/images">Browse</NavLink>
      <Link className='nav-buttons' to="/upload">Upload</Link>
      <Link className="nav-buttons" to="/collections">Collections</Link>
      <button className="nav-buttons" onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <div>
            <li className="username-dropdown">{user.username}</li>
          </div>
          <li className="user-email-dropdown" style={{ color: "white" }}>{user.email}</li>
          <li>
            <button className="nav-buttons" onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
