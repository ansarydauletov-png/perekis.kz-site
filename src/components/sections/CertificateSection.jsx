import { qualitySection } from '../../data/content'

export default function CertificateSection() {
  return (
    <section className="t-rec t-rec--certificate">
      <div className="t-container">
        <a
          href={qualitySection.certificateUrl}
          className="t-btn t-btnflex t-btnflex--cert"
          target="_blank"
          rel="noreferrer"
        >
          {qualitySection.certificateLabel}
        </a>
      </div>
    </section>
  )
}
