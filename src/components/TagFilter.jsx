export default function TagFilter({
  tags,
  activeTag,
  onChange,
}) {
  return (
    <div className="filters">
      <button
        type="button"
        onClick={() => onChange('all')}
        aria-pressed={activeTag === 'all'}
      >
        Tất cả
      </button>

      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onChange(tag)}
          aria-pressed={activeTag === tag}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}