import React, {useEffect, useState} from "react"
import axios from 'axios'
import {useNavigate } from "react-router-dom";

const Home = () => { 
  let navigate = useNavigate();
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState();  

  async function fetchUsers(userId) {
        setLoading(true);
        const {data} = await 
          axios.get(`https://jsonplaceholder.typicode.com/users`)
        setUsers(data)
        setLoading(false);
      } 

  useEffect( ()=> {
       fetchUsers();
    }, [])
 
  return (
   <div className="container">
        <div className="row">
            <div className="user-list"> 
                {
                    loading ? (
                        <div>
                            <p>SKELETON CSS HERE</p>
                        </div>
                    ) : (
                        users.map((user) =>  (
                            <div className="user" key={user.id}>
                                <div className="user-card" onClick={()=>navigate(`/${user.id}`)}>
                                    <div className="user-card__container">
                                        <h3>{user.name}</h3>
                                        <p>
                                        <b>Email:</b> {user.email}
                                        </p>
                                        <p>
                                        <b>Phone:</b> {user.phone}
                                        </p>
                                        <p>
                                        <b>Website:</b>
                                        {user.website}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }           
            </div>
        </div>
    </div>
  )
};

export default Home;
