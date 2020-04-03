/**
 * sendWhatsappMessage
 * @param {number} phone - Company phone number
 * @param {number} message - Message Content
 */

export function sendWhatsappMessage(phone, message) {
  return window.open(
    `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURI(message)}`
    , '__blank'
  );
}
