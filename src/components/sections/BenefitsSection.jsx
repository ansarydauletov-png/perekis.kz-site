import Section from '../layout/Section'
import { companyBenefitsSection } from '../../data/content'

export default function BenefitsSection() {
  return (
    <Section title={companyBenefitsSection.title} className="t-rec--company">
      <ul className="t-company-benefits">
        {companyBenefitsSection.items.map((item) => (
          <li key={item.title} className="t-company-benefits__item">
            <img src={item.icon} alt="" className="t-company-benefits__icon" />
            <div className="t-company-benefits__body">
              <p className="t-company-benefits__title">
                <strong>{item.title}</strong>
              </p>
              <p className="t-company-benefits__text">
                <strong>{item.text}</strong>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
