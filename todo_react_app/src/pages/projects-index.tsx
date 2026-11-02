import { useState } from "react";
import { ProjectCard } from "../components/ProjectCard";
import { categories, projects } from "../data/projects";

export function ProjectsPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const list = cat === "All" ? projects : projects.filter((p) => p.category === cat);
  return (
    <div className="page-top container section">
      <p className="eyebrow fade-up">Portfolio</p>
      <h1 className="h1 fade-up delay-1">Selected <span className="text-gradient">projects</span></h1>
      <div className="filters">
        {categories.map((c) => (
          <button key={c} className={`filter ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>{c}</button>
        ))}
      </div>
      <div className="grid grid-3">
        {list.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </div>
  );
}