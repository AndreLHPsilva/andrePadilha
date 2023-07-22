/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
    EMAILJS_PRIVATE_KEY: process.env.EMAILJS_PRIVATE_KEY,
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    SITE_KEY_RECAPTCHA: process.env.SITE_KEY_RECAPTCHA,
    SECRET_KEY_RECAPTCHA: process.env.SECRET_KEY_RECAPTCHA,
  }
}

module.exports = nextConfig
