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
  * DataCamp - *Data Governance Concepts* (La Caja de Herramientas y Enfoques de Implementación: Top-Down, Bottom-Up y Colaborativo).

### 2. Texto Didáctico Específico del Curso:

#### Construyendo las Tuberías y la Caja de Herramientas
Para que el Gobierno de Datos funcione, la información debe fluir desde su origen hasta la toma de decisiones sin estancarse en "silos". En el Estado peruano, utilizamos plataformas nacionales y transversales:
* **PIDE (Interoperabilidad):** Permite que las entidades intercambien datos seguros de *back-office* en tiempo real mediante APIs. Evita requerirle al ciudadano documentos físicos que el Estado ya posee.
* **PNDA (Datos Abiertos):** Permite publicar datos hacia la ciudadanía y democratizar la información para fomentar la investigación e innovación.
* **GeoPerú:** Plataforma para análisis territorial y mapas geoespaciales.

Para que los sistemas internos conversen, cada entidad debe identificar sus **Datos Maestros** (como el DNI administrado por RENIEC, el RUC por SUNAT, o el Ubigeo por el INEI). Además, según enseña DataCamp, toda institución necesita una **"Caja de Herramientas"** conceptual para que los usuarios comprendan qué están compartiendo:
1. **Glosario de Negocio:** El vocabulario común de la organización. Contiene definiciones de negocio claras en lenguaje no técnico (Ej. ¿Qué significa exactamente "ciudadano activo" para nosotros?).
2. **Diccionario de Datos:** Contiene información puramente técnica para los sistemas (Ej. formato de la fecha, nombre de la tabla SQL, tamaño del campo y tipos de datos `VARCHAR`).
3. **Catálogo de Datos:** Funciona como una "biblioteca" o mercado centralizado. Enlaza el glosario (negocio) con el diccionario (técnico) para que los usuarios busquen y localicen fácilmente la información que necesitan.
4. **Linaje de Datos (Data Lineage):** El mapa visual que describe cómo fluye el dato desde su origen, pasando por sus transformaciones de limpieza, hasta su reporte final.

#### La Pirámide de Refinamiento de Datos
Internamente, los datos pasan por tres "capas de refinamiento" según la arquitectura de Osinergmin:
* **Capa Amarilla (Bronce / Landing):** Ingreso de datos crudos (*Raw Data*) desde diversas fuentes, sin filtros, conservando el historial completo de extracción.
* **Capa Verde (Plata / Data Gobernada):** Zona de confianza (*Trusted*). El Custodio del Dato aplica reglas de limpieza, elimina registros duplicados y estandariza la información.
* **Capa Azul (Oro / Refinado):** Datos listos para convertirse en "Productos de Datos" consumidos por Científicos de Datos para analítica avanzada, Inteligencia Artificial y dashboards directivos.

#### Los Enfoques de Implementación (DataCamp)
DataCamp advierte que existen tres enfoques de implementación para esta arquitectura:
* **Top-Down (De arriba a abajo):** Solo el área de TI controla todo. Es seguro, pero genera cuellos de botella e ineficiencia.
* **Bottom-Up (De abajo a arriba):** Todos los usuarios acceden a los datos crudos libremente. Es ágil, pero riesgoso y caótico.
* **Colaborativo:** El enfoque ideal. Equilibra la seguridad defensiva (cumplimiento normativo) con la agilidad ofensiva (democratización y análisis de datos), construyendo confianza conjunta.

---

### 3. Diapositivas Específicas del Curso (Mockup Visual):

* **Diapositiva 1:**
  * **Visual:** Tres engranajes conectados etiquetados como PIDE, PNDA y GeoPerú.
  * **Título:** El Ecosistema Nacional de Plataformas.
  * **Contenido:** PIDE para interconectar de forma automática nuestras entidades públicas (simplificación administrativa), PNDA para democratizar y publicar datos abiertos a la ciudadanía, y GeoPerú para territorializar la información mediante mapas y capas geográficas.
* **Diapositiva 2:**
  * **Visual:** Una biblioteca con dos secciones distintas (una de cuentos infantiles sencillos y otra de manuales técnicos) y un mapa de linaje en la pared.
  * **Título:** Nuestra Caja de Herramientas.
  * **Contenido:** El Catálogo de Datos es la biblioteca. Los libros de texto simple son el Glosario de Negocio (definiciones para humanos). Los manuales de código son el Diccionario de Datos (parámetros técnicos para sistemas). El Linaje de Datos es el mapa que describe de qué imprenta original vino cada libro.
* **Diapositiva 3:**
  * **Visual:** Una balanza equilibrando un candado metálico y una lupa analítica de exploración.
  * **Título:** El Enfoque Colaborativo de DataCamp.
  * **Contenido:** No podemos bloquear todos los datos por exceso de control (Top-Down) ni liberar información sensible sin filtros (Bottom-Up). El enfoque colaborativo equilibra la defensa (seguridad y control) con la ofensiva (analítica e innovación).

---

## COMPONENTE 2: EJERCICIOS INTERACTIVOS (Taxonomía de Bloom)

### Ejercicio 1: Nivel Comprender - "Ordenando la Caja de Herramientas" (Drag & Drop)
* **Instrucción:** Arrastra la necesidad de negocio o técnica hacia la herramienta tecnológica correspondiente.
* **Asociaciones:**
  * *Define en lenguaje claro y corporativo qué significa el término "proveedor".* $\rightarrow$ **Glosario de Negocio**
  * *Detalla que el campo "proveedor" es un valor alfanumérico de 11 dígitos (VARCHAR).* $\rightarrow$ **Diccionario de Datos**
  * *Funciona como un mercado centralizado donde puedo buscar y localizar las dos definiciones anteriores.* $\rightarrow$ **Catálogo de Datos**
  * *Me muestra gráficamente por cuántos sistemas y transformaciones pasó el dato del proveedor antes de llegar a mi reporte.* $\rightarrow$ **Linaje de Datos**
  * *Un periodista necesita descargar en Excel el presupuesto gastado en obras públicas.* $\rightarrow$ **PNDA (Plataforma Nacional de Datos Abiertos)**
  * *El área de licencias necesita consultar automáticamente si el DNI del solicitante es válido en el sistema de RENIEC.* $\rightarrow$ **PIDE (Interoperabilidad)**
  * *Un analista quiere superponer en un mapa la ubicación de colegios y las zonas de riesgo de inundación.* $\rightarrow$ **GeoPerú**

### Ejercicio 2: Nivel Aplicar - "El Enfoque Correcto y las Capas" (Rellenar espacios en blanco)
* **Texto a completar:**
  > "Si el área de TI asume el control total y actúa como el único guardián de las bases de datos, estamos aplicando un enfoque **[Top-Down (De arriba a abajo)]**, lo cual crea cuellos de botella para el negocio. Para escalar con éxito sin violar leyes de privacidad, DataCamp recomienda adoptar un enfoque **[Colaborativo]**, donde se equilibre el cumplimiento normativo con el acceso a los datos. Asimismo, los datos recién extraídos ingresan a la **[Capa Amarilla]** (Bronce) y, tras aplicarse las reglas del catálogo, se consolidan en la **[Capa Verde]** (Plata) como data gobernada."

### Ejercicio 3: Nivel Analizar - "Decisión Arquitectónica" (Elige tu propia aventura)
* **Escenario:**
  > "Estás diseñando un nuevo trámite digital para los ciudadanos en tu institución. Para completarlo, el sistema necesita comprobar que el usuario no tiene antecedentes penales (Poder Judicial) y que su empresa existe formalmente en registros públicos (SUNARP). ¿Cómo diseñas el flujo tecnológico?"
* **Opciones de decisión:**
  * **Opción A:** Habilito dos botones de carga de archivos para que el ciudadano escanee y suba los certificados en PDF de ambos documentos a nuestro sistema, encargando a un revisor su validación manual.
    * *Feedback (Incorrecto/Alto Riesgo):* ¡Cuidado! Estás trasladando la carga burocrática al ciudadano y creando silos de información obsoleta, además de añadir costos y tiempos de validación manual propensos a errores.
  * **Opción B:** Conecto el formulario de registro a la plataforma PIDE para consumir mediante APIs los Datos Maestros de la SUNARP y el Poder Judicial en tiempo real, validando la información al instante.
    * *Feedback (Correcto/Seguro):* ¡Excelente! Aplicas el principio "Once-Only" (Una sola vez). Mejoras drásticamente la experiencia del ciudadano, reduces costos operativos y utilizas la arquitectura digital interoperable del Estado peruano.

---

## COMPONENTE 3: BANCO DE PREGUNTAS TIPO EXAMEN (Pool para LMS)

El sistema seleccionará 5 preguntas al azar por cada intento del usuario.

#### Pregunta 1
Según las enseñanzas de DataCamp, ¿cuál es la principal diferencia entre un Glosario de Negocio y un Diccionario de Datos?
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
De acuerdo con los enfoques de implementación descritos por DataCamp, ¿qué caracteriza al enfoque "Colaborativo"?
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
