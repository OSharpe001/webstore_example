import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";


export default function Register({ setLoggedIn, currentScreen }) {

  const autoFocus = useEffect;
  const nameInput = useRef();
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [userNameErrorMessage, setUserNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [password1ErrorMessage, setPassword1ErrorMessage] = useState("");
  const [password2ErrorMessage, setPassword2ErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    email: "",
    password: ""
  });

  const resetName = () => {
    setName("");
  };

  const resetUsername = () => {
    setName("");
  };

  const resetEmail = () => {
    setEmail("");
  };

  const resetPassword = () => {
    setPassword1("");
    setPassword2("");
  };

  const resetLoginForm = () => {
    resetName();
    resetUsername();
    resetEmail();
    resetPassword();
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (incomplete) {
      alert("Fill all fields properly");
    } else {
      setFormData({
        name: name,
        userName: userName,
        email: email,
        password: password1
      });
      resetLoginForm();
    }
  };

  const handleChange = ({ target }) => {
    if (target.name === "name") {
      setName(target.value);
      if (target.value.length >= 4) {
        setNameErrorMessage("");
      }
    } else if (target.name === "userName") {
      setUserName(target.value);
      if (target.value.length >= 3 && target.value.length <= 18 && !target.value.includes("@")) {
        setUserNameErrorMessage("");
      }
    } else if (target.name === "email") {
      setEmail(target.value);
      if (target.value.includes("@") && target.value.includes(".") && target.value.length >= 6) {
        setEmailErrorMessage("");
      }
    } else if (target.name === "password1") {
      setPassword1(target.value);
      if (target.value.length >= 8) {
        setPassword1ErrorMessage("");
      }
    } else {
      setPassword2(target.value);
      if (target.value.length >= 8 && target.value === password1) {
        setPassword2ErrorMessage("");
      }
    }
  };

  autoFocus(()=> {
    if (currentScreen === "/sign-up") {
        nameInput.current.focus();
    }
  }, [currentScreen]);

  useEffect(() => {
    if (formData.name && formData.userName && formData.email && formData.password) {
      const getMe = async () => {
        const URL = `/api/users`;
        if (formData.password) {
          const response = await axios.post(URL, formData);
          try {
            localStorage.setItem("Dev2User", JSON.stringify(response.data));
            await setLoggedIn(JSON.parse(localStorage.getItem("Dev2User")));
          } catch (err) {
            alert("Error. Please try, again.");
            console.log(err);
            resetPassword();
          }
        }
      };
      getMe();
    }

  }, [formData, setLoggedIn]);

  const errorHandling = ({ target }) => {
    if (target.name === "name" && target.value.length < 4) {
      setNameErrorMessage("Type your full name");
    } else if (target.value.length >= 4) {
      setNameErrorMessage("");
    }

    if (target.name === "userName" && (target.value.length < 3 || target.value.length > 18)) {
      setUserNameErrorMessage("Must be 3 to 18 characters");
    } else if (userName.includes("@")) {
      setUserNameErrorMessage('No "@" character allowed');
    } else if (userName.length >= 2 && !userName.includes("@")) {
      setUserNameErrorMessage("");
    }

    if (target.name === "email" && (!target.value.includes("@") || !target.value.includes(".") || target.value.length < 6)) {
      setEmailErrorMessage("Use proper email");
    } else if (email.includes("@") && email.includes(".") && email.length >= 6){
      setEmailErrorMessage("");
    }

    if (target.name === "password1" && target.value.length < 8) {
      setPassword1ErrorMessage("Needs at least 8 characters");
    } else if (password1.length >= 8) {
      setPassword1ErrorMessage("");
    }

    if (target.name === "password2" && target.value.length < 8) {
      setPassword2ErrorMessage("Needs at least 8 characters");
    } else if (password2 !== password1) {
      setPassword2ErrorMessage("Passwords must match");
    } else if (password2 >= 8 && password2 === password1) {
      setPassword2ErrorMessage("");
    }
  };

  const incomplete = nameErrorMessage || userNameErrorMessage || emailErrorMessage || password1ErrorMessage || password2ErrorMessage || !name || !userName || !email || !password1 || !password2;

  return <div className='register-page'>
  <h1 className="welcome">Welcome to Web Store Example!</h1>
  <h1 className="direct">Register <span className="underlined">or</span> <Link aria-label="On Click" to="/sign-in">LogIn</Link></h1>
  <form>
    <label htmlFor="name">Name:</label>
    <input ref={nameInput}onChange={handleChange} onBlur={errorHandling} type="text" name="name" id="name" placeholder='Sam Smith' value={name} />
    <p className="error-message">{nameErrorMessage}</p>

    <label htmlFor="userName">UserName:</label>
    <input onChange={handleChange} onBlur={errorHandling} type="text" name="userName" id="userName" placeholder='Sammy Hammy' value={userName} />
    <p className="error-message">{userNameErrorMessage}</p>

    <label htmlFor="email">Email:</label>
    <input onChange={handleChange} onBlur={errorHandling} type="email" name="email" id="email" placeholder='sams@gmail.com' value={email} />
    <p className="error-message">{emailErrorMessage}</p>

    <label htmlFor="password1">Password:</label>
    <input onChange={handleChange} onBlur={errorHandling} type="password" name="password1" id="password1" value={password1} />
    <p className="error-message">{password1ErrorMessage}</p>

    <label htmlFor="password2">Password:</label>
    <input onChange={handleChange} onBlur={errorHandling} type="password" name="password2" id="password2" value={password2} />
    <p className="error-message">{password2ErrorMessage}</p>

    <button onClick={submitForm} className="button" disabled={incomplete}>Submit</button>
  </form>
</div>
}