import emailjs from 'emailjs-com'

type MailData = {
  firstName: string
  lastName: string
  email: string
  contactNo: string
  message: string
}

export const send = async (data: MailData) => {
  const templateParams = {
    name: `${data.firstName} ${data.lastName}`,
    email: data.email,
    number: data.contactNo,
    message: data.message,
  }

  try {
    const response = await emailjs.send(
      'service_lia6mzb',           // Your EmailJS service ID
      'template_eishv9t',          // Your EmailJS template ID
      templateParams,
      'm4pUhpIErQ8mMId_Z'          // Your EmailJS public key
    )
    return response
  } catch (error) {
    throw new Error("Failed to send email")
  }
}
