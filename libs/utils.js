/**
 * entWhatsappMessage
 * @param {number} phone - conpany phone number
 * @param {number} message - text from ticket context
 */
export function sentWhatsappMessage(phone, message) {
  const URL_BASE = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`
  const childWindow = window.open(URL_BASE, '__blank')
  console.log(childWindow)
  return childWindow
}
