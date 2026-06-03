'use strict';

/**
 * Static file server for the Meridian UI demo (sample numbers in data.jsx).
 * Auth, JSON store, and provider APIs are disabled for now — see server/index.with-api.js
 * and run: npm run start:api
 */
const path = require('path');
const express = require('express');

const PORT = Number(process.env.PORT) || 3000;
const ROOT = path.join(__dirname, '..');
const LANDING = path.join(ROOT, 'landing');

const app = express();
express.static.mime.define({ 'application/javascript': ['jsx'] });
app.use(express.static(LANDING, { extensions: ['html'] }));
app.use(express.static(ROOT, { extensions: ['html'] }));
app.get('/', (_req, res) => res.sendFile(path.join(LANDING, 'index.html')));
app.get('/app', (_req, res) => res.sendFile(path.join(ROOT, 'Meridian.html')));
app.get('/home', (_req, res) => res.redirect(301, '/'));

app.listen(PORT, () => {
  console.log(`Meridian UI (static demo)  http://localhost:${PORT}`);
  console.log(`  Landing    http://localhost:${PORT}/`);
  console.log(`  Dashboard  http://localhost:${PORT}/app`);
});
