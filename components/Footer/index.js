import React from "react";
import Socials from "../Socials";
import { useTheme } from "next-themes";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  const { theme } = useTheme();
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <div className="flex items-center">
              <div className="mt-4 mr-4 mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-7 h-7 ${theme === "dark" ? "block" : "hidden"}`}
                  fill="white"
                  height="1em"
                  width="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-7 h-7 ${
                    theme === "dark" ? "hidden" : "block"
                  } `}
                  fill="black"
                  height="1em"
                  width="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                </svg>
              </div>
              <h1 className="text-2xl text-bold dark:text-white mt-6">
                +91 95866 51002
              </h1>
            </div>
            <div className="flex items-center mt-2">
              <div className="mt-4 mr-4 mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-7 h-7 ${
                    theme === "dark" ? "hidden" : "block"
                  } `}
                  fill="black"
                  height="1em"
                  width="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-7 h-7 ${
                    theme === "dark" ? "block" : "hidden"
                  } `}
                  fill="white"
                  height="1em"
                  width="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
              </div>

              <h1 className="text-2xl text-bold dark:text-white mt-2">
                meetpt306@gmail.com
              </h1>
            </div>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by Meet Patel
      </h1>
    </>
  );
};

export default Footer;
