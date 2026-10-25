import { useEffect, useRef, useState } from 'react'
import {
  Activity, ArrowUpRight, BrainCircuit, ChevronRight, GraduationCap,
  Github, Linkedin, Mail, Menu, Phone, Terminal as TerminalIcon, UserRound, X
} from 'lucide-react'
import { profile, skills, projects, learningTopics, careerJourney, education, certifications } from './data.js'

const HEADLINES = ['Aspiring AI/ML Engineer', 'Machine Learning Builder', 'Computer Vision Enthusiast', 'Data Science Explorer']

// Starting estimates based on the skills and project experience listed in the portfolio.
const SKILL_ESTIMATES = {
  Python: 80, SQL: 65, 'C++ (Foundational)': 50, 'Object-Oriented Programming': 65, 'Data Structures': 60,
  PyTorch: 65, 'Scikit-learn': 75, 'Neural Networks': 65, 'Model Evaluation': 70, 'Hyperparameter Tuning': 65, 'Time-Series Modeling': 75,
  OpenCV: 80, MediaPipe: 60, 'Video Stream Analysis': 75, 'Object Tracking': 65, 'Sensor Data Ingestion': 60,
  'OpenAI API': 70, 'LLM APIs': 65, 'Prompt Engineering': 75, 'AI Agents': 65, 'RAG Fundamentals': 55, Embeddings: 55, 'LLM Evaluation': 55, 'n8n Workflow Automation': 75,
  'Supervised Learning': 70, 'Unsupervised Learning': 60, Regression: 70, Classification: 70, Clustering: 60,
  'Feature Engineering': 65, 'Cross-Validation': 65, CNNs: 60, RNNs: 55, Transformers: 55, 'Transfer Learning': 60, 'Computer Vision Models': 70,
  'Exploratory Data Analysis': 70, 'Data Visualization': 65, Statistics: 60, Matplotlib: 60, Seaborn: 60,
  FastAPI: 65, Streamlit: 75, Docker: 55, 'MLOps Fundamentals': 55, Pandas: 75, NumPy: 70, Git: 65, GitHub: 70, 'Linux/Bash': 55, Postman: 60,
}

function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!context) return

    let frameId
    let width = 0
    let height = 0
    let particles = []
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * ratio
      canvas.height = height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      particles = Array.from({ length: Math.min(64, Math.max(30, Math.round(width / 22))) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        radius: Math.random() * 1.5 + 0.45,
      }))
      draw(false)
    }

    function draw(animate = true) {
      context.clearRect(0, 0, width, height)
      for (let i = 0; i < particles.length; i += 1) {
        const particle = particles[i]
        if (animate && !reducedMotion.matches) {
          particle.x += particle.vx
          particle.y += particle.vy
          if (particle.x < 0 || particle.x > width) particle.vx *= -1
          if (particle.y < 0 || particle.y > height) particle.vy *= -1
        }
        context.beginPath()
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        context.fillStyle = 'rgba(93, 231, 255, 0.62)'
        context.fill()

        for (let j = i + 1; j < particles.length; j += 1) {
          const other = particles[j]
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          if (distance < 118) {
            context.beginPath()
            context.moveTo(particle.x, particle.y)
            context.lineTo(other.x, other.y)
            context.strokeStyle = `rgba(0, 195, 255, ${0.15 * (1 - distance / 118)})`
            context.lineWidth = 0.7
            context.stroke()
          }
        }
      }
    }

    function animate() {
      draw()
      frameId = window.requestAnimationFrame(animate)
    }

    resize()
    if (!reducedMotion.matches) frameId = window.requestAnimationFrame(animate)
    window.addEventListener('resize', resize)
    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />
}

function SectionTitle({ eyebrow, title, children }) {
  return <div className="section-title"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{children && <p>{children}</p>}</div>
}

function tiltSurface(event, strength = 9) {
  if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const surface = event.currentTarget
  const bounds = surface.getBoundingClientRect()
  const x = (event.clientX - bounds.left) / bounds.width
  const y = (event.clientY - bounds.top) / bounds.height
  surface.style.setProperty('--tilt-x', `${((0.5 - y) * strength).toFixed(2)}deg`)
  surface.style.setProperty('--tilt-y', `${((x - 0.5) * strength).toFixed(2)}deg`)
  surface.style.setProperty('--spot-x', `${(x * 100).toFixed(1)}%`)
  surface.style.setProperty('--spot-y', `${(y * 100).toFixed(1)}%`)
}

function resetTilt(event) {
  const surface = event.currentTarget
  surface.style.setProperty('--tilt-x', '0deg')
  surface.style.setProperty('--tilt-y', '0deg')
  surface.style.setProperty('--spot-x', '50%')
  surface.style.setProperty('--spot-y', '50%')
}

function ProjectCard({ project, index }) {
  return (
    <article className="project-card" onPointerMove={tiltSurface} onPointerLeave={resetTilt}>
      <div className="project-card-top"><span className="project-index">0{index + 1}</span><span className="project-type">{project.type}</span></div>
      <div className="project-cover">
        {project.image ? <img src={import.meta.env.BASE_URL + project.image} alt={project.name + ' preview'} /> : <div className={'project-placeholder ' + (project.visual || '')}><span>{project.metric}</span></div>}
      </div>
      {project.gallery && <div className="project-gallery">{project.gallery.map(image => <img key={image} src={import.meta.env.BASE_URL + image} alt={project.name + ' supporting view'} />)}</div>}
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      {project.metric && project.image && <strong className="project-metric">{project.metric}</strong>}
      <div className="tags">{project.stack.map(s => <span key={s}>{s}</span>)}</div>
      <div className="project-bottom">
        <span className="project-status"><i />{project.status}</span>
        {project.url ? <a href={project.url} target="_blank" rel="noreferrer">View source <ArrowUpRight size={15} /></a> : <span className="link-pending">Details available on request</span>}
      </div>
    </article>
  )
}
export default function App() {
  const [mobileNav, setMobileNav] = useState(false)
  const [active, setActive] = useState('home')
  const [toast, setToast] = useState('')
  const [contactStatus, setContactStatus] = useState('')
  const [contactSending, setContactSending] = useState(false)
  const [headlineIndex, setHeadlineIndex] = useState(0)
  const [selectedSkill, setSelectedSkill] = useState(null)
  const email = profile.email

  const navigate = (id) => {
    setActive(id)
    setMobileNav(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'learning', 'certificates', 'contact']
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-20% 0px -60% 0px', threshold: [0, 0.15, 0.4] })
    sections.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const intervalId = window.setInterval(() => {
      setHeadlineIndex(index => (index + 1) % HEADLINES.length)
    }, 2600)
    return () => window.clearInterval(intervalId)
  }, [])
  async function sendContactMessage(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    setContactSending(true)
    setContactStatus('Sending your message…')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: formData.get('name').trim(),
          email: formData.get('email').trim(),
          message: formData.get('message').trim(),
          _subject: `Portfolio message from ${formData.get('name').trim()}`,
          _template: 'table',
        }),
      })
      const result = await response.json()
      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error(result.message || 'The message could not be sent.')
      }
      form.reset()
      setContactStatus('Message sent successfully. Thank you for reaching out!')
    } catch (error) {
      setContactStatus(error.message || 'Unable to send right now. Please try again shortly.')
    } finally {
      setContactSending(false)
    }
  }

  const navItems = [
    ['home', 'Home'], ['about', 'About'], ['skills', 'Skills'], ['projects', 'Projects'], ['experience', 'Journey'], ['contact', 'Contact']
  ]

  return (
    <div className="app-shell">
      <ParticleField />
      <header className="topbar">
        <a className="brand" href="#home" onClick={e => { e.preventDefault(); navigate('home') }}>
          <span className="brand-mark">AM</span>
          <span className="brand-copy"><strong>Anil Mali</strong><small>AI/ML ENGINEER</small></span>
        </a>
        <div className="topbar-status"><span className="pulse-dot" /> AI/ML ENGINEER PORTFOLIO</div>
        <button className="mobile-menu" onClick={() => setMobileNav(v => !v)} aria-label={mobileNav ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileNav}>
          {mobileNav ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={mobileNav ? 'top-nav nav-open' : 'top-nav'} aria-label="Main navigation">
          {navItems.map(([id, label]) => <button key={id} className={active === id ? 'nav-active' : ''} onClick={() => navigate(id)}>{label}</button>)}
        </nav>
        <button className="hire-top" onClick={() => navigate('contact')}>Hire Me <ArrowUpRight size={15} /></button>
      </header>

      <main>
        <section id="home" className="hero section-anchor">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="availability"><span className="pulse-dot" /> OPEN TO AI/ML OPPORTUNITIES</div>
              <p className="micro-label">HELLO, WORLD. I'M</p>
              <h1>{profile.name}<span className="cursor">_</span></h1>
              <h2 className="rotating-headline" aria-live="polite"><span key={headlineIndex}>{HEADLINES[headlineIndex]}</span></h2>
              <p className="hero-description">{profile.tagline}</p>
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={() => navigate('projects')}>Explore projects <ArrowUpRight size={17} /></button>
                <button className="btn btn-secondary" onClick={() => navigate('contact')}>Connect with me <ChevronRight size={17} /></button>
              </div>
              <div className="hero-links">
                <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a><a href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
                {email && <a href={`mailto:${email}`}><Mail size={17} /> Email</a>}
              </div>
            </div>
            <div className="hero-visual-stage">
              <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
              <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
              <figure className="hero-photo-card" onPointerMove={event => tiltSurface(event, 7)} onPointerLeave={resetTilt}>
                <img src={import.meta.env.BASE_URL + 'Anil_Mali_Portrait.jpeg'} alt="Portrait of Anil Mali, AI/ML engineer" />
                <span className="hero-photo-label">NEURAL PROFILE // 01</span>
                <span className="hero-tech-chip hero-tech-chip-one">COMPUTER VISION</span>
                <span className="hero-tech-chip hero-tech-chip-two">MACHINE LEARNING</span>
                <figcaption><strong>ANIL MALI</strong><span>AI/ML ENGINEER · INDIA</span></figcaption>
              </figure>
            </div>
          </div>
          <div className="hero-metrics" aria-label="Portfolio highlights">
            <article className="hero-metric"><span className="hero-metric-icon"><BrainCircuit size={18} /></span><strong>03</strong><span>FEATURED AI SYSTEMS</span><small>Vision · Forecasting · LLMs</small></article>
            <article className="hero-metric"><span className="hero-metric-icon"><Activity size={18} /></span><strong>28+ <i>FPS</i></strong><span>REAL-TIME VISION</span><small>1080p video processing</small></article>
            <article className="hero-metric"><span className="hero-metric-icon"><GraduationCap size={18} /></span><strong>15% <i>↓ RMSE</i></strong><span>FORECASTING GAIN</span><small>Time-series model improvement</small></article>
          </div>
          <div className="hero-bottomline"><span>PYTHON / MACHINE LEARNING / COMPUTER VISION</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section id="about" className="section section-anchor">
          <SectionTitle eyebrow="01 / ABOUT" title={<>Engineer in progress<span className="accent">.</span></>} >{profile.about}</SectionTitle>
          <div className="about-grid">
            <div className="about-note"><span className="note-symbol">“</span><p>I learn by building, evaluating, documenting, and improving real AI systems.</p><span className="note-signature">— ANIL MALI</span></div>
            <div className="about-facts">
              <div><span className="fact-label">CURRENT FOCUS</span><strong>AI/ML Engineering</strong><p>Models, vision pipelines, and AI applications</p></div>
              <div><span className="fact-label">LOCATION</span><strong>{profile.location}</strong><p>Open to AI/ML opportunities</p></div>
              <div><span className="fact-label">APPROACH</span><strong>Build → Evaluate → Improve</strong><p>Experiment-driven engineering</p></div>
            </div>
          </div>
        </section>


        <section id="education" className="section section-anchor">
          <SectionTitle eyebrow="02 / ACADEMIC JOURNEY" title={<>Step by step progression<span className="accent">.</span></>} >My academic journey from secondary school to my current engineering degree.</SectionTitle>
          <div className="education-timeline">
            {education.map(item => <article className="education-entry" key={item.years}>
              <div className="timeline-marker"><GraduationCap size={19} /></div>
              <div className="education-content">
                <span className="fact-label">{item.years} · {item.step} · {item.stage}</span>
                <h3>{item.degree}</h3>
                {item.institution && <p className="education-institution">{item.institution}</p>}
                <p>{item.detail}</p>
              </div>
            </article>)}
          </div>
        </section>


        <section id="experience" className="section section-anchor section-muted">
          <SectionTitle eyebrow="03 / CAREER JOURNEY" title={<>Work, projects &amp; growth<span className="accent">.</span></>} >Career and project experience across applied AI, machine learning, and engineering studies.</SectionTitle>
          <div className="experience-grid">
            {careerJourney.map((item, index) => <article className="experience-card" key={item.year + item.organization}>
              <div className="experience-card-top"><span className="experience-kind">{item.year}</span><span className="experience-mark">0{index + 1}</span></div>
              <h3>{item.role}</h3>
              <p className="experience-organization">{item.organization}</p>
              <p>{item.description}</p>
              <div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
            </article>)}
          </div>
        </section>


        <section id="skills" className="section section-anchor section-muted">
          <SectionTitle eyebrow="04 / TOOLKIT" title={<>AI, ML &amp; engineering skills<span className="accent">.</span></>} >Languages, AI/ML concepts, deep learning, computer vision, LLMs, data science, and deployment tools. Click any skill to view its suggested estimate.</SectionTitle>
          <div className="skills-grid">
            {Object.entries(skills).map(([group, list], index) => (
              <article className="skill-card" key={group}>
                <div className="skill-card-head"><span>0{index + 1}</span><h3>{group}</h3></div>
                <div className="tags skill-tags">{list.map(item => <button
                  className={`skill-tag${selectedSkill?.name === item ? ' is-selected' : ''}`}
                  key={item}
                  type="button"
                  aria-pressed={selectedSkill?.name === item}
                  onClick={() => setSelectedSkill(current => current?.name === item ? null : { name: item, level: SKILL_ESTIMATES[item] ?? 55 })}
                >{item}</button>)}</div>
                {selectedSkill && list.includes(selectedSkill.name) && <div className="skill-level" role="status">
                  <div className="skill-level-heading"><strong>{selectedSkill.name}</strong><span>{selectedSkill.level}%</span></div>
                  <div className="skill-level-track"><span style={{ width: `${selectedSkill.level}%` }} /></div>
                  <small>Suggested estimate — adjust this to your actual level.</small>
                </div>}
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section section-anchor">
          <SectionTitle eyebrow="05 / SELECTED WORK" title={<>Projects, not buzzwords<span className="accent">.</span></>} >Explore the work and project concepts behind my AI/ML learning journey. Status labels distinguish available source code from work still in progress.</SectionTitle>
          <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}</div>
          <div className="section-cta"><a className="btn btn-secondary" href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> Browse GitHub profile <ArrowUpRight size={16} /></a></div>
        </section>

        <section id="learning" className="section section-anchor section-muted">
          <SectionTitle eyebrow="06 / LEARNING LOG" title={<>100 Days of Machine Learning<span className="accent">.</span></>} >A learning journey exploring machine learning, deep learning, generative AI and deployment concepts.</SectionTitle>
          <div className="learning-layout">
            <div className="learning-intro-card"><div className="learning-terminal-icon"><TerminalIcon size={24} /></div><span className="fact-label">LEARNING IN PUBLIC</span><h3>Progress through practice.</h3><p>Topics explored across the journey include:</p><a href={profile.linkedin} target="_blank" rel="noreferrer">Read my LinkedIn posts <ArrowUpRight size={16} /></a></div>
            <div className="learning-list">{learningTopics.map((topic, i) => <div className="learning-item" key={topic}><span>{String(i + 1).padStart(2, '0')}</span><p>{topic}</p><span className="learning-arrow">↗</span></div>)}</div>
          </div>
        </section>

<section id="certificates" className="section section-anchor">
          <SectionTitle eyebrow="07 / CERTIFICATIONS" title={<>Learning recognized<span className="accent">.</span></>} >Selected training and professional learning certificates.</SectionTitle>
          <div className="certification-grid">{certifications.map((item, index) => <article className="certification-card" key={item.name}>
            <span className="experience-mark">0{index + 1}</span><h3>{item.name}</h3><p>{item.issuer}</p>{item.credential && <small>Credential ID: {item.credential}</small>}
          </article>)}</div>
        </section>
        <section id="contact" className="section section-anchor contact-section">
          <div className="contact-panel">
            <div className="contact-copy">
              <span className="eyebrow">08 / CONTACT</span>
              <h2>Let's build something <span>meaningful.</span></h2>
              <p>Interested in AI/ML internships, entry-level opportunities, project collaboration, or exchanging technical ideas? Send me a message.</p>
              <div className="contact-details" aria-label="Anil Mali contact details">
                <div><UserRound size={17} /><span><small>NAME</small><strong>{profile.name}</strong></span></div>
                {email && <a href={`mailto:${email}`}><Mail size={17} /><span><small>EMAIL</small><strong>{email}</strong></span></a>}
                {profile.phone && <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}><Phone size={17} /><span><small>PHONE</small><strong>{profile.phone}</strong></span></a>}
              </div>
              <div className="contact-actions">
                <a className="btn btn-secondary" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> Connect on LinkedIn <ArrowUpRight size={16} /></a>
                <a className="btn btn-secondary" href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub profile</a>
              </div>
            </div>
            <form className="contact-form" onSubmit={sendContactMessage}>
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="name" type="text" autoComplete="name" maxLength="100" placeholder="Jane Smith" required />
              <label htmlFor="contact-email">Your email</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" maxLength="200" placeholder="jane@example.com" required />
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows="5" maxLength="3000" placeholder="Tell me a little about what you'd like to discuss..." required />
              <button className="btn btn-primary" type="submit" disabled={!email || contactSending}><Mail size={17} /> {contactSending ? 'Sending…' : 'Send message'} <ArrowUpRight size={16} /></button>
              <p className="contact-form-note" role="status">{contactStatus || 'Your message will be delivered directly.'}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home" onClick={e => { e.preventDefault(); navigate('home') }}>ANIL<span className="brand-muted">.EXE</span></a>
        <p>Built with React, Vite, curiosity and a terminal-inspired UI.</p>
        <span>© {new Date().getFullYear()} Anil Mali</span>
      </footer>
      {toast && <div role="status" className="toast">{toast}</div>}
      <button className="back-top" aria-label="Back to top" onClick={() => navigate('home')}>↑</button>
    </div>
  )
}




