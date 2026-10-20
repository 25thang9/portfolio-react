export default function ProjectCard({ project, onOpen }) {
  return (
    <article
      className="rounded-xl bg-white p-6
      shadow-sm hover:shadow-md dark:bg-slate-800"
    >
      <h3 className="text-lg font-semibold">
        {project.title}
      </h3>

      <p className="mt-2">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag} className="border px-2">
            {tag}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onOpen}
        className="mt-4 underline"
      >
        Xem chi tiết
      </button>
    </article>
  );
}