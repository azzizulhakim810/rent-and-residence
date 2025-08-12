import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic/useAxiosPublic";
import { queryClient } from "../main";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  // Email-Password Sign Up
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Email-Password Sign In
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign Out
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Google Sign In
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log("Profile Updated");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      /* updateProfile(auth.currentUser, {
        displayName: "New User",
      }).then(() => {
        console.log("New DisplayName");
      }); */

      if (currentUser) {
        const userEmail = { email: currentUser.email };
        // console.log("Get the user", currentUser.email);

        // Generate, Store & Remove Token from Local Storage
        axiosPublic.post("/jwt", userEmail).then((res) => {
          // console.log(res.data);

          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
          }
        });
      } else {
        // console.log("nichts ist hier");

        // 1. Remove token from storage
        localStorage.removeItem("access-token");

        // 2. Cancel all active queries
        queryClient.cancelQueries();

        // 3. Remove all query cache
        queryClient.clear();
      }

      console.log(currentUser);
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    signIn,
    signOutUser,
    googleSignIn,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
