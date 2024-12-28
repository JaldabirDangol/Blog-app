import { ChangeEvent, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import {  SignupInput } from "@samosamuttor/medium-common2";
import axios from "axios";
import { BACKEND_URL } from "../config";


export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate()
  const [postInputs, SetpostInputs] = useState<SignupInput>({
    username: "",
    password: "",
    name: "",
  });

  async function sendRequest(){
    try{
      const response = await axios.post(`${BACKEND_URL}api/v1/user/${type==="signin"?"signin":"signup"}`,postInputs)
      const jwt = response.data;
      localStorage.setItem("token",jwt);
      navigate("/blogs");
    }catch(e){
alert('Error while signinig up ');
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div className="px-1o">
          <div className="text-3xl font-bold mt-4  px-10">
            Create an Account
          </div>
          <div className="text-slate-400 px-10">

            { type === "signin"?"Dont have an account ":"Already have an account ?"}

            <Link className="pl-2 underline px-10" to={type ==="signin"?"/signup":"/signin"}>
              {type === "signin"?"Signup ":"Signin"}
            </Link>
          </div>

          <div className="pt-8">
           { type === "signup"?<LabelledInput
              label="Name"
              placeholder="Enter your name ..."
              onChange={(e) => {
                SetpostInputs((c) => ({
                  ...c,
                  name: e.target.value,
                }));
              }}
            />:null}

            <LabelledInput
              label="Username"
              placeholder="Enter your username ..."
              onChange={(e) => {
                SetpostInputs((c) => ({
                  ...c,
                  username: e.target.value,
                }));
              }}
            />

            <LabelledInput
              label="Password"
              placeholder="Enter your name ..."
              onChange={(e) => {
                SetpostInputs((c) => ({
                  ...c,
                  password: e.target.value,
                }));
              }}
            />

            <button onClick={sendRequest}
              className="px-4 py-2 bg-gray-700 text-white font-bold rounded hover:bg-green-500 mt-10 w-full"
            >
             {type === "signin"?"signin":"signup"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}
function LabelledInput({
  onChange,
  label,
  placeholder,
  type,
}: LabelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm text-black font-bold pt-4">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
