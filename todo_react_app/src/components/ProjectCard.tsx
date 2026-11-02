import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card project-card fade-up">
      <Link to="/projects/$slug" params={{ slug: project.slug }} className="thumb">
        <img src={project.image} alt={project.title} loading="lazy" width={1280} height={768} />
      </Link>
      <div className="body">
        <span className="badge badge-cat">{project.category}</span>
        <h3>
          <Link to="/projects/$slug" params={{ slug: project.slug }}>{project.title}</Link>
        </h3>
        <p>{project.short}</p>
        <div className="badges">
          {project.tech.map((t) => <span key={t} className="badge">{t}</span>)}
        </div>
        <div className="card-actions">
          <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm"><ArrowUpRight size={15} /> GitHub</a>
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm"><ExternalLink size={15} /> Live Demo</a>
        </div>
      </div>
    </article>
  );
}
