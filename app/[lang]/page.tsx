import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { getDictionary } from "@/lib/dictionary";
import { locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <Hero dict={dict.hero} />
      <Skills dict={dict.skills} />
      <Projects dict={dict.projects} />
      <Contact dict={dict.contact} />
    </>
  );
}
