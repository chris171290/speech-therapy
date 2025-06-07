import Link from "next/link";
import { FaClock } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { useMemo } from "react";
import { useTranslations } from "next-intl";
import { ImageWithFallback } from "./ui/image";

// Definir tipos para mejorar la seguridad y autocompletado
interface BlogPost {
  title: string;
  description: string;
  slug: string;
  imageSrc: string;
  by: string;
  background: string;
  publishedDate: string;
  readTime: string;
}

// Componente de tarjeta de blog para mejorar la modularidad
interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => (
  <Link
    href={`/en/blog/${post.slug}`}
    className={`group flex flex-col h-full border border-black/70 ${post.background} border-transparent hover:border-transparent hover:scale-105 hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5`}
  >
    <div className="aspect-w-16 aspect-h-11">
      <ImageWithFallback
        className="w-full h-52 object-cover rounded-xl"
        src={post.imageSrc}
        width={500}
        height={300}
        alt={`${post.title} featured image`}
        priority={false}
      />
    </div>
    <div className="my-6">
      <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
      <p className="mt-5 text-gray-800">{post.description}</p>
    </div>
    <div className="mt-auto flex items-center gap-x-3">
      <ImageWithFallback
        className="size-8 rounded-full"
        src="/avatar.avif"
        width={32}
        height={32}
        alt="Author avatar"
      />
      <div>
        <h5 className="font-semibold text-sm text-gray-800">By {post.by}</h5>
      </div>
    </div>
    <div className="flex items-center justify-between gap-x-3 mt-5">
      <div className="text-sm text-gray-800">
        <div className="flex items-center justify-center gap-2 bg-primary px-2 py-1 font-semibold text-xs tracking-wide md:text-base rounded-lg text-white">
          <MdDateRange aria-hidden="true" />
          <span>{post.publishedDate}</span>
        </div>
      </div>
      <div className="text-sm text-gray-800">
        <div className="flex items-center justify-center gap-2 bg-primary px-2 py-1 font-semibold text-xs tracking-wide md:text-base rounded-lg text-white">
          <FaClock aria-hidden="true" />
          <span>{post.readTime}</span>
        </div>
      </div>
    </div>
  </Link>
);

const BlogList: React.FC = () => {
  const t = useTranslations("blog");
  const BLOG_POSTS: BlogPost[] = [
    {
      title: t("post1.title"),
      description: t("post1.content"),
      slug: "free-resources-for-parents",
      imageSrc: "/blog1.avif",
      by: "Rebeca Schvartzman, SLP, reg. CASLPO",
      background: "bg-white/75",
      publishedDate: t("post1.metadata.published"),
      readTime: t("post1.metadata.readTime"),
    },
    {
      title: t("post2.title"),
      description: t("post2.content"),
      slug: "early-intervention-vs-wait-and-see",
      imageSrc: "/blog2.avif",
      by: "Rebeca Schvartzman, SLP, reg. CASLPO",
      background: "bg-primary/35",
      publishedDate: t("post2.metadata.published"),
      readTime: t("post2.metadata.readTime"),
    },
    {
      title: t("post3.title"),
      description: t("post3.content"),
      slug: "does-bilingualism-cause-language-delay",
      imageSrc: "/blog3.avif",
      by: "Rebeca Schvartzman, SLP, reg. CASLPO",
      background: "bg-white/75",
      publishedDate: t("post3.metadata.published"),
      readTime: t("post3.metadata.readTime"),
    },
  ];
  // Usar useMemo para evitar recrear el array en cada renderizado
  const renderedPosts = useMemo(
    () =>
      BLOG_POSTS.map((post, index) => <BlogCard key={post.slug} post={post} />),
    []
  );

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
      {renderedPosts}
    </div>
  );
};

export default function Blog() {
  const t = useTranslations("blog");
  return (
    <section
      className="max-w-[85rem] px-4 py-20 sm:px-6 lg:px-8 mx-auto"
      id="blog"
      aria-labelledby="blog-heading"
    >
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2
          id="blog-heading"
          className="mb-5 text-2xl text-primary font-bold md:text-4xl md:leading-tight underline underline-offset-8 decoration-2"
        >
          {t("title")}
        </h2>
        <p className="mt-1 text-primary font-medium text-lg">
          {t("description")}
        </p>
      </div>
      <BlogList />
    </section>
  );
}
