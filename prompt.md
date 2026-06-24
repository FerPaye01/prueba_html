# Guía de Generación de Guiones Didácticos para Videos del Curso (Prompt de Delegación)

Este artefacto contiene el **prompt exacto y estructurado** listo para copiar y enviar a una IA experta. Está diseñado para producir guiones didácticos de video alineados con los marcos teóricos y prácticos de los 6 módulos del curso de **Gobierno de Datos de Osinergmin**.

> [!IMPORTANT]
> El prompt está optimizado para que la IA receptora entienda la estructura de las evaluaciones y ejercicios interactivos previamente programados, asegurando que la narración prepare al estudiante de manera natural y efectiva para superarlos.

***

## Copia y Pega el Siguiente Prompt en la IA Externa:

```text
Actúa como un Diseñador Instruccional Senior y Guionista Experto en Aprendizaje Corporativo y Sector Público. Tu objetivo es redactar los guiones de locución y video (de 3 a 5 minutos por módulo) para los 6 módulos del curso "Gobierno de Datos: Fundamentos y Aplicaciones" (Gobierno de Datos) de la institución Osinergmin.

Cada guión debe ser didáctico, comprensivo, cercano y empático, explicando conceptos complejos mediante analogías cotidianas y preparándolos directamente para resolver los ejercicios interactivos y las evaluaciones correspondientes.

### PARÁMETROS GENERALES DEL GUION
1. Tono: Profesional, motivador, empático y explicativo (adecuado para servidores públicos de perfiles técnicos y no técnicos).
2. Estructura de cada guión:
   - [AUDIO/LOCUCIÓN]: El texto exacto que dirá el presentador/narrador en voz alta.
   - [VISUAL/DIAPOSITIVA]: Instrucciones del apoyo visual en pantalla (iconografía, gráficos, animaciones sugeridas).
   - [CONCEPTO CLAVE]: Indicación explícita de qué pregunta o ejercicio se está resolviendo en ese bloque para asegurar la transferencia del aprendizaje.

---

### DIRECTRICES Y TEMARIO POR MÓDULO (Para alineación con Ejercicios y Evaluaciones)

#### MÓDULO 1: Fundamentos y Marco de Gobierno de Datos
- Eje Teórico: Valor Público y Beneficios Estratégicos del Gobierno de Datos, toma de decisiones basada en evidencia y eficiencia operativa. DL N° 1412 (Ley de Gobierno Digital). Rol de PIDE, PNDA y GeoPerú.
- Alineación Práctica (Para Ejercicios/Examen):
  * Explicar claramente cómo el Gobierno de Datos genera valor y mejora la eficiencia.
  * Estandarizar que el Gobierno de Datos no es un proyecto de TI, sino de Personas, Procesos y Cultura para tratar la información como un "Activo Estratégico".
  * Definir PIDE (interoperabilidad segura / APIs), PNDA (datos abiertos y transparencia para investigadores) y GeoPerú (mapas y territorio).
  * Analogía: El Director de Orquesta que no toca todos los instrumentos, sino que asegura que toquen la misma partitura (políticas comunes).

#### MÓDULO 2: Roles, Responsabilidades y Modelos Operativos
- Eje Teórico: Cadena de suministro de datos (Productor, Dueño/Owner, Custodio Técnico, Gestor/Steward, Analista). Modelos de Gobierno: Centralizado, Descentralizado y Federado (Híbrido). Gobernanza No Invasiva.
- Alineación Práctica (Para Ejercicios/Examen):
  * Analogía de la Cocina: Agricultor (Productor en ventanilla), Dueño de la Granja (Owner - define reglas de negocio), Distribuidor (Custodio técnico - TI/servidores), Jefe de tienda (Steward - clasifica metadatos), Chef (Analista - crea dashboards/insights).
  * Explicar el enfoque "No Invasivo" (Robert S. Seiner) de formalizar roles ya existentes en el día a día.
  * Comparar modelos: Centralizado (control inicial/cuellos de botella), Descentralizado (rapidez local/caos de silos), Federado (equilibrio estratégico central con agilidad e implementación local).

#### MÓDULO 3: Arquitectura, Plataformas e Interoperabilidad
- Eje Teórico: Datos Maestros. Catálogo de Datos, Glosario de Negocio (humanos), Diccionario de Datos (técnico SQL) y Linaje de Datos (trazabilidad). Capas de refinamiento de datos de Osinergmin (Bronce/Amarilla - origen, Plata/Verde - gobernada, Oro/Azul - explotación). Enfoque colaborativo según estándares internacionales.
- Alineación Práctica (Para Ejercicios/Examen):
  * Explicar el Glosario de Negocio (definición conceptual para el usuario) frente al Diccionario de Datos (parámetros SQL).
  * Definir Linaje como el mapa que detalla el camino histórico del dato.
  * Detallar las capas de Osinergmin: Bronce (datos crudos recién extraídos), Plata (data normalizada y gobernada) y Oro (data analítica para reportes).
  * Desarrollar el principio Once-Only (Una sola vez) para trámites de interoperabilidad.

#### MÓDULO 4: Gestión de la Calidad y Estandarización
- Eje Teórico: Dimensiones de calidad (exactitud, completitud, consistencia, oportunidad, validez, unicidad). Efecto GIGO (Garbage In, Garbage Out) en ventanillas públicas. Automatización vs parches en Excel.
- Alineación Práctica (Para Ejercicios/Examen):
  * Explicar el efecto GIGO: si ingresas basura al sistema, obtendrás reportes y políticas "basura".
  * Explicar las fallas de calidad más comunes: Validez (letras en campos de DNI), Consistencia (datos que no cuadran en distintos sistemas), Unicidad (registros duplicados sin control) y Oportunidad (datos desactualizados).
  * Destacar que corregir Exceles manualmente es insostenible; se deben usar validaciones automatizadas y atacar la causa raíz del error en el formulario de origen.

#### MÓDULO 5: Metadatos, Documentación y Trazabilidad
- Eje Teórico: Metadatos como el "ADN del dato". Estándar DCAT-AP en el Perú. Ciclo de vida del dato (ILDA). Catálogos vivos automáticos para evitar la obsolescencia manual. Trazabilidad en auditorías del regulador.
- Alineación Práctica (Para Ejercicios/Examen):
  * Explicar que el metadato es el "dato sobre el dato" (da contexto, formato y autoría al número).
  * Explicar el uso de DCAT-AP como estándar oficial para estructurar la PNDA peruana.
  * Destacar cómo el Linaje de Datos responde a auditorías y entes de control externos (explicando la procedencia exacta de un número en un reporte).
  * Explicar que el crecimiento del volumen de datos exige catálogos vivos automatizados.

#### MÓDULO 6: Seguridad, Privacidad, Anonimización y Ética
- Eje Teórico: Estrategia Defensiva (cumplimiento Ley N° 29733 y Confianza Digital - multas de hasta 100 UIT) vs. Estrategia Ofensiva (creación de modelos de IA y analítica). Seudonimización (reversible) frente a Anonimización (irreversible). Ética en IA, sesgo histórico y supervisión humana (Human-in-the-loop).
- Alineación Práctica (Para Ejercicios/Examen):
  * Explicar la balanza defensiva/ofensiva: 100% defensivo paraliza; 100% ofensivo expone a multas y brechas de seguridad.
  * Diferenciar: Seudonimización (usa un alias reversible con llave, sigue bajo el alcance de la Ley N° 29733) y Anonimización (proceso irreversible mediante supresión o generalización por rangos).
  * Abordar la ética en IA: evitar sesgos discriminatorios en datasets históricos mediante control humano activo.

---

### ESTRUCTURA DE ENTREGA REQUERIDA
Redacta el guión detallado para cada módulo secuencialmente. Utiliza tablas o bloques diferenciados de [NARRADOR] y [VISUAL] para facilitar la lectura. Asegúrate de incluir y enfatizar los conceptos señalados en la sección de 'Alineación Práctica' de forma fluida y natural en el texto didáctico.
```
