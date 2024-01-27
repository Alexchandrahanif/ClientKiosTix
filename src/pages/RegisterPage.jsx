import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { message, Button, Input, Space } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notification from "../utils/Notification";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [notification, setNotification] = useState(null);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addres, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let body = {
      username,
      email,
      password,
      phoneNumber,
    };

    try {
      let { data } = await axios({
        url: "http://localhost:3000/user/register",
        method: "POST",
        data: body,
      });

      navigate("/login");
      message.success("Registrasi berhasil!");
    } catch (error) {
      message.error(error.response.data.message);
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-50 flex items-center jus">
      <div className="w-[35%] h-full  flex justify-center items-center">
        <div className=" h-full w-full bg-slate-400">
          <img
            src={
              "https://i.pinimg.com/564x/e5/94/5c/e5945cc99bb9abb55fbcbb099e7d414a.jpg"
            }
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-[65%] h-full bg-slate-50 flex justify-center items-center">
        <div className="w-full p-10">
          <div className="text-hijau font-bold mb-3">
            <p className="text-[25px]">REGISTER</p>
          </div>

          <div className="w-full flex flex-wrap gap-5">
            <div className="w-[48%]">
              <label htmlFor="username" className="text-slate-500">
                Username
              </label>
              <Input
                placeholder="Input your username"
                size="large"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="w-[48%]">
              <label htmlFor="email" className="text-slate-500">
                Email
              </label>
              <Input
                placeholder="Input your email"
                size="large"
                id="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="w-[48%]">
              <label htmlFor="password" className="text-slate-500">
                Password
              </label>
              <Input.Password
                id="password"
                size="large"
                placeholder="Input password"
                autoComplete="off"
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="w-[48%]">
              <label htmlFor="phone" className="text-slate-500">
                Nomor Telepon
              </label>
              <Input
                placeholder="Input your phone number"
                size="large"
                id="phone"
                autoComplete="off"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="mt-5 w-[48%]">
              <button
                className="w-full h-[40px] text-hijau font-bold border-[2px] border-hijau"
                onClick={() => navigate("/login")}
              >
                Cancel
              </button>
            </div>
            <div className="mt-5 w-[48%]">
              <button
                className="w-full h-[40px] bg-hijau text-white font-bold"
                onClick={(e) => handleSubmit(e)}
              >
                Login
              </button>
            </div>

            <div className="w-full flex justify-center">
              <p className="text-slate-500">
                Already have an account?{" "}
                <span
                  className="text-hijau hover:cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
