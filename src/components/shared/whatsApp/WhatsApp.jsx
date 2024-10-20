"use client";
import React, { useState } from "react";

const WhatsApp = () => {
  const [active, setActive] = useState(false);
  return (
    //
    <div
      className={`fixed bottom-[5%] right-0 z-50  lg:hover:text-white transition-all    text-rsayBlack  lg:hover:border-transparent border-r-0 shadow-lg ${
        !active ? "" : ""
      }`}
    >
      <div
        className={`flex items-center rounded-full bg-white hover:bg-primary rounded-r-none ${
          !active
            ? " max-w-[300px] px-2.5 py-1 border  border-rsayBlack  "
            : " max-w-0 "
        }} overflow-hidden`}
        onClick={() => setActive(!active)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M8 9.5A1.25 1.25 0 1 0 8 12a1.25 1.25 0 0 0 0-2.5m4 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m2.75 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"
          />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M16.1 4.593a50.6 50.6 0 0 0-8.098-.04l-.193.015A4.93 4.93 0 0 0 3.25 9.483V18a.75.75 0 0 0 1.105.66l3.91-2.101a1.25 1.25 0 0 1 .593-.149h8.976c1.132 0 2.102-.81 2.305-1.923c.412-2.257.444-4.567.096-6.835l-.102-.669a2.666 2.666 0 0 0-2.408-2.252zM8.116 6.049a49 49 0 0 1 7.858.038l1.624.139c.536.046.972.453 1.053.985l.103.668a19.2 19.2 0 0 1-.09 6.339a.84.84 0 0 1-.829.692H8.858a2.75 2.75 0 0 0-1.302.328L4.75 16.746V9.483a3.43 3.43 0 0 1 3.171-3.42z"
            clipRule="evenodd"
          />
        </svg>
        <span className="inline-block font-bold capitalize ">chat</span>
      </div>
      <div
        className={` absolute bottom-0 right-0 bg-[#17143846] gap-3  rounded-full rounded-r-none overflow-hidden flex flex-col items-end transition-all rounded-s-lg ${
          active ? " max-w-[300px] p-4 drop-shadow border" : " max-w-0 "
        }`}
      >
        {/* close  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          onClick={() => setActive(false)}
          className="border border-red-500 rounded bg-white cursor-pointer"
        >
          <path
            fill="#FF0000"
            d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
          ></path>
        </svg>
        <div className="flex flex-col gap-1 ">
          <a
            // style={{
            //   background:
            //     "linear-gradient(88deg, rgb(29 145 49) 0%, rgb(73 201 83) 100%)",
            // }}
            className="flex items-center gap-2 bg-whtite bg-white border border-[#60d669]  px-2 py-1 rounded"
            href="https://wa.me/+966549851842"
            target="_blank"
            rel="noreferrer"
          >
            {/* <span
            style={{ animationDuration: "4s" }}
            className="animate-ping  absolute inline-flex left-1/4 top-1/4 h-1/2 w-1/2  rounded-full bg-[#60d669] opacity-70"
          ></span> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 256 258"
            >
              <defs>
                <linearGradient
                  id="logosWhatsappIcon0"
                  x1="50%"
                  x2="50%"
                  y1="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#1faf38"></stop>
                  <stop offset="100%" stopColor="#60d669"></stop>
                </linearGradient>
                <linearGradient
                  id="logosWhatsappIcon1"
                  x1="50%"
                  x2="50%"
                  y1="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#f9f9f9"></stop>
                  <stop offset="100%" stopColor="#fff"></stop>
                </linearGradient>
              </defs>
              <path
                fill="url(#logosWhatsappIcon0)"
                d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
              ></path>
              <path
                fill="url(#logosWhatsappIcon1)"
                d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"
              ></path>
              <path
                fill="#fff"
                d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
              ></path>
            </svg>
            <span className="text-[#60d669]  font-bold ">WhatsApp</span>
          </a>
          <a
            href="mailto:info@rsaay.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-whtite text-primary bg-white border border-[#60d669]  px-2 py-1 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
              ></path>
            </svg>
            <span className=" font-bold ">info@rsaay.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};
// const WhatsApp = () => {
//   return (
//     <a
//       className="fixed bottom-4 right-4 z-50 p-2.5  rounded-full cursor-pointer "
//       style={{
//         background:
//           "linear-gradient(88deg, rgb(29 145 49) 0%, rgb(73 201 83) 100%)",
//       }}
//       href="https://wa.me/+966549851842"
//       target="_blank"
//       rel="noreferrer"
//     >
//       <span style={{animationDuration: "4s"}} className="animate-ping  absolute inline-flex left-1/4 top-1/4 h-1/2 w-1/2  rounded-full bg-[#60d669] opacity-70"></span>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="48"
//         height="48"
//         viewBox="0 0 256 258"
//       >
//         <defs>
//           <linearGradient
//             id="logosWhatsappIcon0"
//             x1="50%"
//             x2="50%"
//             y1="100%"
//             y2="0%"
//           >
//             <stop offset="0%" stopColor="#1faf38"></stop>
//             <stop offset="100%" stopColor="#60d669"></stop>
//           </linearGradient>
//           <linearGradient
//             id="logosWhatsappIcon1"
//             x1="50%"
//             x2="50%"
//             y1="100%"
//             y2="0%"
//           >
//             <stop offset="0%" stopColor="#f9f9f9"></stop>
//             <stop offset="100%" stopColor="#fff"></stop>
//           </linearGradient>
//         </defs>
//         <path
//           fill="url(#logosWhatsappIcon0)"
//           d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
//         ></path>
//         <path
//           fill="url(#logosWhatsappIcon1)"
//           d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"
//         ></path>
//         <path
//           fill="#fff"
//           d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
//         ></path>
//       </svg>
//     </a>
//   );
// };

export default WhatsApp;
