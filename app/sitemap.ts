import type { MetadataRoute } from "next";

// This would typically come from a CMS or database
async function getAllPages() {
  // Simulating a database fetch
  return [
    {
      url: "/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // {
    //   url: "/about",
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
    // {
    //   url: "/services",
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
    {
      url: "/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // {
    //   url: "/contact",
    //   lastModified: new Date(),
    //   changeFrequency: "yearly",
    //   priority: 0.7,
    // },
    // {
    //   url: "/book-consultation",
    //   lastModified: new Date(),
    //   changeFrequency: "yearly",
    //   priority: 0.9,
    // },
    // {
    //   url: "/resources",
    //   lastModified: new Date(),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
  ];
}

// Get all blog posts
async function getAllBlogPosts() {
  // Simulating a database fetch
  const posts = [
    {
      slug: "early-signs-of-speech-delay",
      lastModified: new Date("2023-11-15"),
    },
    {
      slug: "language-development-milestones",
      lastModified: new Date("2023-10-20"),
    },
    {
      slug: "speech-therapy-at-home",
      lastModified: new Date("2023-09-05"),
    },
    // More blog posts would be here
  ];

  return posts.map((post) => ({
    url: `/blog/${post.slug}`,
    lastModified: post.lastModified,
    // changeFrequency: "monthly",
    priority: 0.7,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await getAllPages();
  const blogPosts = await getAllBlogPosts();

  // Combine all URLs
  const allUrls = [...pages, ...blogPosts];

  // Format for sitemap
  return allUrls.map(({ url, lastModified, priority }) => ({
    url: `https://talkandbloom.ca${url}`,
    lastModified,
    // changeFrequency,
    priority,
  }));
}
