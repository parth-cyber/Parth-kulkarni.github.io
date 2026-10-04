const profile = {
  name: 'Parth Kulkarni',
  role: 'Software Engineer',
  intro:
    'Software engineer with 3+ years of experience in Java-based application development using Spring Boot, microservices, Kubernetes, and CI/CD pipelines.',
  location: 'Ravet, Pimpri-Chinchwad, Pune',
  email: 'kulkarniparth83@gmail.com',
  phone: '+91 7248979641',
  linkedin: 'www.linkedin.com',
  resume: 'Parth%20Kulkarni%20(1).pdf',
  availability: 'Open to software engineering opportunities'
};

const metrics = [
  { value: '3+', label: 'Years experience' },
  { value: '9.64', label: 'MCA CGPA' },
  { value: 'AI', label: 'Driven engineering' }
];

const skills = ['Java', 'Spring Boot', 'Microservices', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'GitLab CI', 'React.js', 'Vue.js', 'MongoDB', 'REST APIs', 'AI tools'];

const experiences = [
  {
    period: 'May 2025 — Present',
    title: 'Software Engineer',
    company: 'Cerence Inc',
    description:
      'Actively worked with enterprise customers to translate requirements into production-ready solutions, improve stability and performance, and integrate AI-driven agentic capabilities into product workflows.'
  },
  {
    period: 'August 2022 — May 2025',
    title: 'Associate Software Engineer',
    company: 'Cerence Inc',
    description:
      'Developed and engineered microservices-based products, created REST APIs with Java and Spring Boot, and improved deployment readiness through Kubernetes and CI/CD practices.'
  },
  {
    period: 'January 2022 — July 2022',
    title: 'Software Engineer Intern',
    company: 'Cerence Inc',
    description:
      'Collaborated on an AI-based application using Vue.js, React.js, MongoDB, Java, and Spring Framework while contributing to both front-end and back-end development.'
  }
];

const projects = [
  {
    title: 'AI-Driven Product Workflows',
    meta: 'Enterprise Software',
    description:
      'Integrated AI-driven agentic capabilities within enterprise product workflows to improve decision-making, accuracy, and contextual system behavior.',
    link: 'Parth%20Kulkarni%20(1).pdf'
  },
  {
    title: 'Microservice Platform Delivery',
    meta: 'Backend Engineering',
    description:
      'Built and maintained Java-based REST APIs and cloud-native services using Spring Boot, improving reliability, debug efficiency, and system observability.',
    link: 'Parth%20Kulkarni%20(1).pdf'
  },
  {
    title: 'AI Teaching System Research',
    meta: 'Academic Research',
    description:
      'Published research on an AI-based online teaching system for disabled students, highlighting accessibility-focused educational technology design.',
    link: 'Parth%20Kulkarni%20(1).pdf'
  }
];

const h = React.createElement;

function App() {
  return h('div', { className: 'page-shell' },
    h('div', { className: 'bg-blur blur-1' }),
    h('div', { className: 'bg-blur blur-2' }),
    h('div', { className: 'bg-blur blur-3' }),
    h('div', { className: 'content-shell' },
      h('header', { className: 'topbar' },
        h('nav', { className: 'nav-shell' },
          h('a', { href: '#home', className: 'brand', 'aria-label': 'Home' },
            h('span', { className: 'brand-mark' }),
            h('span', null, profile.name)
          ),
          h('div', { className: 'nav-links' },
            h('a', { href: '#about' }, 'About'),
            h('a', { href: '#experience' }, 'Experience'),
            h('a', { href: '#projects' }, 'Projects'),
            h('a', { href: '#contact' }, 'Contact')
          ),
          h('a', { href: '#contact', className: 'nav-button' }, 'Let’s talk')
        )
      ),
      h('main', { className: 'container' },
        h('section', { className: 'hero', id: 'home' },
          h('div', { className: 'hero-copy' },
            h('div', { className: 'eyebrow' }, 'Available for opportunities'),
            h('h1', null,
              'I build ',
              h('span', { className: 'gradient-text' }, 'scalable'),
              ' software for real-world products.'
            ),
            h('p', null, profile.intro),
            h('div', { className: 'cta-row' },
              h('a', { href: '#projects', className: 'primary-btn' }, 'View my work'),
              h('a', { href: profile.resume, className: 'secondary-btn', target: '_blank', rel: 'noreferrer' }, 'Download resume')
            ),
            h('div', { className: 'hero-metrics' },
              metrics.map((item) =>
                h('div', { className: 'metric-box', key: item.label },
                  h('strong', null, item.value),
                  h('span', null, item.label)
                )
              )
            )
          ),
          h('div', { className: 'profile-card', 'aria-label': 'Profile illustration' },
            h('div', { className: 'avatar-shell' },
              h('div', { className: 'profile-visual' },
                h('div', { className: 'orb' }),
                h('div', { className: 'portrait' })
              ),
              h('div', { className: 'float-card card-top' },
                'Java & Spring',
                h('strong', null, 'Microservices')
              ),
              h('div', { className: 'float-card card-bottom' },
                'Cloud-native',
                h('strong', null, 'Kubernetes + CI/CD')
              )
            )
          )
        ),

        h('section', { className: 'section', id: 'about' },
          h('div', { className: 'section-header' },
            h('h2', null, 'About me'),
            h('p', null, 'I’m a software engineer focused on building reliable systems, improving product quality, and delivering customer-driven solutions with strong engineering fundamentals.')
          ),
          h('div', { className: 'about-grid' },
            h('div', { className: 'panel story-panel' },
              h('p', null, 'My work blends backend engineering, API development, and product problem solving. I enjoy debugging complex issues, improving performance, and translating customer requirements into maintainable, production-ready systems.'),
              h('p', null, 'From enterprise product development to research in AI-enabled learning, I like building technology that is practical, scalable, and meaningful for real users.'),
              h('div', { className: 'badge-row' },
                ['Java', 'Spring Boot', 'Kubernetes', 'AI Integration', 'Problem Solving', 'Agile Delivery'].map((tag) =>
                  h('span', { className: 'tag', key: tag }, tag)
                )
              )
            ),
            h('div', { className: 'panel skill-panel' },
              h('div', { className: 'project-meta' }, 'Core toolkit'),
              h('div', { className: 'skill-list' },
                skills.map((skill) =>
                  h('div', { className: 'skill-item', key: skill },
                    h('span', { className: 'skill-dot' }),
                    h('span', null, skill)
                  )
                )
              )
            )
          )
        ),

        h('section', { className: 'section', id: 'experience' },
          h('div', { className: 'section-header' },
            h('h2', null, 'Experience'),
            h('p', null, 'Engineering software with a focus on performance, reliability, and continuous product improvement across enterprise workflows.')
          ),
          h('div', { className: 'experience-grid' },
            experiences.map((job) =>
              h('article', { className: 'timeline-item', key: job.company + job.title },
                h('div', { className: 'timeline-content' },
                  h('span', null, job.period),
                  h('h3', null, job.title),
                  h('p', { style: { color: '#dfe8ff', marginBottom: '10px' } }, job.company),
                  h('p', null, job.description)
                )
              )
            )
          )
        ),

        h('section', { className: 'section', id: 'projects' },
          h('div', { className: 'section-header' },
            h('h2', null, 'Selected work'),
            h('p', null, 'Hands-on experience across enterprise product delivery, backend engineering, and research-focused AI solutions.')
          ),
          h('div', { className: 'project-grid' },
            projects.map((project) =>
              h('article', { className: 'project-card', key: project.title },
                h('div', { className: 'project-thumbnail', 'aria-hidden': 'true' }),
                h('div', { className: 'project-meta' }, project.meta),
                h('h3', null, project.title),
                h('p', null, project.description),
                h('div', { className: 'project-links' },
                  h('a', { href: project.link, target: '_blank', rel: 'noreferrer' }, 'View details'),
                  h('span', null, '→')
                )
              )
            )
          )
        ),

        h('section', { className: 'section', id: 'contact' },
          h('div', { className: 'panel contact-panel' },
            h('div', { className: 'contact-card' },
              h('div', { className: 'project-meta' }, 'Let’s connect'),
              h('h2', { style: { margin: '0 0 8px' } }, 'Open to software engineering opportunities.'),
              h('p', null, profile.availability, '. I’m available for software engineering roles and product-focused collaborations.')
            ),
            h('div', { className: 'contact-cta' },
              h('div', null,
                h('strong', null, profile.email),
                h('span', { style: { color: 'var(--muted)', display: 'block', marginTop: '6px' } }, profile.phone),
                h('span', { style: { color: 'var(--muted)', display: 'block', marginTop: '4px' } }, profile.location)
              )
            )
          )
        )
      ),
      h('footer', { className: 'footer' }, '© 2026 ', profile.name)
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(h(App, null));
