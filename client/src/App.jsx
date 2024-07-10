import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import Panel from "./components/Panel";
import ProfilePage from "./components/Profile"; 
import Image1 from "./assets/rocket.svg";
import Image2 from "./assets/desk.svg";

function App() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleSignUpClick = () => setIsSignUpMode(true);
  const handleSignInClick = () => setIsSignUpMode(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/profile" />
            ) : (
              <div
                className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}
              >
                <div className="forms-container">
                  <div className="signin-signup">
                    <SignInForm />
                    <SignUpForm />
                  </div>
                </div>
                <div className="panels-container">
                  <Panel
                    side="left"
                    title="New here ?"
                    description="Click on Signup to create new account!"
                    buttonLabel="Sign up"
                    onClick={handleSignUpClick}
                    image={Image1}
                  />
                  <Panel
                    side="right"
                    title="One of us ?"
                    description="Click on Signin to login!"
                    buttonLabel="Sign in"
                    onClick={handleSignInClick}
                    image={Image2}
                  />
                </div>
              </div>
            )
          }
        />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
