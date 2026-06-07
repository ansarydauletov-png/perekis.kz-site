import { images } from '../../data/content'
import { getWhatsAppUrl } from '../../lib/whatsapp'

export default function TildaFab() {
  return (
    <a
      href={getWhatsAppUrl()}
      className="t-fab-wa"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
    >
      <img src={images.whatsappFab} alt="" />
    </a>
  )
}
