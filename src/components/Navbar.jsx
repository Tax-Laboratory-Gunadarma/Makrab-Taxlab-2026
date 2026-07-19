import { useEffect, useState } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { href: "#home", label: "Beranda" },
  { href: "#tanggal-lokasi", label: "Tanggal & Lokasi" },
  { href: "#registrasi", label: "Registrasi" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Navbar berubah tampilan (kasih background solid) begitu user scroll ke bawah
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand">
          Makrab Tax Lab
        </a>

        <nav className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="navbar__toggle"
          aria-label="Buka menu navigasi"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
