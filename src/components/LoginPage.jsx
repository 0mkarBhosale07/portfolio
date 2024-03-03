"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logError, setLogError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    try {
      if (!username || !password) {
        setLogError("All fields are requried!");
      } else {
        e.preventDefault();
        const res = await signIn("credentials", {
          username,
          password,
          redirect: false,
        });

        if (res.error) {
          console.log();
          ("Invalid Credentials");
          return;
        }

        router.replace("dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login flex justify-center">
        <div className="input-card bg-[#112240] py-5 px-10 w-fit rounded-lg">
          <header>
            <h1 className="text-center text-white text-2xl font-bold my-5">
              Login Page
            </h1>
          </header>
          <div className="inputs">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="fields">
                <div className="fields  flex justify-center">
                  <div className="mb-4 w-96">
                    <label className="block text-teal-400 text-sm font-bold mb-2 px-2">
                      Username
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Enter username"
                      onInput={(e) => {
                        setUsername(e.target.value);
                      }}
                      value={username}
                    />
                  </div>
                </div>
                <div className="fields  flex justify-center my-5">
                  <div className="mb-4 w-96">
                    <label className="block text-teal-400 text-sm font-bold mb-2 px-2">
                      Password
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="Enter password"
                      onInput={(e) => {
                        setPassword(e.target.value);
                      }}
                      value={password}
                    />
                  </div>
                </div>
              </div>
              <div className="button text-center mb-10">
                <button
                  className="bg-teal-400 text-black px-5 py-2 rounded-md text-center font-bold"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="error mt-10 flex justify-center">
        {logError && (
          <h1 className="text-white bg-red-400 py-1 px-5 rounded-md w-fit">
            {logError}
          </h1>
        )}
      </div>
    </>
  );
};

export default LoginPage;
