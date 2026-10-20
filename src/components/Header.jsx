export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo" href="#home">
          VTT
        </a>

        <nav>
          <ul className="nav-list">
            <li>
              <a href="#home">Giới thiệu</a>
            </li>
            <li>
              <a href="#projects">Dự án</a>
            </li>
            <li>
              <a href="#contact">Liên hệ</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}