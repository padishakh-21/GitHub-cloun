import React, { useContext, useRef, useState } from "react";
import { context } from "../../context";
import "./NavbarRes.css";

const NavbarRes = () => {
  const { values } = useContext(context);
  const {
    userInfo,
    setUser,
    searchUser,
    foundUsers,
    setSearchUser,
    getInfo,
    setFoundUsers,
  } = values;

  const navbar = useRef();
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="responsive-navbar w-100 d-none px-2 py-2">
        <div className="top w-100 d-flex justify-content-between align-items-center">
          <i
            class="bi bi-list text-white fs-1"
            onClick={(e) => {
              return !show
                ? ((navbar.current.style.display = "block"), setShow(true))
                : ((navbar.current.style.display = "none"), setShow(false));
            }}
          ></i>
          <i class="bi bi-github fs-2 m-0 text-white"></i>
          <i class="bi bi-bell text-white"></i>
        </div>
        <div className="bottom" ref={navbar}>
          <div className="search-box position-relative mb-3">
            <input
              className="search bg-transparent px-2 py-1"
              type="search"
              placeholder="Search or jump to..."
              value={searchUser}
              onChange={(e) => {
                return (
                  setSearchUser(e.target.value),
                  !searchUser ? setFoundUsers([]) : ""
                );
              }}
              onKeyPress={(e) => {
                e.key.toLowerCase().trim() === "enter" ? getInfo() : "";
              }}
            ></input>
            <ul className="search-items position-absolute list-unstyled p-0 m-0 rounded-3">
              {searchUser
                ? foundUsers.map((item) => {
                    return (
                      <li
                        className="search-item py-2 px-2  border-bottom"
                        key={item.id}
                        onClick={(e) => {
                          setUser(item.login), setSearchUser("");
                        }}
                      >
                        {item.login}
                      </li>
                    );
                  })
                : ""}
            </ul>
          </div>
          <ul className="nav-list list-unstyled p-0 m-0">
            <li className="nav-item w-100 text-white p-2">Dashboard</li>

            <li className="nav-item w-100 text-white p-2">Pull requests</li>

            <li className="nav-item w-100 text-white p-2">Issues</li>

            <li className="nav-item w-100 text-white p-2">Marketplace</li>

            <li className="nav-item w-100 text-white p-2">Explore</li>

            <li className="nav-item w-100 text-white p-2">Codespaces</li>

            <li className="nav-item w-100 text-white p-2">Sponsors</li>

            <li className="nav-item w-100 text-white p-2">Settings</li>
            <li className="nav-item w-100 text-white d-flex justify-content-start align-items-center gap-2 p-2">
              <img
                className="navbar-img d-block rounded-circle"
                src="https://avatars.githubusercontent.com/u/93200270?v=4"
                width="20"
                height="20"
              ></img>
              {userInfo.login}
            </li>
            <li className="nav-item w-100 text-white p-2">
              <i class="bi bi-box-arrow-right"></i> Sign out
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavbarRes;
