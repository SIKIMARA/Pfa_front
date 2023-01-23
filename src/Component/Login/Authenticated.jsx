import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Authenticated = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (!token || !role) {
      history('/login');
    } else {
      checkAuthentication();
    }
  }, []);

  const checkAuthentication = async () => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/verify', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        
        if (data.role === 'ADMIN') {
          history('/dashboard');
        }
        if (data.role === 'ETUDIANT') {
          history('/etudiant');
        }
        if (data.role === 'ENSEIGNANT') {
          history('/enseignant');
        }
      }
    } catch (error) {
      
    }
  };

  return children;
};

export default Authenticated;
