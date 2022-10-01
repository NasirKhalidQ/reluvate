import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Input } from "../components";
export const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;
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
          <form
            className="flex flex-col gap-y-4 font-medium text-lg"
            onSubmit={(e) => handleLogin(e)}
          >
            <div>
              <p>Email</p>
              <Input type="text" ref={emailRef} />
            </div>
            <div>
              <p>Password</p>
              <Input type="password" ref={passwordRef} />
            </div>
            <Button handleClick={undefined}>Login</Button>
          </form>
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
