import React, {useContext} from 'react';
import "./PinnedRepos.css";
import { context } from '../../context';

const PinnedRepos = () => {

  const {values} = useContext(context);

  const {repos} = values;


  console.log();
  return (
    <>
      <div className="pinned-repos col-12 col-md-8 col-lg-9 mt-4 position-relative">
        <div className="repos-top d-flex flex-row justify-content-between align-items-center mb-3">
          <p className="title m-0 d-in">Pinned</p>
          <p className="text m-0">Customize your pins</p>
        </div>
        <ul className="repos-list list-unstyled d-flex flex-wrap align-items-center justify-content-between p-0 m-0">
          {repos.slice(0, 6).map((item)=>{
            return <li className="repos-item card p-3 mb-3" key={item.id}>
            <div className="item-top d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex align-items-center gap-2">
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo UnderlineNav-octicon hide-sm">
                  <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" fill="#545454"></path>
                </svg>
                <a className="repo-title text-decoration-none m-0" href={item.html_url}>{item.name}</a>
                <p className="repo-type btn border rounded-pill py-0 px-2 m-0">{item.visibility}</p>
              </div>
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-grabber">
                <path fill-rule="evenodd" d="M10 13a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 11-2 0 1 1 0 012 0zM6 5a1 1 0 100-2 1 1 0 000 2z"></path>
              </svg>
            </div>
            <div className="item-bottom">
              <p className={`repo-language m-0 ${item.language === "JavaScript" ? "yellow" : item.language === "HTML" ? "red" : item.language === "CSS" ? "purple" : ""}`}>{item.language}</p>
            </div>
          </li>
          })}
        </ul>
      </div>
    </>
  );
};

export default PinnedRepos;