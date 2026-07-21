import BentoCard from "./BentoCard";
import "./BentoGrid.css";

export default function TanggalLokasi() {
  return (
    <section id="tanggal-lokasi" className="section">
      <p className="eyebrow">Simpan Tanggalnya</p>
      <h2 className="section__heading">Tanggal & Lokasi</h2>

      <div className="bento-grid">
        <BentoCard span="wide-tall" tone="mauve" className="card--date">
          <div className="card__badge">
            <CalendarIcon />
            <span>Tanggal Acara</span>
          </div>

          <h3 className="card-date__title">
            29 <span className="card-date__dash">—</span> 30
          </h3>
          <p className="card-date__month">Agustus 2026</p>

          <p className="card-date__sub">
            Sabtu  &middot;  Minggu 
          </p>

          <LeafWatermark />
        </BentoCard>

        <BentoCard span="tall" tone="pink" className="card--location">
          <div className="card__badge card__badge--muted">
            <PinIcon />
            <span>Lokasi</span>
          </div>

          <h3 className="card-location__title">Villa Lexus 4</h3>

          <p className="card-location__desc">
            Jl. Raya Puncak, Cisarua,
            <br />
            Kabupaten Bogor, Jawa Barat
          </p>

          <div className="card-location__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.6802089873577!2d106.95436637676993!3d-6.6864769933088635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b70000ec1dd5%3A0x545233b32544662a!2sVilla%20Lexus%204!5e0!3m2!1sid!2sid!4v1784646259813!5m2!1sid!2sid"
              width="100%"
              height="220"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              title="Villa Lexus 4"
            />
          </div>

          <a
            href="https://maps.google.com/?q=Villa+Lexus+4+Cisarua+Bogor"
            target="_blank"
            rel="noopener noreferrer"
            className="card-location__button"
          >
            📍 Buka di Google Maps
          </a>

          <TreeWatermark />
</BentoCard>

        <BentoCard span="tall" tone="default" className="card--dresscode">
          <div className="card__badge card__badge--muted">
            <ShirtIcon />
            <span>Dress Code</span>
          </div>

          <h3 className="card-dresscode__title">Atasan Putih</h3>

          <p className="card-dresscode__desc">
            Disarankan membawa atasan putih untuk digunakan pada hari kedua.
          </p>


          <h4 className="card-dresscode__subtitle">Warna Pastel</h4>

          <p className="card-dresscode__note">
            Digunakan saat kepulangan (Hari ke-2).
          </p>
        </BentoCard>
      </div>
    </section>
  );
}

/* ---------- Icon kecil, inline biar nggak nambah dependency ---------- */

function CalendarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

function ShirtIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M8 4 4 7l2 3 2-1v11h8V9l2 1 2-3-4-3-2 2-2-2Z" />
    </svg>
  );
}

/* Watermark dekoratif, murni visual — aman diabaikan screen reader */
function LeafWatermark() {
  return (
    <svg
      className="card__watermark"
      width="60"
      height="70"
      viewBox="0 0 60 70"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M30 5C15 15 8 35 20 55c5 8 15 10 25 5C40 55 30 40 30 5Z" />
    </svg>
  );
}

function TreeWatermark() {
  return (
    <svg
      className="card__watermark"
      width="60"
      height="90"
      viewBox="0 0 60 90"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M30 5 10 40h12L10 65h14v20h12V65h14L38 40h12L30 5Z" />
    </svg>
  );
}
