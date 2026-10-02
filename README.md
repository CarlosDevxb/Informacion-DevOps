# CloudOps Hub — DevOps y Computo en la Nube

Portal web construido con **Node.js + Express** con contenido sobre prácticas de
DevOps, conceptos de computo en la nube y las etapas de un pipeline de despliegue.

## Características

- Servidor Express con vistas EJS y API JSON.
- Endpoints:
  - `/` — página principal con el contenido
  - `/api/devops` — prácticas de DevOps
  - `/api/cloud` — conceptos de computo en la nube
  - `/api/pipeline` — etapas del pipeline
  - `/health` — health check para los pipelines
- Pruebas con el runner nativo de Node (`node:test`).

## Requisitos

- Node.js >= 18

## Ejecutar localmente

```bash
npm install
npm start
```

Abrir http://localhost:3000

## Ejecutar pruebas

```bash
npm test
```

## CI/CD

### GitHub Actions

- `.github/workflows/ci.yml` — build y pruebas en push/PR a `main`.
- `.github/workflows/deploy-azure.yml` — despliegue a Azure App Service usando
  **OIDC (federated identity)**, sin secretos de largo plazo.

#### Configuración del despliegue con OIDC

1. Crear el service principal con credencial federada para tu repo:

   ```bash
   az ad sp create-for-rbac --name "github-cloudops-hub" \
     --role contributor \
     --scopes /subscriptions/<SUBSCRIPTION_ID> \
     --federated-identity-identifier "org/repo:ref:refs/heads/main" \
     --query "{clientId: clientId, tenantId: tenantId}"
   ```

   > Si tu versión de Azure CLI no soporta `--federated-identity-identifier`,
   > crea el SP normal y agrega la credencial federada después:
   > `az ad app federated-credential create --id <APP_ID> --parameters '{"issuer":"https://token.actions.githubusercontent.com","subject":"repo:ORG/REPO:ref:refs/heads/main","audiences":["api://AzureADTokenExchange"]}'`

2. En GitHub → *Settings → Secrets and variables → Actions → Variables*, crear:
   - `AZURE_CLIENT_ID`
   - `AZURE_TENANT_ID`
   - `AZURE_SUBSCRIPTION_ID`

3. El workflow usa el **environment `production`**; crearlo en
   *Settings → Environments* (opcionalmente con protección de aprobación).

### Azure Pipelines

- `azure-pipelines.yml` — pipeline de dos etapas (Build → Deploy) para Azure DevOps.
  Configurar el servicio de conexión de Azure RM y la variable `webAppName`
  con el nombre real del App Service.

## Estructura

```
├── .github/workflows/     # GitHub Actions
├── src/
│   ├── app.js             # Configuración de Express y rutas
│   ├── server.js          # Punto de entrada
│   ├── data/content.js    # Contenido DevOps y cloud
│   ├── views/index.ejs    # Plantilla principal
│   └── public/styles.css  # Estilos
├── test/app.test.js       # Pruebas
├── azure-pipelines.yml    # Azure DevOps pipeline
└── package.json
```
