// import { useState, useEffect, useReducer } from "react";
// import { assert } from "keycloakify/tools/assert";
import type { PageProps } from "../types";

// import type { I18n } from "../i18n";
import graLogo from "../../login/assets/img/gra.png";
import { useState } from "react";

const LoginPage = (props: PageProps<"login.ftl">) => {
  // const [loading, setLoading] = useState(false);
  const { i18n, Template, kcContext } = props;
  const { url, realm, messagesPerField } = kcContext;
  const { loginWithEmailAllowed } = realm;
  const { msgStr } = i18n;
  const [showPassword, setShowPassword] = useState(false);
  // const { social, realm, url, usernameHidden, login, auth, registrationDisabled, messagesPerField } = kcContext;
  // const { msg, msgStr } = i18n;
  // const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(false);

  return (
    <Template i18n={i18n} kcContext={kcContext} >
      <div className="flex flex-col items-center justify-center font-poppins relative pt-20">
        {/* <img src={graLogo} alt="gra logo" className="w-[150px] object-cover absolute -top-4 z-10 pb-10" /> */}
        <img src={graLogo} alt="gra logo" className="w-[100px] object-cover absolute top-[130px] z-20 pb-10" />
      <div className=" w-[770px] overflow-hidden bg-white rounded-2xl shadow-2xl h-[610px] ">
        <div className="flex flex-col">
            <h1 className="  w-full text-center text-3xl font-bold text-gray-800 pt-[190px]">Sign In MTS</h1>
            <div className=" px-16 pt-10 pb-5">
                <div className=" pb-5">
                <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                className="w-full pl-12 pr-4 py-3 bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 text-lg"
                                placeholder={loginWithEmailAllowed ? msgStr('usernameOrEmail') : msgStr('username')}
                                name="username"
                                id="username"
                            />
                        </div>
                </div>

                <div className="pb-5">
                <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <input
                                type="password"
                                className="w-full pl-12 pr-4 py-3 bg-gray-100 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 text-lg"
                                placeholder="Password"
                                id="password"
                                name="password"
                            />
                        </div>
                </div>
                <button
                            type="submit"
                            // className="w-full bg-[#0f172a] text-white font-medium py-3 px-6 rounded-full transition duration-200 hover:bg-[#1e293b] mt-6 text-lg"
                            className="w-full bg-green-600 text-white font-medium py-3 px-6 rounded-md transition duration-200 hover:bg-green-900 mt-6 text-lg"
                        >
                          {msgStr('doLogIn')}
                        </button>
            </div>

           <div className="text-[15px] px-10 pb-10">
           <h2 className="text-sm flex flex-row justify-center gap-1 p-2">
              By signing in, I agree to the  <a href={kcContext.properties.TERMS_AND_POLICY_URL}className="text-[#0f172a] font-bold underline">
                T&Cs
              </a>
            </h2>
              <h2 className=" flex items-end justify-center gap-1">
                Forgot{" "}
                
                <a href={kcContext.properties.FORGOT_PASSOWRD}className="text-[#0f172a] font-bold underline">
                Password
              </a>
              </h2>
           {/* <h2 className=" pb-2 flex items-center justify-center">
                By signing in, I agree to the <span className="text-[#0f172a] font-bold">Terms of Service</span> and <span className="text-[#0f172a] font-bold">Privacy Policy</span>
            </h2>

            <h2 className="pb-2 flex items-center justify-center gap-1">Forgot <span className="text-[#0f172a] font-bold">Username</span> | <span className="text-[#0f172a] font-bold">Password</span></h2>
            */}
           
           </div>
      
   
        </div>
      </div>
      </div>


    </Template>
  );
};

export default LoginPage;

