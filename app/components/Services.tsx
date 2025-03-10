"use client";

import {
  FaStethoscope,
  FaClipboardList,
  FaUsers,
  FaMicrophoneAlt,
  FaGraduationCap,
} from "react-icons/fa";
import { LuMessageSquareText } from "react-icons/lu";
import ExpandableCardDemo from "./ui/expandable-card-demo-standard";
interface Service {
  icon: JSX.Element;
  title: string;
  details: string;
}

// Datos de los servicios
const servicesData: Service[] = [
  {
    icon: <FaStethoscope className="size-6 text-white" />,
    title: "Free Screening",
    details:
      "Confirm if your child is meeting age-appropriate milestones. Early identification can change your child's developmental path.",
  },
  {
    icon: <FaClipboardList className="size-6 text-white" />,

    title: "Full Assessment",
    details:
      "Comprehensive evaluation of your child's communication abilities, ideal if you have specific concerns or notice developmental delays.",
  },
  {
    icon: <LuMessageSquareText className="size-6 text-white" />,
    title: "Language Therapy",
    details:
      "Addresses difficulties in understanding and expressing language, including grammar, vocabulary, and sentence organization.",
  },
  {
    icon: <FaUsers className="size-6 text-white" />,
    title: "Social Communication Therapy",
    details:
      "Improves social interaction skills, use of gestures, facial expressions, and ability to maintain conversations.",
  },
  {
    icon: <FaMicrophoneAlt className="size-6 text-white" />,
    title: "Articulation Therapy",
    details:
      "Helps correct difficulties in pronouncing sounds and words to improve speech clarity.",
  },
  {
    icon: <FaGraduationCap className="size-6 text-white" />,
    title: "Professional Consultation",
    details:
      "Offers training and support to other professionals involved in a current client's care, including daycare and school visits.",
  },
];

const Service = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="bg-white"
      >
        <path d="M0 0v100S0 4 500 4s500 96 500 96V0H0Z" fill="#B2B8FF" />
      </svg>
      <section className="px-4 pb-12 pt-5 bg-white lg:py-10" id="services">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-12">
                <span className="mb-5 block text-3xl font-semibold text-primary underline underline-offset-4 decoration-2">
                  Our Services
                </span>
                <h2 className="mb-3 text-3xl text-primary font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  What We Do
                </h2>
                <p className="text-base text-body-color dark:text-dark-6 text-primary">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <ExpandableCardDemo />

          {/* <div className="grid gap-4 md:grid-cols-2 md:gap-y-4 lg:grid-cols-3 mx-auto lg:gap-x-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div> */}
        </div>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="bg-white -mt-[1px]"
      >
        <path
          d="M0 100v-100S0 96 500 96s500 -96 500 -96V100H0Z"
          fill="#B2B8FF"
        />
      </svg>
    </>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details }: any) => {
  return (
    <div className="flex justify-center items-center dark:bg-gray-800">
      <div className="relative cursor-pointer dark:text-white">
        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-primary rounded-lg dark:bg-gray-200"></span>
        <div className="relative flex flex-col gap-3 h-[200px] p-6 dark:bg-gray-800 border-2 border-primary dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500 bg-secondary">
          <div className="flex items-center">
            <div className="flex items-center justify-start gap-4">
              <div className="flex h-[50px] w-[50px] items-center justify-center rounded-2xl bg-primary/80 text-white">
                {icon}
              </div>
              <h4 className="text-2xl font-semibold text-primary">{title}</h4>
            </div>
          </div>
          <p className="text-body-color dark:text-dark-6 text-primary">
            {details}
          </p>
        </div>
      </div>
    </div>
  );
};
