import ListUsers from "./components/ListUsers";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import EditUser from "./components/EditUser";
import data from "./data";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import { v4 as uuidv4 } from "uuid"; //This package for generating random unique id.
import NotFound from "./components/NotFound";

function App() {

  const [userdata, setUserdata] = useState(data);

  const addUser = (newUser) => {
    newUser.id = uuidv4();
    //console.log(typeof newUser.id); 
    setUserdata([...userdata, newUser]);
  }

  const deleteUser = (id) => {
    
    if(window.confirm(`Are you sure you want to delete this user ?`)) {
      setUserdata(
        userdata.filter((user) => {
          return user.id !== id;
        })
      );
    }
    
  }

  //If the editing user id matches then loop through all user data and return array with updatedUser obj else return array with old user obj.
  const editUser = (id, updatedUser) => {
    setUserdata(userdata.map((user) => {
      return (user.id === id) ? updatedUser : user;
    }))
  }
 
  const editProfile = (id, updatedProfile) => {
    setUserdata(userdata.map((profile) => {
      return (profile.id === id) ? updatedProfile : profile;
    }))
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListUsers data={userdata} handleDelete={deleteUser} />}></Route>
        <Route path="/users" element={<ListUsers data={userdata} handleDelete={deleteUser} />}></Route>
        <Route path="/create-user" element={<AddUser handleAdd={addUser} />}></Route>
        <Route path="/edit-user/:id" element={<EditUser data={userdata}  handleEdit={editUser} />}></Route>
        <Route path="/profile/:id" element={<Profile data={userdata}/>}></Route>
        <Route path="/edit-profile/:id" element={<EditProfile data={userdata}  handleEdit={editProfile} />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );  
}

export default App;
