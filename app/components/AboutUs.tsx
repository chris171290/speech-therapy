import { FaCloudArrowUp } from "react-icons/fa6";

export default function AboutUs() {
  return (
    <div
      className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="about"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">
                About Us
              </p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-[2.50rem]">
                Rebeca Schvartzman, SLP
              </h1>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-[2.50rem]">
                reg. CASLPO
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
                Here, we empower every child to communicate and interact to the
                best of their ability. As a registered Speech-Language
                Pathologist (SLP) with over 20 years of experience, I provide
                personalized, culturally sensitive, and evidence-based services.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-20 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            // src="https://tailwindui.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
            src="/aboutMe.png"
            className="w-[48rem] rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <p>
                I am a member in good standing with the College of Audiologists
                and Speech-Language Pathologists of Ontario (CASLPO) and have
                worked in both government-funded programs and private settings.
                Bilingual in English and Spanish , I offer services in both
                languages to support diverse families.
                <br />
                My career has focused on working with children and families from
                varied cultural and linguistic backgrounds. This has taught me
                to be mindful of cultural sensitivities, adapt teaching methods,
                and build strong relationships to meet each child’s unique
                needs.
                <br />
                As an advocate for neurodiversity , I celebrate the strengths
                and challenges of different brain patterns. Since the early
                2000s, I’ve championed acceptance and inclusion for
                neurodivergent individuals.
                <br />I specialize in assessing and treating:
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <FaCloudArrowUp
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Autism Spectrum Disorder (ASD)
                    </strong>{" "}
                    {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione. */}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FaCloudArrowUp
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Social communication challenges across all levels of
                      ability.
                    </strong>{" "}
                    {/* Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. */}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FaCloudArrowUp
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      A wide range of speech and language delays and disorders.
                    </strong>{" "}
                    {/* Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis. */}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FaCloudArrowUp
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Executive function (EF) difficulties.
                    </strong>{" "}
                    {/* Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis. */}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FaCloudArrowUp
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Attention Deficit Hyperactivity Disorder (ADHD)
                    </strong>{" "}
                    {/* Ac tincidunt sapien vehicula erat auctor pellentesque
                    rhoncus. Et magna sit morbi lobortis. */}
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Foundational skills are key to unlocking a child’s potential. By
                building these skills, supporting emotional regulation, and
                addressing sensory processing, I help children learn and develop
                social interactions more effectively.
              </p>
              {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                No server? No problem.
              </h2> */}
              <p className="mt-6">
                Let’s work together to help your child thrive! Whether you need
                assessment, therapy, or guidance, I’m here to support your
                family’s journey.
              </p>
              <span className="block mt-8 text-gray-600 italic">
                Your child’s voice matters—and together, we can make it heard.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
