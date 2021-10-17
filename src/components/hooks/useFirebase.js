import { getAuth, signInWithPopup, GoogleAuthProvider , onAuthStateChanged , signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Shared/Login/Firebase/Firebase.init";
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
          });
    },[]);

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      }).catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        setError(errorMessage);
      });
    }
    const googleSignOut = () => {
        signOut(auth).then(() => {
            setUser({});
          }).catch((error) => {
            // An error happened.
            const errorMessage = error.message;
            setError(errorMessage);
          });
    }

    return{
        user,
        error,
        googleSignIn,
        googleSignOut
    }
};

export default useFirebase;