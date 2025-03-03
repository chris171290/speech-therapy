import Link from "next/link";
import { FaClock } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
const posts = [
  {
    title: "The Future of Speech Therapy: Trends and Innovations in 2025",
    description:
      "Explore the cutting-edge techniques and technologies shaping the future of speech therapy. From AI-driven tools to personalized treatment plans, discover what’s revolutionizing communication therapies in 2025.",
    slug: "future-speech-therapy-trends-innovations-2025",
    imagenSrc: "/blog1.png",
    by: "Rebeca Schvartzman, SLP.",
    background: "bg-accent/70",
  },
  {
    title: "How Speech Therapists Are Empowering Non-Verbal Communication",
    description:
      "Dive into the world of alternative communication methods and learn how therapists are helping individuals express themselves beyond words. This post highlights breakthroughs in AAC devices and inclusive practices for all ages.",
    slug: "speech-therapists-empowering-non-verbal-communication",
    imagenSrc: "/blog2.png",
    by: "Rebeca Schvartzman, SLP.",
    background: "bg-primary/35",
  },
  {
    title: "Navigating Screen Time and Language Growth",
    description:
      "In an era dominated by screens, find out how speech therapists are addressing the impact of digital media on language development. Get expert tips on balancing technology use while fostering strong communication skills in children.",
    slug: "navigating-screen-time-language-growth",
    imagenSrc: "/blog3.png",
    by: "Rebeca Schvartzman, SLP.",
    background: "bg-white/75",
  },
];

export default function Blog() {
  return (
    <div
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
      id="blog"
    >
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl text-primary font-bold md:text-4xl md:leading-tight">
          Our Blog
        </h2>
        <p className="mt-1 text-black font-medium text-lg">
          Discover how speech therapists are transforming every interaction into
          a step toward success with innovative strategies and practical tools.
        </p>
      </div>
      <BlogList />
    </div>
  );
}

const BlogList: React.FC = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
    {posts.map((post, index) => (
      <Link
        key={index}
        href={`/blog/${post.slug}`}
        className={`group flex flex-col h-full border border-black/70 ${post.background} border-gray-200 hover:border-transparent hover:scale-105 hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5`}
      >
        <div className="aspect-w-16 aspect-h-11">
          <img
            className="w-full h-52 object-cover rounded-xl"
            src={post.imagenSrc}
            alt="Blog Image"
          />
        </div>
        <div className="my-6">
          <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
          <p className="mt-5 text-gray-800">{post.description}</p>
        </div>
        <div className="mt-auto flex items-center gap-x-3">
          <img
            className="size-8 rounded-full"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
            alt="Avatar"
          />
          <div>
            <h5 className="font-semibold text-sm text-gray-800">
              By {post.by}
            </h5>
          </div>
        </div>
        <div className="flex items-center justify-between gap-x-3 mt-5">
          <div className="text-sm text-gray-800">
            <div className=" flex items-center justify-center gap-2 bg-primary px-2 py-1 font-semibold text-xs tracking-wide md:text-base rounded-lg text-white">
              <MdDateRange />
              <span>Published 2 days ago</span>
            </div>
          </div>
          <div className="text-sm text-gray-800">
            <div className=" flex items-center justify-center gap-2 bg-primary px-2 py-1 font-semibold text-xs tracking-wide md:text-base rounded-lg text-white">
              <FaClock />
              <span>3 min read</span>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
);
