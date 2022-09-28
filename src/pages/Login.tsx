import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Input } from "../components";
export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      toast.success("Successful login");
      setTimeout(() => {
        navigate("/catch-pokemon");
      }, 3000);
    } else {
      toast.error("Please enter email and password");
    }
  };

  return (
    <section className="flex justify-center mt-40">
      <div className="flex flex-col gap-y-8 place-items-center">
        <h1 className="text-4xl text-redFa font-medium">Catch 'em All</h1>
        <div className="flex flex-col gap-y-12 place-items-center justify-center  border-2 border-black py-10 px-8 rounded">
          <h1>Login</h1>
          <div className="flex flex-col gap-y-4 font-medium text-lg">
            <div>
              <p>Email</p>
              <Input type="text" value={email} setState={setEmail} />
            </div>
            <div>
              <p>Password</p>
              <Input type="password" value={password} setState={setPassword} />
            </div>
            <Button handleClick={handleLogin}>Login</Button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </section>
  );
};
