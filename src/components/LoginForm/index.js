import React, { useState } from "react";
import "./style.css";
import PropTypes from "prop-types";
import background from "../../assets/10808.jpg";
// import GoogleIcon from "@mui/icons-material/Google";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../../service";
import { Button, Checkbox, Input } from "antd";

export const LoginForm = ({ loginForm, setLoginForm }) => {
  let navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [checkUsername, setCheckUsername] = useState(false)
  const [helpTextUserName, setHelpTextUserName] = useState("")
  const [checkPassword, setCheckPassword] = useState(false)
  const [helpTextPassword, setHelpTextPassword] = useState("")
  const [showWarning, setShowWarning] = useState(false)

  const { mutate } = useMutation(login, {
    onSuccess: (data) => {
      localStorage.setItem("username", username)
      localStorage.setItem("token", username)
      navigate(`/homepage`);
    },
    onError: () => {
      setShowWarning(true)
      setCheckPassword(true)
      setCheckUsername(true)
    }
  });

  const handleSubmit = () => {
    setCheckUsername(false)
    setHelpTextUserName("")
    setCheckPassword(false)
    setHelpTextPassword("")
    if (username === "") {
      setShowWarning(false)
      setCheckUsername(true)
      setHelpTextUserName("The username is required")
    }
    if (password === "") {
      setShowWarning(false)
      setCheckPassword(true)
      setHelpTextPassword("The password is required")
    }
    else {
      const account = {
        "username": username,
        "password": password,
      }
      mutate(account)
      setCheckUsername(false)
      setHelpTextUserName("")
      setCheckPassword(false)
      setHelpTextPassword("")
    }

  };


  const handleSetForm = () => {
    setLoginForm(false)
    setCheckUsername(false)
    setHelpTextUserName("")
    setCheckPassword(false)
    setHelpTextPassword("")
    setShowWarning(false)
  }

  return (
    <>
      <div className={loginForm ? "login-wrapper" : "login-wrapper-hide"}>
        <div className="login-form">
          <div style={{ width: "70%", alignSelf: "center" }}>
            <h1>WELCOME BACK</h1>
            {/* {showWarning && <div className="warning"><WarningAmberIcon fontSize="small" />The username or the password is incorrect</div>} */}
            <form onSubmit={handleSubmit}>
              <div>
                <p>Username</p>
                <Input
                  status={checkUsername ? "error" : ""}
                  error={checkUsername}
                  helperText={helpTextUserName}
                  fullWidth
                  size="middle"
                  placeholder="Enter username"
                  onChange={(e) => setUserName(e.target.value)}
                  value={username}
                />
              </div>
              <div>
                <p>Password</p>
                <Input.Password
                  status={checkUsername ? "error" : ""}
                  helperText={helpTextPassword}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  size="middle"
                  placeholder="Enter Password"
                  value={password}
                />
              </div>
              <br />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <span style={{ paddingRight: '5px' }}>Remember me</span>
                  <Checkbox />
                </div>
                <div style={{ cursor: "pointer" }}>Forgot password</div>
              </div>
              <br />
              <div>
                <Button onClick={handleSubmit} color="primary" fullWidth variant="contained">
                  Sign in
                </Button>
              </div>
              <br />
              {/* <div>
                <Button startIcon={<GoogleIcon />} fullWidth variant="outlined">
                  Sign in with Google
                </Button>
              </div> */}
              <br />
              <div style={{ alignItems: "center" }}>
                <span>
                  Don't have an account?{" "}
                  <span
                    onClick={handleSetForm}
                    style={{ cursor: "pointer", color: "#1565C0" }}
                  >
                    Sign up
                  </span>
                </span>
              </div>
            </form>
          </div>
        </div>

        <div className="background">
          <img style={{ width: "100%" }} src={background} alt="login" />
          {/* ÁD */}
        </div>
      </div >
    </>
  );
};

LoginForm.propTypes = {
  setLoginForm: PropTypes.func,
  loginForm: PropTypes.bool,
};
