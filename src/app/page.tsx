import type { CardProps } from "@/types";
import Image from "next/image";
import Card from "./components/card/Card";

export default function Home() {
  const profileLink = () => <a href='https://www.ryanfloyd.com' className='font-light display-inline text-sky-500 underline hover:no-underline' target='_blank'>www.ryanfloyd.com</a>
  const camperEdgeLink = () => <a href='https://www.camperedge.com' className='font-light inline text-sky-500 underline hover:no-underline' target='_blank'>CamperEdge</a>
  const resumeLink = () => <a href='https://uploads.strikinglycdn.com/files/c7e61ee2-3a5c-497f-95f7-5c58882e3add/Ryan%20Floyd.pdf' className='font-light inline text-sky-500 underline hover:no-underline' target='_blank'>here</a>
  const cardData: Array<CardProps> = [
    {
      contentData: [
        "In general, I'm excited about the direction web development is heading, better frameworks, better tooling, and of course that thing everyone is talking about --- AI.",
        "I'm really interested to see if Generative AI can turn every developer into an 10x developer. I think that Tailwind Labs could be at the forefront of this movement, by providing the picks/shovels in this gold rush."
      ],
      title: "What you're excited about",
    },
    {
      contentData: [
        "I've built a lot of web services, but I haven't built the tooling for these web services, and I know that's a different game.",
        <p className="m-0 p-30 font-medium text-sm md:text-md" key="excited-1">
          I&apos;ve been kicking around a side project, called {camperEdgeLink()} (again closed source...) for a while, 
          and while it needs a lot of polish/finish, the frontend is built on tailwindcss and nextjs. 
          The backend is Python with lots of NLP to parse the campground data and restructure in a relational DB (Postgres)
          All the campground pages are SSG for almost instant PLT.
        </p>,
      ],
      title: "Interesting projects you've worked on"
    },
    {
      contentData: [
        "The culture and values at Tailwind Labs resonate deeply with me. The thought of collaborating with a small, talented team to produce work that is both impactful and widely respected is what draws me most to this role.",
        "I'm inspired by the list of recent technical problems the team has solved. Particularly the fast CSS grouping using AST. I've written an AST before and they are not easy. ",
        "I'm also really intrigued by the upcoming projects and integration with Vite. Vite is a very cool project and has been gaining a lot of ground lately.",
        "I'm eager to bring my skills and enthusiasm to Tailwind Labs, contributing to a product I believe in and a community I am proud to be part of."
      ],
      title: "Why Tailwind Labs excites me"
    },
    {
      contentData: [
        "Honestly, I've been working for private/public companies my entire career and 99.9% of my work has been proprietary.",
      ],
      title: "Open-source contributions",
    },
    {
      contentData: [
        "You're likely going to get thousands of applications for this role, so why should you pick me for one of the 10 to proceed to the next steps? ",
        "I'm a relentless problem solver and don't stop until the code is perfect and the issue is resolved. I don't have a personal/technical blog, I haven't worked on open source projects (in fact, all of my work has been in closed environments) and don't give talks at the latest tech conference, but you'll find me to be a highly energetic and humble engineer who's always eager to learn something new.",
        <p className="m-0 p-30 font-medium text-sm md:text-md" key="bonus-1">I do have a crappy personal website I put together a decade ago, {profileLink()}, and my resume can be downloaded {resumeLink()}.</p>
      ],
      title: "Bonus - Why me?"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      {/* Header */}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div role="heading" aria-level={1} className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
          Tailwind Labs CL&nbsp;
        </div>
      </div>

      {/* Portrait and personal blurb */}
      <figure className="pt-20 pb-8 md:p-0 px-8 md:flex bg-slate-100 lg:rounded-xl md:border-none dark:bg-slate-800">
        <Image
          src="/electric/portrait.jpeg"
          alt="Ryan Floyd"
          className="lg:w-48 md:h-auto mx-auto"
          width={906 / 6}
          height={1510 / 6}
          priority
        />
        
        <div className="pt-6 md:p-4 lg:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="lg:text-lg font-medium text-md">
              &quot;In my journey through the tech world, I&apos;ve always been drawn to the magic 
              of small teams making big waves. I&apos;ve been building web services using 
              every imaginable language / framework possible. I&apos;m ready to dig into creating
              a long lasting and purposeful software that empowers millions of people.&quot;
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Ryan Floyd
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Looking for a job
            </div>
          </figcaption>
        </div>
      </figure>
      
      {/* Divider in small screen widths */}
      <div className="w-full border-b-2 border-spacing-2 border-blue-300 divider-blue-300 lg:border-none" />

      {/* Card region */}
      <div className="flex flex-col text-center lg:mt-4 lg:w-full lg:border-none md:text-left lg:divide-none divide-y-2 divide-blue-300 lg:space-y-4">
        {cardData.map((card, index) => (
          <Card key={`card-${index}`} {...card} />
        ))}
      </div>
      {/* End Card region */}
    </main>
  );
}
