'use strict';

/**
 * Contenido estático de la aplicación: temas de DevOps y computo en la nube.
 */

const devopsPractices = [
  {
    id: 'integracion-continua',
    titulo: 'Integración Continua (CI)',
    resumen: 'Combinar los cambios de todos los desarrolladores varias veces al día en un repositorio compartido.',
    detalles:
      'Cada integración se verifica con una build automatizada y pruebas automáticas para detectar errores lo antes posible. ' +
      'Reduce los conflictos de integración y mantiene el código siempre en un estado desplegable.',
    herramientas: ['Azure Pipelines', 'GitHub Actions', 'Jenkins']
  },
  {
    id: 'entrega-continua',
    titulo: 'Entrega Continua (CD)',
    resumen: 'Automatizar el despliegue de cada cambio validado en un entorno de preparación o producción.',
    detalles:
      'Los artefactos generados en la fase de build se publican mediante pipelines con aprobaciones manuales y estrategias ' +
      'como despliegue azul/verde o canary para minimizar el riesgo.',
    herramientas: ['Azure Pipelines', 'GitHub Actions', 'ArgoCD']
  },
  {
    id: 'infraestructura-como-codigo',
    titulo: 'Infraestructura como Código (IaC)',
    resumen: 'Gestionar la infraestructura mediante archivos de definición versionados en el repositorio.',
    detalles:
      'Permite crear, modificar y destruir entornos de forma reproducible y auditable. Los cambios en la infraestructura ' +
      'se revisan mediante pull requests igual que el código de la aplicación.',
    herramientas: ['Terraform', 'Bicep', 'ARM Templates', 'Pulumi']
  },
  {
    id: 'monitorizacion',
    titulo: 'Monitorización y Observabilidad',
    resumen: 'Recopilar métricas, logs y trazas para conocer el estado real de la aplicación en producción.',
    detalles:
      'Los dashboards y alertas permiten detectar incidentes antes de que los usuarios los noten, y alimentan el ciclo de ' +
      'mejora continua con datos reales del funcionamiento del sistema.',
    herramientas: ['Azure Monitor', 'Application Insights', 'Prometheus', 'Grafana']
  },
  {
    id: 'devsecops',
    titulo: 'DevSecOps',
    resumen: 'Integrar la seguridad en todas las fases del ciclo de desarrollo, no solo al final.',
    detalles:
      'Incluye análisis estático de código (SAST), escaneo de dependencias, análisis de contenedores y pruebas de seguridad ' +
      'automatizadas dentro del pipeline de CI/CD.',
    herramientas: ['Dependabot', 'SonarQube', 'Trivy', 'Microsoft Defender for Cloud']
  }
];

const cloudConcepts = [
  {
    id: 'modelos-servicio',
    titulo: 'Modelos de servicio en la nube',
    resumen: 'IaaS, PaaS y SaaS: distintos niveles de responsabilidad entre el usuario y el proveedor.',
    detalles:
      'En IaaS se gestionan el sistema operativo y las aplicaciones; en PaaS solo el código y los datos; en SaaS solo el ' +
      'uso del producto. Azure DevOps es un servicio SaaS para el ciclo de desarrollo.',
    categorias: ['IaaS', 'PaaS', 'SaaS']
  },
  {
    id: 'carateristicas-elasticidad',
    titulo: 'Escalabilidad y elasticidad',
    resumen: 'Capacidad de crecer o reducir recursos según la demanda de forma automática.',
    detalles:
      'La escalabilidad vertical aumenta la potencia de una máquina; la horizontal añade más instancias. La elasticidad ' +
      'ajusta la infraestructura automáticamente para optimizar costos.',
    categorias: ['Autoescalado', 'Balanceo de cargas', 'Costo optimizado']
  },
  {
    id: 'contenedores',
    titulo: 'Contenedores y orquestación',
    resumen: 'Empaquetar la aplicación con sus dependencias para ejecutarla de forma consistente en cualquier entorno.',
    detalles:
      'Docker estandariza la imagen del contenedor y Kubernetes orquesta su despliegue, escalado y recuperación ante fallos. ' +
      'Ambos son piezas clave de las arquitecturas modernas en la nube.',
    categorias: ['Docker', 'Kubernetes', 'Azure Kubernetes Service']
  },
  {
    id: 'devops-en-la-nube',
    titulo: 'DevOps en la nube',
    resumen: 'Servicios gestionados que cubren todo el ciclo de desarrollo: planificar, construir, probar y desplegar.',
    detalles:
      'Azure DevOps integra Repositorios, Boards, Pipelines y Artifacts en un solo servicio. Las pipelines pueden desplegar ' +
      'a Azure App Service, AKS, Azure Functions o VMs con tan solo definir un archivo YAML.',
    categorias: ['Azure DevOps', 'Azure Pipelines', 'Azure Repos']
  },
  {
    id: 'fiabilidad',
    titulo: 'Fiabilidad y recuperación ante desastres',
    resumen: 'Diseñar sistemas que toleran fallos y permiten restaurar el servicio rápidamente.',
    detalles:
      'Incluye redundancia multi-región, copias de seguridad automáticas, los acuerdos de nivel de servicio (SLA) y los ' +
      'objetivos de tiempo de recuperación (RTO/RPO).',
    categorias: ['SLA', 'RTO/RPO', 'Alta disponibilidad']
  }
];

const pipelineStages = [
  { etapa: '1. Repositorio', descripcion: 'El código se versiona en Azure Repos o GitHub y los cambios entran mediante ramas y pull requests.' },
  { etapa: '2. Build', descripcion: 'El pipeline compila la aplicación, ejecuta las pruebas y genera un artefacto versionado.' },
  { etapa: '3. Análisis', descripcion: 'Se ejecutan escaneos de seguridad y calidad de código (lint, SAST, dependencias).' },
  { etapa: '4. Despliegue a QA', descripcion: 'El artefacto se publica en un entorno de pruebas automatizadas para validación.' },
  { etapa: '5. Aprobación', descripcion: 'Una validación manual o automática habilita el paso a producción.' },
  { etapa: '6. Producción', descripcion: 'Despliegue progresivo con monitorización y posibilidad de reversión rápida.' }
];

module.exports = { devopsPractices, cloudConcepts, pipelineStages };
