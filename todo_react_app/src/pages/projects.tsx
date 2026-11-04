import { Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Code2, } from "lucide-react";
import { projects } from "@/data/projects";

export function ProjectDetailPage({ slug }: { slug: string }) {
  const p = projects.find((project) => project.slug === slug);

  if (!p) {
    return (
      <div className="page-top container section empty">
        <h1 className="h2">Project not found</h1>
        <Link to="/projects" className="btn btn-primary">Back to projects</Link>
      </div>
    );
  }

  return (
    <div className="page-top container section">
      <Link to="/projects" className="back-link"><ArrowLeft size={16} /> All projects</Link>
      <div className="project-intro fade-up">
        <span className="badge badge-cat">{p.category}</span>
        <h1 className="h1 project-title">{p.title}</h1>
        {/* <p className="lead project-summary">{p.short}</p> */}
        <div className="hero-actions">
          <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-outline"><Code2 size={16} /> GitHub</a>
          {/* <a href={p.demo} target="_blank" rel="noreferrer" className="btn btn-primary"><ExternalLink size={16} /> Live Demo</a> */}
        </div>
      </div>
      <div className="detail-hero fade-up delay-1"><img src={p.image} alt={p.title} width={1280} height={768} /></div>
      <div className="two-col">
        <div>
          <h2 className="h2">Overview</h2>
          {/* <p className="lead">{p.overview}</p> */}
        </div>
        <div>
          <h2 className="h2">Key features</h2>
          <ul className="feature-list">
            {p.features.map((f) => <li key={f}><CheckCircle2 size={18} />{f}</li>)}
          </ul>
          <h2 className="h2 project-stack-title">Technology stack</h2>
          <div className="badges">{p.tech.map((t) => <span key={t} className="badge">{t}</span>)}</div>
        </div>
      </div>
      <h2 className="h2 project-screenshots-title">Screenshots</h2>
      <div className="shots">
        {p.screenshots.map((s, i) => <img key={i} src={s} alt={`${p.title} screenshot ${i + 1}`} loading="lazy" />)}
      </div>
    </div>
  );
}
