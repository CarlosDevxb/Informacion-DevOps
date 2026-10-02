'use strict';

const { test, after } = require('node:test');
const assert = require('node:assert');
const { createApp } = require('../src/app');
const { devopsPractices, cloudConcepts } = require('../src/data/content');

let server;
let baseUrl;

test.before(async () => {
  server = createApp().listen(0);
  await new Promise((resolve) => server.once('listening', resolve));
  baseUrl = `http://localhost:${server.address().port}`;
});

after(() => {
  if (server) server.close();
});

test('GET / responde 200 y contiene el título', async () => {
  const res = await fetch(`${baseUrl}/`);
  assert.strictEqual(res.status, 200);
  const html = await res.text();
  assert.match(html, /DevOps y Computo en la Nube/);
});

test('GET / incluye las prácticas de DevOps', async () => {
  const res = await fetch(`${baseUrl}/`);
  const html = await res.text();
  for (const practica of devopsPractices) {
    assert.ok(html.includes(practica.titulo), `Falta: ${practica.titulo}`);
  }
});

test('GET /health responde estado ok', async () => {
  const res = await fetch(`${baseUrl}/health`);
  assert.strictEqual(res.status, 200);
  const body = await res.json();
  assert.strictEqual(body.status, 'ok');
});

test('GET /api/devops devuelve la lista de prácticas', async () => {
  const res = await fetch(`${baseUrl}/api/devops`);
  assert.strictEqual(res.status, 200);
  const body = await res.json();
  assert.strictEqual(body.total, devopsPractices.length);
  assert.ok(Array.isArray(body.prácticas));
});

test('GET /api/cloud devuelve conceptos de nube', async () => {
  const res = await fetch(`${baseUrl}/api/cloud`);
  assert.strictEqual(res.status, 200);
  const body = await res.json();
  assert.strictEqual(body.total, cloudConcepts.length);
});

test('GET /api/pipeline devuelve las etapas', async () => {
  const res = await fetch(`${baseUrl}/api/pipeline`);
  assert.strictEqual(res.status, 200);
  const body = await res.json();
  assert.ok(body.etapas.length >= 4);
});

test('GET /ruta-inexistente responde 404', async () => {
  const res = await fetch(`${baseUrl}/ruta-inexistente`);
  assert.strictEqual(res.status, 404);
});
