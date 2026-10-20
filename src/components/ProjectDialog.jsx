import { useEffect, useRef } from 'react';

export function ProjectDialog({ project, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;

    if (project && !dialog.open) {
      dialog.showModal();
    }
  }, [project]);

  return (
    <dialog
      ref={ref}
      className="m-auto rounded-xl p-6"
      onClose={onClose}
      aria-labelledby="dlg-title"
    >
      <h2 id="dlg-title">
        {project?.title}
      </h2>

      <p>
        {project?.description}
      </p>

      <form method="dialog">
        <button>Đóng</button>
      </form>
    </dialog>
  );
}