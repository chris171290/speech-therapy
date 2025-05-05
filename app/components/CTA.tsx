import React from "react";
import { useTranslations } from "next-intl";

const CTA = () => {
  const t = useTranslations("newsletter");
  return (
    <div className="relative bg-primary">
      <div className="absolute inset-x-0 bottom-0">
        <svg
          viewBox="0 0 224 12"
          fill="currentColor"
          className="w-full -mb-1 text-white"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"
            fill="#ebedff"
          ></path>
        </svg>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
          <h2 className="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
            {t("title")}
          </h2>
          <p className="mb-6 text-base text-white md:text-lg">
            {t("description")}
          </p>
          <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
            <input
              placeholder={t("form.placeholder")}
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
            />
            {/* <a
              href="/"
              className="shadow-[0_0_10px_5px_rgba(0,0,0,0.3)] group border-b-4 border-l-2 border-[#D07468] bg-primary inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-white md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-black rounded group-hover:w-full group-hover:h-10 opacity-10"></span>
              <span className="relative">Subscribe</span>
            </a> */}
            <a
              href="#_"
              className="shadow-[0_0_10px_5px_rgba(0,0,0,0.3)] shadow-white text-base truncate rounded-xl font-extrabold tracking-wider relative inline-flex group items-center justify-center px-4 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:scale-105 transition-all duration-300 ease-out active:shadow-none bg-primary border-[#7248d4] text-white"
            >
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-black rounded group-hover:w-full group-hover:h-10 opacity-10"></span>

              <span className="relative">{t("form.button")}</span>
            </a>
          </form>
          <p className="max-w-md mb-10 text-xs tracking-wide font-extrabold text-white sm:text-sm sm:mx-auto md:mb-16">
            {t("privacyStatement")}
          </p>
          <a
            href="/"
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-white rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="currentColor"
            >
              <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CTA;
