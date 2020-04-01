/**
 * sendWhatsappMessage
 * @param {number} phone - Company phone number
 * @param {number} message - Message Content
 */

export function sendWhatsappMessage(phone, message) {
  const url = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;

  const childWindow = window.open(url, '__blank');
  return childWindow;
}
