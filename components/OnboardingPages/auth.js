import Logo from "@/components/Layout/Logo/Logo";
import Link from "next/link";
import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";

const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function Auth() {
  const [isSignIn, setIsSignIn] = useState(true);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const toggleForm = useCallback(() => {
    setIsSignIn((prevIsSignIn) => !prevIsSignIn);
  }, []);

  return (
    <div className="flex flex-col w-screen items-center py-[10vh] gap-6">
      <Logo height={"80px"} width={"180px"} />
      <h1 className="onBoardHeaders">{isSignIn ? "Sign In" : "Sign Up"}</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-8 items-center">
        <div
          className={`${
            isSignIn ? "flex flex-col gap-5" : "grid grid-cols-2 gap-5"
          }`}>
          {!isSignIn && (
            <div>
              <p className="text-[.85rem] text-gray-600 font-semibold">Name</p>
              <input
                className="authInputBox"
                {...register("name")}
                type="text"
                placeholder="Enter Full Name"
              />
            </div>
          )}
          {!isSignIn && (
            <div>
              <p className="text-[.85rem] text-gray-600 font-semibold">
                User Type
              </p>
              <select
                {...register("category")}
                id="category"
                className="authInputBox">
                <option value="" disabled selected>
                  Select a category
                </option>
                <option value="food">Food</option>
                <option value="clothing">Clothing</option>
                <option value="electronics">Electronics</option>
              </select>
            </div>
          )}
          <div>
            <p className="text-[.85rem] text-gray-600 font-semibold">
              Email/Unique Numeric Identifier:
            </p>
            <input
              className="authInputBox"
              {...register("email", {
                required: "Please enter your email",
                pattern: {
                  value: EMAIL_PATTERN,
                  message: "Please enter a valid email address",
                },
              })}
              type="email"
              placeholder="Enter Business Address"
            />
          </div>
          <div className="relative flex flex-col">
            <p className="text-[.85rem] text-gray-600 font-semibold">
              Password
            </p>
            <input
              className="authInputBox"
              {...register("password")}
              type="password"
            />
            {isSignIn && (
              <Link href="/recover_password" className="mr-auto text-[#ff8213]">
                <p>Forgot Password?</p>
              </Link>
            )}
          </div>
          {!isSignIn && (
            <div>
              <p className="text-[.85rem] text-gray-600 font-semibold">
                User Category
              </p>
              <select
                className="authInputBox"
                {...register("category")}
                id="category">
                <option value="" disabled selected>
                  Select a category
                </option>
                <option value="food">Food</option>
                <option value="clothing">Clothing</option>
                <option value="electronics">Electronics</option>
              </select>
            </div>
          )}
          {!isSignIn && (
            <div>
              <p className="text-[.85rem] text-gray-600 font-semibold">
                Address
              </p>
              <input
                className="authInputBox"
                {...register("address")}
                type="text"
              />
            </div>
          )}
        </div>

        <button
          className={`formBtns
            ${isSignIn ? "w-full" : "w-[80%]"}`}
          type="submit">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
      </form>

      <div onClick={toggleForm}>
        {isSignIn ? (
          <p>
            {" "}
            Don’t have an account? {"  "}
            <span className="cursor-pointer font-bold text-gray-800">
              Sign up
            </span>
          </p>
        ) : (
          <p>
            Already have an account? {"  "}
            <span className="cursor-pointer font-bold text-gray-800">
              Sign In
            </span>
          </p>
        )}
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="w-screen relative flex items-center justify-center py-5">
          <hr className="bg-gray-900 height-[4px] w-[80%] m-auto" />
          <span className="bg-white w-auto absolute m-auto px-4 py-1">
            Or sign {isSignIn ? "in" : "up"} with
          </span>{" "}
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-3 py-1 px-4 border border-gray-700 rounded-md">
            <div>
              <FcGoogle />
            </div>
            <p> With Google</p>
          </div>

          <div className="flex items-center px-4 py-1 border gap-3 border-gray-700 rounded-md">
            <div className="border rounded-full border-red p-[3px] bg-blue-700">
              <FaFacebookF style={{ color: "#fff" }} />
            </div>
            <p> With Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;

const fields = [{}];
