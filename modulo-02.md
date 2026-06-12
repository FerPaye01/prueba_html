# MÓDULO 2: Roles, Responsabilidades y Modelos Operativos (El Ecosistema Humano)

Este documento recopila la información teórica, metodológica y los recursos prácticos del Módulo 2 para su posterior integración en la plataforma de aprendizaje (LMS).

---

## COMPONENTE 1: FUENTE DE CONOCIMIENTO (Material de Estudio)

Este material se presentará en la plataforma como un paquete interactivo tipo SCORM que incluye lecturas, normativas descargables y apoyo visual.

### 1. Fuentes Normativas y Manuales (Sección de "Descargables"):
* **Marco Legal de Roles Peruano:** 
  * Resolución de SGTD N° 001-2022-PCM/SGTD (Perfil y Responsabilidades del Oficial de Gobierno de Datos).
  * Resolución de SGTD N° 002-2023-PCM/SGTD (Perfil y Responsabilidades del Oficial de Seguridad y Confianza Digital).
* **Manual Corporativo Osinergmin:** 
  * PI-59: Procedimiento Interno de Gestión de Gobernanza de Datos (Osinergmin).
* **Material Didáctico e Internacional:** 
  * DataCamp - *Data Governance Concepts* (Roles de Datos y Modelos Operativos).
  * *Non-Invasive Data Governance* de Robert S. Seiner (Capítulos 7, 8 y 9 sobre capas operativas, tácticas y estratégicas).

### 2. Texto Didáctico Específico del Curso:

#### El Ecosistema Humano: La Cadena de Suministro del Dato
Implementar tecnología de punta sin definir roles es automatizar el desorden. En muchas entidades existe un fenómeno llamado **"Propiedad Difusa"**: todos los funcionarios usan un mismo dato, lo modifican y lo reportan, pero cuando ocurre un error, nadie es el responsable formal de su calidad ni sabe a quién rendirle cuentas.

Para entender cómo solucionar esto y formalizar la gobernanza, los expertos de DataCamp nos proponen pensar en el ciclo de vida de un dato como **el viaje de un pimiento desde la granja hasta un plato gourmet en tu mesa**:
* **El Dueño de la Granja (Dueño del Dato / Data Owner):** Supervisa los recursos y el cumplimiento normativo. En el negocio, es el máximo responsable de aprobar las reglas de calidad, propósito y acceso de un conjunto de datos. *¡TI no es el dueño de los datos del negocio!*
* **El Trabajador del Campo (Productor del Dato):** Quien siembra y cosecha. En nuestra entidad, es el colaborador operativo que introduce los datos en el sistema desde el origen (ej. en ventanilla de atención) y debe evitar errores de captura.
* **El Distribuidor (Custodio del Dato / Data Custodian):** Almacena y transporta el alimento de forma segura en camiones refrigerados. En el mundo digital, es el área de TI que asegura la infraestructura física, las redes, las copias de seguridad y los servidores.
* **El Jefe de la Tienda (Gestor de Datos / Data Steward):** Organiza los alimentos en los estantes y orienta al público. En datos, es el experto de negocio encargado de normalizar, clasificar los metadatos y definir accesos.
* **El Chef (Analista o Científico de Datos):** Limpia, prepara y cocina el ingrediente para obtener un resultado final de alto valor. En nuestra entidad, analiza los datos limpios para generar insights accionables y reportes gerenciales (*Business Intelligence*).

#### El Oficial de Gobierno de Datos (OGD)
En el centro de este modelo no está el departamento de TI, sino el OGD. El Oficial de Gobierno de Datos actúa exactamente como el **director de una orquesta**: no toca ningún instrumento ni conecta cables en los servidores; su labor es asegurar que todos los miembros de la entidad sigan la misma "partitura" (políticas de gobernanza) para transformar el ruido de los silos en una armonía perfecta.

#### Modelos Operativos de Gobernanza
Para que estos roles interactúen y tomen decisiones sobre datos en la institución, las entidades adoptan "Modelos Operativos":
1. **Modelo Centralizado:** Una oficina o consejo centralizado define y hace cumplir todas las reglas. Es ideal si la entidad es poco madura en datos, aunque puede volverse burocrático y crear cuellos de botella a gran escala.
2. **Modelo Descentralizado:** Cada gerencia tiene autonomía total sobre sus datos. Ofrece flexibilidad local, pero es lento y difícil lograr consensos corporativos.
3. **Modelo Federado o Híbrido:** El enfoque ideal. La oficina central provee la estrategia, lineamientos y herramientas comunes, pero cada línea de negocio tiene la flexibilidad para implementarla según sus necesidades operativas diarias.

#### El Enfoque "No Invasivo" (Robert S. Seiner)
Gobernanza de datos no significa inventar una gran burocracia con nuevos cargos que paralicen la entidad. Un enfoque "No Invasivo" reconoce que las personas ya interactúan con los datos todos los días. El objetivo es identificar quiénes definen, producen y usan los datos, y formalizar su nivel de responsabilidad (rendición de cuentas) manteniendo sus cargos y títulos originales.

---

### 3. Diapositivas Específicas del Curso (Mockup Visual):

* **Diapositiva 1:**
  * **Visual:** De la Granja a la Mesa - Iconos de un agricultor, un camión de distribución, un mercado y un chef de cocina.
  * **Título:** ¿Quién cocina nuestros datos?
  * **Contenido:** Infografía que relaciona la historia de la cadena de suministro de DataCamp con los roles institucionales. Demuestra que TI (el camión distribuidor) solo transporta y almacena, pero el Negocio (el dueño de la granja) define las reglas de calidad y propósito.
* **Diapositiva 2:**
  * **Visual:** Un director de orquesta frente a grupos de músicos con instrumentos separados.
  * **Título:** El Oficial de Gobierno de Datos (OGD).
  * **Contenido:** El OGD no es el dueño físico de la información ni programa bases de datos. Es el director de orquesta que coordina y articula la estrategia para que todas las gerencias sigan las políticas comunes de datos y los silos se conviertan en una sinfonía corporativa.
* **Diapositiva 3:**
  * **Visual:** Tres organigramas conceptuales (uno concentrado en un punto, otro disperso y uno interconectado en red).
  * **Título:** Eligiendo nuestro Modelo Operativo.
  * **Contenido:** Comparación rápida de los enfoques Centralizado, Descentralizado y Federado (Híbrido) para la toma de decisiones ágiles sobre datos en la institución pública.

---

## COMPONENTE 2: EJERCICIOS INTERACTIVOS (Taxonomía de Bloom)

### Ejercicio 1: Nivel Comprender - "La Cocina de los Datos" (Drag & Drop)
* **Instrucción:** Arrastra el rol de la cadena de suministro alimentaria de DataCamp hacia su equivalente y responsabilidad en el Gobierno de Datos.
* **Asociaciones:**
  * *Dueño de la granja (supervisa reglas, recursos y la producción).* $\rightarrow$ **Dueño del Dato / Data Owner** (Aprueba reglas de calidad e identifica términos).
  * *Trabajador del campo (siembra y cosecha en origen evitando daños).* $\rightarrow$ **Productor del Dato** (Introduce datos en ventanillas).
  * *Distribuidor (almacena y transporta seguro en camiones).* $\rightarrow$ **Custodio del Dato / Equipo de TI** (Respalda bases de datos y gestiona redes).
  * *Jefe de la tienda (organiza los estantes y da acceso al público).* $\rightarrow$ **Gestor de Datos / Data Steward** (Normaliza, clasifica metadatos).
  * *Chef (prepara y cocina el ingrediente para obtener un plato gourmet).* $\rightarrow$ **Analista o Científico de Datos / BI & BA** (Genera dashboards).

### Ejercicio 2: Nivel Aplicar - "Elige la Estructura y Formaliza" (Rellenar espacios en blanco)
* **Texto a completar:**
  > "Si nuestra entidad es poco madura en gestión de información, nos conviene iniciar con un modelo operativo **[Centralizado]** donde la Oficina de Gobierno dicte las reglas. Sin embargo, a medida que crecemos, el modelo ideal es el **[Federado (Híbrido)]** porque equilibra la gobernanza corporativa con la agilidad local. Bajo un enfoque **[No Invasivo]**, ser un steward no es un cargo nuevo, sino una forma de **[formalizar]** las responsabilidades y rendición de cuentas que los colaboradores ya tienen en su día a día."

### Ejercicio 3: Nivel Analizar - "Resolviendo el Incendio" (Elige tu propia aventura)
* **Escenario:**
  > "Como Oficial de Gobierno de Datos, detectas que hay un grave error recurrente en los reportes de cobranzas de Osinergmin porque los usuarios ingresan las fechas en distintos formatos y con errores de tipeo. ¿A quién acudes primero para resolver la regla de negocio?"
* **Opciones de decisión:**
  * **Opción A:** Le exijo al Gerente de TI (Custodio de la base de datos) que cambie la estructura de la base de datos inmediatamente.
    * *Feedback (Incorrecto/Alto Riesgo):* ¡Cuidado! TI es el Custodio técnico, no el Dueño del Dato. Si pides a TI que altere reglas de negocio por su cuenta, estarás promoviendo la "Propiedad Difusa" y TI no podrá adivinar el impacto comercial en el área usuaria.
  * **Opción B:** Me reúno con el Gerente de Cobranzas (Dueño del Dato) para que defina el formato de fecha oficial requerido y luego coordinamos con TI (Custodio) para programar las reglas de validez correspondientes.
    * *Feedback (Correcto/Seguro):* ¡Excelente! Has aplicado el engranaje de colaboración. El Dueño define la regla y el Custodio la ejecuta técnicamente en los sistemas.

---

## COMPONENTE 3: BANCO DE PREGUNTAS TIPO EXAMEN (Pool para LMS)

El sistema seleccionará 5 preguntas al azar por cada intento del usuario.

#### Pregunta 1
En la analogía de la cadena de suministro de DataCamp, ¿qué rol corporativo representa el "Distribuidor" que transporta y asegura el almacenamiento en frío del alimento?
* a) El Analista o Científico de Datos.
* b) El Productor operativo de datos.
* **c) El Custodio del Dato (Data Custodian), responsable de redes, copias de seguridad y servidores.** (Correcta)
* d) El Oficial de Datos Personales.

#### Pregunta 2
De acuerdo con DataCamp, ¿qué característica define a un modelo operativo de gobernanza "Federado o Híbrido"?
* a) Cada departamento actúa con autonomía absoluta sin responder ante una estrategia común.
* b) El departamento de TI toma el 100% de las decisiones y definiciones de negocio.
* **c) La Oficina central aporta la estrategia y herramientas comunes, pero permite a las líneas de negocio implementar la gobernanza de forma flexible según sus necesidades.** (Correcta)
* d) Está estrictamente diseñado para organizaciones que no tienen ningún nivel de madurez técnica.

#### Pregunta 3
¿Cuál es el equivalente al "Chef" (quien limpia, prepara y cocina el ingrediente para obtener un resultado final de alto valor) en el ecosistema de roles de datos?
* a) El dueño de la infraestructura física del centro de datos.
* **b) El Analista o Científico de Datos, que utiliza los datos limpios para generar reportes, dashboards e insights accionables.** (Correcta)
* c) El Digitador que introduce datos desde ventanillas de atención.
* d) El Asesor Legal de la entidad.

#### Pregunta 4
Si una entidad pública utiliza un modelo operativo de gobernanza "Centralizado", ¿cuál es uno de sus principales retos a medida que la organización crece?
* a) Aumenta la anarquía en los procesos operativos de datos.
* **b) Puede percibirse como demasiado burocrático y convertirse en un cuello de botella para la agilidad y eficiencia del negocio.** (Correcta)
* c) Elimina automáticamente todos los requerimientos técnicos de ciberseguridad.
* d) Obliga a la institución a prescindir de la figura del OGD.

#### Pregunta 5
Según el procedimiento interno PI-59 y las mejores prácticas, ¿quién asume la máxima responsabilidad por definir el propósito y aprobar las reglas de calidad de los datos de su gerencia?
* a) El Administrador de Base de Datos (DBA).
* b) El Analista de Business Intelligence (BI).
* **c) El Dueño del Dato (Data Owner).** (Correcta)
* d) El desarrollador del software transaccional.

#### Pregunta 6
¿Qué función asume el Oficial de Gobierno de Datos (OGD) en relación con el ecosistema humano de la entidad?
* a) Modificar y programar los códigos de acceso de la base de datos principal.
* b) Reemplazar funcionalmente al Jefe de la Oficina de TI.
* **c) Actuar como "director de orquesta", articulando, facilitando y supervisando el cumplimiento de la estrategia de datos sin ser el dueño de la información.** (Correcta)
* d) Borrar de forma manual los registros históricos de los ciudadanos para ahorrar espacio.

#### Pregunta 7
¿Qué fenómeno organizacional se busca erradicar con la asignación clara de roles en el Gobierno de Datos?
* a) La transformación digital acelerada del Estado.
* **b) La "Propiedad Difusa", donde todos usan un dato pero nadie se responsabiliza formalmente por su calidad.** (Correcta)
* c) La interoperabilidad técnica y simplificación de trámites.
* d) Las políticas de seguridad de la información.

#### Pregunta 8
Según la normativa peruana, ¿quién es responsable de aprobar formalmente el Plan de Acción de Gobierno de Datos en la entidad pública?
* a) El Ministerio de Justicia y Derechos Humanos.
* **b) El Comité de Gobierno y Transformación Digital de la entidad.** (Correcta)
* c) El Jefe de la Oficina de Recursos Humanos.
* d) El Custodio Técnico del Dato.

#### Pregunta 9
De acuerdo con el enfoque de "Gobierno de Datos No Invasivo" de Robert S. Seiner, ¿qué es un "Data Steward" (Administrador o Gestor de Datos)?
* a) Un puesto de trabajo completamente nuevo que debe ser contratado externamente.
* b) Un software que limpia bases de datos de forma automática.
* **c) Cualquier colaborador en la organización evaluado por su relación con los datos (quien los define, produce o usa) y que asume responsabilidad por ellos.** (Correcta)
* d) El auditor externo del Gobierno encargado de las multas.

#### Pregunta 10
¿Por qué el departamento de Tecnologías de la Información (TI) NO debe ser considerado el "Dueño" (Owner) de los datos del negocio?
* a) Porque el área de TI no cuenta con presupuesto propio de gobernanza.
* **b) En la cadena de suministro, TI gestiona la infraestructura y los sistemas (el transporte), pero son las áreas usuarias de negocio quienes entienden el contexto y propósito de la información.** (Correcta)
* c) Porque TI únicamente procesa datos no estructurados de redes sociales.
* d) Porque los lineamientos de la PCM le prohíben a los ingenieros de TI de forma expresa tomar decisiones de base de datos.

#### Pregunta 11
Dentro del marco de confianza digital en el Perú, ¿quién se encarga de asegurar que la entidad pública cumpla estrictamente con la Ley N° 29733 (Ley de Protección de Datos Personales)?
* a) El Dueño del Dato (Data Owner).
* b) El Oficial de Gobierno de Datos (OGD).
* **c) El Oficial de Datos Personales (o Delegado de Protección de Datos).** (Correcta)
* d) El Jefe de la Oficina de Comunicaciones y Prensa.

#### Pregunta 12
¿Cuál es el rol del "Embajador de Datos" (Data Champion) dentro de un procedimiento interno corporativo?
* a) Auditar y validar los balances contables anuales.
* b) Programar las interfaces de interoperabilidad técnicas (APIs).
* **c) Ser el promotor orgánico de la cultura de datos dentro de su gerencia y el facilitador en el día a día para buenas prácticas.** (Correcta)
* d) Eliminar de forma automática la información que tenga más de 5 años.

#### Pregunta 13
Para que el Oficial de Gobierno de Datos proponga un Plan de Acción viable y con prioridades claras, ¿cuál es el diagnóstico que debe realizar primero?
* a) Comprar y desplegar licencias de software de Inteligencia Artificial.
* **b) Ejecutar la evaluación del nivel de madurez de Gobierno de Datos de la institución.** (Correcta)
* c) Eliminar todos los archivos físicos e impresos históricos del archivo central.
* d) Publicar datos abiertos de forma masiva en la PNDA sin clasificar.

#### Pregunta 14
Bajo la premisa de que "la calidad del dato es responsabilidad de todos", ¿quién es responsable si un dato se registra con errores de tipeo en la ventanilla de atención?
* a) Únicamente el Oficial de Gobierno de Datos.
* **b) El colaborador operativo que captura y digita la información (productor del dato), al no seguir las validaciones obligatorias.** (Correcta)
* c) El Director de TI de la entidad.
* d) El proveedor externo del software de base de datos.

#### Pregunta 15
En el proceso de resolver un problema transversal de datos, si los Gestores de Datos (Nivel Táctico) no logran ponerse de acuerdo sobre una definición porque afecta a diferentes gerencias, ¿cuál es el paso de escalamiento correcto?
* a) Suspender la discusión y dejar el dato sin definir.
* **b) Escalar el conflicto al Comité de Gobierno y Transformación Digital (Nivel Estratégico) para una decisión institucional unificada.** (Correcta)
* c) Delegar la resolución del problema al sistema de Inteligencia Artificial.
* d) Que la Oficina de TI decida y cambie la regla de forma unilateral.
