import { Container } from "@/components/container";
import { getBlogFrontMatterBySlug, getSingleBlog } from "@/lib/blogs";
import { DivideX } from "@/components/divide";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function SingleBlogPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<{
    content: string;
    frontmatter: any;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;

      try {
        const blogData = await getSingleBlog(slug);
        if (!blogData) {
          navigate("/blog");
          return;
        }
        setBlog(blogData);
      } catch (error) {
        console.error("Error fetching blog:", error);
        navigate("/blog");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug, navigate]);

  if (loading) {
    return (
      <div>
        <DivideX />
        <Container className="border-divide border-x px-8 pt-10 md:pt-20 md:pb-10">
          <div className="animate-pulse">Loading blog post...</div>
        </Container>
        <DivideX />
      </div>
    );
  }

  if (!blog) {
    return null;
  }

  const { content, frontmatter } = blog;

  return (
    <>
      <Helmet>
        <title>{frontmatter.title} by Manu Arora</title>
        <meta name="description" content={frontmatter.description} />
      </Helmet>
      <div>
        <DivideX />
        <Container className="border-divide border-x px-8 pt-10 md:pt-20 md:pb-10">
          <img
            src={frontmatter.image}
            alt={frontmatter.title}
            className="rouned-full mx-auto mb-20 max-h-96 w-full max-w-2xl rounded-2xl object-cover shadow-xl"
          />
          <div
            className="prose prose-base dark:prose-invert mx-auto"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Container>
        <DivideX />
      </div>
    </>
  );
}
