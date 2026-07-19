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
            Sabtu &middot; Minggu &middot; Rangkaian Acara
          </p>

          <LeafWatermark />
        </BentoCard>

        <BentoCard span="tall" tone="pink" className="card--location">
          <div className="card__badge card__badge--muted">
            <PinIcon />
            <span>Lokasi</span>
          </div>

          <h3 className="card-location__title">Villa Gajah Duduk</h3>
          <p className="card-location__desc">
            {/* TODO: ganti dengan alamat lengkap */}
            Jl. Gajah Duduk nomor sekian.
          </p>

          {/* TODO: ganti dengan embed map asli */}
          <div className="map-placeholder">Peta lokasi (placeholder)</div>

          <TreeWatermark />
        </BentoCard>

        <BentoCard span="tall" tone="default" className="card--dresscode">
          <div className="card__badge card__badge--muted">
            <ShirtIcon />
            <span>Dress Code</span>
          </div>

          <h3 className="card-dresscode__title">Atasan Putih</h3>
          <p className="card-dresscode__desc">
            Disarankan membawa atasan putih untuk di hari kedua.
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
