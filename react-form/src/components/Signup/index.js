import React from "react";
import { useForm } from "react-hook-form";

function SignUp({ onSubmit, loading }) {
  const {
    register,
    handleSubmit,
    formState: { error },
  } = useForm();

  return (
    <div className="flex">
      <div className="flex-1">
        <form
          onSubmit={handleSubmit(onSubmit)}
          //   className="flex m-auto h-screen"
        >
          <div>
            <label>
              <span>Username</span>
              <input
                type="username"
                {...register("username", { required: true })}
                // className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Xavier Accerani"
              >
                {error.username && <span>You must choose a username</span>}
              </input>
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                {...register("email", { required: true })}
              ></input>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
