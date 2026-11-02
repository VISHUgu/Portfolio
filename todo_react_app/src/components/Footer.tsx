import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Briefcase, Globe, Mail } from "lucide-react";
import { contact } from "@/data/projects";

export function Footer() {
  const [year] = useState(() => new Date().getFullYear());

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <Link to="/" className="logo">vishal<span>.dev</span></Link>
          <p>© {year} Vishal Gupta. Built with Python and React.</p>
        </div>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="socials">
          <a className="social" href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Globe size={18} /></a>
          <a className="social" href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Briefcase size={18} /></a>
          <a className="social" href={contact.twitter} target="_blank" rel="noreferrer" aria-label="X"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
