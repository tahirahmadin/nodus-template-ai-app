// Mock blog data for Vite/React

// Mock blog data
const mockBlogs = [
  {
    slug: "introduction-to-nextjs",
    title: "Introduction to Next.js",
    description: "Learn the basics of Next.js framework",
    date: "2024-01-15",
    image: "/blog/nextjs.webp",
    authorName: "John Doe",
    authorSrc: "/avatars/john.png",
  },
  {
    slug: "mastering-react-hooks",
    title: "Mastering React Hooks",
    description: "Deep dive into React hooks and their usage",
    date: "2024-01-10",
    image: "/blog/react.webp",
    authorName: "Jane Smith",
    authorSrc: "/avatars/jane.png",
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices",
    description: "Best practices for writing TypeScript code",
    date: "2024-01-05",
    image: "/blog/typescript.webp",
    authorName: "Mike Johnson",
    authorSrc: "/avatars/mike.png",
  },
];

export const getSingleBlog = async (slug: string) => {
  const blog = mockBlogs.find((b) => b.slug === slug);
  if (!blog) return null;

  return {
    content: `<h1>${blog.title}</h1><p>${blog.description}</p>`,
    frontmatter: blog,
  };
};

export const getBlogs = async () => {
  return mockBlogs;
};

export const getBlogFrontMatterBySlug = async (slug: string) => {
  const blog = mockBlogs.find((b) => b.slug === slug);
  return blog || null;
};
