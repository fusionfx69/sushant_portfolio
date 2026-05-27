import { useEffect } from 'react';
import ContactForm from './components/ContactForm';

const skills = [
  'Telegram community management',
  'Crypto customer support',
  'Discord moderation',
  'Wallet deposits & withdrawals',
  'Content posting & social media',
  'Basic Canva graphic design',
  // 'Language: English | Nepali | Hindi ',
  'Trading experience: Crypto, forex, commodities',
  'Trading Aanalysis: Technical analysis, market trends, and trading psychology'
];

const services = [
  {
    title: 'Community Moderation',
    description: 'Moderate Telegram and Discord groups, remove spam, enforce rules, and maintain a positive environment.'
  },
  {
    title: 'Crypto Support',
    description: 'Resolve wallet issues, deposit and withdrawal questions, KYC guidance, and user onboarding for exchanges.'
  },
  {
    title: 'Content & Engagement',
    description: 'Create announcements, schedule posts, and keep communities active with meaningful updates and responses.'
  },
  {
    title: 'Trading Support',
    description: 'Provide insights on market trends, technical analysis, and trading psychology to support community members.'
  },
  {
    title: 'Social Media Management',
    description: 'Handle social media content posting, engagement, and community growth strategies for crypto projects.'
  }
];

const experience = [
  {
    title: 'Telegram Community Moderator',
    details: 'Managed and moderated crypto-focused Telegram groups, enforced rules, and answered member questions.'
  },
  {
    title: 'Crypto Customer Support',
    details: 'Handled wallet issues, deposits, withdrawals, KYC guidance, and exchange support in fast-response environments.'
  },
  {
    title: 'Discord Moderator for NFT/DeFi Communities',
    details: 'Supported NFT and DeFi communities, removed spam, and kept engagement active.'
  }
];

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <header className="hero" data-animate>
        <div className="hero-copy">
          <h2 className="hero-name"><span>Mr.Michael </span> 
          <span className="hero-last">Michael</span>
          </h2>
          <h1>Professional Crypto Community Manager & Support Specialist</h1>
          <p className="hero-text">
            4+ years of crypto, forex, and commodities trading with deep experience in Telegram
            moderation, exchange support, and community engagement.
          </p>
          <div className="hero-meta">
            <span>Pokhara, Nepal</span>
            <span>Full-time remote availability</span>
            <span>English / Nepali / Hindi</span>
          </div>
          <div className="hero-actions">
            <a href="#contact" className="button button-primary">Hire me</a>
            <a href="#experience" className="button button-secondary">View experience</a>
          </div>
        </div>

        <aside className="hero-panel">
          <div className="panel-badge">Crypto & Community</div>
          <div className="panel-copy">
            <p className="panel-heading">Fast, trusted support for crypto projects</p>
            <p>
              I deliver high-quality moderation, quick customer support, and daily community
              management for Telegram, Discord, and exchange teams.
            </p>
          </div>
          <div className="stats-grid">
            <div>
              <strong>8+ hrs</strong>
              <span>Daily availability</span>
            </div>
            {/* <div>
              <strong>$10–20/hr</strong>
              <span>Target rate</span>
            </div> */}
            <div>
              <strong>4+ yrs</strong>
              <span>Trading experience</span>
            </div>
          </div>
        </aside>
      </header>

      <main>
        <section id="about" className="section-card" data-animate>
          <div className="section-head">
            <h2>About Me</h2>
            <p>I help crypto communities grow with trust, discipline, and fast support.</p>
          </div>
          <p>
            My work combines trading knowledge with crypto community operations. I support any kind of members through
            wallet issues, crypto exchange questions, deposits, withdrawals, and policy enforcement. 
            Can handle social media content posting, announcements, and engagement to keep communities active and informed.
            Strong communication and calm moderation keep communities safe and engaged.
          </p>
        </section>

        <section id="services" className="section-card" data-animate>
          <div className="section-head">
            <h2>What I offer</h2>
            <p>Services built for crypto projects, exchanges, blockchain communities and social media handling.</p>
          </div>
          <div className="service-grid">
            {services.map((item) => (
              <article key={item.title} className="service-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-card" data-animate>
          <div className="section-head">
            <h2>Core skills</h2>
            <p>Essential skills for crypto customer support and community operations.</p>
          </div>
          <ul className="skill-grid">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section id="experience" className="section-card" data-animate>
          <div className="section-head">
            <h2>Experience</h2>
            <p>Strong background supporting traders and managing online communities.</p>
          </div>
          <div className="experience-grid">
            {experience.map((item) => (
              <article key={item.title} className="experience-card">
                <h3>{item.title}</h3>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-card contact-section" data-animate>
          <div className="section-head">
            <h2>Contact</h2>
            <p>Ready to start fast and support your team with real crypto community experience.</p>
          </div>
          <p>
            Email: <strong>tuladharsushant90@gmail.com</strong> <br /> Telegram:{' '}
            <strong>@Mr_Michael69</strong>
          </p>
          <ContactForm />
        </section>
      </main>
    </div>
  );
}

export default App;
