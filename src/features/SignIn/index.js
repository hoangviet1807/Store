import React, { useState } from "react";
import "./style.css";

import useToken from "../../app/useToken";
import SnackbarComponent from "../../components/Snackbar";
import { LoginForm } from "../../components/LoginForm";
import { SignUpForm } from "../../components/SignUpFrom";

export const Login = () => {
  const [loginForm, setLoginForm] = useState(true);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("")
  const { setToken } = useToken()

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <SnackbarComponent open={open} handleClose={handleClose} title={title} /> */}
      <LoginForm
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        setToken={setToken}
      />
      <SignUpForm
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        setOpenSnackBar={setOpen}
        setTitle={setTitle}
      />
    </>
  );
};

