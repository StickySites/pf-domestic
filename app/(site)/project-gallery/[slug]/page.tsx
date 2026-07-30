import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/sections/CaseStudy";
import {
  galleryCaseStudyProjects,
  getGalleryCaseStudy,
  galleryProjectDisplayTitle,
} from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return galleryCaseStudyProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getGalleryCaseStudy(slug);
  if (!project) return {};

  const title = galleryProjectDisplayTitle(project);
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/project-gallery/${project.slug}` },
    openGraph: {
      title,
      description: project.summary,
      images: [{ url: project.heroImage ?? project.images[0].src }],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = getGalleryCaseStudy(slug);
  if (!project) notFound();

  return <CaseStudy project={project} />;
}
