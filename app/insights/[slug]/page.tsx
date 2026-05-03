import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/ui/container";
import { ARTICLES } from "@/lib/insights";
import { ARTICLE_CONTENT } from "@/lib/article-content";

export async function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  props: PageProps<"/insights/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Not found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage(props: PageProps<"/insights/[slug]">) {
  const { slug } = await props.params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const content = ARTICLE_CONTENT[slug] ?? [];
  const others = ARTICLES.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <>
      <Navbar variant="solid" />
      <main className="pt-24 sm:pt-28 pb-20 bg-[var(--background)]">
        <Container size="md">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            All insights
          </Link>

          <header className="mb-10 max-w-3xl">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[var(--muted-foreground)] font-medium">
              <span className="text-[var(--accent)]">{article.category}</span>
              <span className="h-1 w-1 rounded-full bg-[var(--muted-foreground)]/40" />
              <span>{article.date}</span>
              <span className="h-1 w-1 rounded-full bg-[var(--muted-foreground)]/40" />
              <span>{article.readTime}</span>
            </div>
            <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.1] tracking-tight">
              {article.title}
            </h1>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-[var(--muted-foreground)] max-w-2xl">
              {article.excerpt}
            </p>
          </header>

          {/* Editorial cover */}
          <div
            className="aspect-[16/7] mb-12 relative overflow-hidden border border-[var(--border)]"
            style={{
              background:
                article.category === "Mining"
                  ? "linear-gradient(135deg, #2A322C 0%, #4A3325 60%, #C8553D 100%)"
                  : article.category === "Agriculture"
                  ? "linear-gradient(135deg, #143524 0%, #1F3D2A 50%, #DCA34B 100%)"
                  : "linear-gradient(135deg, #0D2818 0%, #1F3D2A 50%, #D4A24C 100%)",
            }}
          >
            <div className="absolute inset-0 bg-topo opacity-40 mix-blend-overlay" />
          </div>

          <article className="prose-legal max-w-3xl">
            {content.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2 key={i}>{block.content as string}</h2>
                );
              }
              if (block.type === "ul" && Array.isArray(block.content)) {
                return (
                  <ul key={i}>
                    {block.content.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "quote") {
                return <blockquote key={i}>{block.content as string}</blockquote>;
              }
              return <p key={i}>{block.content as string}</p>;
            })}
          </article>
        </Container>

        {/* Related */}
        {others.length > 0 && (
          <Container size="md" className="mt-24">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted-foreground)] font-medium mb-6">
              Continue reading
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {others.map((a) => (
                <Link
                  key={a.slug}
                  href={`/insights/${a.slug}`}
                  className="group block border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[var(--foreground)]/20 transition-colors"
                >
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-[var(--muted-foreground)] font-medium">
                    <span>{a.category}</span>
                    <span className="h-1 w-1 rounded-full bg-[var(--muted-foreground)]/40" />
                    <span>{a.date}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-lg font-medium tracking-tight leading-snug group-hover:text-[var(--secondary)] transition-colors">
                    {a.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.1em] text-[var(--foreground)]">
                    Read
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        )}
      </main>
      <Footer />
    </>
  );
}
