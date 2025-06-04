import { BlogContent } from "@/app/components/blog/blog-content";
import { BlogSidebar } from "@/app/components/blog/blog-sidebar";
import ContactButton from "@/app/components/blog/contact-button";
import { ShareButtons } from "@/app/components/blog/share-buttons";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { ReadingProgressBar } from "@/app/components/reading-progress-bar";
import TopBar from "@/app/components/TopBar";
import { ImageWithFallback } from "@/app/components/ui/image";
import { read } from "fs";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import Link from "next/link";
// import Image from "next/image";
import { notFound } from "next/navigation";
import { FaClock, FaExternalLinkAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
// import { constructMetadata } from "@/components/seo/page-seo"

// This would typically come from a CMS or database
async function getBlogPost(slug: string) {
  // Simulating a database fetch
  const posts = [
    {
      slug: "free-resources-for-parents",
      title: "FREE RESOURCES FOR PARENTS",
      description:
        "The following is a list of resources that may be helpful. Please note that Talk & Bloom® is not responsible for the content of the websites listed. We are not endorsing any of the resources provided—our goal is simply to offer access to local services for families. It is the responsibility of the family to assess whether a given service is right for their child.",
      content: (
        <>
          <figure className="rounded-xl overflow-hidden">
            <ImageWithFallback
              src="/placeholder.svg?height=600&width=1200"
              alt="Parent reading with child"
              width={1200}
              height={600}
              className="w-full h-[20rem] object-cover rounded-xl"
              priority
            />
            <figcaption className="text-center text-sm text-muted-foreground mt-2">
              Reading together is one of the most effective ways to support
              language development
            </figcaption>
          </figure>
          <div className="max-w-max mt-5">
            <div className="bg-primary/10 p-6 rounded-xl mb-8 text-base italic">
              <p>
                The following is a list of resources that may be helpful. Please
                note that Talk & Bloom® is not responsible for the content of
                the websites listed. We are not endorsing any of the resources
                provided—our goal is simply to offer access to local services
                for families. It is the responsibility of the family to assess
                whether a given service is right for their child.
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
                        York Region Preschool Speech and Language Program
                        (YRPSLP)
                      </strong>{" "}
                      – Supports children in York Region from birth to school
                      age with communication or interaction challenges. Focuses
                      on prevention, early identification, and treatment.
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
                      Provides communication development support for children
                      from birth to May 31 of their eligible kindergarten year.
                      Services vary based on the referral date.
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
                      Information about funding and support options for children
                      under 18 with autism.
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
                      A centralized platform to access autism services and
                      supports across Ontario.
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
                      Offers evidence-based, client-centered autism services
                      through a multidisciplinary team. Based in Toronto.
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
                      A non-refundable tax credit for people with severe and
                      prolonged disabilities or their supporting family members.
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
                      Funding for families caring for a child with a
                      developmental and/or physical disability to purchase
                      services and supports.
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
                      Financial support for eligible families with children
                      under 18 who have severe disabilities.
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
                      Provides funding for respite and other supports to
                      eligible families of children with special needs.
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
                      Up to $1,680 per child annually for low- to
                      moderate-income families.
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
                      Annual grant to help offset the cost of incontinence
                      supplies for children aged 3–18.
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
                      Disability Tax Credit, including potential government
                      grants and bonds.
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
                      Supports Ontario families facing financial hardship due to
                      a child's serious medical condition (up to age 19).
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
                      Assesses and manages Child Care Fee Subsidy contracts in
                      York Region.
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
                      Delivers programs and services for children with
                      disabilities (birth to 19) across York Region via a
                      network of partner organizations.
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
                      Free, high-quality programs for children from birth to age
                      6 and their families.
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
                      Programs and resources to support childcare, recreation,
                      and healthy development.
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
                      Provides support and inclusion services to licensed
                      childcare programs for children with extra support needs.
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
                      Resources and education on childhood apraxia of speech, a
                      motor speech disorder.
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
                      individuals with permanent disabilities to participating
                      venues.
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
                      Search tools and information about connecting with
                      healthcare professionals, including through the Health
                      Care Connect program.
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
                If you need help navigating these resources or have questions
                about which services might be most appropriate for your child,
                please don't hesitate to contact us. Our team is here to support
                you.
              </p>
              <div className="mt-4">
                <ContactButton />
              </div>
            </div>
          </div>
        </>
      ),
      image: "/hero-speech-therapy.avif",
      date: "2025-05-01",
      readingTime: "5 min",
      author: "Rebeca Schvartzman SLP, reg. CASLPO",
      category: "Free Resources",
    },
    {
      slug: "early-intervention-vs-wait-and-see",
      title: `Early Intervention vs. the "Wait and See"`,
      description:
        "Early intervention for kids 0-3 is vital for development. Acting early on signs of delays boosts skills and future success. Parents, with therapist support, are key. Don’t wait—contact for help!",
      content: (
        <>
          <figure className="rounded-xl overflow-hidden">
            <ImageWithFallback
              src="/placeholder.svg?height=600&width=1200"
              alt="Parent reading with child"
              width={1200}
              height={600}
              className="w-full h-[20rem] object-cover rounded-xl"
              priority
            />
            <figcaption className="text-center text-sm text-muted-foreground mt-2">
              Reading together is one of the most effective ways to support
              language development
            </figcaption>
          </figure>
          <div className="max-w-max mt-5">
            <section className="space-y-8">
              <div className="text-lg text-gray-700 leading-relaxed mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Taking Action Early Matters
                </h2>
                <p className="mb-6">
                  The first years of a child's life — especially{" "}
                  <strong>from birth to age three</strong> — are critical for
                  development. During this time, the brain undergoes rapid
                  growth,{" "}
                  <strong>
                    laying the foundation for learning, memory, and
                    adaptability.
                  </strong>
                </p>

                <p className="mb-8">
                  Between <strong>ages three and five</strong>, the brain begins
                  to <strong>filter and organize information</strong>, retaining
                  what's useful and discarding what's not. This process is
                  shaped by the child's experiences and how much stimulation
                  they receive.{" "}
                  <strong>
                    It makes the brain more efficient, and it facilitates
                    learning.
                  </strong>{" "}
                  Less stimulation can lead to lower retention, potentially
                  affecting long-term learning and skill acquisition.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What is early intervention?
                </h2>

                <p className="mb-4">
                  Early intervention refers to{" "}
                  <strong>professional support</strong> to infants and toddlers
                  who are at risk for developmental delays or already showing
                  signs. Indicators of delay may include challenges in:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-purple-900 mb-3 text-xl">
                    Social Skills
                  </h3>
                  <ul className="text-lg text-purple-800 space-y-1">
                    <li>• Late smiling</li>
                    <li>• Difficulty interacting with others</li>
                    <li>• Not understanding emotions</li>
                    <li>• Trouble taking turns</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-6 rounded-xl text-xl">
                  <h3 className="font-semibold text-indigo-900 mb-3">
                    Communication Skills
                  </h3>
                  <ul className="text-lg text-indigo-800 space-y-1">
                    <li>• Lack of gestures</li>
                    <li>• Delayed babbling</li>
                    <li>• Limited vocabulary</li>
                    <li>• Difficulty imitating sounds</li>
                  </ul>
                </div>

                <div className="bg-pink-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-pink-900 text-xl mb-3">
                    Motor Skills
                  </h3>
                  <ul className="text-lg text-pink-800 space-y-1">
                    <li>• Not rolling over</li>
                    <li>• Difficulty walking</li>
                    <li>• Delayed physical milestones</li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-6 rounded-xl">
                  <h3 className="font-semibold text-teal-900 text-xl mb-3">
                    Cognitive Skills
                  </h3>
                  <ul className="text-lg text-teal-800 space-y-1">
                    <li>• Difficulty paying attention</li>
                    <li>• Issues recalling events</li>
                    <li>• Struggling with cause-and-effect</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                The goal of early intervention is to{" "}
                <strong>
                  identify and address concerns as early as possible,
                </strong>{" "}
                before they become more serious,
                <strong>positively influencing</strong> the child's
                developmental path.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why Not "Wait and See"?
              </h2>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-orange-400 p-6 mb-8 rounded-r-xl">
                <p className="text-gray-700 text-lg leading-relaxed">
                  While the <strong>"wait and see"</strong> approach might seem
                  cautious, it often results in{" "}
                  <strong>
                    missed opportunities for critical early support.
                  </strong>{" "}
                  Research shows that early identification and intervention{" "}
                  <strong>significantly improve</strong> a child's ability to
                  reach developmental milestones, acquire skills, and succeed
                  academically and socially. Taking action early isn't
                  overreacting—it's an investment in your child's future.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                The Power of Parent Involvement
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Children learn best in{" "}
                <strong>natural, familiar environments</strong>, with trusted
                caregivers, and through playful, meaningful interactions.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                <strong>Parents are essential partners</strong> in their child's
                development. By integrating personalized strategies into daily
                routines, parents
                <strong>
                  can improve their child's learning and communication skills
                </strong>
                , fostering <strong>lasting progress.</strong>
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                The Role of the Speech Therapist
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Speech-language pathologists <strong>(SLPs)</strong> collaborate
                with parents to develop <strong>tailored support plans</strong>{" "}
                for each child. Through this partnership, parents gain{" "}
                <strong>
                  a deeper understanding of their child's strengths and
                  challenges
                </strong>
                , enabling them to <strong>apply strategies effectively</strong>{" "}
                at home and reinforce{" "}
                <strong>consistent learning and development.</strong> SLPs guide
                parents every step of the way, empowering them with the tools to
                support communication, social-emotional growth, and overall
                well-being.
              </p>

              <div className="bg-gradient-to-r from-primary to-primary text-white p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4">
                  Concerned About Your Child's Development? Don't Wait.
                </h2>
                <p className="text-purple-100 text-lg mb-6 leading-relaxed">
                  You know your child best. If something doesn't feel quite
                  right — whether in communication, social skills, or another
                  developmental area — <strong>reach out today.</strong>
                </p>
                <button className="bg-white text-primary text-lg px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  💬 Contact <strong>Talk & Bloom</strong> for a free
                  consultation
                </button>
                <p className="text-purple-100 text-lg mt-3">
                  Take the first step toward supporting your child's full
                  potential.
                </p>
              </div>
            </section>
          </div>
        </>
      ),
      image: "/hero-speech-therapy.avif",
      date: "2025-05-29",
      author: "Rebeca Schvartzman SLP, reg. CASLPO",
      readingTime: "5 min",
      category: "Early Intervention",
    },
    // More blog posts would be here
  ];

  const post = posts.find((post) => post.slug === slug);
  if (!post) return null;

  return post;
}

// Generate metadata for the blog post
// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string }
// }): Promise<Metadata> {
//   const post = await getBlogPost(params.slug)

//   if (!post) {
//     return constructMetadata({
//       title: "Blog Post Not Found",
//       description: "The requested blog post could not be found.",
//       noIndex: true,
//     })
//   }

//   return constructMetadata({
//     title: post.title,
//     description: post.description,
//     image: post.image,
//     canonical: `https://talkandbloom.ca/blog/${post.slug}`,
//   })
// }

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  // Generate article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: `https://talkandbloom.ca${post.image}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Talk & Bloom",
      logo: {
        "@type": "ImageObject",
        url: "https://talkandbloom.ca/images/logo.webp",
      },
    },
    description: post.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://talkandbloom.ca/blog/${post.slug}`,
    },
  };

  return (
    <main className="bg-secondary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <div className="relative overflow-hidden lg:overflow-visible" id="home">
        <TopBar />
        <Header origin="blogpost" />
        <ReadingProgressBar />
        {/* Hero */}
        <div className="relative overflow-hidden border border-primary m-3 sm:mx-8 mt-24 rounded-2xl">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10">
            {/* Breadcrumbs */}
            <nav className="mt-8 flex justify-center" aria-label="Breadcrumb">
              <ol className="bg-white border border-gray-200 rounded-full shadow-sm inline-flex items-center gap-x-2 py-2 px-6">
                <li className="inline-flex items-center">
                  <a
                    href="/en"
                    className="text-gray-700 hover:text-gray-900 inline-flex items-center text-sm md:text-base"
                  >
                    <svg
                      className="w-5 h-5 mr-2.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <a
                      href="/en/blog"
                      className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm md:text-base"
                    >
                      Blog
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <a
                      href="/en/blog/free-resources-for-parents"
                      className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm md:text-base font-bold"
                    >
                      {post.title}
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
            {/* End Breadcrumbs */}

            <div className="mt-14 flex items-center flex-col md:flex-row justify-center gap-4 text-ms text-muted-foreground">
              <span
                // variant="outline"
                className="bg-primary/10 text-primary border-primary/20 px-3 rounded-xl font-bold"
              >
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <MdDateRange className="h-3.5 w-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <FaClock className="h-3.5 w-3.5" />
                {post.readingTime}
              </span>
              <div className="mt-auto flex items-center gap-x-3">
                <ImageWithFallback
                  className="size-8 rounded-full"
                  src="/avatar.avif"
                  width={32}
                  height={32}
                  alt="Author avatar"
                />
                <div className="my-5">
                  <h5 className="font-semibold text-sm text-gray-800">
                    {post.author}
                  </h5>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="mt-5 max-w-2xl text-center mx-auto">
              <h1 className="block font-bold text-primary text-4xl md:text-5xl lg:text-6xl">
                {post.title}
              </h1>
            </div>
            {/* End Title */}
          </div>
        </div>
        {/* End Hero */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="lg:col-span-8">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <BlogContent content={post.content} />

              <div className="h-px bg-primary my-8" />

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-6">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center gap-x-3">
                    <ImageWithFallback
                      className="size-8 rounded-full"
                      src="/avatar.avif"
                      width={42}
                      height={42}
                      alt="Author avatar"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Written by {post.author}</p>
                    <p className="text-sm text-muted-foreground">
                      Speech-Language Pathologist, founder of Talk & Bloom
                    </p>
                  </div>
                </div>

                <ShareButtons />
              </div>
            </article>

            {/* <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6">
                Related Articles
              </h2>
              <RelatedPosts />
            </section> */}

            {/* <section className="mt-12 bg-white p-6 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Comments</h2>
              <p className="text-muted-foreground">
                Join the conversation and share your thoughts below.
              </p>
              
            </section> */}
          </div>

          <div className="lg:col-span-4">
            <BlogSidebar />
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
