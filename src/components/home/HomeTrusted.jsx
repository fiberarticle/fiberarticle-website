/* The universities our users come from, in their own colours, drifting past
   slowly under the hero. The logos are the official ones from each
   university's website. The row is drawn twice so the loop is seamless; the
   copy is hidden from screen readers so each name is read once. scale
   evens out logos that fill their whole box (SRU's letters) or are very
   wide and thin (Sreenidhi's strip). */

const UNIVERSITIES = [
  { name: 'Anurag University', logo: '/universities/anurag-university.png' },
  { name: 'SR University, Warangal', logo: '/universities/sr-university.svg', scale: 0.62 },
  { name: 'Osmania University', logo: '/universities/osmania-university.png' },
  { name: 'JNTU Hyderabad', logo: '/universities/jntu-hyderabad.png', label: 'JNTU Hyderabad' },
  { name: 'Maulana Azad National Urdu University', logo: '/universities/manuu.png' },
  { name: 'MIT Bengaluru, Manipal Academy of Higher Education', logo: '/universities/manipal.png' },
  { name: 'Sreenidhi University, Hyderabad', logo: '/universities/sreenidhi.png', scale: 0.8 },
]

function Row({ hidden = false }) {
  return (
    <ul className="home-trusted-row" aria-hidden={hidden || undefined}>
      {UNIVERSITIES.map(({ name, logo, label, scale = 1 }) => (
        <li key={name} className="home-trusted-item">
          <img
            src={logo}
            alt={hidden ? '' : name}
            className="home-trusted-logo"
            style={{ '--logo-scale': scale }}
            loading="lazy"
            decoding="async"
          />
          {label ? <span className="home-trusted-label">{label}</span> : null}
        </li>
      ))}
    </ul>
  )
}

export default function HomeTrusted() {
  return (
    <section className="home-section home-trusted" aria-label="Universities our users come from">
      <p className="home-trusted-title">
        Trusted by students and researchers from leading universities
      </p>
      <div className="home-trusted-track">
        <div className="home-trusted-belt">
          <Row />
          <Row hidden />
        </div>
      </div>
    </section>
  )
}
