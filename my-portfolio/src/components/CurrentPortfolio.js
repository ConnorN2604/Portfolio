import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function CurrentPortfolio() {
  // Navigation links data
  const navLinks = [
    { title: "Projects", href: "#projects" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
  ];

  // Projects data
  const projects = [
    {
      title: "U-M GPT Redesign",
      image: "/image.png",
      link: "https://www.figma.com/design/909GSkZakIttQAuYsv492r/U-MGPT%3A-Final-Design-%2B-Deck?node-id=0-1&t=8bMdWfhllHsXfHLj-1",
      linkText: "VIEW DESIGN + SLIDE DECK ->",
    },
    {
      title: "ClubHouse - Michigan Student Org App",
      image: "/image-2.png",
      link: "https://www.figma.com/design/cpHZNIFWloOGaP6fwUsaAB/Project-1---Connor-Nolan?node-id=1-2&t=5hTKuYaLSoa0lhzM-1",
      linkText: "VIEW DESIGN AND PROTOTYPE ->",
    },
  ];

  // Contact links data
  const contactLinks = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/connornolan26",
      color: "text-[#0077b7]",
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/connor.nolan2604/",
      color:
        "[background:linear-gradient(92deg,rgba(80,91,209,1)_0%,rgba(254,196,93,1)_35%,rgba(233,62,89,1)_60%,rgba(218,46,120,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]",
    },
  ];

  const resumeLink =
    "https://drive.google.com/file/d/12cFAGpju6PO5QW9V3-l_Bc1zKxtDFspx/view?usp=sharing";

  return (
    <div className="bg-neutral-900 flex flex-row justify-center w-full">
      <div className="bg-neutral-900 w-full max-w-[1440px]">
        <div className="flex flex-col items-start justify-center gap-[120px] pt-12 pb-28 px-6 md:px-[180px] relative bg-neutral-900">
          {/* Header/Navigation */}
          <div className="flex w-full items-center justify-between relative">
            <div className="relative">
              <h1 className="[font-family:'Inter-Bold',Helvetica] font-bold text-white text-2xl">
                Connor Nolan
              </h1>
            </div>

            <nav className="flex items-center gap-10">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="[font-family:'Inter-Medium',Helvetica] font-medium text-white text-base"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>

          {/* Introduction Section */}
          <section className="flex flex-col items-start gap-8 relative">
            <div className="flex flex-col w-full md:w-[620px] items-start gap-3">
              <p className="[font-family:'Inter-Medium',Helvetica] font-medium text-[28px] leading-[39.2px]">
                <span className="text-white">I am a </span>
                <span className="text-[#fec45d]">UX Designer</span>
                <span className="text-white"> and </span>
                <span className="text-[#fec45d]">Developer </span>
                <span className="text-white">
                  based in Ann Arbor, Michigan. <br />
                </span>
              </p>

              <p className="[font-family:'Inter-Medium',Helvetica] font-medium text-white text-[28px] leading-[39.2px]">
                I am currently a 2nd year student at the University of Michigan
                studying User Experience Design and Research with a minor in
                Entrepreneurship
              </p>
            </div>

            <div className="relative">
              <a
                className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#fec45d] text-sm leading-[19.6px] underline flex items-center gap-1"
                href={resumeLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                CHECK MY RESUME <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            className="flex flex-col items-start gap-16 w-full"
          >
            <div className="flex flex-col items-start gap-8 w-full">
              <h2 className="[font-family:'Inter-Medium',Helvetica] font-medium text-white text-[64px] leading-[84.5px]">
                Selected Projects
              </h2>
              <div className="w-full h-0.5 bg-white/10" /> {/* Separator */}
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12 w-full">
              {projects.map((project, index) => (
                <div key={index} className="bg-transparent border-none card">
                  <div className="p-2 flex flex-col gap-2">
                    <div
                      className="w-full h-[341.33px] bg-cover bg-center rounded-md"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <h3 className="[font-family:'Inter-Medium',Helvetica] font-medium text-white text-2xl leading-[31.7px]">
                      {project.title}
                    </h3>
                    <a
                      className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#fec45d] text-sm leading-[19.6px] underline flex items-center gap-1"
                      href={project.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {project.linkText}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* About Me Section */}
          <section
            id="about"
            className="flex flex-col items-start gap-16 w-full"
          >
            <div className="flex flex-col items-start gap-8 w-full">
              <h2 className="[font-family:'Inter-Medium',Helvetica] font-medium text-white text-[64px] leading-[84.5px]">
                About Me
              </h2>
              <div className="w-full h-0.5 bg-white/10" /> {/* Separator */}
            </div>

            <div className="flex flex-col items-start gap-8">
              <p className="w-full md:w-[620px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-lg leading-[27px]">
                I&#39;m passionate about creating accessible digital products
                for everyone...
              </p>

              <div>
                <a
                  className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#fec45d] text-sm leading-[19.6px] underline flex items-center gap-1"
                  href={resumeLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  CHECK MY RESUME <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="flex flex-col items-start gap-16 w-full"
          >
            <div className="flex flex-col items-start gap-8 w-full">
              <h2 className="[font-family:'Inter-Medium',Helvetica] font-medium text-white text-[64px] leading-[84.5px]">
                Contact
              </h2>
              <div className="w-full h-0.5 bg-white/10" /> {/* Separator */}
            </div>

            <div className="w-full flex flex-col md:flex-row items-start justify-between gap-12">
              <div className="flex flex-col items-start gap-4 w-full">
                <p className="[font-family:'Inter-Medium',Helvetica] font-medium text-white text-lg leading-[27px]">
                  I&#39;d love to connect with you, feel free to reach out to
                  me on LinkedIn or Instagram.
                </p>

                <div className="flex gap-6">
                  {contactLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className={link.color}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-[320px]">
                <form
                  action=""
                  method="post"
                  className="flex flex-col gap-6 w-full"
                >
                  {/* Input Fields */}
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
