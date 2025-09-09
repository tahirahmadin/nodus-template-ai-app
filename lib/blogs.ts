import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

type FrontMatter = {
  title: string;
  description: string;
  date: string;
  image: string;
  authorName?: string;
  authorSrc?: string;
};

// Import all markdown files as modules
const blogModules = import.meta.glob("/src/data/*.md", {
  eager: true,
}) as Record<string, { default: string }>;

export const getSingleBlog = async (slug: string) => {
  try {
    const blogPath = `/src/data/${slug}.md`;
    const blogModule = blogModules[blogPath];

    if (!blogModule) {
      return null;
    }

    // Get the raw content from the module
    const rawContent = blogModule.default;

    // Parse frontmatter
    const { data: frontmatter, content } = matter(rawContent);

    // Convert markdown to HTML
    const processedContent = await remark().use(html).process(content);

    const htmlContent = processedContent.toString();

    return { content: htmlContent, frontmatter: frontmatter as FrontMatter };
  } catch (error) {
    console.error(`Error reading blog file for slug "${slug}":`, error);
    return null;
  }
};

export const getBlogs = async () => {
  const allBlogs = Object.keys(blogModules).map((path) => {
    const slug = path.replace("/src/data/", "").replace(".md", "");
    const module = blogModules[path];
    const rawContent = module.default;
    const { data: frontmatter } = matter(rawContent);

    return {
      slug,
      ...frontmatter,
    };
  });

  return allBlogs;
};

export const getBlogFrontMatterBySlug = async (slug: string) => {
  try {
    const blogPath = `/src/data/${slug}.md`;
    const blogModule = blogModules[blogPath];

    if (!blogModule) {
      return null;
    }

    const rawContent = blogModule.default;
    const { data: frontmatter } = matter(rawContent);

    return frontmatter as FrontMatter;
  } catch (error) {
    console.error(`Error reading blog frontmatter for slug "${slug}":`, error);
    return null;
  }
};
