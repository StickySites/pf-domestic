import Link from "next/link";
import Image from "next/image";
import { type Service } from "@/lib/data";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-line bg-white shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-ink transition-colors group-hover:text-accent">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-body">
          {service.cardBlurb}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium uppercase tracking-wide text-ink transition-colors group-hover:text-accent">
          Learn More
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  );
}
