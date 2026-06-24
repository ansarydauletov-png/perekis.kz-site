import Section from '../layout/Section'
import { locationSection } from '../../data/content'

export default function LocationSection() {
  return (
    <Section
      id="location"
      title={locationSection.title}
      className="t-rec--location"
      containerClass="t-location__container"
    >
      <div className="t-location">
        <div className="t-location__text">
          <p className="t-location__label">
            <strong>{locationSection.addressLabel}</strong>
          </p>
          <p className="t-location__address">
            <strong>{locationSection.address}</strong>
          </p>
          <p className="t-location__note">{locationSection.addressNote}</p>
        </div>
        <div className="t-location__map">
          <img src={locationSection.image} alt="Карта офиса ZNS на 2GIS" />
        </div>
        <div className="t-location__actions">
          <a
            href={locationSection.routeUrl}
            className="t-btn t-btnflex t-btnflex--route"
            target="_blank"
            rel="noreferrer"
          >
            {locationSection.routeLabel}
          </a>
        </div>
      </div>
    </Section>
  )
}
