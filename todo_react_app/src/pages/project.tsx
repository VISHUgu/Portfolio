import { Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Database, FileCode, Braces, Server, Layers, GitBranch, Container } from "lucide-react";
import profile from "@/assets/profile.jpeg";
import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { experience } from "@/data/projects";

const tech = [
  { name: "Python", icon: FileCode },
  { name: "Django", icon: Server },
  { name: "HTML5", icon: FileCode },
  { name: "CSS3", icon: Container },
  { name: "React.js", icon: Code2 },
  { name: "JavaScript", icon: Braces },
  { name: "TypeScript", icon: Layers },
  { name: "SQL", icon: Database },
  { name: "Git", icon: GitBranch },
];

export function HomePage() {
  return (
    <div className="page-top">
      <section className="container home-carousel">
        <FeaturedCarousel />
      </section>

      <section className="container section hero">
        <div>
          <p className="eyebrow fade-up">Hello, I'm</p>
          <h1 className="h1 fade-up delay-1">
            Vishal Gupta<br /><span className="text-gradient">Full Stack Developer</span>
          </h1>
          <p className="lead fade-up delay-2 home-lead">
            I build fast, reliable web products with Python, Django and React — from clean REST APIs
            to polished, responsive interfaces.
          </p>
          <div className="hero-actions fade-up delay-3">
            <Link to="/projects" className="btn btn-primary">View Projects <ArrowRight size={16} /></Link>
            <Link to="/contact" className="btn btn-outline">Contact Me</Link>
          </div>
        </div>
        <div className="avatar-wrap fade-up delay-2">
          <img src={profile} alt="Vishal Gupta" className="avatar" width={816} height={416} />
          <div className="avatar-tag"><b>2+</b> years shipping code</div>
        </div>
      </section>

      <section className="container section home-flat-section">
        <p className="eyebrow">Tech stack</p>
        <h2 className="h2">Skills & technologies</h2>
        <div className="grid grid-4 home-grid">
          {tech.map(({ name, icon: Icon }) => (
            <div key={name} className="card skill-tile"><Icon size={30} />{name}</div>
          ))}
        </div>
      </section>

      <section className="container section home-flat-section">
        <p className="eyebrow">Experience</p>
        <h2 className="h2">Where I've worked</h2>
        <div className="grid grid-3 home-grid">
          {experience.map((e) => (
            <div key={e.company} className="card exp-card">
              <span className="period">{e.period}</span>
              <h3>{e.role}</h3>
              <div className="company">{e.company}</div>
              <p>{e.text}</p>
            </div>
          ))}
        </div>
        <div className="stats">
          {[["2+", "Years experience"], ["10+", "Projects delivered"]].map(([b, s]) => (
            <div key={s} className="card stat"><b>{b}</b><span>{s}</span></div>
          ))}
        </div>
      </section>
    </div>
  );
}