import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import TopBar from "@/app/components/TopBar";
import Header from "@/app/components/Header";
import Blog from "@/app/components/Blog";
import CTA from "@/app/components/CTA";
import Floating from "@/app/components/Floating";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";

// This would typically come from a CMS or database
async function getBlogPosts() {
  // Simulating a database fetch
  return [
    {
      slug: "early-signs-of-speech-delay",
      title: "Early Signs of Speech Delay in Children",
      description:
        "Learn to recognize the early warning signs of speech delay in children and when to seek professional help.",
      image: "/placeholder.svg?height=300&width=600",
      date: "2023-11-15",
      author: "Rebeca Schvartzman",
    },
    {
      slug: "language-development-milestones",
      title: "Language Development Milestones: What to Expect",
      description:
        "A comprehensive guide to language development milestones from birth to age 5, helping parents understand what to expect.",
      image: "/placeholder.svg?height=300&width=600",
      date: "2023-10-20",
      author: "Rebeca Schvartzman",
    },
    {
      slug: "speech-therapy-at-home",
      title: "Speech Therapy Activities You Can Do at Home",
      description:
        "Practical and fun speech therapy activities that parents can do at home to support their child's language development.",
      image: "/placeholder.svg?height=300&width=600",
      date: "2023-09-05",
      author: "Rebeca Schvartzman",
    },
    {
      slug: "bilingual-children-speech",
      title: "Speech Development in Bilingual Children",
      description:
        "Understanding how bilingualism affects speech development and tips for supporting multilingual children.",
      image: "/placeholder.svg?height=300&width=600",
      date: "2023-08-12",
      author: "Rebeca Schvartzman",
    },
  ];
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  // Generate blog schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    headline: "Talk & Bloom Speech Therapy Blog",
    description:
      "Articles and resources about speech therapy and language development for children",
    publisher: {
      "@type": "Organization",
      name: "Talk & Bloom",
      logo: {
        "@type": "ImageObject",
        url: "https://talkandbloom.ca/images/logo.webp",
      },
    },
    url: "https://talkandbloom.ca/blog",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://talkandbloom.ca/blog",
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: post.author,
      },
      url: `https://talkandbloom.ca/blog/${post.slug}`,
    })),
  };

  return (
    <main className="bg-secondary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
      <div className="relative overflow-hidden lg:overflow-visible" id="home">
        <TopBar />
        <Header origin="blog" />
        <Blog />
        <CTA />
        <Floating />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
