

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import auth from "../../firebase.config";
import axios from "axios";







export const AuthContext= createContext(null);

const AuthProvider  = ({children}) => {
    const [loading, setLoading]=useState(true)
    const [user, setUser] = useState(12345);
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
          
    const userRegister=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin=()=>{
        setLoading(true);
  return signInWithPopup(auth, gitHubProvider)
    }


    const userLogOut=()=>{
        setLoading(true);
        return signOut(auth)
    }

    const updateUserProfile=(ProfileUrl)=>{
        setLoading(true);
       return updateProfile(auth.currentUser, {photoURL: ProfileUrl })

    }
    const updateUserName=(displayName)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, {displayName:displayName  })

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            const logOutUser = currentUser?.email || user?.email
            const userEmail= {email:currentUser?.email}
            setUser(currentUser);
            setLoading(false);


            if(currentUser){
                axios.post('http://localhost:5000/jwt', userEmail,{withCredentials:true})
                // axios.post('https://assignment-11-jwt-server-flax.vercel.app/jwt', userEmail,{withCredentials:true})
                  .then(function (response) {
                    console.log(response.data);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });

               
            }
          else{
            // axios.post('https://assignment-11-jwt-server-flax.vercel.app/jwt/logout', logOutUser,{withCredentials:true})
            axios.post('http://localhost:5000/jwt/logout', logOutUser,{withCredentials:true})
                  .then(function (response) {
                    console.log('logout ',response.data);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });

          }
           
       

        });
        return () => unSubscribe
    }, [loading,user])


    const AuthInfo={user,userLogin, userRegister, userLogOut, updateUserProfile,updateUserName, githubLogin,googleLogin,loading}


    return (
       <AuthContext.Provider value={AuthInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes={

    children: PropTypes.node.isRequired
}