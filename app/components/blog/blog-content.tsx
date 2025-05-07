"use client";
import Link from "next/link";
import { FaExternalLinkAlt, FaVideo } from "react-icons/fa";

export function BlogContent() {
  return (
    <div className="max-w-max">
      <div className="bg-primary/10 p-6 rounded-xl mb-8 text-base italic">
        <p>
          The following is a list of resources that may be helpful. Please note
          that Talk & Bloom® is not responsible for the content of the websites
          listed. We are not endorsing any of the resources provided—our goal is
          simply to offer access to local services for families. It is the
          responsibility of the family to assess whether a given service is
          right for their child.
        </p>
      </div>

      <section className="space-y-8">
        <div>
          <h2 className="font-serif text-2xl font-bold text-primary">
            GOVERNMENT-FUNDED SPEECH & LANGUAGE PROGRAMS
          </h2>
          <div className="space-y-4 mt-4">
            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://www.childdevelopmentprograms.ca/speech-and-language/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  Child Development Programs – Speech and Language
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                <strong>
                  York Region Preschool Speech and Language Program (YRPSLP)
                </strong>{" "}
                – Supports children in York Region from birth to school age with
                communication or interaction challenges. Focuses on prevention,
                early identification, and treatment.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://www.surreyplace.ca/services/preschool-speech-and-language-program/"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Surrey Place – Preschool Speech and Language Program
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Provides communication development support for children from
                birth to May 31 of their eligible kindergarten year. Services
                vary based on the referral date.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-bold text-primary">
            AUTISM PROGRAMS & RESOURCES
          </h2>
          <div className="space-y-4 mt-4">
            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://www.ontario.ca/page/ontario-autism-program"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ontario Autism Program (OAP)
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Information about funding and support options for children under
                18 with autism.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://accessoap.ca/"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AccessOAP
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                A centralized platform to access autism services and supports
                across Ontario.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://www.genevacentre.ca/#"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Geneva Centre for Autism
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Offers evidence-based, client-centered autism services through a
                multidisciplinary team. Based in Toronto.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://www.autismontario.com/about-us"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Autism Ontario
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Leading source of information and referral for the autism
                community across Ontario.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://www.autismspeaks.org/about-autism-speaks"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Autism Speaks
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Advocates for inclusive lives for individuals with autism,
                offering services, support, research, and innovation.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-bold text-primary">
            FUNDING
          </h2>
          <div className="space-y-4 mt-4">
            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://www.canada.ca/en/revenue-agency/services/tax/individuals/segments/tax-credits-deductions-persons-disabilities/disability-tax-credit.html"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Disability Tax Credit (DTC)
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                A non-refundable tax credit for people with severe and prolonged
                disabilities or their supporting family members.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://www.ontario.ca/page/special-services-home"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Special Services at Home (SSAH)
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Funding for families caring for a child with a developmental
                and/or physical disability to purchase services and supports.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://www.ontario.ca/page/assistance-children-severe-disabilities-program"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Assistance for Children with Severe Disabilities (ACSD)
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Financial support for eligible families with children under 18
                who have severe disabilities.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://www.ontario.ca/page/family-support-and-respite-children-and-youth-special-needs"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Family Support and Respite Program
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Provides funding for respite and other supports to eligible
                families of children with special needs.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://www.ontario.ca/page/ontario-child-benefit"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ontario Child Benefit
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Up to $1,680 per child annually for low- to moderate-income
                families.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://igprogram.easterseals.org/ig/"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Incontinence Supplies Grant
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Annual grant to help offset the cost of incontinence supplies
                for children aged 3–18.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="#"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Registered Disability Savings Plan (RDSP)
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                A long-term savings plan for individuals approved for the
                Disability Tax Credit, including potential government grants and
                bonds.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://jenash.org/2025-application-page_page/"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jennifer Ashleigh Children's Charity
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Supports Ontario families facing financial hardship due to a
                child's serious medical condition (up to age 19).
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://www.ontario.ca/page/find-and-pay-child-care"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find and Pay for Childcare
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Government support for locating and paying for childcare.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://www.york.ca/support/childrens-services/funding-child-care-operators"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  York Region – Funding for Childcare Operators
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Assesses and manages Child Care Fee Subsidy contracts in York
                Region.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-bold text-primary">
            PROGRAMS & SERVICES FOR FAMILIES & CHILDREN
          </h2>
          <div className="space-y-4 mt-4">
            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://www.ctnsy.ca/"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Children's Treatment Network (CTN)
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Delivers programs and services for children with disabilities
                (birth to 19) across York Region via a network of partner
                organizations.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://www.ontario.ca/page/find-earlyon-child-and-family-centre"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EarlyON Child and Family Centres
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Free, high-quality programs for children from birth to age 6 and
                their families.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://www.york.ca/support/childrens-services"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  York Region Children's Services
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Programs and resources to support childcare, recreation, and
                healthy development.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://www.ontario.ca/page/special-education-laws-and-policies"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Special Education in Ontario
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Information on educational services for students with
                exceptionalities in Ontario schools.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="#"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Every Child Belongs – City of Toronto
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Provides support and inclusion services to licensed childcare
                programs for children with extra support needs.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://www.marchofdimes.ca/en-ca/programs/children/"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  March of Dimes – Children's Programs
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Wide-ranging services for people with disabilities across
                Canada.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://www.apraxia-kids.org/"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apraxia Kids
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Resources and education on childhood apraxia of speech, a motor
                speech disorder.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-bold text-primary">
            ENTERTAINMENT
          </h2>
          <div className="space-y-4 mt-4">
            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://easterseals.ca/en/access-2-card-program/"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Access 2 Card Program – Easter Seals
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Provides free admission for support persons accompanying
                individuals with permanent disabilities to participating venues.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://www.canadaswonderland.com/accessibility"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Canada's Wonderland Accessibility
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Details and support for guests with disabilities. Includes
                accessibility guide and contact for assistance.
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://www.toronto.ca/explore-enjoy/parks-recreation/"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Toronto Parks & Recreation
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Programs and spaces for community recreation, including
                registration for seasonal programs.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-bold text-primary">
            FIND A PEDIATRICIAN OR FAMILY DOCTOR
          </h2>
          <div className="space-y-4 mt-4">
            <div className="bg-card p-6 rounded-xl shadow-sm">
              <h3 className="font-serif text-xl font-semibold flex items-center gap-2">
                <Link
                  href="https://www.ontario.ca/page/find-family-doctor-or-nurse-practitioner"
                  className="text-primary hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find a Doctor or Nurse Practitioner in Ontario
                  <FaExternalLinkAlt className="h-4 w-4" />
                </Link>
              </h3>
              <p className="mt-2">
                Search tools and information about connecting with healthcare
                professionals, including through the Health Care Connect
                program.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-12 bg-primary/10 p-6 rounded-xl">
        <h3 className="font-serif text-xl font-semibold">
          Need More Information?
        </h3>
        <p className="mt-2">
          If you need help navigating these resources or have questions about
          which services might be most appropriate for your child, please don't
          hesitate to contact us. Our team is here to support you.
        </p>
        <div className="mt-4">
          <a
            href="#contact"
            className="text-sm truncate rounded-xl font-black tracking-wider relative inline-flex group items-center justify-center py-1 px-1 md:px-3.5 md:py-2 md:m-1 md:text-base cursor-pointer border-b-4 border-l-2 active:scale-105 transition-all duration-300 ease-out active:shadow-none shadow-lg bg-primary border-[#7248d4] text-white"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("contact");
              if (element) {
                window.scrollTo({
                  top: element.offsetTop - 40,
                  behavior: "smooth",
                });
              }
            }}
          >
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-black rounded group-hover:w-full group-hover:h-10 opacity-10"></span>
            <FaVideo className="mr-2 text-center" aria-hidden="true" />
            <span className="relative">contact Us</span>
          </a>
        </div>
      </div>
    </div>
  );
}
