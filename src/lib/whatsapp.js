import { contactInfo } from '../data/content'

export function getWhatsAppUrl(message = contactInfo.contactMessage) {
  const base = `https://wa.me/${contactInfo.whatsapp}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export function getOrderWhatsAppUrl() {
  return getWhatsAppUrl(contactInfo.buyMessage)
}
