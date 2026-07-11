import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import UpdatePassword from './UpdatePassword';
import DeleteUser from './DeleteUser';

const Setting = () => {
  const history = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    id: '',
    user_name: 'Loading...',
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    // Redirect to login if no token is found
    if (!token) {
      console.error('No token found!');
      history.push('/login');
      window.location.reload();
      return;
    }

    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/details`, {
          headers: {
            Authorization: `Bearer ${token}`, // Add token in Authorization header
          },
        });

        // Set user data upon successful response
        setUserData({
          email: response.data.email,
          id: response.data.user_id,
          user_name: response.data.user_name,
        });
      } catch (error) {
        // Handle errors during API call
        console.error('Error fetching user details:', error.response?.data || error.message);
      }
    };

    fetchUserDetails();
  }, [history]);

  return (
    <div>
      <DeleteUser userId={userData.id} />
      <UpdatePassword />
    </div>
  );
};

export default Setting;
