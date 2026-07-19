import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background ilustrasi dibuat pakai SVG, bukan foto asli —
          jadi bebas lisensi dan ringan untuk performa halaman */}
      <svg
        className="hero__bg"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f6b8c4" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ecdade" stopOpacity="0" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="1200" height="700" fill="url(#sky)" />

        {/* lapisan bukit rumput, dari yang paling jauh ke paling dekat */}
        <path
          d="M0,420 Q300,360 600,410 T1200,400 L1200,700 L0,700 Z"
          fill="#c8d3ad"
          opacity="0.6"
        />
        <path
          d="M0,480 Q300,430 650,470 T1200,450 L1200,700 L0,700 Z"
          fill="var(--color-sage)"
          opacity="0.7"
        />
        <path
          d="M0,560 Q350,500 700,540 T1200,520 L1200,700 L0,700 Z"
          fill="var(--color-sage-dark)"
        />

        {/* Bunga 1 - kombinasi oranye & kuning mustard */}
        <g className="hero__flower hero__flower--right">
          <g fill="#e08a3c">
            <ellipse cx="0" cy="-28" rx="16" ry="26" transform="rotate(0)" />
            <ellipse cx="0" cy="-28" rx="16" ry="26" transform="rotate(72)" />
            <ellipse cx="0" cy="-28" rx="16" ry="26" transform="rotate(144)" />
            <ellipse cx="0" cy="-28" rx="16" ry="26" transform="rotate(216)" />
            <ellipse cx="0" cy="-28" rx="16" ry="26" transform="rotate(288)" />
          </g>
          <circle cx="0" cy="0" r="14" fill="#f2c94c" />
          <rect x="-3" y="14" width="6" height="40" fill="#5b8c5a" />
        </g>

        {/* Bunga 2 - kombinasi teal & ungu tua */}
        <g className="hero__flower hero__flower--left">
          <g fill="#3a8f8a">
            <ellipse cx="0" cy="-22" rx="13" ry="20" transform="rotate(0)" />
            <ellipse cx="0" cy="-22" rx="13" ry="20" transform="rotate(72)" />
            <ellipse cx="0" cy="-22" rx="13" ry="20" transform="rotate(144)" />
            <ellipse cx="0" cy="-22" rx="13" ry="20" transform="rotate(216)" />
            <ellipse cx="0" cy="-22" rx="13" ry="20" transform="rotate(288)" />
          </g>
          <circle cx="0" cy="0" r="11" fill="#6b4c8a" />
          <rect x="-2.5" y="10" width="5" height="32" fill="#5b8c5a" />
        </g>
      </svg>

      {/* beberapa helai rumput di depan, dianimasikan bergoyang pelan */}
      <div className="hero__grass" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className="hero__blade" style={{ "--i": i }} />
        ))}
      </div>

      <div className="hero__content">
        <p className="eyebrow">Malam Keakraban</p>
        <h1 className="hero__title">Makrab Tax Laboratory</h1>
        <p className="hero__subtitle">
          Taxnity: Building Connections, Growing Together
        </p>
        <a href="#registrasi" className="hero__cta">
          Daftar Sekarang
        </a>
      </div>
    </section>
  );
}
