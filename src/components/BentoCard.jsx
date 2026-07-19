import './BentoCard.css';

/**
 * Kartu serbaguna untuk Bento Grid.
 * `span` menentukan ukuran kartu di grid desktop, contoh: "wide", "tall", "square".
 * Class-nya didefinisikan di BentoGrid.css (grid-column / grid-row).
 */
export default function BentoCard({ span = 'square', tone = 'default', eyebrow, title, children, className = '' }) {
  return (
    <div className={`bento-card bento-card--${span} bento-card--${tone} ${className}`}>
      {eyebrow && <p className="eyebrow bento-card__eyebrow">{eyebrow}</p>}
      {title && <h3 className="bento-card__title">{title}</h3>}
      <div className="bento-card__body">{children}</div>
    </div>
  );
}
