"use client";

import { useForm } from "react-hook-form";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
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
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Contact us
          </h1>
          <p className="mt-1 text-gray-600">
            We'd love to talk about how we can help you.
          </p>
        </div>

        <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 border-gray-700">
            <h2 className="mb-8 text-xl font-semibold text-gray-800">
              Fill in the form
            </h2>

            <form>
              <div className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="hs-firstname-contacts-1"
                      className="sr-only"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="hs-firstname-contacts-1"
                      id="hs-firstname-contacts-1"
                      className="py-3 px-4 block w-full border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="First Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="hs-lastname-contacts-1" className="sr-only">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="hs-lastname-contacts-1"
                      id="hs-lastname-contacts-1"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="hs-email-contacts-1" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="hs-email-contacts-1"
                    id="hs-email-contacts-1"
                    autoComplete="email"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label htmlFor="hs-phone-number-1" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="hs-phone-number-1"
                    id="hs-phone-number-1"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Phone Number"
                  />
                </div>

                <div>
                  <label htmlFor="hs-about-contacts-1" className="sr-only">
                    Details
                  </label>
                  <textarea
                    id="hs-about-contacts-1"
                    name="hs-about-contacts-1"
                    rows={4}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Details"
                  />
                </div>
              </div>

              <div className="mt-4 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary text-white hover:bg-[#4e46e5a4] focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Send inquiry
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  We'll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </div>
          <div className="divide-y divide-gray-700">
            <div className="flex gap-x-7 py-6">
              <svg
                className="shrink-0 size-6 mt-1.5 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
              <div className="grow">
                <h3 className="font-semibold text-gray-800">Knowledgebase</h3>
                <p className="mt-1 text-sm text-gray-500">
                  We're here to help with any questions or code.
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#"
                >
                  Contact support
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
              <svg
                className="shrink-0 size-6 mt-1.5 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
              <div className="grow">
                <h3 className="font-semibold text-gray-800">FAQ</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Search our FAQ for answers to anything you might ask.
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#"
                >
                  Visit FAQ
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
              <svg
                className="shrink-0 size-6 mt-1.5 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m7 11 2-2-2-2" />
                <path d="M11 13h4" />
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              </svg>
              <div className="grow">
                <h3 className="font-semibold text-gray-800">Developer APIs</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Check out our development quickstart guide.
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#"
                >
                  Contact sales
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
              <svg
                className="shrink-0 size-6 mt-1.5 text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
              <div className="grow">
                <h3 className="font-semibold text-gray-800">
                  Contact us by email
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  If you wish to write us an email instead please use
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                  href="#"
                >
                  example@site.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <section ref={ref} id="contacto" className="py-20 bg-main">
    //   <div className="container mx-auto px-6">
    //     <h2 className="text-4xl font-bold mb-12 text-center text-primary">Contáctanos</h2>
    //     <div className="flex flex-wrap -mx-3">
    //       <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    //         <motion.div
    //           initial={{ opacity: 0, x: -50 }}
    //           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
    //           transition={{ duration: 1 }}
    //           className="bg-white rounded-lg shadow-lg p-6"
    //         >
    //           <h3 className="text-2xl font-semibold mb-4 text-secondary">Información de Contacto</h3>
    //           <p className="mb-4">Estamos aquí para ayudarte. No dudes en contactarnos para cualquier consulta.</p>
    //           <ul className="space-y-2">
    //             <li className="flex items-center">
    //               <svg
    //                 className="w-5 h-5 mr-2 text-primary"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 viewBox="0 0 24 24"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    //                 ></path>
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    //                 ></path>
    //               </svg>
    //               Calle Principal 123, Ciudad, Estado 12345
    //             </li>
    //             <li className="flex items-center">
    //               <svg
    //                 className="w-5 h-5 mr-2 text-primary"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 viewBox="0 0 24 24"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    //                 ></path>
    //               </svg>
    //               (123) 456-7890
    //             </li>
    //             <li className="flex items-center">
    //               <svg
    //                 className="w-5 h-5 mr-2 text-primary"
    //                 fill="none"
    //                 stroke="currentColor"
    //                 viewBox="0 0 24 24"
    //                 xmlns="http://www.w3.org/2000/svg"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   strokeWidth="2"
    //                   d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    //                 ></path>
    //               </svg>
    //               info@logoterapia.com
    //             </li>
    //           </ul>
    //         </motion.div>
    //       </div>
    //       <div className="w-full md:w-1/2 px-3">
    //         <motion.form
    //           initial={{ opacity: 0, x: 50 }}
    //           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
    //           transition={{ duration: 0.5 }}
    //           onSubmit={handleSubmit(onSubmit)}
    //           className="bg-white rounded-lg shadow-lg p-6"
    //         >
    //           <div className="mb-4">
    //             <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
    //               Nombre
    //             </label>
    //             <input
    //               type="text"
    //               id="name"
    //               {...register("name", { required: true })}
    //               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary"
    //               placeholder="Tu nombre"
    //             />
    //             {errors.name && <span className="text-red-500 text-sm">Este campo es requerido</span>}
    //           </div>
    //           <div className="mb-4">
    //             <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
    //               Email
    //             </label>
    //             <input
    //               type="email"
    //               id="email"
    //               {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
    //               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary"
    //               placeholder="tu@email.com"
    //             />
    //             {errors.email && <span className="text-red-500 text-sm">Por favor, ingrese un email válido</span>}
    //           </div>
    //           <div className="mb-4">
    //             <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
    //               Mensaje
    //             </label>
    //             <textarea
    //               id="message"
    //               {...register("message", { required: true })}
    //               className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary"
    //               rows="4"
    //               placeholder="Tu mensaje"
    //             ></textarea>
    //             {errors.message && <span className="text-red-500 text-sm">Este campo es requerido</span>}
    //           </div>
    //           <button
    //             type="submit"
    //             className="w-full bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-dark transition duration-300"
    //           >
    //             Enviar Mensaje
    //           </button>
    //         </motion.form>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
