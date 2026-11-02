import { Link } from "@tanstack/react-router";
import { SearchX } from "lucide-react";
import { ProjectCard } from "../components/ProjectCard";
import { searchProjects } from "../data/projects";

export function SearchPage({ query }: { query: string }) {
  const q = query;
  const results = searchProjects(q);
  return (
    <div className="page-top container section">
      <p className="eyebrow">Search</p>
      <h1 className="h2">{results.length} result{results.length === 1 ? "" : "s"} for “{q}”</h1>
      {results.length ? (
        <div className="grid grid-3 search-results">
          {results.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      ) : (
        <div className="empty">
          <SearchX size={48} />
          <h2 className="h2">No projects found</h2>
          <p>Try a technology like “React”, “Django” or a category like “Backend”.</p>
          <Link to="/projects" className="btn btn-primary browse-projects">Browse all projects</Link>
        </div>
      )}
    </div>
  );
}