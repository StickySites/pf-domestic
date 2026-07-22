import Image from "next/image";
import Container from "@/components/primitives/Container";
import { posts, images } from "@/lib/data";

export default function PostList() {
  return (
    <section className="bg-band">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.href}
              className="flex flex-col overflow-hidden rounded-lg border border-line bg-white shadow-sm"
            >
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-[16/9] overflow-hidden"
              >
                <Image
                  src={images.news}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </a>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold leading-snug text-ink">
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    {post.title}
                  </a>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-body">
                  {post.excerpt}
                </p>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium uppercase tracking-wide text-ink hover:text-accent"
                >
                  Read More
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
