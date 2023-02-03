import React, { useState } from 'react';
import Users from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';



function App() {
  const [userList,setUserList]=useState([])
  const userListHandler=(uName,uAge)=>{
    setUserList((previousUser)=>{
      return([...previousUser,{name:uName,age:uAge,id:Math.random().toString()}])
    })
  }
  return (
    <div>
<Users items={userListHandler}/>
<UserList users={userList}/>
    </div>
  );
}

export default App;
