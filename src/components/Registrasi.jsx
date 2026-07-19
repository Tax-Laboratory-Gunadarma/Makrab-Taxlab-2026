import BentoCard from "./BentoCard";
import "./BentoGrid.css";

// TODO: ganti link ini dengan link Google Form pendaftaran yang asli
const GOOGLE_FORM_URL = "https://forms.gle/oHEQs5EV1URHiS5v5";

export default function Registrasi() {
  return (
    <section id="registrasi" className="section">
      <p className="eyebrow">Gabung Bersama Kami</p>
      <h2 className="section__heading">Registrasi</h2>

      <div className="bento-grid">
        <BentoCard
          span="square"
          eyebrow="Syarat"
          title="Siapa yang Boleh Daftar?"
        >
          Seluruh anggota Tax Laboratory yaitu Asisten, Staff, maupun Alumni.
        </BentoCard>

        <BentoCard span="square" eyebrow="Biaya" title="Rp 00.000">
          Sudah termasuk konsumsi, penginapan, dan perlengkapan kegiatan.
        </BentoCard>

        <BentoCard
          span="wide"
          tone="gradient-cta"
          eyebrow="Pendaftaran"
          title="Jangan sampai lupa daftar"
        >
          <p>
            Isi formulir pendaftaran di bawah ini sebelum batas waktu yang
            ditentukan.
          </p>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="registrasi__button"
          >
            {" "}
            Daftar Sekarang
          </a>
        </BentoCard>
      </div>
    </section>
  );
}
