import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function Signup() {
  const [value, setValue] = useState("");
  return (
    <div className=" w-2/3 m-auto h-auto pb-20  ">
      <form className="">
        <div className="">
            <div className="h-24 flex items-center justify-center">
              <h3 className="text-2xl font-medium leading-6 text-indigo-600 ">
                Signup Form
              </h3>
            </div>
          <div className="lg:border rounded m-auto w-1/2 mt-6 flex justify-center">

            <div className="mt-6">
              <div className=" lg:flex lg:flex-row sm:flex-col justify-around">
                <div className="">
                  <label
                    htmlFor="username"
                    className="block text-md font-medium text-gray-700 pb-3"
                  >
                    email
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-2/3 min-w-0 flex-1 p-1 rounded border border-gray-400  sm:text-sm "
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
                      type="address"
                      name="address"
                      id="address"
                      placeholder="Address"
                      className="block w-1/4 min-w-0 flex-1 p-1 rounded border border-gray-400  sm:text-sm "
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
                      type="password"
                      name="password"
                      id="password"
                      className="block w-1/4 min-w-0 flex-1 p-1 rounded border border-gray-400  sm:text-sm "
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
                      type="password"
                      name="password_confirmation"
                      id="password_confirmation"
                      className="block w-1/4 min-w-0 flex-1 p-1 rounded border border-gray-400  sm:text-sm "
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
                      type="parcel"
                      name="parcel"
                      id="parcel_id" placeholder="parcel id"
                      className="block w-1/4 min-w-0 flex-1 p-1 rounded border border-gray-400  sm:text-sm "
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
                <div className="">
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
