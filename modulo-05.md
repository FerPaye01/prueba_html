# MÓDULO 5: Metadatos, Documentación y Trazabilidad (El ADN y el Mapa del Dato)

Este documento recopila la información teórica, metodológica y los recursos prácticos del Módulo 5 para su posterior integración en la plataforma de aprendizaje (LMS).

---

## COMPONENTE 1: FUENTE DE CONOCIMIENTO (Material de Estudio)

Este material se presentará como un paquete interactivo tipo SCORM que incluye lecturas, normativas y apoyo visual para los colaboradores.

### 1. Fuentes Normativas y Manuales (Sección de "Descargables"):
* **Guía Internacional y Didáctica:** 
  * DataCamp - *Data Governance Concepts* (Soluciones Técnicas, Glosarios y Automatización).
  * Guía Internacional DAMA-DMBOK2 - Capítulo 11: *Metadata Management*.
* **Estándar Normativo Peruano:** 
  * Lineamientos de la Secretaría de Gobierno y Transformación Digital (SGTD) para el uso del estándar DCAT-AP en la Plataforma Nacional de Datos Abiertos (PNDA).
* **Manual Corporativo Osinergmin:** 
  * Procedimiento PI-59 de Gestión de Gobernanza de Datos.
* **Documento de Referencia:** 
  * Guías de la Iniciativa Latinoamericana por los Datos Abiertos (ILDA) sobre el ciclo de vida del dato.

### 2. Texto Didáctico Específico del Curso:

#### La Infraestructura Invisible: El Dato sobre el Dato
Publicar un archivo de Excel no es suficiente. Los datos no son absolutos; cambian a través del tiempo y provienen de un contexto específico. Si no entendemos ese contexto, simplemente no podemos confiar en la información. 

Aquí es donde entran los **Metadatos**, definidos como "los datos acerca de los datos". Nos responden preguntas fundamentales: ¿quién creó este dato?, ¿cuándo se actualizó?, ¿qué metodología se usó para recolectarlo? y ¿bajo qué licencia de uso libre se puede utilizar? Los metadatos son la infraestructura invisible de la gobernanza de datos. En el Estado peruano, para asegurar que los sistemas se comuniquen correctamente, utilizamos estándares internacionales como el **DCAT-AP** para organizar nuestros catálogos en la Plataforma Nacional de Datos Abiertos.

#### Trazabilidad (Linaje): La Historia de Vida del Dato
Si los metadatos son el ADN, la **Trazabilidad** (Linaje de Datos o *Data Lineage*) es su historial médico completo. La trazabilidad nos permite conocer el origen exacto del dato, las transformaciones de limpieza y consolidación que sufrió en el camino, sus diferentes versiones y su consumo final en reportes o dashboards. Sin trazabilidad, no podemos auditar nuestros procesos ni garantizar que los algoritmos de Inteligencia Artificial se estén alimentando con versiones correctas y actualizadas de la información institucional.

#### La Lección de DataCamp: Automatizar para Sobrevivir
Podríamos intentar documentar todo esto a mano en hojas de cálculo tradicionales, pero los expertos de DataCamp nos advierten: a medida que los datos crecen en volumen y complejidad, también aumenta la necesidad de contar con soluciones técnicas integrales que ayuden a gestionar y gobernar los datos de forma más automatizada. 

Para evitar que la documentación quede obsoleta a las pocas semanas de escribirse, las entidades deben evolucionar hacia herramientas de catálogos automatizados (como Collibra, Atlan o Informatica) que mantengan vivo el linaje y el glosario de términos sin depender de la memoria o el esfuerzo manual de las personas.

---

### 3. Diapositivas Específicas del Curso (Mockup Visual):

* **Diapositiva 1:**
  * **Visual:** Una cadena de ADN formada por etiquetas de código y texto.
  * **Título:** Los Metadatos: El ADN de nuestra Información.
  * **Contenido:** Un número "10" por sí solo no significa nada. El metadato le da el contexto: nos dice que son "10 kilogramos", recolectados el "15 de marzo" por el "Área de Operaciones". El metadato da vida y significado al dato para evitar interpretaciones erróneas.
* **Diapositiva 2:**
  * **Visual:** Un mapa de ruta con paradas desde una fábrica hasta un supermercado.
  * **Título:** Trazabilidad (Linaje del Dato).
  * **Contenido:** Es la historia del dato. Nos permite rastrear un reporte gerencial o un dashboard hacia atrás, paso a paso, hasta descubrir exactamente en qué sistema de origen, en qué base de datos y por qué funcionario se originó la información.
* **Diapositiva 3:**
  * **Visual:** Una persona abrumada y rodeada de miles de papeles vs. un software organizando carpetas automáticamente.
  * **Título:** Automatizando la Memoria Institucional.
  * **Contenido:** Según DataCamp, el volumen de datos hace imposible documentar a mano de manera sostenible. Necesitamos soluciones técnicas automatizadas (Catálogos y Linaje digital) para que la confianza en nuestras decisiones no dependa de si un funcionario clave se fue de vacaciones.

---

## COMPONENTE 2: EJERCICIOS INTERACTIVOS (Taxonomía de Bloom)

### Ejercicio 1: Nivel Comprender - "Desarmando el Contexto" (Drag & Drop)
* **Instrucción:** Arrastra el concepto hacia su definición correcta.
* **Asociaciones:**
  * *Son los "datos sobre los datos", proporcionan el contexto (quién, cómo, cuándo).* $\rightarrow$ **Metadatos**
  * *Es el historial completo y el camino que el dato ha recorrido desde su origen.* $\rightarrow$ **Trazabilidad / Linaje**
  * *Tipo de solución recomendada por DataCamp cuando el volumen de datos crece y la documentación manual falla.* $\rightarrow$ **Soluciones técnicas automatizadas / Catálogos de software**
  * *Es el estándar europeo de vocabulario de catálogo de datos que usa el Perú para la interoperabilidad.* $\rightarrow$ **DCAT-AP**

### Ejercicio 2: Nivel Aplicar - "La Regla de Oro" (Rellenar espacios en blanco)
* **Texto a completar:**
  > "De acuerdo con ILDA, si publicamos un dato sin su respectiva **[documentación]**, impedimos su correcta reutilización por parte de otras áreas. Asimismo, DataCamp nos enseña que a medida que los datos crecen en **[volumen y complejidad]**, debemos abandonar los registros manuales en Excel e implementar **[soluciones técnicas automatizadas]** para mantener viva la trazabilidad, de forma que los dashboards finales mantengan siempre la **[confianza]** institucional."

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
¿Qué advierte DataCamp sobre la gestión de metadatos y documentación a medida que los datos de una institución crecen en volumen y complejidad?
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
DataCamp menciona herramientas especializadas del mercado como Collibra, Atlan o Informatica. ¿Cuál es el propósito principal de estas herramientas en la gobernanza?
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
