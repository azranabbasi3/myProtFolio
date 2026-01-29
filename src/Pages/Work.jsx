import React from "react";

const Work = () => {
  return (
    <section
      id="journey"
      className="flex flex-col items-center justify-center bg-[#f8f7f1] py-10 px-5 md:py-20"
    >
      <h1 className="text-4xl mb-10 font-bold text-[#0b2e41] lg:mb-16 lg:text-5xl">
        My Journey
      </h1>

      <div className="flex justify-center gap-5 w-full max-w-6xl lg:gap-16">
        {/* LEFT SIDE TITLES */}
        <div className="hidden lg:flex flex-col justify-between mb-8 text-right py-10">
          <div>
            <h3 className="text-lg font-bold text-[#0b2e41]">
              Associate Software Engineer – Volmatica
            </h3>
            <p className="text-sm text-gray-600">Dec 2025 – Present</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#0b2e41]">
              Associate Software Engineer – Futurenostics
            </h3>
            <p className="text-sm text-gray-600">Feb 2025 – Jul 2025</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#0b2e41]">
              Frontend Developer Intern
            </h3>
            <p className="text-sm text-gray-600">Oct 2024 – Jan 2025</p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#0b2e41]">
              Science Teacher – CS Networks
            </h3>
            <p className="text-sm text-gray-600">Dec 2022 – Sep 2024</p>
          </div>
        </div>

        {/* CENTER TIMELINE */}
        <div className="flex flex-col items-center w-10">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-dashed border-gray-300">
            <div className="w-8 h-8 rounded-full bg-[#1d5452]" />
          </div>

          <div className="grow border-l-2 border-dashed border-gray-300" />

          <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-dashed border-gray-300">
            <div className="w-8 h-8 rounded-full bg-[#eec248]" />
          </div>
        </div>

        {/* RIGHT SIDE DETAILS */}
        <div className="flex flex-col gap-10 text-left max-w-md">
          {/* Volmatica */}
          <div className="text-gray-700 leading-relaxed">
            <h3 className="text-lg font-bold text-[#0b2e41]">
              Associate Software Engineer – Volmatica
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Dec 2025 – Present · On-site (Islamabad)
            </p>
            <p>
              Working on MERN stack applications with modern scalable
              architectures.
              <br />
              Building dashboards, authentication systems, and reusable UI
              components.
              <br />
              Collaborating with teams to deliver high-impact software
              solutions.
              <br />
              Participating in code reviews, testing, and deployment pipelines.
            </p>
          </div>

          {/* Futurenostics */}
          <div className="text-gray-700 leading-relaxed">
            <h3 className="text-lg font-bold text-[#0b2e41]">
              Associate Software Engineer – Futurenostics
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Feb 2025 – Jul 2025 · On-site (Islamabad)
            </p>
            <p>
              Developed full-stack features using React, Node.js, Express, and
              MongoDB.
              <br />
              Optimized UI performance and improved application workflows.
              <br />
              Designed responsive interfaces using Tailwind CSS.
              <br />
              Contributed to API development and integration.
            </p>
          </div>

          {/* Intern */}
          <div className="text-gray-700 leading-relaxed">
            <h3 className="text-lg font-bold text-[#0b2e41]">
              Frontend Developer Intern
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Oct 2024 – Jan 2025 · Islamabad
            </p>
            <p>
              Built real-world projects using React and Next.js.
              <br />
              Implemented reusable components with TypeScript and Tailwind CSS.
              <br />
              Focused on responsiveness, animations, and UI polishing.
              <br />
              Debugged and optimized app performance.
            </p>
          </div>

          {/* CS Networks */}
          <div className="text-gray-700 leading-relaxed">
            <h3 className="text-lg font-bold text-[#0b2e41]">
              Science Teacher – CS Networks
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Dec 2022 – Sep 2024 · Hybrid
            </p>
            <p>
              Taught science subjects at secondary level.
              <br />
              Prepared lesson plans and managed classroom sessions.
              <br />
              Helped students improve academic performance and conceptual
              clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
