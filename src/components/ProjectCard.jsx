export default function ProjectCard({ project }) {
  return (
    <li className="card">
      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <p className="project-tags">
        {project.tags.join(' • ')}
      </p>
    </li>
  );
}