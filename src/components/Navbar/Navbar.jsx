import React, { useContext } from "react";
import { context } from "../../context";
import "./Navbar.css";

const Navbar = () => {
  const { values } = useContext(context);
  const { setUser, searchUser, foundUsers, setSearchUser, getInfo, setFoundUsers } = values;

  return (
    <>
      <div className="navbar d-flex justify-content-between align-items-center px-4">
        <div className="navbar-left d-flex justify-content-start align-items-center gap-3">
          <i class="bi bi-github fs-2 m-0 text-white"></i>
          <div className="search-box position-relative">
            <label className="" htmlFor="" >
              <input
                className="navbar-search bg-transparent px-2 py-1"
                type="search"
                placeholder="Search or jump to..."
                aria-label="Search or jump to..."
                value={searchUser}
                onChange={(e)=>{return setSearchUser(e.target.value), !searchUser ? setFoundUsers([]) : ""}}
                onKeyPress={(e)=>{e.key.toLowerCase().trim() === "enter" ? getInfo() : ""}}
              ></input>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" aria-hidden="true" class="mr-1 header-search-key-slash"><path fill="none" stroke="#979A9C" opacity=".4" d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"></path><path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path></svg>
            </label>
            
            <ul className="search-items position-absolute list-unstyled p-0 m-0 rounded-3">
              {searchUser ? foundUsers.map((item)=>{
                return <li className="search-item py-2 px-2  border-bottom" key={item.id} onClick={(e)=>{setUser(item.login), setSearchUser("")}}>
                  {item.login}
                </li>
              }): ""}
            </ul>
          </div>
          <nav className="navbar-nav">
            <ul className="nav-list list-unstyled d-flex justify-content-start align-items-center gap-3 p-0 m-0">
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Pull requests
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Issues
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Marketplace
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Explore
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="navbar-right d-flex justify-content-end align-items-center gap-2">
          <a className="navbar-notification navbar-link" href="#">
            <i class="bi bi-bell text-white"></i>
          </a>
          <a
            className="navbar-plus navbar-link d-flex align-items-center"
            href="#"
          >
            <i class="bi bi-plus text-white fs-4"></i>
            <i class="bi bi-caret-down-fill text-white"></i>
          </a>
          <a
            className="navbar-profile navbar-link d-flex gap-1 align-items-center position-relative"
            href="#"
          >
            <img
              className="navbar-img d-block rounded-circle"
              src="https://avatars.githubusercontent.com/u/100424834?s=40&v=4"
              width="20"
              height="20"
            ></img>
            <i class="bi bi-caret-down-fill text-white"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
