import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/data/projects";

const featured = projects.filter((p) => p.featured);

export function FeaturedCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = featured.length;
  const go = (d: number) => setI((c) => (c + d + n) % n);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((c) => (c + 1) % n), 5000);
    return () => clearInterval(t);
  }, [paused, n]);

  return (
    <div className="carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} aria-roledescription="carousel">
      {featured.map((p, idx) => (
        <div key={p.slug} className={`slide ${idx === i ? "active" : ""}`} aria-hidden={idx !== i}>
          <img src={p.image} alt={p.title} width={1280} height={768} />
          <div className="slide-overlay" />
          <div className="slide-body">
            <span className="eyebrow">Featured · {p.category}</span>
            <h3>{p.title}</h3>
            <p>{p.short}</p>
            <Link to="/projects/$slug" params={{ slug: p.slug }} className="btn btn-primary btn-sm" tabIndex={idx === i ? 0 : -1}>
              View Details
            </Link>
          </div>
        </div>
      ))}
      <button className="car-btn car-prev" onClick={() => go(-1)} aria-label="Previous project"><ChevronLeft /></button>
      <button className="car-btn car-next" onClick={() => go(1)} aria-label="Next project"><ChevronRight /></button>
      <div className="dots">
        {featured.map((p, idx) => (
          <button key={p.slug} className={`dot ${idx === i ? "active" : ""}`} onClick={() => setI(idx)} aria-label={`Go to ${p.title}`} />
        ))}
      </div>
    </div>
  );
}