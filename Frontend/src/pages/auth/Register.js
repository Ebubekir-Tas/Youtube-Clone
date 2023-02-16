import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetUserEmail } from '@redux';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { TextField, Button } from '@material-ui/core';
import { pageStyles } from 'src/styles';

function Register() {
  const dispatch = useDispatch();
  const { user } = useSelector((state)=>state.user)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  onAuthStateChanged(auth, (currentUser) => {
    // dispatch(SetUser(currentUser));
  })

  const register = async () => {
    try {
      const registeredUser = await createUserWithEmailAndPassword(auth, email, password);
      dispatch(SetUserEmail(registeredUser.user.email));
    } catch (err) {
      console.log(err.message);
      setErrMsg(err.message)
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const classes = pageStyles();
  return (
    <div className={classes.registerPageContainer}>
      <p>hello {user?.email}</p>
      <h1>Create Your Account</h1>
      <TextField
        onChange={(e) => {
          setEmail(e.target.value)}
        }
        label="Email" 
      />
      <br />
      <TextField 
        onChange={(e) => {
          setPassword(e.target.value)}
        }
        label="password" 
        helperText={errMsg && errMsg}
      />
      <br />
      <Button 
        onClick={register}
        className={classes.registerButton}
        variant="contained" color="primary"
      >
        Register
      </Button>
      <p className={classes.signInText}>Sign in instead</p>
    </div>
  )
};

export default Register;