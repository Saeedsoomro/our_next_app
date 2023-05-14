export default function handler(req, res) {
  const email = process.env.GMAIL_EMAIL_ADDRESS;
  res.status(200).json(email);
}
