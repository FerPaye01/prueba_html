# MÓDULO 6: Seguridad, Privacidad, Anonimización, Ética y la Estrategia de Datos (Protegiendo al Ciudadano)

Este documento recopila la información teórica, metodológica y los recursos prácticos del Módulo 6 para su posterior integración en la plataforma de aprendizaje (LMS).

---

## COMPONENTE 1: FUENTE DE CONOCIMIENTO (Material de Estudio)

Este material se presentará como un paquete interactivo tipo SCORM que incluye lecturas, normativas y apoyo visual.

### 1. Fuentes Normativas y Manuales (Sección de "Descargables"):
* **Marco Legal Peruano:** 
  * Ley N° 29733 (Ley de Protección de Datos Personales).
  * Decreto de Urgencia N° 007-2020 (Marco de Confianza Digital).
* **Material Didáctico Internacional:** 
  * DataCamp - *Data Governance Concepts* (Estrategias Defensiva vs. Ofensiva en el Gobierno de Datos).
  * Guía Internacional DAMA-DMBOK2 - Capítulo 7: *Data Security* (Las 4 A's de la Seguridad).
* **Manual Corporativo Osinergmin:** 
  * PI-59: Procedimiento Interno de Gestión de Gobernanza de Datos.
  * PI-59: Políticas de Seguridad de la Información (SGI-PO-01) de Osinergmin.

### 2. Texto Didáctico Específico del Curso:

#### El Equilibrio Estratégico: Defensiva vs. Ofensiva
Abrir datos y utilizar Inteligencia Artificial es vital para la modernización del Estado, pero nunca debe hacerse a costa de la privacidad del ciudadano. Según los expertos de DataCamp, todo Gobierno de Datos exitoso debe equilibrar dos grandes estrategias:
1. **La Estrategia Defensiva:** Está enfocada en minimizar riesgos operativos, evitar sanciones y garantizar el estricto cumplimiento normativo (como la Ley N° 29733 y el Marco de Confianza Digital). Es el "escudo" de la organización.
2. **La Estrategia Ofensiva:** Está enfocada en apoyar los objetivos de la institución, utilizando los datos para generar insights accionables, innovación y valor público. Es el "motor" de la organización.

> [!IMPORTANT]
> Si una entidad es puramente defensiva, bloquea todo y se paraliza (parálisis burocrática). Si es puramente ofensiva, expone información sensible, comete infracciones legales y destruye la confianza de la sociedad en las instituciones. El equilibrio se logra aplicando seguridad desde el diseño.

#### Técnicas de Protección para Habilitar la Ofensiva
Para poder hacer "ofensiva" (publicar datos y usar IA) sin romper la "defensa" (privacidad), debemos aplicar técnicas de desidentificación clave:
* **Seudonimización (Defensa interna):** Consiste en reemplazar identificadores (como un nombre o DNI) por un alias, código o token. Es un proceso reversible si se tiene la "llave" para descifrarlo. Por lo tanto, el dato sigue siendo considerado personal y sujeto a la Ley N° 29733.
* **Anonimización (Habilita la ofensiva):** Elimina por completo y de forma irreversible la posibilidad de identificar a una persona. Al ser irreversible, este dato queda fuera del ámbito restrictivo de la Ley de Protección de Datos y es libre para su publicación en la Plataforma Nacional de Datos Abiertos o para entrenar Inteligencia Artificial de forma ética.
  * *Técnicas comunes:* **Supresión de variables** (eliminar columnas como el DNI y teléfono) y la **Generalización** (reemplazar datos exactos como "34 años" por rangos "30-39 años", o salarios exactos por rangos amplios).

#### La Ética en la Era de la Inteligencia Artificial
La seguridad no solo abarca evitar hackeos. Hoy en día, los datos alimentan algoritmos de Inteligencia Artificial que toman decisiones. Si entrenamos estos modelos con datos históricos que contienen sesgos o discriminación del pasado, la máquina amplificará esa discriminación en el futuro. 

La gobernanza de datos asegura que la IA se utilice de forma ética, auditable y transparente, manteniendo siempre la supervisión humana activa (**Human-in-the-loop**) para auditar los algoritmos y reparar posibles daños o alucinaciones.

---

### 3. Diapositivas Específicas del Curso (Mockup Visual):

* **Diapositiva 1:**
  * **Visual:** Una balanza que equilibra un megáfono de transparencia y un candado de privacidad, junto a un cohete despegando.
  * **Título:** El Equilibrio: Defensa y Ofensiva.
  * **Contenido:** Según DataCamp, no podemos ser 100% defensivos (parálisis burocrática) ni 100% ofensivos (caos y multas de hasta 100 UIT según la Ley 29733). El Gobierno de Datos equilibra la defensa con la ofensiva para generar valor público seguro.
* **Diapositiva 2:**
  * **Visual:** Un antifaz con una llave al lado vs. un documento triturado convertido en un gráfico estadístico.
  * **Título:** Seudonimización vs. Anonimización.
  * **Contenido:** La Seudonimización oculta la identidad temporalmente y es reversible (sigue bajo la ley). La Anonimización destruye el vínculo identificatorio de forma irreversible (listo para publicación abierta de datos).
* **Diapositiva 3:**
  * **Visual:** Un humano supervisando a un robot que clasifica expedientes, junto a un escudo con las letras "A" y "E".
  * **Título:** Las 4 A's de DAMA, el Entitlement y la Ética.
  * **Contenido:** Para asegurar los datos internamente, DAMA exige: Acceso, Auditoría, Autenticación y Autorización, sumando el *Entitlement* (derecho legítimo de uso). En IA, la estrategia ofensiva exige mantener al humano a cargo (*Human-in-the-loop*) para auditar los algoritmos y evitar sesgos de discriminación.

---

## COMPONENTE 2: EJERCICIOS INTERACTIVOS (Taxonomía de Bloom)

### Ejercicio 1: Nivel Comprender - "Clasificando la Protección y Estrategia" (Drag & Drop)
* **Instrucción:** Arrastra la técnica de protección de datos o iniciativa institucional hacia su definición/categoría correcta.
* **Asociaciones:**
  * *Reemplazo un nombre por un código, pero guardo la llave para revertirlo.* $\rightarrow$ **Seudonimización**
  * *Elimino permanentemente la columna del DNI y teléfono de la base de datos.* $\rightarrow$ **Supresión de variables**
  * *Reemplazo el salario exacto de "4,732 soles" por el rango "De 4,000 a 5,000 soles".* $\rightarrow$ **Generalización**
  * *Aplicar enmascaramiento dinámico a la base de datos de pacientes para cumplir con la Ley 29733.* $\rightarrow$ **Estrategia Defensiva**
  * *Utilizar los datos históricos para crear un modelo de Inteligencia Artificial que prediga zonas de alta criminalidad.* $\rightarrow$ **Estrategia Ofensiva**
  * *Asegurarse de que el equipo de TI mantenga las copias de seguridad cifradas.* $\rightarrow$ **Estrategia Defensiva**

### Ejercicio 2: Nivel Aplicar - "El Escudo y el Motor" (Rellenar espacios en blanco)
* **Texto a completar:**
  > "Bajo el Marco de **[Confianza Digital]** (DU N° 007-2020), la publicación de datos no debe vulnerar la Ley N° 29733 de Protección de Datos Personales. Si el Estado se enfoca únicamente en la Estrategia **[Defensiva]**, corremos el riesgo de paralizar la innovación por exceso de controles. Por otro lado, aplicar una Estrategia **[Ofensiva]** sin cuidado puede derivar en multas severas de hasta 100 UIT. El equilibrio se logra aplicando técnicas como la **[Anonimización]**, la cual garantiza que la identificación del ciudadano sea **[irreversible]**, permitiendo que la información genere valor público sin riesgos legales."

### Ejercicio 3: Nivel Analizar - "Decisión Ética" (Elige tu propia aventura)
* **Escenario:**
  > "Tu equipo de Inteligencia Artificial está creando un modelo para automatizar el primer filtro de contratación de personal en Osinergmin. Te piden la base de datos histórica de los últimos 20 años de contrataciones, que contiene las direcciones exactas de los candidatos, género y edades."
* **Opciones de decisión:**
  * **Opción A:** Les entrego la base de datos completa inmediatamente para que el algoritmo sea lo más exacto posible.
    * *Feedback (Incorrecto/Alto Riesgo):* ¡Alto riesgo ético y legal! Si entregas datos históricos sin auditar, la IA aprenderá y amplificará los sesgos de contratación del pasado, además de estar violando la privacidad de las personas al entregar datos personales no generalizados ni anonimizados.
  * **Opción B:** Ejecuto un proceso de generalización de variables (rango de edades y distritos de residencia) y audito la calidad del dato para asegurar que el modelo no genere discriminación antes de entrenarlo.
    * *Feedback (Correcto/Seguro):* ¡Excelente decisión! Estás garantizando el uso ético de la IA, aplicando privacidad y seguridad desde el diseño, y mitigando riesgos regulatorios y de sesgo algorítmico.

---

## COMPONENTE 3: BANCO DE PREGUNTAS TIPO EXAMEN (Pool para LMS)

El sistema seleccionará 5 preguntas al azar por cada intento del usuario.

#### Pregunta 1
¿Qué norma peruana establece las directrices y sanciones (de 5 a 100 UIT) para proteger la intimidad personal frente al uso informático de los datos?
* a) La Ley de Transparencia y Acceso a la Información Pública.
* **b) La Ley N° 29733 de Protección de Datos Personales.** (Correcta)
* c) La Ley del Teletrabajo.
* d) El Decreto de Urgencia de Ciberdefensa.

#### Pregunta 2
¿Cuál es la principal diferencia normativa entre anonimizar y seudonimizar un conjunto de datos?
* a) La anonimización es temporal y la seudonimización es permanente.
* b) Son exactamente lo mismo a nivel técnico y legal.
* **c) La anonimización es irreversible y queda fuera de la Ley N° 29733; la seudonimización es reversible (con llave) y el dato sigue considerándose personal.** (Correcta)
* d) La seudonimización es exclusiva para bases de datos físicas en papel.

#### Pregunta 3
Dentro de las dimensiones de seguridad de DAMA (Las 4 A's), ¿qué significa la "Auditoría" (Audit)?
* a) Permitir que cualquier persona modifique los datos sin control.
* b) Validar el nombre de usuario y contraseña al ingresar.
* **c) Revisar las acciones de seguridad y el historial de actividad de los usuarios para asegurar el cumplimiento de normativas.** (Correcta)
* d) Ocultar los logs del sistema a la alta gerencia.

#### Pregunta 4
Si un Oficial de Gobierno de Datos decide reemplazar la fecha de nacimiento exacta "15/04/1990" por "Abril 1990", ¿qué técnica de protección está utilizando?
* a) Supresión de variables.
* **b) Generalización.** (Correcta)
* c) Encriptación de disco duro.
* d) Firma digital.

#### Pregunta 5
El concepto de "Linkage Attack" (Ataque de enlace) representa un riesgo en la apertura de datos. ¿En qué consiste?
* a) Enviar miles de correos fraudulentos (phishing) a la entidad.
* b) Robar físicamente las cintas de backup de la institución.
* **c) Combinar y cruzar diferentes conjuntos de datos presuntamente anónimos con fuentes externas para lograr reidentificar a las personas.** (Correcta)
* d) Borrar los metadatos del catálogo nacional de datos abiertos.

#### Pregunta 6
Según las mejores prácticas del marco de Confianza Digital, el tratamiento de datos personales debe guiarse por el principio de:
* a) Exposición máxima y pública.
* **b) Privacidad por diseño (Minimizar el acceso a los datos recolectados al menor privilegio posible).** (Correcta)
* c) Monetización de información sensible.
* d) Trazabilidad pública total y sin restricciones de los ciudadanos.

#### Pregunta 7
En el ecosistema de la entidad pública, ¿qué rol es el principal encargado de ser el enlace con el Ministerio de Justicia (ANPD) para velar por el cumplimiento de la Ley N° 29733?
* a) El Oficial de Gobierno de Datos.
* b) El Administrador de Base de Datos (DBA).
* **c) El Oficial de Datos Personales (o Delegado de Protección de Datos).** (Correcta)
* d) El Jefe de Recursos Humanos.

#### Pregunta 8
¿Qué sucede si un modelo de Inteligencia Artificial (IA) para la selección de personal se entrena con datos históricos que excluyen o subrepresentan a cierto grupo demográfico?
* a) El modelo se vuelve automáticamente un 100% más preciso.
* **b) El modelo hereda y amplifica los sesgos (discriminación) que venían implícitos en los datos de origen.** (Correcta)
* c) La IA limpia los sesgos históricos de forma automática sin intervención humana.
* d) La base de datos del modelo se bloquea automáticamente por seguridad.

#### Pregunta 9
¿Por qué la técnica de "Supresión de variables" (ej. borrar solo el DNI y Nombre) suele ser insuficiente por sí sola para proteger un conjunto de datos público?
* a) Porque borra demasiada información útil y el archivo pierde validez.
* **b) Porque mediante la combinación de variables indirectas restantes (ej. edad exacta + profesión poco común + distrito) se puede reidentificar a una persona.** (Correcta)
* c) Porque la Ley prohíbe eliminar columnas de cualquier base de datos pública.
* d) Porque los metadatos de linaje se vuelven corruptos.

#### Pregunta 10
Según el estándar DAMA-DMBOK2, la "Autenticación" (Authentication) en la seguridad de datos se refiere a:
* a) Publicar datos en la web para el libre uso ciudadano.
* **b) Validar que el usuario que intenta ingresar a un sistema es realmente quien dice ser (ej. mediante contraseñas o tokens multifactor).** (Correcta)
* c) Otorgar permisos para modificar y editar reportes financieros.
* d) Clasificar el dato como confidencial o público.

#### Pregunta 11
El Decreto de Urgencia N° 007-2020 estructura el "Marco de Confianza Digital" en pilares fundamentales. ¿Cuál de los siguientes es uno de ellos?
* a) El aumento de recaudación tributaria digital.
* b) La eliminación de sistemas operativos de código abierto.
* **c) La protección de datos personales y la ciberseguridad.** (Correcta)
* d) La exportación y venta de datos a servidores extranjeros.

#### Pregunta 12
Para auditar éticamente un algoritmo de inteligencia artificial en el sector público, ¿qué elemento es el primero que debe revisar el equipo de Gobierno de Datos?
* a) El lenguaje de programación utilizado por el equipo técnico.
* **b) La calidad, el origen y la representatividad de los datos con los que el modelo fue entrenado.** (Correcta)
* c) El costo de las licencias del software de desarrollo.
* d) El diseño gráfico de la interfaz de usuario.

#### Pregunta 13
¿Cuál es la causa más frecuente de la filtración o exposición no autorizada de datos sensibles en las instituciones públicas?
* a) Los ataques internacionales coordinados de denegación de servicio.
* **b) Los errores operativos o exposiciones accidentales (ej. subir un archivo público ocultando columnas en lugar de eliminarlas, o backups sin cifrar).** (Correcta)
* c) Las fallas físicas en la red de energía nacional.
* d) El exceso de consultas en la Plataforma Nacional de Datos Abiertos.

#### Pregunta 14
El principio de "Evaluaciones de Impacto" y "Mecanismos de Reparación" en la IA busca asegurar que:
* a) La máquina sea la única responsable ante un error de decisión.
* b) Los servidores no consuman demasiada energía en horas punta.
* **c) Existan humanos verificando las decisiones y exista un canal institucional para atender a ciudadanos perjudicados por el modelo (Human-in-the-loop).** (Correcta)
* d) Todos los sistemas de IA se programen de forma local.

#### Pregunta 15
¿Qué dimensión de la seguridad (El pilar "E" moderno de DAMA) se enfoca en determinar si un individuo tiene el derecho o la necesidad legítima de acceder a un dato por la naturaleza de su trabajo, antes de otorgarle autorización?
* a) Encriptación (Encryption).
* b) Evaluación (Evaluation).
* **c) Derecho/Adjudicación (Entitlement).** (Correcta)
* d) Extracción (Extraction).

---

## ESTRATEGIAS SEGÚN DATACAMP

### Estrategia Defensiva
* **Objetivo:** Minimizar el riesgo, cumplir con la regulación (Ley N° 29733, DU N° 007-2020), evitar filtraciones, ciberseguridad, encriptación, control de accesos e integridad técnica.
* **Cualidad:** Funciona como el **escudo** protector de Osinergmin.

### Estrategia Ofensiva
* **Objetivo:** Optimizar el uso de los datos para la toma de decisiones, generar predicciones mediante Inteligencia Artificial, publicar datos abiertos que generen valor público, interoperabilidad ágil y generación de insights de negocio.
* **Cualidad:** Funciona como el **motor** de innovación de Osinergmin.

### El Equilibrio
Un programa de Gobierno de Datos no debe inclinarse totalmente a un solo extremo:
* *100% Defensivo:* Bloqueo de acceso a la información, lentitud en la modernización, silos cerrados por temor a sanciones.
* *100% Ofensivo:* Fuga de datos sensibles, multas de la Autoridad Nacional de Protección de Datos (ANPD), pérdida de confianza institucional.
* *Solución:* Aplicar técnicas seguras de anonimización y marcos de gobernanza con comités ágiles para habilitar el uso ofensivo de datos respetando las defensas reglamentarias.
