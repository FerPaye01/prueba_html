# MÓDULO 5: Metadatos, Documentación y Trazabilidad (El ADN y el Mapa del Dato)

Este documento recopila la información teórica, metodológica y los recursos prácticos del Módulo 5 para su posterior integración en la plataforma de aprendizaje (LMS).

---

## COMPONENTE 1: FUENTE DE CONOCIMIENTO (Material de Estudio)

Este material se presentará como un paquete interactivo tipo SCORM que incluye lecturas, normativas y apoyo visual para los colaboradores.

### 1. Fuentes Normativas y Manuales (Sección de "Descargables"):
* **Guía Internacional y Didáctica:** 
  * Estándares internacionales de Gobernanza de Datos (*Data Governance Concepts*: Soluciones Técnicas, Glosarios y Automatización).
  * Guía Internacional DAMA-DMBOK2 - Capítulo 11: *Metadata Management*.
* **Estándar Normativo Peruano:** 
  * Lineamientos de la Secretaría de Gobierno y Transformación Digital (SGTD) para el uso del estándar DCAT-AP en la Plataforma Nacional de Datos Abiertos (PNDA).
* **Manual Corporativo Osinergmin:** 
  * Procedimiento PI-59 de Gestión de Gobernanza de Datos.
* **Documento de Referencia:** 
  * Guías de la Iniciativa Latinoamericana por los Datos Abiertos (ILDA) sobre el ciclo de vida del dato.

### 2. Texto Didáctico Específico del Curso:

#### La Infraestructura Invisible: El Dato sobre el Dato (DCAT-AP)
Imagina entrar a la Biblioteca Nacional y descubrir que ningún libro tiene título, lomo, autor ni índice. Encontrar la información sería imposible. Los **Metadatos** ("datos sobre datos") son exactamente esas fichas bibliográficas: nos responden quién creó el dato, cuándo se actualizó, qué metodología se usó y bajo qué licencia se puede reutilizar.

Para evitar que la **Plataforma Nacional de Datos Abiertos (PNDA)** se convierta en una biblioteca caótica, el Perú no inventa sus propias reglas. La **Secretaría de Gobierno y Transformación Digital (SGTD)** de la PCM promueve el uso del estándar internacional **DCAT-AP** (Data Catalog Vocabulary - Application Profile). Es el "idioma universal" de los catálogos: garantiza que cuando Osinergmin publica un dataset, los sistemas de otros ministerios, investigadores o plataformas europeas puedan leer, entender y cruzar nuestras categorías de forma automática.

#### Trazabilidad (Linaje), Versionado y Auditoría de IA
Si los metadatos son el ADN, la **Trazabilidad** (Linaje de Datos o *Data Lineage*) es su historial médico completo. Nos permite conocer el origen exacto del dato, las transformaciones que sufrió, sus diferentes versiones y su consumo final en dashboards.

**Regla de oro: El Versionado de los Datasets.** Hoy la información alimenta modelos de IA para fiscalización. Si un algoritmo toma hoy una decisión equivocada basándose en un dataset que publicamos hace un año, debemos poder auditarlo. Si el Custodio de Datos no guardó la "versión exacta" (Dataset v1.0) con la que la IA aprendió, no podemos auditar la decisión. El versionado no es solo almacenamiento técnico; es una **exigencia de ética algorítmica y reproducibilidad** que permite abrir la caja negra de la IA y rendir cuentas al ciudadano.

#### La Necesidad de Automatizar para Sostener la Gobernanza
Podríamos intentar documentar todo esto a mano en hojas de cálculo tradicionales, pero los expertos en gobernanza de datos nos advierten: a medida que los datos crecen en volumen y complejidad, también aumenta la necesidad de contar con soluciones técnicas integrales que ayuden a gestionar y gobernar los datos de forma más automatizada. 

Para evitar que la documentación quede obsoleta a las pocas semanas de escribirse, las entidades deben evolucionar hacia herramientas de catálogos automatizados (como Collibra, Atlan o Informatica) que mantengan vivo el linaje y el glosario de términos sin depender de la memoria o el esfuerzo manual de las personas.

---

### 3. Contenido Visual del Curso (Mockup):

* **Pantalla 1 (La Infraestructura Invisible: DCAT-AP):**
  * **Visual:** Estantes de biblioteca con libros sin etiquetas (datos sin metadatos). Una lupa pasa sobre ellos y revela etiquetas doradas con las siglas DCAT-AP. Al instante, la etiqueta se despliega mostrando: Autor, Fecha de actualización, Licencia de uso y Formato, conectándose mediante líneas brillantes con otras bibliotecas (Interoperabilidad).
  * **Título:** La Infraestructura Invisible: DCAT-AP y el Ecosistema de Metadatos.
  * **Guion de Locución:** "Todos hemos escuchado que los metadatos son 'datos sobre otros datos', pero llevemos esto a la realidad. Imaginen entrar a la Biblioteca Nacional y descubrir que ningún libro tiene título, lomo, autor ni índice. Encontrar la información que necesitan sería imposible. Los metadatos son exactamente esas fichas bibliográficas. Para evitar que la Plataforma Nacional de Datos Abiertos (PNDA) se convierta en una biblioteca caótica, el Perú no inventa sus propias reglas. La Secretaría de Gobierno y Transformación Digital (SGTD) de la PCM promueve el uso del estándar internacional DCAT-AP (Data Catalog Vocabulary - Application Profile). No se asusten por las siglas; piénsenlo como el 'idioma universal' de los catálogos. Usar DCAT-AP garantiza que cuando Osinergmin publica un dataset, los sistemas de otros ministerios, investigadores o plataformas europeas puedan leer, entender y cruzar nuestras categorías de forma automática y sin intervención humana."
* **Pantalla 2 (Trazabilidad, Versionado y Auditoría de IA):**
  * **Visual:** Tres tarjetas informativas (Linaje, Versionado para IA, Automatización). Debajo, un interactivo de "Auditoría Algorítmica": un robot inspector que emitió una multa errónea. El alumno debe elegir entre tres carpetas (Dataset Actual, Código Fuente, Dataset Versión 1.0) para auditar la falla. La respuesta correcta es "Dataset Versión 1.0".
  * **Título:** Trazabilidad, Versionado y Auditoría de IA.
  * **Guion de Locución:** "El segundo pilar de este módulo es la Trazabilidad o Linaje del Dato (Data Lineage). Esto es, básicamente, el pasaporte que cuenta la historia completa del dato: dónde nació, quién lo modificó y hacia dónde viaja. Aquí existe una regla de oro que muchas entidades olvidan: El Versionado de los Datasets. Hoy en día, nuestra información alimenta modelos de Inteligencia Artificial para agilizar procesos. Pero, ¿qué pasa si un algoritmo de fiscalización toma una decisión equivocada o discriminatoria hoy, basándose en un dataset que publicamos hace un año? Si nuestro Custodio de Datos no guardó la 'versión exacta' de los datos con los que esa IA aprendió en ese momento específico, no podremos auditar la decisión. El versionado no es solo un tema de almacenamiento para el área de TI; es una exigencia de ética algorítmica y reproducibilidad. Nos permite abrir la caja negra de la IA y asegurar que el Estado rinda cuentas ante el ciudadano por cada decisión automatizada."
* **Pantalla 3 (El ADN del Dato - Caso Práctico):**
  * **Visual:** Una lata de conservas sin etiqueta a la izquierda (representando un Excel sin contexto). Al interactuar (hacer clic), se le pega una etiqueta nutricional de metadatos detallando Ingredientes (Origen), Vigencia, Reglas de Negocio y Confidencialidad.
  * **Título:** Los Metadatos: El ADN del Dato.
  * **Guion de Locución:** "Imagina que vas al supermercado y compras una lata de conservas que no tiene etiqueta. No sabes si contiene atún, duraznos o algo a lo que eres alérgico. ¿Te la comerías? Probablemente no. Lo mismo ocurre con nuestra información. Un conjunto de datos sin contexto es solo una matriz de números y letras sin sentido. Aquí entran los Metadatos: son el ADN del dato. De acuerdo con nuestro PI-59, los metadatos documentan el origen, la vigencia, las reglas de negocio y el nivel de confidencialidad de la información. Sin metadatos, sufrimos de amnesia institucional. Si el experto que creó el reporte renuncia o se jubila, la institución pierde la capacidad de entender su propia información. Registrar metadatos no es una tarea opcional de Sistemas; es una obligación del Gestor de Datos (Data Steward) y del Dueño de Datos para asegurar que la información sea reutilizable."
* **Pantalla 4 (Automatizando la Memoria Institucional):**
  * **Visual:** Una persona abrumada y rodeada de miles de papeles vs. un software organizando carpetas automáticamente.
  * **Título:** Automatizando la Memoria Institucional.
  * **Contenido:** Según los estándares internacionales de gobernanza, el volumen de datos hace imposible documentar a mano de manera sostenible. Necesitamos soluciones técnicas automatizadas (Catálogos y Linaje digital) para que la confianza en nuestras decisiones no dependa de si un funcionario clave se fue de vacaciones.
* **Pantalla 4 (La Capa Azul y la Analítica - Active Recall):**
  * **Visual:** Un "Robot de IA" hambriento con tres tuberías interactivas: Amarilla (datos crudos/Bronce), Verde (datos gobernados/Plata) y Azul (Fuente Única de Verdad/Oro). El usuario selecciona la tubería para alimentar al robot. Si conecta la Amarilla, el robot colapsa con "Error: Basura entra, basura sale". Si conecta la Azul, genera un "Dashboard de Decisiones Estratégicas".
  * **Título:** La Capa Azul y la Analítica: El Destino Final del Dato.
  * **Guion de Locución:** "Hemos llegado a la cima de nuestra Pirámide de Refinamiento: La Capa Azul o Capa de Oro. De acuerdo con la Fase 3 de nuestro PI-59, aquí entra en acción el Equipo de BI y Analítica. Ellos toman esta Fuente Única de Verdad para construir tableros de control y entrenar modelos predictivos. La regla de oro: la Inteligencia Artificial no hace magia. Si alimentas a un modelo con datos crudos de la Capa Amarilla, la IA aprenderá esos errores y multiplicará el caos a velocidad de la luz. La analítica avanzada solo funciona sobre los cimientos sólidos de la gobernanza."
* **Pantalla 5 (La IA en Políticas Públicas y el 'Humano en el Circuito'):**
  * **Visual:** Cabina de avión interactiva (Cockpit) con dos modos: "Piloto IA" (activa el piloto automático con radar y telemetría) y "Capitán Humano" (el funcionario toma el control). Al cambiar de modo se actualiza el panel de estado.
  * **Título:** La IA en Políticas Públicas y el "Humano en el Circuito".
  * **Guion de Locución:** "La IA tiene un potencial transformador: puede procesar el lenguaje natural de los ciudadanos, cruzar miles de variables en GeoPerú y predecir interrupciones eléctricas. Sin embargo, en el sector público: la máquina propone, pero el humano dispone. El principio del 'Humano en el Circuito' (Human-in-the-loop) exige que el Dueño del Dato y el funcionario evalúen la evidencia, asuman la responsabilidad legal e institucional, y tomen la decisión final para garantizar que no haya exclusiones injustas."
* **Pantalla 6 (Ética, Transparencia y Rendición de Cuentas - Active Recall):**
  * **Visual:** El "Núcleo de IA y Ética" con cuatro cuadrantes interactivos: Transparencia, Equidad, Privacidad y Rendición de Cuentas. Al hacer clic en cada cuadrante, el panel derecho muestra el detalle del pilar. El cuadrante "Rendición de Cuentas" tiene un borde rojo pulsante, resaltando el vínculo con el Dueño del Dato (Data Owner).
  * **Título:** Ética, Transparencia y Rendición de Cuentas.
  * **Guion de Locución:** "El uso de analítica y algoritmos nos obliga a un estándar ético inquebrantable, basado en cuatro pilares: Transparencia, Equidad, Privacidad y Rendición de Cuentas. No podemos responder a un ciudadano: 'Lo dijo la máquina'. Debemos evitar las 'cajas negras'. Gracias a los metadatos y a la trazabilidad del Gestor de Datos, el Estado debe poder explicar qué información se usó para entrenar el algoritmo y cómo se mitigan los sesgos históricos. La tecnología avanza, pero la rendición de cuentas siempre será profundamente humana."

---

## COMPONENTE 2: EJERCICIOS INTERACTIVOS (Taxonomía de Bloom)

### Ejercicio 1: Nivel Comprender - "Desarmando el Contexto" (Drag & Drop)
* **Instrucción:** Arrastra el concepto hacia su definición correcta.
* **Asociaciones:**
  * *Son los "datos sobre los datos", proporcionan el contexto (quién, cómo, cuándo).* $\rightarrow$ **Metadatos**
  * *Es el historial completo y el camino que el dato ha recorrido desde su origen, incluyendo sus versiones.* $\rightarrow$ **Trazabilidad / Linaje**
  * *Tipo de solución recomendada por las mejores prácticas en gobernanza cuando el volumen de datos crece y la documentación manual falla.* $\rightarrow$ **Soluciones técnicas automatizadas / Catálogos de software**
  * *Es el estándar internacional promovido por la SGTD para que los catálogos de datos del Estado peruano sean interoperables.* $\rightarrow$ **DCAT-AP**

### Ejercicio 2: Nivel Aplicar - "La Regla de Oro" (Rellenar espacios en blanco)
* **Texto a completar:**
  > "De acuerdo con ILDA, si publicamos un dato sin su respectiva **[documentación]**, impedimos su correcta reutilización por parte de otras áreas. Asimismo, los estándares internacionales de gobernanza nos enseñan que a medida que los datos crecen en **[volumen y complejidad]**, debemos abandonar los registros manuales en Excel e implementar **[soluciones técnicas automatizadas]** para mantener viva la trazabilidad, de forma que los dashboards finales mantengan siempre la **[confianza]** institucional."

### Ejercicio 3: Nivel Analizar - "La Auditoría Inesperada" (Elige tu propia aventura)
* **Escenario:**
  > "Un órgano de control (Contraloría) audita el Ministerio y detecta que el reporte anual de 'Inversión en Obras' de 2025 no cuadra con el presupuesto asignado. Te piden que expliques de dónde salió el número final del reporte. ¿Qué herramienta utilizas?"
* **Opciones de decisión:**
  * **Opción A:** Abro el archivo Excel final que me envió el practicante e intento adivinar de qué celdas sumó los montos para responder rápido.
    * *Feedback (Incorrecto/Alto Riesgo):* Estás perpetuando la cultura del parche. Sin una historia documentada de la extracción del dato, la respuesta pierde validez, no es auditable y expone a la institución a un riesgo de auditoría severo.
  * **Opción B:** Utilizo el mapa de Trazabilidad (Linaje de Datos) de la institución para rastrear el dato hacia atrás, demostrando de qué sistema de origen se extrajo y qué transformaciones sufrió en el camino.
    * *Feedback (Correcto/Seguro):* ¡Excelente! La trazabilidad te permite realizar una auditoría exacta, identificar si hubo un error en la transformación o agregación del dato y rendir cuentas ante los reguladores con total transparencia.

---

## COMPONENTE 3: BANCO DE PREGUNTAS TIPO EXAMEN (Pool para LMS)

El sistema seleccionará 5 preguntas al azar por cada intento del usuario.

#### Pregunta 1
¿Qué advierten los expertos en gobernanza de datos sobre la gestión de metadatos y documentación a medida que los datos de una institución crecen en volumen y complejidad?
* a) Que se debe contratar a más personal para llenar registros y Exceles manualmente.
* b) Que los metadatos deben ser eliminados periódicamente para ahorrar espacio en servidor.
* **c) Que aumenta la necesidad de contar con soluciones técnicas integrales que ayuden a gestionar y gobernar los datos de forma automatizada.** (Correcta)
* d) Que se debe imprimir toda la documentación en papel para mayor seguridad.

#### Pregunta 2
¿Qué son exactamente los "Metadatos" en el contexto del Gobierno de Datos según las definiciones de ILDA y DAMA?
* a) La infraestructura física de cableado de los servidores.
* **b) Los datos acerca de los datos; información que describe el contexto, versión, origen, significado y calidad de un conjunto de datos.** (Correcta)
* c) Los datos obsoletos o erróneos que deben ser depurados.
* d) Un software antivirus encargado de proteger la red institucional.

#### Pregunta 3
Si un Oficial de Gobierno de Datos necesita auditar la historia de un dato, desde el sistema origen donde se capturó hasta el dashboard donde se consumió, ¿qué concepto está aplicando?
* a) Encriptación de extremo a extremo.
* **b) Trazabilidad o Linaje del dato (Data Lineage).** (Correcta)
* c) Eliminación de duplicados.
* d) Seudonimización.

#### Pregunta 4
De acuerdo con ILDA, ¿por qué es vital conocer el "versionado" (la versión exacta) de un conjunto de datos en el contexto de la Inteligencia Artificial?
* a) Porque los datos más antiguos siempre garantizan una mayor eficiencia en el entrenamiento.
* **b) Para saber qué versión específica del dataset alimentó el algoritmo y comprender con precisión cómo el modelo está tomando sus decisiones.** (Correcta)
* c) Para asegurar que la Inteligencia Artificial borre de forma permanente las versiones anteriores.
* d) El versionado no tiene ninguna importancia práctica en el modelado de IA.

#### Pregunta 5
Herramientas especializadas del mercado como Collibra, Atlan o Informatica son ampliamente recomendadas por los estándares internacionales. ¿Cuál es el propósito principal de estas herramientas en la gobernanza?
* a) Diseñar y maquetar interfaces de páginas web institucionales.
* **b) Servir como soluciones técnicas integrales y automatizadas para gestionar catálogos de metadatos, linajes y glosarios a gran escala.** (Correcta)
* c) Emitir recibos de pago internos y facturas electrónicas de compras.
* d) Rastrear mediante GPS la ubicación física de los servidores.

#### Pregunta 6
¿Cuál es el estándar o vocabulario de catálogo de datos que la Secretaría de Gobierno y Transformación Digital (SGTD) de la PCM promueve para estructurar metadatos en la Plataforma Nacional de Datos Abiertos?
* a) ISO 9001.
* b) XML Básico de Datos.
* **c) DCAT-AP.** (Correcta)
* d) HTML5 estructurado.
