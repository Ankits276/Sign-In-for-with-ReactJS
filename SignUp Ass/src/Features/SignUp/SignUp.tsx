import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Button from "../../Component/Button/Button";
import Input from "../../Component/Input/Input";
import Login from "../Deshboard/Login";
import {
  NameValidation,
  UserNameValidation,
  EmailValidation,
  MobileNumberValidation,
  PasswordValidation,
  ConfirmValidation,
  avatar,
} from "../../utility";
import "./SignUp.css";

const SignUp = () => {
  const navigation = useNavigate();
  const [profile, setprofile] = useState({
    avatar: "",
    name: "",
    userName: "",
    email: "",
    mobile: "",
    password: "",
    confPassword: "",
  });
  useEffect(() => {
    const currentdata = localStorage.getItem("current");
    if (currentdata) {
      navigation("/Dashboard");
      return;
    }
  }, []);
  const _profile = (e: any) => {
    const {name, value} = e.target;
    if (value.trim().length === 0) {
      return value;
    }
    setprofile({...profile, [name]: value});
  };
  const onSubmit = () => {
    switch (true) {
      case !NameValidation.test(profile.name):
        return alert("Please fill name");
      case !UserNameValidation.test(profile.userName):
        return alert("Please fill user name");
      case !EmailValidation.test(profile.email):
        return alert("Please fill Email Address");
      case !MobileNumberValidation.test(profile.mobile):
        return alert("Please fill mobile");
      case !profile.password.match(PasswordValidation):
        return alert(
          "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        );
      case !profile.confPassword.match(PasswordValidation):
        return alert("Please fill Confirm Password");
      case profile.password !== profile.confPassword:
        return alert("Confirm password should be same");
      default:
        break;
      // case profile.avatar !== profile.avatar:
      //   return alert("Please Upload file");
    }
    if (!profile.avatar) {
      alert("File type only jpg,jpeg,png");
      return;
    }

    const newObj: any = {...profile};
    delete newObj.password;
    delete newObj.confPassword;
    const getdata = localStorage.getItem(profile.email.toLowerCase());
    if (!getdata) {
      localStorage.setItem(
        profile.email.toLowerCase(),
        JSON.stringify(profile)
      );
    }
    navigation("/SignIn");
  };
  const EncodeImage = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const encodeAvatar = (e: any) => {
    const {value} = e.target;
    /**
     * @desc Check validation if file type jpg, jpeg, png
     */
    if (!avatar.exec(value)) {
      alert("File type only jpg,jpeg,png");
      return;
    }
    /**
     * @desc handle error if file size not exceed 150 kb
     */
    const files = e.target.files[0];
    if (files.size >= 200000 && files.size <= 500000) {
      alert("File size b/w 200kb to 500kb only allowed");
      return;
    }
    /**
     * @desc Convert Image into Base64
     */
    EncodeImage(files).then(
      (res) => {
        setprofile({...profile, [e.target.name]: res});
      },
      (err) => console.log(err)
    );
  };
  return (
    <>
      <div className="wrapper">
        <h1 className="SignUpName">Sign Up</h1>
        <div className="inputFeild">
          <div className="email">
            <Input
              type="text"
              name="name"
              lable="Name :-"
              placeholder="Enter Your Name"
              Onchange={(e: any) => _profile(e)}
            />
          </div>
          <div className="email">
            <Input
              type="text"
              name="userName"
              lable="UserName :-"
              placeholder="User Name"
              Onchange={(e: any) => _profile(e)}
            />
          </div>
          <div className="email">
            <Input
              type="email"
              name="email"
              lable="Email id :-"
              placeholder="Your Email Id"
              Onchange={(e: any) => _profile(e)}
            />
          </div>
          <div className="email">
            <Input
              clasName="MobileNumberInput"
              type="number"
              name="mobile"
              lable="Mobile Number :- "
              placeholder="Your Mobile number"
              Onchange={(e: any) => _profile(e)}
            />
          </div>
          <div className="email">
            <Input
              type="password"
              name="password"
              lable="Password :-"
              placeholder="Your Password"
              Onchange={(e: any) => _profile(e)}
            />
          </div>
          <div className="email">
            <Input
              type="password"
              name="confPassword"
              lable="Confirm Password :-"
              placeholder="Confirm Password"
              Onchange={(e: any) => _profile(e)}
            />
          </div>
          <div className="email">
            <Input
              type="file"
              name="avatar"
              lable="Upload image :-"
              Onchange={encodeAvatar}
            />
          </div>
          <div className="email">
            <Button name="Submit" onClick={onSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
