import prisma from '../../lib/client';

export default async function handler(req, res) {
  const { name, email, message } = req.body;
  try {
    await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });
    res.status(200).json({ message: 'submitted successfully' });
  } catch (error) {
    res.status(400).json({ error });
  }
}
