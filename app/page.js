'use client';

import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Terminal, Rocket, Heart, Users, BookOpen } from 'lucide-react';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.profile}>
          <div className={styles.avatar}>LC</div>
          <div className={styles.profileInfo}>
            <h1>Louis Chen</h1>
            <p className={styles.title}>Fullstack Developer</p>
            <div className={styles.socialLinks}>
              <a href="https://www.linkedin.com/in/louischen1" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a href="mailto:contact@louischen.com" className={styles.socialBtn}>
                <Mail size={20} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Users size={28} /> About Me
          </h2>
          <p className={styles.aboutText}>
            Passionate Fullstack Developer with expertise in building scalable web applications.
            I love creating elegant solutions to complex problems and continuously learning new technologies.
            With a strong foundation in both frontend and backend development, I strive to deliver high-quality,
            user-centric digital experiences.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Code size={28} /> Technical Skills
          </h2>
          <div className={styles.skillsGrid}>
            <SkillCard
              icon={<Code size={24} />}
              title="Frontend"
              skills={['HTML5 & CSS3/SCSS', 'JavaScript (ES6+)', 'React.js & Next.js', 'Vue.js', 'TypeScript', 'Responsive Design']}
            />
            <SkillCard
              icon={<Server size={24} />}
              title="Backend"
              skills={['Node.js', 'Express.js', 'Python', 'Django/Flask', 'RESTful APIs', 'GraphQL']}
            />
            <SkillCard
              icon={<Database size={24} />}
              title="Database"
              skills={['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Database Design']}
            />
            <SkillCard
              icon={<Terminal size={24} />}
              title="DevOps & Tools"
              skills={['Git & GitHub', 'Docker', 'CI/CD Pipelines', 'AWS/Azure', 'Linux', 'Agile/Scrum']}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            <Heart size={28} /> Interests & Approach
          </h2>
          <div className={styles.interestsGrid}>
            <InterestCard
              icon={<Rocket size={32} />}
              title="Innovation"
              description="Exploring cutting-edge technologies and implementing modern solutions to stay ahead of the curve."
            />
            <InterestCard
              icon={<Code size={32} />}
              title="Clean Code"
              description="Writing maintainable, scalable, and well-documented code that is easy to understand and extend."
            />
            <InterestCard
              icon={<Users size={32} />}
              title="Collaboration"
              description="Thriving in team environments and contributing to open-source projects to build better software together."
            />
            <InterestCard
              icon={<BookOpen size={32} />}
              title="Continuous Learning"
              description="Constantly improving skills and staying updated with industry trends to provide the best solutions."
            />
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Louis Chen. All rights reserved.</p>
        <p className={styles.builtWith}>Built with Next.js & Rspack</p>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, skills }) {
  return (
    <div className={styles.skillCard}>
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>{icon}</span>
        <h3>{title}</h3>
      </div>
      <ul className={styles.skillList}>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function InterestCard({ icon, title, description }) {
  return (
    <div className={styles.interestCard}>
      <div className={styles.interestIcon}>{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
