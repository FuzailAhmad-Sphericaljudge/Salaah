import { useState } from 'react'
import { about, departments, events, socials } from './data'

const links = [
  ['About', 'about'],
  ['Departments', 'departments'],
  ['Events', 'events'],
  ['Connect', 'connect']
]

function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="header">
      <div className="wrap header-row">
        <a className="brand" href="#top" onClick={close}>
          <span className="brand-mark">सलाह</span>
          <span className="brand-sub">The Mentor Community</span>
        </a>
        <button
          className={open ? 'menu-btn is-open' : 'menu-btn'}
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
        <nav id="main-nav" className={open ? 'nav open' : 'nav'}>
          {links.map(([label, id]) => (
            <a key={id} href={'#' + id} onClick={close}>
              {label}
            </a>
          ))}
          <a className="btn btn-small" href="#connect" onClick={close}>
            Join Salaah
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glyph" aria-hidden="true">
        सलाह
      </div>
      <div className="wrap">
        <div className="hero-copy">
          <h1>Good advice comes from people who just walked the road you are on.</h1>
          <p>
            Salaah is the mentor community of ABES Engineering College. Seniors guide juniors through academics,
            careers and campus life, one conversation at a time.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#connect">
              Join the community
            </a>
            <a className="btn btn-ghost" href="#departments">
              Meet the departments
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <div>
          <h2>Mentoring that feels like talking to a friend</h2>
          <p className="lead">
            The word salaah means advice. Our community exists so that no student at ABES has to figure out college
            alone. We share what we learned, so the next batch can go further.
          </p>
        </div>
        <ul className="about-list">
          {about.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Departments() {
  const [active, setActive] = useState(departments[0].id)
  const current = departments.find((d) => d.id === active)

  return (
    <section className="section section-tint" id="departments">
      <div className="wrap">
        <h2>Five departments, one community</h2>
        <p className="lead">Pick the team that matches what you enjoy doing.</p>
        <div className="tabs" role="tablist" aria-label="Departments">
          {departments.map((d) => (
            <button
              key={d.id}
              role="tab"
              id={'tab-' + d.id}
              aria-selected={active === d.id}
              aria-controls="dept-panel"
              className="tab"
              onClick={() => setActive(d.id)}
            >
              {d.name}
            </button>
          ))}
        </div>
        <div className="panel" id="dept-panel" role="tabpanel" aria-labelledby={'tab-' + current.id} key={current.id}>
          <div>
            <h3>{current.name}</h3>
            <p>{current.summary}</p>
          </div>
          <ul>
            {current.duties.map((duty) => (
              <li key={duty}>{duty}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Events() {
  const types = ['All', ...new Set(events.map((e) => e.type))]
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? events : events.filter((e) => e.type === filter)

  return (
    <section className="section" id="events">
      <div className="wrap">
        <h2>Programs and events</h2>
        <p className="lead">Regular sessions and yearly highlights open to every student.</p>
        <div className="chips" role="group" aria-label="Filter events by type">
          {types.map((t) => (
            <button key={t} className="chip" aria-pressed={filter === t} onClick={() => setFilter(t)}>
              {t}
            </button>
          ))}
        </div>
        <ul className="events">
          {shown.map((e) => (
            <li key={e.id} className="event">
              <span className="event-cadence">{e.cadence}</span>
              <div>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </div>
              <span className="event-type">{e.type}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Connect() {
  return (
    <section className="connect" id="connect">
      <div className="wrap connect-grid">
        <div>
          <h2>Recruitment is open</h2>
          <p>
            Whether you want to build, design, write, plan or simply help others, there is a place for you in Salaah.
            Follow us to hear about the next round.
          </p>
        </div>
        <ul className="socials">
          {socials.map((s) => (
            <li key={s.name}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                <span>{s.name}</span>
                <span className="social-handle">{s.handle}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-row">
        <p>Salaah, The Mentor Community</p>
        <p>ABES Engineering College, Ghaziabad</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Departments />
        <Events />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
