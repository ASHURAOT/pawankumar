import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, ArrowUp, Award, Check, ChevronDown, Cloud, Code2, Container, Download, ExternalLink, Github, Linkedin, Mail, Menu, Moon, Network, Send, ServerCog, Sun, X } from "lucide-react";
import { Button, ButtonLink } from "@/components/ui/button";
import { education, experience, navigation, projects, skillGroups } from "@/data/portfolio";
import resumeAsset from "@/assets/pawan-kumar-resume.pdf.asset.json";
import certificateAsset from "@/assets/pawan-kumar-cka-certificate.pdf.asset.json";

const linkedIn = "https://www.linkedin.com/in/kumar-pawan-devops";
const email = "mailto:ps38839@gmail.com";

function IconLink({ href, label, children }: { href?: string; label: string; children: ReactNode }) {
  if (!href) return <span aria-label={`${label} link unavailable`} title={`${label} link coming soon`} className="icon-button cursor-not-allowed opacity-40">{children}</span>;
  return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label} className="icon-button">{children}</a>;
}

function usePortfolioState() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("pawan-theme");
    const useDark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(useDark); document.documentElement.classList.toggle("dark", useDark);
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); setActive(entry.target.id); }
    }), { rootMargin: "-35% 0px -55%", threshold: 0 });
    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);
  const toggleTheme = () => { const next = !dark; setDark(next); document.documentElement.classList.toggle("dark", next); localStorage.setItem("pawan-theme", next ? "dark" : "light"); };
  return { dark, toggleTheme, menuOpen, setMenuOpen, active, showTop };
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <header className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</header>;
}

export function Portfolio() {
  const { dark, toggleTheme, menuOpen, setMenuOpen, active, showTop } = usePortfolioState();
  const [openProject, setOpenProject] = useState<number | null>(0);
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); event.currentTarget.reset(); };
  return <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
    <a href="#main-content" className="skip-link">Skip to content</a>
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a href="#home" className="brand" aria-label="Pawan Kumar home"><span className="brand-mark">PK</span><span><strong>Pawan Kumar</strong><small>DEVOPS / CLOUD</small></span></a>
        <div className="nav-links">{navigation.map((item) => <a key={item} href={`#${item}`} className={active === item ? "active" : ""}>{item}</a>)}</div>
        <div className="nav-actions"><button className="icon-button" onClick={toggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} mode`}>{dark ? <Sun /> : <Moon />}</button><IconLink label="GitHub"><Github /></IconLink><IconLink href={linkedIn} label="LinkedIn"><Linkedin /></IconLink><button className="icon-button mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation menu">{menuOpen ? <X /> : <Menu />}</button></div>
      </nav>
      {menuOpen && <div className="mobile-panel">{navigation.map((item) => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>)}</div>}
    </header>

    <main id="main-content">
      <section id="home" className="hero reveal is-visible">
        <div className="hero-grid"><div className="hero-copy"><div className="status-line"><span className="status-dot" /> Cloud engineer • CKA certified</div><p className="hero-kicker">DEVOPS ENGINEER <span>/</span> CLOUD ENGINEER</p><h1>Reliable systems.<br/><em>Automated delivery.</em></h1><p className="hero-lead">AWS & Kubernetes <span>•</span> CI/CD Automation <span>•</span> Cloud Infrastructure</p><p className="hero-intro">DevOps Engineer with 2+ years of hands-on experience in CI/CD automation, cloud infrastructure, containerization and Kubernetes orchestration across AWS and GCP.</p><div className="hero-actions"><ButtonLink href="#projects">View my work <ArrowRight /></ButtonLink><ButtonLink href={resumeAsset.url} download variant="secondary"><Download /> Download resume</ButtonLink><ButtonLink href="#contact" variant="ghost">Contact me</ButtonLink></div><div className="social-row"><IconLink label="GitHub"><Github /></IconLink><IconLink href={linkedIn} label="LinkedIn"><Linkedin /></IconLink><span>Certified Kubernetes Administrator</span></div></div>
        <div className="pipeline-panel" aria-label="Cloud delivery pipeline visualization"><div className="panel-top"><span>DELIVERY PIPELINE</span><span className="live"><i/> OPERATIONAL</span></div><div className="pipeline">{[{t:"Cloud",i:Cloud},{t:"CI/CD",i:Code2},{t:"Containers",i:Container},{t:"Kubernetes",i:Network},{t:"Monitoring",i:ServerCog}].map(({t,i:Icon}, index) => <div className="pipeline-step" key={t}><div className="pipeline-icon"><Icon /></div><div><small>0{index+1}</small><strong>{t}</strong></div>{index < 4 && <ArrowRight className="pipeline-arrow" />}</div>)}</div><div className="terminal"><span>$ kubectl get nodes</span><code>control-plane&nbsp;&nbsp; Ready</code><code>worker-01&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ready</code><code>worker-02&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ready</code></div></div>
        <a href="#about" className="scroll-cue">SCROLL TO EXPLORE <ChevronDown /></a>
      </section>

      <section id="about" className="section reveal"><div className="section-inner"><SectionHeading eyebrow="01 / ABOUT" title="Engineering infrastructure that stays dependable."/><div className="about-grid"><div className="about-copy"><p>DevOps Engineer with 2+ years of hands-on experience designing and managing CI/CD pipelines, automating infrastructure, and deploying containerized applications across AWS and GCP.</p><p>Currently working as a Cloud Engineer handling AWS and GCP migration projects alongside Kubernetes deployments.</p><p>My experience includes Jenkins pipeline engineering, Docker, Kubernetes, Linux system administration, Bash scripting, infrastructure troubleshooting and monitoring.</p></div><div className="stats-grid">{[["2+","Years experience"],["AWS + GCP","Multi-cloud"],["CKA","Certified"],["K8s","Orchestration"],["CI/CD","Automation"]].map(([v,l]) => <div className="stat" key={l}><strong>{v}</strong><span>{l}</span></div>)}</div></div></div></section>

      <section id="experience" className="section alt reveal"><div className="section-inner"><SectionHeading eyebrow="02 / EXPERIENCE" title="Production-minded from build to runtime."/><div className="timeline">{experience.map((job) => <article className="timeline-item" key={job.company}><div className="timeline-date">{job.period}</div><div className="timeline-node"/><div className="timeline-content"><p className="company">{job.company}</p><h3>{job.role}</h3>{job.location && <p className="location">{job.location}</p>}<ul>{job.items.map(item => <li key={item}><Check />{item}</li>)}</ul></div></article>)}</div></div></section>

      <section id="skills" className="section reveal"><div className="section-inner"><SectionHeading eyebrow="03 / CAPABILITIES" title="A practical infrastructure toolkit." copy="Technologies used across cloud migrations, release engineering, cluster operations, and production troubleshooting."/><div className="skills-grid">{skillGroups.map((group, index) => <article className="skill-card" key={group.title}><div className="skill-index">0{index+1}</div><h3>{group.title}</h3><div className="badges">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div></div></section>

      <section id="projects" className="section alt reveal"><div className="section-inner"><SectionHeading eyebrow="04 / SELECTED PROJECTS" title="Systems built to mirror real operations."/><div className="projects-list">{projects.map((project,index) => <article className="project-card" key={project.title}><div className="project-head"><span className="project-number">{project.number}</span><div><h3>{project.title}</h3><p>{project.description}</p></div><button className="icon-button" aria-expanded={openProject===index} aria-label={`${openProject===index?"Collapse":"Expand"} ${project.title}`} onClick={() => setOpenProject(openProject===index?null:index)}><ChevronDown className={openProject===index?"rotate":""}/></button></div><div className="architecture">{project.flow.map((step,i) => <div key={step}><span>{step}</span>{i<project.flow.length-1&&<ArrowRight/>}</div>)}</div><div className="badges">{project.technologies.map(t=><span key={t}>{t}</span>)}</div>{openProject===index&&<div className="project-detail"><div><small>PROBLEM</small><p>{project.problem}</p></div><div><small>IMPLEMENTATION</small><p>{project.implementation}</p></div><div><small>KEY OUTCOMES</small><ul>{project.outcomes.map(o=><li key={o}><Check/>{o}</li>)}</ul></div><Button variant="ghost" disabled title="GitHub URL not yet provided"><Github/> GitHub link pending</Button></div>}</article>)}</div></div></section>

      <section id="certifications" className="section certification reveal"><div className="section-inner"><SectionHeading eyebrow="05 / CERTIFICATION" title="Validated Kubernetes administration."/><article className="cert-card"><div className="cert-seal"><Award/><span>CKA</span></div><div className="cert-copy"><p className="eyebrow">LINUX FOUNDATION</p><h3>Certified Kubernetes Administrator</h3><p>Completed June 24, 2026</p><span className="credential-id">Certificate ID: LF-b3rwy9nogw</span></div><ButtonLink href={certificateAsset.url} target="_blank" rel="noreferrer" variant="secondary">View certificate <ExternalLink/></ButtonLink></article></div></section>

      <section id="education" className="section reveal"><div className="section-inner"><SectionHeading eyebrow="06 / EDUCATION" title="Academic foundation."/><div className="education-list">{education.map(item=><article key={item.degree}><span>{item.period}</span><div><h3>{item.degree}</h3><p>{item.school}</p><small>{item.location}</small></div></article>)}</div></div></section>

      <section id="contact" className="section contact reveal"><div className="section-inner contact-grid"><div><p className="eyebrow">07 / CONTACT</p><h2>Let’s build reliable infrastructure.</h2><p className="section-copy">Open to opportunities in DevOps, Cloud Engineering, Kubernetes and Infrastructure Automation.</p><div className="contact-links"><a href={email}><Mail/>ps38839@gmail.com</a><a href={linkedIn} target="_blank" rel="noreferrer"><Linkedin/>LinkedIn</a><span title="GitHub URL not yet provided"><Github/>GitHub link pending</span></div></div><form onSubmit={submit} className="contact-form"><label>Name<input name="name" autoComplete="name" required placeholder="Your name"/></label><label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@company.com"/></label><label>Message<textarea name="message" required rows={5} placeholder="Tell me about the opportunity"/></label><Button type="submit"><Send/>Send message</Button>{sent&&<p role="status" className="form-status"><Check/>Thanks — this demo form is ready for an email service connection.</p>}</form></div></section>
    </main>
    <footer><div><a href="#home" className="brand"><span className="brand-mark">PK</span><span><strong>Pawan Kumar</strong><small>DEVOPS ENGINEER / CLOUD ENGINEER</small></span></a><p>© {new Date().getFullYear()} Pawan Kumar. Built for reliable delivery.</p></div><div className="footer-links"><IconLink label="GitHub"><Github/></IconLink><IconLink href={linkedIn} label="LinkedIn"><Linkedin/></IconLink><IconLink href={email} label="Email"><Mail/></IconLink></div></footer>
    {showTop&&<button className="scroll-top" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} aria-label="Scroll to top"><ArrowUp/></button>}
  </div>;
}