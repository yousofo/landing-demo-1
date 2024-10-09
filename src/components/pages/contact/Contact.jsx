"use client";
import React, { useEffect, useRef } from "react";
import "./style/style.css";

const Contact = () => {
  const signInRef = useRef(null);
  const signUpRef = useRef(null);
  const universitiesFormRef = useRef(null);
  const companiesFormRef = useRef(null);
  const overlayContainerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    signInRef.current.addEventListener("click", () => {
      overlayContainerRef.current.style.transform = "translateX(100%)";
      overlayRef.current.style.transform = "translateX(-50%)";
      universitiesFormRef.current.classList.add("active");
      companiesFormRef.current.classList.remove("active");
    });
    signUpRef.current.addEventListener("click", () => {
      overlayContainerRef.current.style.transform = "translateX(0)";
      overlayRef.current.style.transform = "translateX(0)";
      companiesFormRef.current.classList.add("active");
      universitiesFormRef.current.classList.remove("active");
    });

    return () => {
      signInRef.current.removeEventListener("click", () => {});
      signUpRef.current.removeEventListener("click", () => {});
    };
  }, []);

  function handleContactSwiper(e, i) {
    e.target.classList.add("active");
    e.target.nextElementSibling?.classList.remove("active");
    e.target.previousElementSibling?.classList.remove("active");
    switch (i) {
      case 1:
        universitiesFormRef.current.classList.add("active");
        companiesFormRef.current.classList.remove("active");
        // overlayContainerRef.current.style.transform = "translateX(100%)";
        // overlayRef.current.style.transform = "translateX(-50%)";
        break;
      case 2:
        companiesFormRef.current.classList.add("active");
        universitiesFormRef.current.classList.remove("active");
        // overlayContainerRef.current.style.transform = "translateX(0)";
        // overlayRef.current.style.transform = "translateX(0)";
        break;
    }
  }
  return (
    // <section className="bg-white dark:bg-gray-900 bg-white">
    //   <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    //     <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
    //       Contact Us
    //     </h2>
    //     <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
    //       Got a technical issue? Want to send feedback about a beta feature?
    //       Need details about our Business plan? Let us know.
    //     </p>
    //     <form action="#" className="space-y-8">
    //       <div>
    //         <label
    //           htmlFor="email"
    //           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //         >
    //           Your email
    //         </label>
    //         <input
    //           type="email"
    //           id="email"
    //           className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
    //           placeholder="name@email.com"
    //           required
    //         />
    //       </div>
    //       <div>
    //         <label
    //           htmlFor="subject"
    //           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    //         >
    //           Subject
    //         </label>
    //         <input
    //           type="text"
    //           id="subject"
    //           className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
    //           placeholder="Let us know how we can help you"
    //           required
    //         />
    //       </div>
    //       <div className="sm:col-span-2">
    //         <label
    //           htmlFor="message"
    //           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
    //         >
    //           Your message
    //         </label>
    //         <textarea
    //           id="message"
    //           rows="6"
    //           className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
    //           placeholder="Leave a comment..."
    //         ></textarea>
    //       </div>
    //       <button
    //         type="button"
    //         className="py-3 px-5 text-sm font-medium border border-primary text-center text-primary rounded-lg bg-primary-700 sm:w-fit hover:bg-primary hover:text-white hover:border-white transition-all focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
    //       >
    //         Send message
    //       </button>
    //     </form>
    //   </div>
    // </section>
    <main className="bg-white flex items-center justify-center">
      <div class="container contact">
        <div className="contact-swiper flex w-full md:hidden ">
          <button onClick={(e) => handleContactSwiper(e, 1)} className="active">
            Universites
          </button>
          <button onClick={(e) => handleContactSwiper(e, 2)}>Companies</button>
        </div>
        <div className="flex w-full">
          <div ref={universitiesFormRef} class="form sign-in-form">
            <div class="wrapper">
              <form action="#">
                <h1>Universites</h1>
                <div className="input">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@email.com"
                    required
                  />
                </div>
                <div className="input">
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div className="input">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="py-3 px-5 text-sm font-medium border border-primary text-center text-primary rounded-lg bg-primary-700 sm:w-fit hover:bg-primary hover:text-white hover:border-white transition-all focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
          <div ref={companiesFormRef} class="form sign-up-form active">
            <div class="wrapper">
              <form action="#">
                <h1>Companies</h1>
                <div className="input">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@email.com"
                    required
                  />
                </div>
                <div className="input">
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div className="input">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="py-3 px-5 text-sm font-medium border border-primary text-center text-primary rounded-lg bg-primary-700 sm:w-fit hover:bg-primary hover:text-white hover:border-white transition-all focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div ref={overlayContainerRef} class="overlay-container">
          <div ref={overlayRef} class="overlay">
            <div class="overlay-left p-4">
              <h1>Let&apos;s Connect!</h1>
              {/*  Tell us about your company's needs and how we can assist. */}
              <p>or</p>
              <button
                className="!bg-white !text-[#ed143d]"
                ref={signInRef}
                id="signInButton"
              >
                To Universites
              </button>
            </div>
            <div class="overlay-right p-4">
              <h1>Reach out to us!</h1>
              {/*  Let us know how we can collaborate with your institution. */}
              <p>or</p>
              <button
                className="!bg-white !text-[#ed143d]"
                ref={signUpRef}
                id="signUpButton"
              >
                To Companies
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
