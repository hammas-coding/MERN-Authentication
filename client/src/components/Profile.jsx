import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

function ProfilePage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const response = await axios.get(
          "http://localhost:5000/api/auth/user",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
        navigate("/"); 
      }
    };

    fetchUserData();
  }, [navigate]); 

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup profile">
          <div className="sign-in-form profile-form">
            <h2 className="title">Profile</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" value={user.name} readOnly />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" value={user.email} readOnly />
            </div>
            <div className="input-field">
              <i className="fas fa-phone"></i>
              <input type="text" value={user.contactNo} readOnly />
            </div>
            <p className="account-info-text">Account Information</p>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                value={user.isAdmin ? "Admin" : "User"}
                readOnly
              />
            </div>
            <div className="input-field">
              <i className="fas fa-clock"></i>
              <input
                type="text"
                value={`Joined: ${new Date(user.createdAt).toDateString()}`}
                readOnly
              />
            </div>
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
