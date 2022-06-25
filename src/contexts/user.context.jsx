import { createContext, useEffect, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  signOutUser,
} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRRENT_USER: "SET_CURRRENT_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRRENT_USER:
      return { ...state, currentUser: payload };
    default:
      throw new Error(`Unhandled type ${type} in useReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRRENT_USER, payload: user });
  };
  const value = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubsribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);
      setCurrentUser(user);
    });

    return unsubsribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
