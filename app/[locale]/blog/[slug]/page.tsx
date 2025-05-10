import { BlogContent } from "@/app/components/blog/blog-content";
import { BlogSidebar } from "@/app/components/blog/blog-sidebar";
import { ShareButtons } from "@/app/components/blog/share-buttons";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { ReadingProgressBar } from "@/app/components/reading-progress-bar";
import TopBar from "@/app/components/TopBar";
import { ImageWithFallback } from "@/app/components/ui/image";
import type { Metadata } from "next";
// import Image from "next/image";
import { notFound } from "next/navigation";
import { FaClock } from "react-icons/fa";
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
      content: "...",
      image: "/hero-speech-therapy.avif",
      date: "2025-05-01",
      author: "Rebeca Schvartzman SLP. CASLPO",
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
        <div className="relative overflow-hidden border border-primary m-10 mt-24 rounded-2xl">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10">
            {/* Breadcrumbs */}
            <nav className="mt-8 flex justify-center" aria-label="Breadcrumb">
              <ol className="bg-white border border-gray-200 rounded-full shadow-sm inline-flex items-center gap-x-2 py-2 px-6">
                <li className="inline-flex items-center">
                  <a
                    href="/en"
                    className="text-gray-700 hover:text-gray-900 inline-flex items-center"
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
                      className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium"
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
                      className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-bold"
                    >
                      Free Resources for Parents
                    </a>
                  </div>
                </li>
              </ol>
            </nav>
            {/* End Breadcrumbs */}

            <div className="mt-14 flex items-center justify-center gap-4 text-ms text-muted-foreground">
              <span
                // variant="outline"
                className="bg-primary/10 text-primary border-primary/20 px-3 rounded-xl font-bold"
              >
                Language Development
              </span>
              <span className="flex items-center gap-1">
                <MdDateRange className="h-3.5 w-3.5" />
                May 4, 2025
              </span>
              <span className="flex items-center gap-1">
                <FaClock className="h-3.5 w-3.5" />8 min read
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
                    By Rebeca Schvartzman, SLP. CASLPO
                  </h5>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="mt-5 max-w-2xl text-center mx-auto">
              <h1 className="block font-bold text-primary text-4xl md:text-5xl lg:text-6xl">
                Free Resources for Parents
              </h1>
            </div>
            {/* End Title */}
          </div>
        </div>
        {/* End Hero */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="lg:col-span-8">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              {/* <figure className="my-8 rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Parent reading with child"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover rounded-xl"
                  priority
                />
                <figcaption className="text-center text-sm text-muted-foreground mt-2">
                  Reading together is one of the most effective ways to support
                  language development
                </figcaption>
              </figure> */}

              <BlogContent />

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
                    <p className="font-medium">
                      Written by Rebeca Schvartzman, SLP. CASLPO
                    </p>
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
