# MÓDULO 3: Arquitectura, Plataformas e Interoperabilidad (La Caja de Herramientas)

Este documento recopila la información teórica, metodológica y los recursos prácticos del Módulo 3 para su posterior integración en la plataforma de aprendizaje (LMS).

---

## COMPONENTE 1: FUENTE DE CONOCIMIENTO (Material de Estudio)

Este material se presentará como un paquete interactivo tipo SCORM que incluye lecturas, normativas descargables y apoyo visual para los colaboradores.

### 1. Fuentes Normativas y Manuales (Sección de "Descargables"):
* **Marco Legal Peruano:** 
  * Decreto Legislativo N° 1246 (Medidas de Simplificación Administrativa y Principio de "Una sola vez" / *Once-Only*).
  * Lineamientos de la Plataforma de Interoperabilidad del Estado (PIDE) y Plataforma Nacional de Datos Abiertos (PNDA).
* **Guía Internacional:** 
  * Guía Internacional DAMA-DMBOK2 - Capítulo sobre Arquitectura e Integración de Datos.
* **Manual Corporativo Osinergmin:** 
  * Procedimiento PI-59: Gestión de Gobernanza de Datos (Capas de Refinamiento de Datos).
  * Flujograma de implementación de Productos de Datos de Osinergmin.
* **Material Didáctico Internacional:** 
  * Estándares internacionales de Gobernanza de Datos (*Data Governance Concepts*: La Caja de Herramientas y Enfoques de Implementación: Top-Down, Bottom-Up y Colaborativo).

### 2. Texto Didáctico Específico del Curso:

#### Construyendo las Tuberías y la Caja de Herramientas

Para que el Gobierno de Datos funcione, la información debe fluir desde su origen hasta la toma de decisiones sin estancarse en "silos". En el Perú, la interoperabilidad no es solo una buena idea, es un mandato. El **Decreto Legislativo N° 1246** establece el principio de simplificación administrativa o el principio de **"Una Sola Vez" (Once-Only)**. Esto significa que está estrictamente prohibido exigirle al ciudadano un documento físico cuya información el Estado ya posee en sus bases de datos.

Para lograrlo, contamos con tres plataformas nacionales transversales:
* **PIDE (Interoperabilidad):** Permite que las entidades intercambien datos seguros de *back-office* en tiempo real mediante APIs, utilizando formatos universales como **JSON y XML**. Evita requerirle al ciudadano documentos físicos que el Estado ya posee.
* **PNDA (Datos Abiertos):** Permite publicar datos hacia la ciudadanía y democratizar la información para fomentar la investigación e innovación.
* **GeoPerú:** Plataforma para análisis territorial y mapas geoespaciales.

¿Y qué viaja por estas carreteras digitales? Principalmente **Datos Maestros**. Los datos maestros son la versión única, oficial y central de una entidad. Por ejemplo:
* El **DNI** es administrado por **RENIEC**.
* El **RUC** es administrado por **SUNAT**.
* El **Ubigeo** es administrado por el **INEI**.

Nuestros sistemas no inventan estos datos; los consultan directamente a la entidad dueña a través de la PIDE.

Asimismo, el estándar internacional **DAMA-DMBOK2** recomienda estructurar la integración mediante un diseño **Hub-and-Spoke** (Centro y Radios) en lugar de conexiones Punto a Punto (Point-to-Point), lo cual consolida los datos compartidos en un punto central reduciendo drásticamente la complejidad técnica y la cantidad de interfaces.

Finalmente, para gobernar todo este flujo dentro de Osinergmin, nuestro Procedimiento Interno **PI-59** nos exige organizar nuestra propia **"Caja de Herramientas"**. Imaginen que los datos son libros en una inmensa biblioteca:
1. **Glosario de Negocio:** El acuerdo que define qué significa cada término para que todos hablemos el mismo idioma (Ej. ¿Qué significa exactamente "ciudadano activo" para nosotros?).
2. **Diccionario de Datos:** La ficha técnica que describe la estructura, el tipo de formato (SQL, `VARCHAR`) y las reglas de esos datos.
3. **Catálogo de Datos:** El sistema de búsqueda interactivo que nos permite saber exactamente qué información tenemos disponible y quién es el responsable.
4. **Linaje de Datos (Data Lineage):** El "pasaporte" del dato: nos cuenta la historia de dónde nació la información, cómo se transformó y por qué sistemas viajó hasta llegar a nuestro reporte final.

#### La Pirámide de Refinamiento de Datos
Internamente, los datos pasan por tres "capas de refinamiento" según la arquitectura de Osinergmin:
* **Capa Amarilla (Bronce / Landing):** Ingreso de datos crudos (*Raw Data*) desde diversas fuentes, sin filtros, conservando el historial completo de extracción.
* **Capa Verde (Plata / Data Gobernada):** Zona de confianza (*Trusted*). El Custodio del Dato aplica reglas de limpieza, elimina registros duplicados y estandariza la información.
* **Capa Azul (Oro / Refinado):** Datos listos para convertirse en "Productos de Datos" consumidos por Científicos de Datos para analítica avanzada, Inteligencia Artificial y dashboards directivos.

#### Los Enfoques de Implementación
La literatura especializada en gobernanza de datos advierte que existen tres enfoques de implementación para esta arquitectura:
* **Top-Down (De arriba a abajo):** Solo el área de TI controla todo. Es seguro, pero genera cuellos de botella e ineficiencia.
* **Bottom-Up (De abajo a arriba):** Todos los usuarios acceden a los datos crudos libremente. Es ágil, pero riesgoso y caótico.
* **Colaborativo:** El enfoque ideal. Equilibra la seguridad defensiva (cumplimiento normativo) con la agilidad ofensiva (democratización y análisis de datos), construyendo confianza conjunta.

---

### 3. Contenido Visual del Curso (Mockup):

* **Pantalla 1 — Construyendo las Tuberías y la Caja de Herramientas:**
  * **Visual (Parte 1 — Interoperabilidad):** Banner destacado con el texto "DL N° 1246 — Una Sola Vez". Diagrama donde los logos de RENIEC (DNI), SUNAT (RUC) e INEI (Ubigeo) se conectan hacia Osinergmin a través de un túnel brillante etiquetado "PIDE (JSON/XML)". Pequeñas tarjetas de PIDE, PNDA y GeoPerú.
  * **Visual (Parte 2 — Active Recall Caja de Herramientas):** Caja de herramientas abierta en el centro. Alrededor cuatro objetos: un libro de idiomas, una ficha de especificaciones técnicas, una lupa de búsqueda y un pasaporte con sellos. El alumno arrastra cada objeto a su concepto:
    * Libro de idiomas → **Glosario de Negocio**
    * Ficha técnica → **Diccionario de Datos**
    * Lupa → **Catálogo de Datos**
    * Pasaporte → **Linaje de Datos**
  * **Título:** Construyendo las Tuberías y la Caja de Herramientas.
  * **Contenido:** Marco legal DL 1246 (Once-Only), plataformas PIDE/PNDA/GeoPerú, Datos Maestros del Estado (RENIEC, SUNAT, INEI), formatos de intercambio JSON/XML, Caja de Herramientas del PI-59 (Glosario, Diccionario, Catálogo, Linaje) y arquitectura Hub-and-Spoke.
* **Pantalla 2 — El Ciclo de Vida del Dato (PI-59) y la "Deuda Técnica":**
  * **Visual:** Diagrama del ciclo de vida del dato del PI-59 (Generación -> Dominios -> Maestros -> Productos -> Analítica) al lado de un esquema que representa la Deuda Técnica (casa antigua/legacy conectada mediante tuberías iluminadas/APIs a un servidor moderno).
  * **Título:** El Ciclo de Vida del Dato (PI-59) y la "Deuda Técnica".
  * **Contenido:** Cómo gestionar la transición de sistemas antiguos o legacy construyendo integraciones (APIs) externas para no detener la operación diaria mientras se extraen datos de valor.
* **Pantalla 3 — Interoperabilidad (PIDE) y el Fin del "Mensajero No Remunerado":**
  * **Visual:** Ejercicio interactivo (Drag & Drop) donde un ciudadano lleva una torre de papeles y el alumno debe arrastrar la opción C (Conectarse a la PIDE) para conectarlo digitalmente a RENIEC, haciendo desaparecer la carga física.
  * **Título:** Interoperabilidad (PIDE) y el Fin del "Mensajero No Remunerado".
  * **Contenido:** Uso de la PIDE como mensajería digital segura entre entidades estatales para eliminar el papel físico y agilizar trámites en milisegundos con valor legal.
* **Pantalla 4 — Arquitectura de Apertura (PNDA y GeoPerú):**
  * **Visual:** Pantalla dividida. A la izquierda (PNDA), conversión de tablas/CSV a gráficos interactivos. A la derecha (GeoPerú), un visor interactivo del mapa del Perú con pines calientes territoriales.
  * **Título:** Arquitectura de Apertura (PNDA y GeoPerú).
  * **Contenido:** Publicación de datos abiertos no confidenciales en formato CSV para investigadores (PNDA) e integración espacial territorial para georreferenciación de eventos (GeoPerú).

---

### 4. Guion de Locución (Script Oral) — Slide 3

> "Para que el gobierno de datos funcione, necesitamos conectar la teoría con la arquitectura real. En el Perú, la interoperabilidad no es solo una buena idea, es un mandato. El Decreto Legislativo N° 1246 establece el principio de simplificación administrativa o el principio de 'Una Sola Vez'. Esto significa que está estrictamente prohibido exigirle al ciudadano un documento físico cuya información el Estado ya posee en sus bases de datos. No podemos seguir utilizando al ciudadano como nuestro mensajero no remunerado.
>
> Para lograrlo, utilizamos la Plataforma de Interoperabilidad del Estado (PIDE). Piensen en la PIDE como un sistema de carreteras digitales seguras. A través de estas carreteras, nuestros sistemas se comunican mediante conectores llamados APIs, utilizando formatos de texto universales y ligeros como JSON o XML.
>
> ¿Y qué viaja por estas carreteras? Principalmente Datos Maestros. Los datos maestros son la versión única, oficial y central de una entidad. Por ejemplo, en Osinergmin no inventamos la identidad de una persona; si necesitamos validarla, nuestro sistema consulta el DNI directamente a RENIEC, quien es el dueño oficial de ese dato maestro. Si validamos una empresa, consultamos el RUC a SUNAT, y para ubicar un distrito, usamos el Ubigeo oficial del INEI.
>
> Finalmente, para gobernar todo este flujo dentro de Osinergmin, nuestro Procedimiento Interno PI-59 nos exige organizar nuestra propia 'Caja de Herramientas'. Imaginen que los datos son libros en una inmensa biblioteca: El Glosario de Negocio es el acuerdo que define qué significa cada término para que todos hablemos el mismo idioma. El Diccionario de Datos es la ficha técnica que describe la estructura, el tipo de formato y las reglas de esos datos. El Catálogo de Datos es el sistema de búsqueda interactivo que nos permite saber exactamente qué información tenemos disponible y quién es el responsable. Y el Linaje de Datos (Data Lineage) es el 'pasaporte' del dato: nos cuenta la historia de dónde nació la información, cómo se transformó y por qué sistemas viajó hasta llegar a nuestro reporte final."

---

## COMPONENTE 2: EJERCICIOS INTERACTIVOS (Taxonomía de Bloom)

### Ejercicio 1: Nivel Comprender - "Ordenando la Caja de Herramientas" (Drag & Drop)
* **Instrucción:** Asocia cada situación o necesidad operativa de Osinergmin con la herramienta tecnológica o plataforma gubernamental adecuada.
* **Asociaciones:**
  * *El área de Fiscalización de Hidrocarburos y el área de Administración no se ponen de acuerdo sobre si el término "Usuario" se refiere a la empresa concesionaria o al ciudadano final.* $\rightarrow$ **Glosario de Negocio**
  * *El equipo de desarrollo de software necesita saber con precisión la longitud, el tipo de dato y las restricciones de clave primaria de la tabla GFIS_EMPRESAS para realizar una migración.* $\rightarrow$ **Diccionario de Datos**
  * *Un nuevo analista de TI necesita un motor de búsqueda único para indexar y localizar rápidamente en qué servidores o bases de datos se encuentran guardados todos los activos de información de la institución.* $\rightarrow$ **Catálogo de Datos**
  * *Tras detectar un error en el Tablero de Control de Cobranzas, el equipo técnico necesita rastrear hacia atrás todo el camino del dato para ver en qué etapa de la extracción o transformación (ETL) se corrompió.* $\rightarrow$ **Linaje de Datos**
  * *El área de Planeamiento institucional debe disponibilizar las estadísticas de sanciones anuales en formatos CSV o JSON para cumplir con la Ley de Transparencia y permitir que la ciudadanía las descargue de forma libre.* $\rightarrow$ **PNDA (Plataforma Nacional de Datos Abiertos)**
  * *Para agilizar el proceso de reclamos, el sistema de atención al usuario de Osinergmin necesita validar en tiempo real los antecedentes de una empresa conectándose directamente con los servidores del Ministerio de la Producción.* $\rightarrow$ **PIDE (Interoperabilidad)**
  * *La Alta Dirección requiere visualizar sobre un mapa interactivo la densidad de las denuncias de usuarios comerciales cruzadas con los distritos en estado de emergencia.* $\rightarrow$ **GeoPerú**

### Ejercicio 2: Nivel Aplicar - "El Enfoque Correcto y las Capas" (Rellenar espacios en blanco)
* **Texto a completar:**
  > "Si el área de TI asume el control total y actúa como el único guardián de las bases de datos, estamos aplicando un enfoque **[Top-Down (De arriba a abajo)]**, lo cual crea cuellos de botella para el negocio. Para escalar con éxito sin violar leyes de privacidad, las mejores prácticas recomiendan adoptar un enfoque **[Colaborativo]**, donde se equilibre el cumplimiento normativo con el acceso a los datos. Asimismo, los datos recién extraídos ingresan a la **[Capa Amarilla]** (Bronce) y, tras aplicarse las reglas del catálogo, se consolidan en la **[Capa Verde]** (Plata) como data gobernada."

### Ejercicio 3: Nivel Analizar - "Decisión Arquitectónica" (Elige tu propia aventura)
* **Escenario:**
  > "Estás diseñando un nuevo trámite digital para los ciudadanos en tu institución. Para completarlo, el sistema necesita comprobar que el usuario no tiene antecedentes penales (Poder Judicial) y que su empresa existe formalmente en registros públicos (SUNARP). ¿Cómo diseñas la arquitectura del flujo tecnológico?"
* **Opciones de decisión:**
  * **Opción A (Enfoque Descentralizado / En Tiempo Real):** Configurar el formulario web para que realice peticiones síncronas por cada trámite iniciado, conectándose directamente a las APIs del Poder Judicial y de la SUNARP a través de la plataforma PIDE, validando los datos en caliente durante la sesión del ciudadano.
    * *Feedback (Correcto/Seguro):* ¡Excelente! El Modelo de Interoperabilidad del Estado Peruano promueve el consumo síncrono en tiempo real vía PIDE. Esto evita la duplicidad de repositorios o bases de datos locales, garantizando que siempre se consulte la fuente única y oficial de la información sin crear silos redundantes.
  * **Opción B (Enfoque de Réplica / Por Lotes):** Establecer un convenio de intercambio de datos para descargar semanalmente el subconjunto de datos maestros actualizados de SUNARP y Poder Judicial a un servidor local seguro, permitiendo que el sistema realice las consultas internamente sin depender de la latencia o disponibilidad de las redes externas.
    * *Feedback (Incorrecto/Alto Riesgo):* ¡Cuidado! Aunque parezca una opción para mitigar problemas de latencia, almacenar réplicas locales de datos maestros externos duplica repositorios e incumple las directivas del Modelo de Interoperabilidad, el cual exige el consumo síncrono desde la fuente oficial para evitar datos desactualizados e inconsistencias legales.

---

## COMPONENTE 3: BANCO DE PREGUNTAS TIPO EXAMEN (Pool para LMS)

El sistema seleccionará 5 preguntas al azar por cada intento del usuario.

#### Pregunta 1
Según los estándares internacionales de gobernanza de datos, ¿cuál es la principal diferencia entre un Glosario de Negocio y un Diccionario de Datos?
* a) El glosario es físico en papel y el diccionario es exclusivamente digital en la nube.
* b) No hay diferencia técnica ni organizativa, son sinónimos del mismo estándar.
* **c) El glosario contiene descripciones en lenguaje empresarial para todos los usuarios, mientras que el diccionario contiene parámetros técnicos (formatos, tipos de datos) para los sistemas.** (Correcta)
* d) El glosario lo define el área legal y el diccionario la Contraloría General.

#### Pregunta 2
¿Qué herramienta tecnológica actúa como un "mercado" o "biblioteca" centralizada que enlaza el vocabulario de negocio con los metadatos técnicos para facilitar las búsquedas?
* a) La red privada virtual de TI (VPN).
* b) El cortafuegos (Firewall) perimetral.
* **c) El Catálogo de Datos.** (Correcta)
* d) La Plataforma de Mesa de Partes Virtual.

#### Pregunta 3
Si un científico de datos necesita saber por qué procesos de limpieza y transformación pasó un dato desde que se originó en la base de datos transaccional hasta que llegó a su dashboard, ¿qué herramienta de gobernanza debe consultar?
* a) El Glosario de Negocio corporativo.
* **b) El Linaje de Datos (Data Lineage).** (Correcta)
* c) El Registro de Compras Institucional.
* d) El Código de Ética de la institución.

#### Pregunta 4
De acuerdo con los enfoques de implementación descritos por la literatura especializada en gobernanza de datos, ¿qué caracteriza al enfoque "Colaborativo"?
* a) Centraliza todo el poder y acceso de las bases de datos exclusivamente en un pequeño grupo de TI.
* b) Libera todos los datos en bruto a cualquier usuario sin aplicar reglas de privacidad ni seguridad.
* **c) Equilibra las necesidades defensivas (control y cumplimiento normativo) con las ofensivas (analítica y democratización del dato) involucrando a los usuarios de negocio.** (Correcta)
* d) Prohíbe totalmente el intercambio de información entre diferentes gerencias.

#### Pregunta 5
Para evitar pedirle a un ciudadano el mismo documento dos veces (como validar su identidad mediante DNI), ¿qué plataforma de la arquitectura digital peruana debemos integrar a nuestros sistemas?
* a) La Plataforma Nacional de Datos Abiertos (PNDA).
* b) La plataforma geográfica GeoPerú.
* **c) La Plataforma de Interoperabilidad del Estado (PIDE).** (Correcta)
* d) El Diario Oficial El Peruano.

#### Pregunta 6
De acuerdo con el modelo de madurez y arquitectura de Osinergmin (PI-59), ¿qué sucede en la "Capa Verde" (Zona Plata/Trusted) de la pirámide de datos?
* a) Se archivan los expedientes físicos en cajas de cartón.
* b) Ingresan los datos crudos exactamente como vienen de las fuentes externas.
* **c) Se alojan los datos que ya pasaron por procesos de limpieza, estandarización y eliminación de duplicados, formando la fuente única de verdad.** (Correcta)
* d) Se eliminan todos los datos automáticamente a los 30 días para ahorrar espacio.

#### Pregunta 7
¿Qué plataforma tecnológica del Estado peruano permite el intercambio automático y seguro de datos entre los sistemas de diferentes instituciones públicas?
* a) La Plataforma Nacional de Datos Abiertos (PNDA).
* b) GeoPerú.
* **c) La Plataforma de Interoperabilidad del Estado (PIDE).** (Correcta)
* d) El Sistema Nacional de Archivos.

#### Pregunta 8
Dentro de la arquitectura de datos, ¿qué se entiende por "Datos Maestros" (Master Data)?
* a) Datos temporales o residuales que se eliminan al final de cada jornada.
* **b) Los datos críticos e indispensables (como DNI, RUC o Ubigeo) que representan el núcleo operativo y de información de una entidad.** (Correcta)
* c) Exclusivamente las coordenadas de mapas y límites departamentales.
* d) Los manuales impresos de la institución y guías de usuario.

#### Pregunta 9
Si una entidad pública necesita realizar un análisis territorial y cruzar capas de información geoespacial (como ubicación de hospitales y carreteras), ¿qué plataforma nacional debe alimentar o consultar?
* a) PIDE.
* b) El portal de Datos Abiertos.
* **c) GeoPerú.** (Correcta)
* d) El catálogo de Datos Maestros de la SUNAT.

#### Pregunta 10
A nivel de arquitectura de integración de datos, el estándar DMBOK2 recomienda un diseño "Hub-and-Spoke" (Centro y Radios) frente al "Point-to-Point" (Punto a Punto) porque:
* a) Es técnicamente más lento y consume más ancho de banda.
* **b) Consolida los datos compartidos en un centro (Hub), reduciendo drásticamente la cantidad de interfaces requeridas y la complejidad técnica.** (Correcta)
* c) Elimina la necesidad de contar con servidores de bases de datos.
* d) Permite que los ciudadanos modifiquen las bases de datos libremente desde la web.

#### Pregunta 11
En el contexto de la interoperabilidad técnica y los servicios web (APIs), ¿cuáles son los formatos estándar abiertos más utilizados para intercambiar información estructurada?
* a) Archivos PDF y documentos DOCX de Word.
* **b) Archivos JSON y documentos XML.** (Correcta)
* c) Formatos de video MP4 y AVI.
* d) Archivos CAD y ejecutables EXE.

#### Pregunta 12
Según la normativa peruana, ¿qué entidad es la administradora dueña del Dato Maestro referente a la "Actividad Económica" y los códigos de "Ubigeo"?
* a) El Registro Nacional de Identificación y Estado Civil (RENIEC).
* b) La Superintendencia Nacional de Aduanas y de Administración Tributaria (SUNAT).
* **c) El Instituto Nacional de Estadística e Informática (INEI).** (Correcta)
* d) El Ministerio de Economía y Finanzas.

#### Pregunta 13
¿Qué problema principal soluciona el uso efectivo de la Plataforma de Interoperabilidad del Estado (PIDE) de cara al ciudadano?
* a) Permite descargar contenidos multimedia de forma gratuita.
* **b) Evita requerirle al ciudadano documentos o información que el Estado ya posee en sus bases de datos, reduciendo las trabas burocráticas.** (Correcta)
* c) Sirve como una red social interna para coordinar reuniones presenciales.
* d) Publica automáticamente las actas de contratación del presupuesto nacional.

#### Pregunta 14
De acuerdo con el modelo de Osinergmin, la "Capa Azul" (Oro / Refinada) del repositorio de datos se destina específicamente para:
* **a) El consumo de datos por parte de Científicos de Datos para modelos predictivos, analítica avanzada, Inteligencia Artificial y Dashboards directivos.** (Correcta)
* b) La recepción de datos crudos (Raw Data) desde las ventanillas de atención.
* c) Archivar expedientes físicos inactivos o listos para destrucción.
* d) Alojar copias de seguridad de sistemas legados.

#### Pregunta 15
¿Cuál es el beneficio de publicar bases de datos en la Plataforma Nacional de Datos Abiertos (PNDA) para el ecosistema tecnológico?
* a) Ocultar la información ante auditorías o revisiones periodísticas.
* b) Limitar las descargas únicamente a empresas internacionales autorizadas.
* **c) Democratizar la información, permitiendo que investigadores, la academia y el sector privado reutilicen los datos para crear soluciones que generen valor público.** (Correcta)
* d) Asegurar que solo el área de TI pueda leer la base de datos institucional.
