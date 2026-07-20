import type { Metadata } from "next";
import PageHeader from "@/components/sections/PageHeader";
import PostList from "@/components/sections/PostList";
import ContactStrip from "@/components/sections/ContactStrip";
import { newsPage } from "@/lib/data";

export const metadata: Metadata = {
  title: "Latest From Us",
  description: newsPage.intro,
  alternates: { canonical: "/latest-from-us" },
};

export default function Page() {
  return (
    <>
      <PageHeader heading={newsPage.heading} intro={newsPage.intro} />
      <PostList />
      <ContactStrip />
    </>
  );
}
