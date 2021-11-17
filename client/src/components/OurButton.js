import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';
import { AuthContext } from '../providers/AuthProvider';



const OurButton = () => {
  const { user } = useContext(AuthContext)
  const [clicks, setClicks] = useState(0)
  const [allClicks, setAllClicks] = useState([])
  // const [userClicks, setUserClicks] = useState(user.clicks)

  useEffect(()=> {
    getAllClicks();
  },[])

  const getAllClicks = async () => {
    let res = await axios.get('/api/users/all_clicks')
    setAllClicks(res.data[0].all_clicks)
  }


  // const addClick = async (clicks) => {
  //   let res = await axios.put(`/api/users/${user.id}`, {...user, clicks: user.clicks + clicks})
  //   setUserClicks(res.data.clicks)
  // }



// const handleClick = () => {
//   setClicks(clicks+1)
//   return (
//     addClick(clicks)
//   )
// }

  return (
    <div>
      {/* <Button onClick={handleClick}>Click me!</Button>
      <p>{user.email}</p>
      <p>My total clicks: {userClicks}</p>
      <p>Current clicks: {clicks}</p>
      <p>All Clicks: {allClicks}</p> */}

    </div>
  );
};

export default OurButton;