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
                className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="try123@xyz.com"
              >
                {error.email && <span>You must fill an email address</span>}
              </input>
            </label>
            <label>
              <span>Password</span>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="*******"
                className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              />
              {error.password && (
                <span className="text-xs text-red-500">
                  You must choose a Password
                </span>
              )}
            </label>
            <label className="block text-left mb-5 text-sm">
              <input type="checkbox" {...register("toa", { required: true })} />
              <span className="ml-2 text-neutral-500">
                {" "}
                I agree to my infos not being used at all{" "}
              </span>
              {error.toa && (
                <span className="text-xs text-red-500 block">
                  You must consent
                </span>
              )}
            </label>
            {!label && (
              <input
                type="submit"
                value="Signup"
                className="bg-blue-700 p-4 rounded text-white font-bold cursor-pointer"
              />
            )}
            {loading && <Spinner />}
            <hr className="my-10" />
            <p className="text-neutral-500 text-sm">
              {" "}
              You can fill whatever you like it's just for fun
            </p>
          </div>
        </form>
      </div>
      <div className="flex-1 bg-blue-700 hidden md:block">
        <div className="flex h-screen text-white">
          <div className="flex flex-wrap w-3/4 m-auto text-left  before:content-['\201d'] before:text-7xl before:text-yellow-300">
            <h1>Welcome to my react form</h1>
            <p>Made By Xavier Accerani</p>
            <div>
              <img
                src=""
                alt="Picture of Xavier"
                className="h-32 w-32 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
