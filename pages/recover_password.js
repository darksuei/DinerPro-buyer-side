import Logo from "@/components/Layout/Logo/Logo";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export default function RecoverPassword() {
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setSuccess(true);
    reset();
  };
  return (
    <div className="flex flex-col gap-5 items-center justify-center py-[10vh]">
      <Logo height={"80px"} width={"180px"} />
      <h1
        className={`${
          success ? "max-w-[40%] text-center text-[#ff8213] text-[1.5rem] font-semibold" : "onBoardHeader"
        }`}>
        {success
          ? "Check your email for a link to reset your password. If it doesn&apos;t appear within a few minutes, check your spam folder."
          : "Recover password"}
      </h1>
      <p className="max-w-[40%] text-center">
        {!success
          ? "Enter your user account&apos;s verified email address and we will send you a password reset link."
          : "Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder."}
      </p>
      {!success && (
        <form
          className="flex flex-col gap-6 items-center"
          onSubmit={handleSubmit(onSubmit)}>
          <input
            className="authInputBox w-[300px]"
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

          <button className="formBtns w-[250px]">Request new Password</button>
        </form>
      )}

      {
        success && <Link className="formBtns my-[3rem]" href="/auth">
            <p>RETURN TO SIGN IN</p>
        </Link>
      }
    </div>
  );
}
