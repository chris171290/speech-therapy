import type { MetadataRoute } from "next";

// Simulación de una función para obtener todas las páginas estáticas
async function getAllPages() {
  // Simulando una base de datos
  return [
    {
      url: "/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Puedes agregar más páginas aquí si es necesario
  ];
}

// Simulación de una función para obtener todas las entradas del blog
async function getAllBlogPosts() {
  // Simulando una base de datos
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
    // Más entradas del blog pueden ir aquí
  ];

  return posts.map((post) => ({
    url: `/blog/${post.slug}`,
    lastModified: post.lastModified,
    priority: 0.7,
  }));
}

// Función para generar URLs por idioma
function generateLocalizedUrls(
  urls: { url: string; lastModified: Date; priority: number }[],
  languages: string[]
) {
  const localizedUrls = [];

  for (const lang of languages) {
    for (const { url, lastModified, priority } of urls) {
      localizedUrls.push({
        url: `https://talkandbloom.ca/${lang}${url}`,
        lastModified,
        priority,
      });
    }
  }

  return localizedUrls;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Obtener todas las páginas y entradas del blog
  const pages = await getAllPages();
  const blogPosts = await getAllBlogPosts();

  // Combinar todas las URLs
  const allUrls = [...pages, ...blogPosts];

  // Idiomas disponibles
  const languages = ["es", "en"];

  // Generar URLs localizadas
  const localizedUrls = generateLocalizedUrls(allUrls, languages);

  return localizedUrls;
}
