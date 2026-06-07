import Section from '../layout/Section'
import { delivery } from '../../data/content'

export default function DeliverySection() {
  return (
    <Section title={delivery.title} className="t-rec--delivery">
      <p className="t-text t-text--center t-delivery__text">{delivery.text}</p>
      <div className="t-delivery__media">
        <img src={delivery.image} alt="" />
      </div>
    </Section>
  )
}
