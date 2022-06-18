import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  return (
    <div>
      Signin Page
      <button onClick={logGoogleUser}>sign in with google</button>
    </div>
  );
};

export default Signin;
