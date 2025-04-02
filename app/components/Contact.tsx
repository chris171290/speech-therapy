"use client";

import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IoShareSocial } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const onSubmit = (data: any) => {
    console.log(data);
    // Aquí iría la lógica para enviar el formulario
  };

  return (
    <div
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
      id="contact"
    >
      <div className="max-w-2xl lg:max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary underline sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-1 text-primary">{t("subtitle")}</p>
        </div>

        <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 border-primary">
            <h2 className="mb-8 text-xl font-semibold text-primary text-center">
              {t("form.heading")}
            </h2>

            <form>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="hs-firstname-contacts-1"
                      className="sr-only"
                    >
                      {t("form.firstName.label")}
                    </label>
                    <input
                      type="text"
                      name="hs-firstname-contacts-1"
                      id="hs-firstname-contacts-1"
                      className="py-3 px-4 block w-full border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder={t("form.firstName.placeholder")}
                    />
                  </div>

                  <div>
                    <label htmlFor="hs-lastname-contacts-1" className="sr-only">
                      {t("form.lastName.label")}
                    </label>
                    <input
                      type="text"
                      name="hs-lastname-contacts-1"
                      id="hs-lastname-contacts-1"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder={t("form.lastName.placeholder")}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="hs-email-contacts-1" className="sr-only">
                    {t("form.email.label")}
                  </label>
                  <input
                    type="email"
                    name="hs-email-contacts-1"
                    id="hs-email-contacts-1"
                    autoComplete="email"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder={t("form.email.placeholder")}
                  />
                </div>

                <div>
                  <label htmlFor="hs-phone-number-1" className="sr-only">
                    {t("form.phoneNumber.label")}
                  </label>
                  <input
                    type="text"
                    name="hs-phone-number-1"
                    id="hs-phone-number-1"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder={t("form.phoneNumber.placeholder")}
                  />
                </div>

                <div>
                  <label htmlFor="hs-about-contacts-1" className="sr-only">
                    {t("form.details.label")}
                  </label>
                  <textarea
                    id="hs-about-contacts-1"
                    name="hs-about-contacts-1"
                    rows={4}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder={t("form.details.placeholder")}
                  />
                </div>
              </div>

              <div className="mt-4 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary text-white hover:bg-[#4e46e5a4] focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {t("form.submit")}
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-primary">{t("form.responseTime")}</p>
              </div>
            </form>
          </div>
          <div className="divide-y divide-primary">
            <div className="flex gap-x-7 py-6">
              <IoShareSocial className="size-8 text-primary" />
              <div className="grow">
                <h3 className="font-semibold text-primary">
                  {t("socialMedia.heading")}
                </h3>
                <p className="mt-1 text-sm text-primary">
                  {t("socialMedia.instagram.label")}
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-primary hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#"
                >
                  {t("socialMedia.instagram.username")}
                  <svg
                    className="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex gap-x-7 py-6">
              <FaPhoneAlt className="size-8 text-primary" />
              <div className="grow">
                <h3 className="font-semibold text-primary">
                  {t("phone.heading")}
                </h3>
                <p className="mt-1 text-sm text-primary">
                  {t("phone.description")}
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-primary hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="tel:+4162746729"
                >
                  {t("phone.number")}
                  <svg
                    className="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className=" flex gap-x-7 py-6">
              <MdEmail className="size-8 text-primary" />
              <div className="grow">
                <h3 className="font-semibold text-primary">
                  {t("email.heading")}
                </h3>
                <p className="mt-1 text-sm text-primary">
                  {t("email.description")}
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-primary hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="mailto:info@talkandbloom.ca"
                >
                  {t("email.address")}
                  <svg
                    className="shrink-0 size-2.5 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className=" flex gap-x-7 py-6">
              <PiBuildingOfficeFill className="size-8 text-primary" />
              <div className="grow">
                <h3 className="font-semibold text-primary">
                  {t("office.heading")}
                </h3>
                <p className="mt-1 text-sm text-primary">
                  {t("office.description")}
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-primary hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#"
                >
                  {t("office.address")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
