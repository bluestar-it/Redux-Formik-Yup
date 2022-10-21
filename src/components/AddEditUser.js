import React from 'react'
import AddUser from './AddUser'
import User from './User'
import './AddEditUser.css'
import Contact from './Contact';


export default function AddEditUser() {
  return (
    <>
    <div id="add-edit-user-container" >
        <h2>User Management</h2>
        <div id="add-edit-user">
        <Contact></Contact>
    <User></User>
        </div>
   
    </div>
    </>
  )
}
