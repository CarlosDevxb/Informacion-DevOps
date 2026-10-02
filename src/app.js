'use strict';

const path = require('path');
const express = require('express');
const { devopsPractices, cloudConcepts, pipelineStages } = require('./data/content');

function createApp() {
  const app = express();

  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));

  app.use(express.static(path.join(__dirname, 'public')));

  // Página principal
  app.get('/', (req, res) => {
    res.render('index', {
      devopsPractices,
      cloudConcepts,
      pipelineStages,
      version: require('../package.json').version
    });
  });

  // API JSON para consumir el contenido desde otros clientes
  app.get('/api/devops', (req, res) => {
    res.json({ total: devopsPractices.length, prácticas: devopsPractices });
  });

  app.get('/api/cloud', (req, res) => {
    res.json({ total: cloudConcepts.length, conceptos: cloudConcepts });
  });

  app.get('/api/pipeline', (req, res) => {
    res.json({ etapas: pipelineStages });
  });

  // Endpoint de salud usado por los pipelines y por el sondeo del App Service
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', uptime: process.uptime() });
  });

  // 404
  app.use((req, res) => {
    res.status(404).render('index', {
      devopsPractices,
      cloudConcepts,
      pipelineStages,
      version: require('../package.json').version,
      notFound: true
    });
  });

  return app;
}

module.exports = { createApp };
