"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  
  const router = useRouter();

  async function handleLogin(userInfo) {

    console.log(userInfo);
    const newUserInfo = {
      email: userInfo.get("email"),
      password: userInfo.get("password"),
    };

  
    const res = await signIn("credentials", {
      redirect: false,
      ...newUserInfo,
    });
    if (res.ok) {
      router.push("/todo-list");
    }
  }
  return (
    <main>
      <section class="bg-gray-100 min-h-screen flex box-border justify-center items-center">
        <div class="rounded-2xl flex max-w-3xl p-5 items-center">
          <div class="md:w-1/2 px-8 mr-10">
            <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
            <h2 class="font-bold text-3xl text-[#002D74] mt-11">Login</h2>

            <form action={handleLogin} class="flex flex-col gap-4">
              <input
                class="p-2 mt-8 rounded-lg border"
                type="email"
                name="email"
                placeholder="Email"
              />
              <div class="relative">
                <input
                  class="p-2 rounded-lg border w-full"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />     
                <img src="/src/assets/view.png" alt="" />
              </div>
              <button
                class="bg-[#002D74] w-[300px] text-white py-2 rounded-lg hover:scale-105 duration-300 hover:bg-[#206ab1] font-medium"
                type="submit"
              >
                Login
              </button>
            </form>
           <div className=" justify-center">
           <div class="mt-4 text-sm flex justify-between items-center container-mr">
              <p class="mr-3 md:mr-0  text-sm">Don't have account yet?</p>
              <a href="" className="text-blue-600 text-sm">
                Register
              </a>
            </div>
            <div class=" flex  mt-6 items-center justify-center text-gray-500">
              <hr class="border-gray-300 w-24 mr-2" />
              <p class="text-center text-sm">Continue with</p>
              <hr class="border-gray-300 w-24 ml-2" />
            </div>
           </div>
            <button
              type="submit"
              class="bg-white border py-2 w-[300px] rounded-lg mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 hover:bg-[#60a8bc4f] font-medium mb-5"
            >
              <svg
                class="mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="25px"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              Google
            </button>
            <a href="" className="text-blue-600 text-xs ml-48 mb-7">
              Forget password?
            </a>
          </div>
          <div class="md:block hidden w-1/2 ml-10">
            <Image
              src={"/assets/icons/login.svg"}
              width={350}
              height={300}
              className="rounded-2xl max-h-[1600px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
