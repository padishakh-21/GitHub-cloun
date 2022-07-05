import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Api } from './URL/API.jsx';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import { context } from './context';
import Footer from './components/Footer/Footer';
import Repos from './components/Repos/Repos';
import PinnedRepos from './components/PinnedRepos/PinnedRepos';
import Followers from './components/Followers/Followers';
import NavbarRes from './components/NavbarRes/NavbarRes';

const App = () => {
  const { getUser, getRepo, getFollowers, getUsers } = Api;

  const [user, setUser] = useState("padishakh-21");

  const [userInfo, setUserInfo] = useState([]);
  const [repos, setRepos] = useState([]);
  const [staticRepos, setstaticRepos] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [foundUsers, setFoundUsers] = useState([]);

  const [searchRepo, setSearchRepo] = useState("");
  const [searchUser, setSearchUser] = useState("");



  useEffect(()=>{
    getUser(user).then(res => setUserInfo(res.data))
    getRepo(user).then(res => {return (setRepos(res.data), setstaticRepos(res.data))})
    getFollowers(user).then(res => setFollowers(res.data))
  },[user])


  const getInfo = useCallback(()=>{
    searchUser ? getUsers(searchUser).then(res => setFoundUsers(res.data.items)) : setFoundUsers([])
  }, [searchUser])



  useEffect(()=>{
    const regex = new RegExp(searchRepo, "gi");
    searchRepo ? setRepos(staticRepos.filter((item)=>{
      return item.name.match(regex)
    }))
    :
    setRepos(staticRepos)
  },[searchRepo])


  const values = {
    userInfo,
    repos,
    followers,
    foundUsers,
    searchRepo,
    searchUser,
    setSearchUser,
    setSearchRepo,
    setFoundUsers,
    setUser,
    getInfo
  };


  return (
    <>
      <context.Provider value={{values}}>
        <BrowserRouter>
          <Navbar/>
          <NavbarRes/>
          <Routes>
            <Route path="/" element={<Main/>}>
              <Route path="/" element={<PinnedRepos/>}/>  
              <Route path="/repositories" element={<Repos/>}/>
              <Route path="/followers" element={<Followers/>}/>
            </Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </context.Provider>
    </>
  );
};

export default App;