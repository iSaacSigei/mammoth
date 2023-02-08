import React, { useState } from "react";

export default function CreditCard() {
  const [card, setCard] = useState("front");
  const [cardNumber, setCardNumber] = useState("");
  const [cardholder, setCardholder] = useState("");
  const [expired, setExpired] = useState({ month: "", year: "" });
  const [securityCode, setSecurityCode] = useState("");

  return (
    <div className="m-2">
      <div className="sm:w-auto  mx-auto  bg-white max-w-420px">
        <header className="flex flex-col justify-center items-center">
          <div className="relative">
            <img
              className="w-full h-72"
              src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png"
              alt="front credit card"
            />
            <div className="text-lg w-full text-white px-12 absolute left-0 bottom-12 bg-transparent">
              <p className="number mb-5 sm:text-xl">
                {cardNumber || "0000 0000 0000 0000"}
              </p>
              <div className="flex flex-row justify-between">
                <p>{cardholder || "Card holder"}</p>
                <div className="">
                  <span>{expired.month}</span>
                  <span className={expired.month ? "" : "hidden"}>/</span>
                  <span>{expired.year}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <ul className="flex">
              <li className="mx-2">
                <img
                  className="w-16"
                  src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png"
                  alt=""
                />
              </li>
              <li className="mx-2">
                <img
                  className="w-14"
                  src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png"
                  alt=""
                />
              </li>
              <li className="ml-5">
                <img
                  className="w-7"
                  src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </header>
      </div>

      <main className="lg:w-1/3 md:w-1/3 sm:w-full m-auto">
        <h1 class="text-xl font-semibold text-gray-700 text-center">
          Card Info
        </h1>
        <form>
          <div class="">
            <div className="mb-2">
              <label className="text-gray-700">Card Holder</label>
            </div>
            <div class="my-3">
              <input
                type="text"
                class="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                placeholder="Card holder"
                maxlength="22"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-2">
              <label className="text-gray-700">Card Number</label>
            </div>
            <input
              type="number"
              class="appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <div class="my-3 flex flex-col">
              <div class="mb-2">
                <label for="" className="text-gray-700">
                  Expired
                </label>
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <select
                  name=""
                  id=""
                  class="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                >
                  <option value="" selected disabled>
                    MM
                  </option>
                  <option value="01">01</option>
                  <option value="02">02</option>
                  <option value="03">03</option>
                  <option value="04">04</option>
                  <option value="05">05</option>
                  <option value="06">06</option>
                  <option value="07">07</option>
                  <option value="08">08</option>
                  <option value="09">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select
                  name=""
                  id=""
                  class="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                >
                  <option value="" selected disabled>
                    YY
                  </option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
                <input
                  type="text"
                  class="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                  placeholder="Security code"
                  maxlength="3"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-teal-500 to-cyan-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}
