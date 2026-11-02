import { GraduationCap, Target } from "lucide-react";
import { experience, skills } from "../data/projects";

export function AboutPage() {
  return (
    <div className="page-top container section">
      <p className="eyebrow fade-up">About me</p>
      <h1 className="h1 fade-up delay-1">Full Stack Developer</h1>

      <div className="two-col about-intro">
        <div>
          <h2 className="h2">Biography</h2>
          <p className="lead">
            I'm a full stack developer based in mumbai with over two years of experience building web
            applications. I started out writing Python scripts to automate boring tasks and fell in love
            with turning ideas into products. Today I design Django backends, React frontends and
            write the SQL that ties it all together.
          </p>
          <p className="lead about-followup">
            Outside work I contribute to open source, mentor junior developers and write about clean architecture.
          </p>
        </div>
        <div className="card exp-card">
          <Target size={28} className="icon-primary" />
          <h3>Career goals</h3>
          <p>
            Grow into a technical lead role where I can architect scalable systems, mentor teams and help
            products that serve millions of users — while staying hands-on with code.
          </p>
        </div>
      </div>

      <section className="about-section">
        <h2 className="h2">Technical skills</h2>
        <div className="badges">
          {skills.map((s) => <span key={s} className="badge badge-large">{s}</span>)}
        </div>
      </section>

      <section className="about-section">
        <h2 className="h2">Work experience</h2>
        <div className="grid experience-list">
          {experience.map((e) => (
            <div key={e.company} className="card exp-card">
              <span className="period">{e.period}</span>
              <h3>{e.role}</h3>
              <div className="company">{e.company}</div>
              <p>{e.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2 className="h2">Education</h2>
        <div className="grid grid-3">
          <div className="card exp-card">
            <GraduationCap size={26} className="icon-primary" />
            <span className="period education-period">2023 - 2024</span>
            <h3>Institute of IT Vedant</h3>
            <div className="company">Mumbai</div>
            <p>I am Complete Multiple Project like Hospital Management System and E-Commerce Platform </p>
          </div>
          <div className="card exp-card">
            <GraduationCap size={26} className="icon-primary" />
            <span className="period education-period">2019 — 2022</span>
            <h3>Bachelor of Science in Information Technology</h3>
            <div className="company">University of Mumbai</div>
            {/* <p>Graduated with distinction; final-year project on distributed task queues.</p> */}
          </div>
          <div className="card exp-card">
            <GraduationCap size={26} className="icon-primary" />
            <span className="period education-period">2018</span>
            <h3>Maharashtra State Board</h3>
            <div className="company">Sarvodaya School No.2</div>
            <p>Completed senior secondary education with a focus on science and mathematics.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
