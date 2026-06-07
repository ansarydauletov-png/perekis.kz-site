import {
  heroCopy,
  processSection,
  productBenefitsSection,
  qualitySection,
} from '../../data/content'

function HeroInfoItem({ image, title, titleAccent, layout = 'img-left', children }) {
  return (
    <li className={`t-hero-info__item t-hero-info__item--${layout}`}>
      <div className="t-hero-info__media">
        <img src={image} alt="" />
      </div>
      <div className="t-hero-info__content">
        {title ? <p className="t-hero-info__title">{title}</p> : null}
        {titleAccent ? <p className="t-hero-info__title-accent">{titleAccent}</p> : null}
        {children}
      </div>
    </li>
  )
}

export default function HeroSection() {
  return (
    <section className="t-rec t-rec-hero" id="hero">
      <div className="t-container t-hero__intro">
        <h1 className="t-hero__title">{heroCopy.title}</h1>
        <p className="t-hero__subtitle">{heroCopy.subtitle}</p>
        <div className="t-hero__actions">
          <a href="#buy" className="t-btn t-btnflex">
            {heroCopy.ctaCatalog}
          </a>
          <a href="#kall" className="t-btn t-btnflex">
            {heroCopy.ctaCalculator}
          </a>
        </div>
      </div>
      <ul className="t-hero-info">
        <HeroInfoItem image={processSection.image} title={processSection.title}>
          <p className="t-hero-info__text">{processSection.text}</p>
        </HeroInfoItem>

        <HeroInfoItem
          image={productBenefitsSection.image}
          title={productBenefitsSection.title}
          titleAccent={productBenefitsSection.titleAccent}
          layout="img-right"
        >
          {productBenefitsSection.items.map((item) => (
            <div key={item.title} className="t-hero-info__point">
              <p className="t-hero-info__point-title">
                <strong>{item.title}</strong>
              </p>
              <p className="t-hero-info__point-text">{item.text}</p>
            </div>
          ))}
        </HeroInfoItem>

        <HeroInfoItem image={qualitySection.image} title={qualitySection.title}>
          <p className="t-hero-info__text">{qualitySection.text}</p>
        </HeroInfoItem>
      </ul>
    </section>
  )
}
