import React, { useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signOut,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  console.log(app);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleSingOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGitHubSingIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {/** user ? logout : sing in */}

      {user ? (
        <button onClick={handleSingOut}>Sing Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSingIn}>Google Login</button>
          <button onClick={handleGitHubSingIn}>GitHub Login</button>
        </>
      )}
      {user && (
        <div>
          <h1>User: {user?.displayName}</h1>
          <p>Email: {user?.email}</p>
          <img src={user?.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
