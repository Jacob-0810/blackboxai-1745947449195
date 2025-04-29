const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

const allowedDomain = '@colegiocalatrava.edu.co';
const adminEmails = [
  'jacobourbano0810@gmail.com',
  'danielitogral2@gmail.com'
];

// Simple login endpoint to validate email domain and role
app.post('/api/login', (req, res) => {
  const { email } = req.body;
  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Email es requerido' });
  }
  if (!email.toLowerCase().endsWith(allowedDomain)) {
    return res.status(403).json({ error: 'Dominio de correo no permitido' });
  }
  const isAdmin = adminEmails.includes(email.toLowerCase());
  res.json({ success: true, isAdmin });
});

// Serve index.html for all other routes (for SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
