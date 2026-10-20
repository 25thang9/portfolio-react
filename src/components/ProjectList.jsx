import { useState } from 'react';
import ProjectCard from './ProjectCard.jsx';
import { ProjectDialog } from './ProjectDialog.jsx';

export default function ProjectList({ projects }) {
  const [selected, setSelected] = useState(null);

  if (projects.length === 0) {
    return (
      <p className="empty-state">
        Không có dự án phù hợp.
      </p>
    );
  }

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            onOpen={() => setSelected(p)}
          />
        ))}
      </div>

      <ProjectDialog
        project={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}