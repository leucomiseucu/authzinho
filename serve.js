const express = require("express");
const path = require("path");
const app = express();

// Servir arquivos estáticos (HTML/CSS/JS) da pasta public
app.use(express.static(path.join(__dirname, "public")));

// Rota de callback do Discord OAuth2
app.get("/auth/callback", (req, res) => {
  const code = req.query.code;
  if (!code) return res.status(400).send("Código não encontrado.");
  res.send(`Código de autenticação recebido: ${code}`);
});

// Start do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
