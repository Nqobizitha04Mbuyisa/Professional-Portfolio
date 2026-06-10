import { Github } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const Projects = () => {
  return (
    <div className="reveal">
      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-24">
        <SectionHeading
          index="03"
          eyebrow="Projects"
          title="Building software, one repository at a time."
          description="The best way to evaluate software is through the code itself. Every project I've built is publicly available on GitHub."
        />

        <div className="mt-24 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight">
            Every project lives on GitHub.
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Throughout my academic journey and personal development as a
            software engineer, I've worked on desktop applications,
            database-driven systems, full-stack web applications, algorithm
            implementations, and software engineering projects.
          </p>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Rather than maintaining screenshots of every project, I prefer to
            showcase the source code, architecture decisions, documentation,
            commit history, and development process behind each repository.
          </p>

          <div className="mt-12">
            <a
              href="https://github.com/Nqobizitha04Mbuyisa"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                rounded-xl
                border
                border-primary
                px-8
                py-4
                text-primary
                transition-all
                duration-300
                hover:bg-primary
                hover:text-primary-foreground
              "
            >
              <Github size={22} />
              <span className="font-medium">
                Visit My GitHub Profile
              </span>
            </a>
          </div>

          <div className="mt-16 border-t border-border pt-10">
            <p className="font-mono text-sm text-muted-foreground uppercase tracking-wider">
              What you'll find
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-3 text-left">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-lg">
                  Full-Stack Development
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Modern web applications built with React, Java Spring Boot,
                  REST APIs, authentication, and database integration.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-lg">
                  Desktop Applications
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Object-oriented desktop software developed using C++,
                  event-driven programming, and robust application design.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="font-semibold text-lg">
                  Academic & Algorithmic Work
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Coursework, data structures, algorithms, database systems,
                  and software engineering projects developed across multiple
                  programming languages.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-16 text-sm font-mono text-muted-foreground">
            Click any GitHub icon across this portfolio to explore my work.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Projects;
