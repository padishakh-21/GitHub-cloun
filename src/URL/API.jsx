import React from "react"
import axios from "axios"


const URL = "https://api.github.com"

export const Api = {
  getUser: (user)=>{
    return axios.get(`${URL}/users/${user}`)
  },
  
  getUsers: (str)=>{
    return axios.get(`${URL}/search/users?q=${str}`)
  },

  getRepo: (user)=>{
    return axios.get(`${URL}/users/${user}/repos`)
  },

  getFollowers: (user)=>{
    return axios.get(`${URL}/users/${user}/followers`)
  },


}