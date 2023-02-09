import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Link } from "react-router-dom";
export default function Signup() {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [parcelId, setParcelId]=useState('')
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  // const [errors, setErrors] = useState([]);

  function handleSumbit(e) {
    e.preventDefault()
    fetch('https://mammoth-production.up.railway.app/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        value,
        email,
        address,
        parcelId,
        password,
        password_confirmation: passwordConfirmation,
      })
    })
    .then((r)=>{
      if(r.ok){
        r.json().then((data)=>{
          console.log(data)
        })
      }
    })
  }
  return (
    <div className=" w-2/3 m-auto h-auto pb-20  ">
      <form onSubmit={handleSumbit} className="">
        <div className="">
          <div className="lg:w-full sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-2xl font-bold  text-indigo-600">
              Sign up
            </h2>

            <p className="mt-2 text-center text-sm text-gray-600">
              Or
              <Link
                to="/login"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Register Here
              </Link>
            </p>
          </div>
          <div className="rounded m-auto w-full mt-6 flex justify-center">

            <div className="mt-6">
              <div className=" lg:flex lg:flex-row sm:flex-col justify-around">
                <div className="">
                  <label
                    htmlFor="username"
                    className="block text-md font-medium text-gray-700 pb-3"
                  >
                    Email
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      id="email"
                      class="block w-3/4 px-5 py-1 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="address"
                    className="block text-md font-medium text-gray-700 pb-3"
                  >
                    Address
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      onChange={(e) => setAddress(e.target.value)}
                      type="address"
                      name="address"
                      id="address"
                      placeholder="Address"
                      class="block w-3/4 px-5 py-1 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:flex-row sm:flex-col justify-around">
                <div className="">
                  <label
                    htmlFor="password"
                    className="block text-md font-medium text-gray-700 pb-3"
                  >
                    password
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      id="password"
                      class="block w-3/4 px-5 py-1 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="confirm_password"
                    className="block text-md font-medium text-gray-700 pb-3"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
                      type="password"
                      name="password_confirmation"
                      id="password_confirmation"
                      class="block w-3/4 px-5 py-1 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="lg:flex lg:flex-row sm:flex-col justify-around">
                <div className="">
                  <label
                    htmlFor="parcel"
                    className="block text-md font-medium text-gray-700 pb-3"
                  >
                    Parcel ID
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      onChange={(e)=>setParcelId(e.target.value)}
                      type="parcel"
                      name="parcel"
                      id="parcel_id" placeholder="parcel id"
                      class="block w-3/4 px-5 py-1 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-md font-medium text-gray-700 pb-3"
                  >
                    Phone Number
                  </label>
                  <div className="mt-1">
                    <PhoneInput
                      className="block w-2/3 min-w-0 flex-1 object-contain  rounded border border-gray-400 focus:border-indigo-6 00 focus:ring-indigo-500 sm:text-sm "
                      international={false}
                      defaultCountry="US"
                      value={value}
                      onChange={setValue}
                    />
                  </div>
                </div>
              </div>

              <div className="lg:flex lg:flex-row sm:flex-col justify-center p-6">
                <div className="mr-4">
                  <label
                    htmlFor="cover-photo"
                    className="block text-md font-medium text-gray-700 pb-3"
                  >
                    Upload Site photo
                  </label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="cover-photo"
                    className="block text-md font-medium text-gray-700 pb-3"
                  >
                    Upload Drawings
                  </label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-center">
            <button
              type="submit"
              className="ml-3 inline-flex  justify-center rounded-md border border-transparent bg-gradient-to-r from-teal-500 to-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
