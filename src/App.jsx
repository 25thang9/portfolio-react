import { useState } from 'react';
import { projects } from './data/projects.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TagFilter from './components/TagFilter.jsx';
import ProjectList from './components/ProjectList.jsx';
import ContactForm from './components/ContactForm.jsx';
import './index.css';
import { GitHubRepos } from './components/GitHubRepos.jsx';

export default function App() {
  const [activeTag, setActiveTag] =
    useState('all');

  const tags = [
    ...new Set(
      projects.flatMap((p) => p.tags),
    ),
  ];

  const shown =
    activeTag === 'all'
      ? projects
      : projects.filter((p) =>
          p.tags.includes(activeTag),
        );

  return (
    <>
      <Header />

      <main className="container">
        <Hero />

        <section
          id="projects"
          className="section"
        >
          <h2>Dự án của mình</h2>

          <TagFilter
            tags={tags}
            activeTag={activeTag}
            onChange={setActiveTag}
          />

          <ProjectList projects={shown} />
        </section>

        <section
          id="contact"
          className="section"
        >
          <h2>Liên hệ</h2>

          <p>
            Bạn có thể gửi thông tin cho mình
            bằng biểu mẫu bên dưới.
          </p>

          <ContactForm />
        </section>
 <section id="repos" className="section">
  <h2>Repo GitHub</h2>

  <GitHubRepos username="25thang9" />
</section>
      </main>
    </>
  );
}