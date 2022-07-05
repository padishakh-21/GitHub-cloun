import React, {useContext} from 'react';
import { context } from '../../context';
import { NavLink } from "react-router-dom"
import "./Sidebar.css";

const Sidebar = () => {

  const {values} = useContext(context);

  const userInfo = values.userInfo;


  return (
    <>
      <div className="sidebar d-flex flex-column align-items-start col-12 col-md-4 col-lg-3 gx-0 px-2 position-relative">
        <div className="profile-info">
          <div className="sidebar-img position-relative">
            <img className="profile-img border border-2 rounded-circle" src={userInfo.avatar_url} width="270" height="270"></img>
            <button className="smile-btn d-flex justify-content-strt align-items-center btn btn-light border">
              😊
              <p className="btn-text d-none m-0 ms-1">Happy</p>
            </button>
          </div>
          <div className="mt-3 mb-3">
            <p className="h4 m-0 mb-1">{userInfo.name}</p>
            <p className="h5 text-secondary fw-normal m-0">{userInfo.login}</p>
          </div>
        </div>
        <button className="status-btn btn btn-light d-none justify-content-start align-items-center w-100 border rounded-3 mb-3">
            <i class="bi bi-emoji-smile fs-6"></i>
            <p className="btn-text m-0 ms-1">Set status</p>
        </button>
        <button className="edit-btn btn btn-light d-block w-100 border rounded-3 mb-3">Edit profile</button>
        <p className="text-dark fw-normal m-0 mb-2">{userInfo.bio}</p>
        <div className="">
          <NavLink className="followers-link text-decoration-none text-dark" to="/followers">
          <i class="bi bi-people me-1"></i>
            {userInfo.followers} followers 
          </NavLink>
          {` · `} 
          <a className="followers-link text-decoration-none text-dark">
          {userInfo.following}  following
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;