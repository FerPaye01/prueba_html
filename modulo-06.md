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
  * Estándares internacionales de Gobernanza de Datos (*Data Governance Concepts*: Estrategias Defensiva vs. Ofensiva en el Gobierno de Datos).
  * Guía Internacional DAMA-DMBOK2 - Capítulo 7: *Data Security* (Las 4 A's de la Seguridad).
* **Manual Corporativo Osinergmin:** 
  * PI-59: Procedimiento Interno de Gestión de Gobernanza de Datos.
  * PI-59: Políticas de Seguridad de la Información (SGI-PO-01) de Osinergmin.

### 2. Texto Didáctico Específico del Curso:

#### El Equilibrio Estratégico: Defensiva vs. Ofensiva
El gobierno de datos es un acto de equilibrio entre jugar a la "defensiva" y a la "ofensiva". Jugar a la defensiva significa proteger a la institución y al ciudadano. Aquí las reglas son estrictas, porque si fallamos, las consecuencias son devastadoras. Exponer información personal no solo destruye la confianza pública, sino que vulnera la **Ley N° 29733 de Protección de Datos Personales**. Un error aquí puede resultar en que la **Autoridad Nacional de Protección de Datos (ANPD)** nos imponga multas gravísimas de hasta **100 UIT**.

Por otro lado, jugar a la ofensiva significa usar los datos limpios para innovar, crear tableros analíticos y mejorar nuestros servicios. Pero no puedes tener una buena ofensiva (innovación) si tu defensiva (seguridad) es frágil y expone a la entidad a riesgos legales. Un equipo sin defensa pierde por goleada legal; un equipo sin ofensiva no genera valor al ciudadano.

> [!IMPORTANT]
> Si una entidad es puramente defensiva, bloquea todo y se paraliza (parálisis burocrática). Si es puramente ofensiva, expone información sensible, comete infracciones legales y destruye la confianza de la sociedad en las instituciones. El equilibrio se logra aplicando seguridad desde el diseño.

#### Técnicas de Protección para Habilitar la Ofensiva
Para poder hacer "ofensiva" (publicar datos y usar IA) sin romper la "defensa" (privacidad), debemos aplicar técnicas de desidentificación clave. Aprende a distinguirlas con ejemplos concretos:

* **Seudonimización (Defensa interna):** Reemplaza identificadores directos (nombre, DNI) por un alias, código o token. Es **reversible**: se guarda una "tabla de mapeo" en un servidor restringido para poder recuperar el dato original si es necesario para auditorías. El dato sigue siendo considerado personal y sujeto a la Ley N° 29733.
  * *Ejemplo:* "María López Rojas" → `ID_USU_8392` (la tabla de mapeo con el nombre real se almacena en un servidor aislado).

* **Anonimización (Habilita la ofensiva):** Elimina por completo y de forma **irreversible** la posibilidad de identificar a una persona. Al ser irreversible, este dato queda fuera del ámbito restrictivo de la Ley de Protección de Datos y es libre para su publicación o para entrenar IA.
  * *Técnicas comunes:*
    * **Supresión de variables:** Borrar columnas enteras (DNI, teléfono, correo electrónico).
    * **Generalización:** Reemplazar valores exactos por rangos o categorías. Por ejemplo: fecha exacta "15/04/1990" → solo "Abril 1990"; salario "S/ 4,732" → rango "S/ 4,000 - 5,000"; edad "34 años" → "30-39 años".

#### La Ética en la Era de la Inteligencia Artificial
La seguridad no solo abarca evitar hackeos. Hoy en día, los datos alimentan algoritmos de Inteligencia Artificial que toman decisiones. Si entrenamos estos modelos con datos históricos que contienen sesgos o discriminación del pasado, la máquina amplificará esa discriminación en el futuro. 

**Ejemplo concreto:** Si una institución ha contratado mayoritariamente hombres durante los últimos 20 años (90% hombres, 10% mujeres), y entrenamos una IA con esos datos históricos, la máquina aprenderá a preferir perfiles masculinos aunque le borremos la columna "género" del dataset. Esto ocurre porque la IA detecta variables proxy como la universidad de procedencia o el distrito de residencia para inferir el género indirectamente.

La gobernanza de datos asegura que la IA se utilice de forma ética, auditable y transparente, manteniendo siempre la supervisión humana activa (**Human-in-the-loop**) para auditar los algoritmos y reparar posibles daños o alucinaciones.

#### Las 4 A's de la Seguridad y el Ataque de Enlace (Linkage Attack)
Para garantizar la protección de los datos, todo acceso a la información en el Estado debe regirse por cuatro pilares de seguridad conocidos como las **4 A's**:

1. **Autenticación (Authentication):** Confirmar que realmente eres quien dices ser (ej. usar tu credencial, token o huella digital).
2. **Autorización (Authorization):** Definir qué nivel de información tienes permitido ver según tu rol y necesidad del cargo.
3. **Acceso (Access):** La puerta tecnológica real por donde entras al dato (sistema, base de datos, API).
4. **Auditoría (Audit):** El registro inmutable de todo lo que hiciste mientras estuviste adentro del sistema (logs de consultas, modificaciones y exportaciones).

Juntas, estas 4 A's definen tu **Entitlement** o derecho de uso legítimo de la información.

> **Ataque de Enlace (Linkage Attack):** Un riesgo crítico al abrir datos. Ocurre cuando un actor malicioso cruza un dataset supuestamente anónimo con otras fuentes públicas (ej. padrón electoral, redes sociales) y logra reidentificar a las personas. Por ejemplo, si un dataset anónimo contiene "Edad: 34, Distrito: Miraflores, Profesión: Ingeniero" y se cruza con el padrón electoral de Miraflores, se puede reidentificar a una persona específica. Para evitarlo, el Custodio de Datos y el Dueño del Dato deben asegurar que las técnicas de anonimización aplicadas destruyan irreversiblemente cualquier patrón que permita rastrear a una persona.

---

### 3. Contenido Visual del Curso (Mockup):

* **Pantalla 1 (El Equilibrio Estratégico: Defensiva vs. Ofensiva):**
  * **Visual:** Analogía del Equipo de Fútbol. A la izquierda (La Defensa): un escudo bloqueando ataques de hackers y multas de la ANPD (100 UIT). A la derecha (La Ofensiva): delanteros anotando goles que se transforman en "Valor Público" y "Mejores Decisiones". Mensaje visual: "Un equipo sin defensa pierde por goleada legal; un equipo sin ofensiva no genera valor al ciudadano."
  * **Título:** El Equilibrio Estratégico: Defensiva vs. Ofensiva.
  * **Guion de Locución:** "El gobierno de datos es un acto de equilibrio entre jugar a la defensiva y a la ofensiva. Jugar a la defensiva significa proteger a la institución y al ciudadano. Aquí las reglas son estrictas, porque si fallamos, las consecuencias son devastadoras. Exponer información personal no solo destruye la confianza pública, sino que vulnera la Ley N° 29733 de Protección de Datos Personales. Un error aquí puede resultar en que la Autoridad Nacional de Protección de Datos (ANPD) nos imponga multas gravísimas de hasta 100 UIT. Por otro lado, jugar a la ofensiva significa usar los datos limpios para innovar, crear tableros analíticos y mejorar nuestros servicios. Pero recuerda: no puedes tener una buena ofensiva (innovación) si tu defensiva (seguridad) es frágil y expone a la entidad a riesgos legales."

* **Pantalla 2 (Las 4 A's de la Seguridad, el Entitlement y el Ataque de Enlace):**
  * **Visual:** Cuatro tarjetas interactivas representando las 4 A's (Autenticación, Autorización, Acceso, Auditoría) que al unirse forman una llave de "Entitlement". Debajo, un visual de "Ataque de Enlace" donde dos piezas de rompecabezas (Dataset Anónimo A + Dato Público B) se unen revelando el rostro y DNI de un ciudadano con una alerta roja: "ALERTA: ATAQUE DE ENLACE. Anonimización Vulnerada".
  * **Título:** Las 4 A's de la Seguridad, el Entitlement y el Ataque de Enlace.
  * **Guion de Locución:** "Para garantizar esta protección, todo acceso a la información en el Estado debe regirse por los pilares de la seguridad, conocidos como las 4 A's: Autenticación: Confirmar que realmente eres quien dices ser (ej. usar tu credencial). Autorización: Definir qué nivel de información tienes permitido ver. Acceso: La puerta tecnológica real por donde entras al dato. Auditoría: El registro inmutable de todo lo que hiciste mientras estuviste adentro. Juntas, estas 4 A's definen tu Entitlement o derecho de uso legítimo. Pero la seguridad tecnológica debe ir acompañada de la ética, especialmente al abrir datos a la ciudadanía. Imagina que publicamos un dataset supuestamente anónimo, pero alguien cruza esa información con otro registro público y logra reidentificar a un ciudadano. A esto se le llama Ataque de Enlace (Linkage Attack). Para evitarlo, nuestro Custodio de Datos y Dueño del Dato deben asegurar que las técnicas de anonimización aplicadas destruyan irreversiblemente cualquier patrón que permita rastrear a una persona."

* **Pantalla 3 (Seguridad, Privacidad y 'La Tormenta Perfecta'):**
  * **Visual:** Recreación del Diagrama de Venn del Taller de Osinergmin (Slide 33) con tres círculos superpuestos: Gobernanza (Silos sin dueño), Seguridad (Ataques/Malware) y Privacidad (Retención excesiva). En el cruce central exacto se activa un ícono de fuego/alerta con el texto "La Tormenta Perfecta: Daño máximo institucional".
  * **Título:** Seguridad, Privacidad y 'La Tormenta Perfecta'.
  * **Guion de Locución:** "Es vital separar dos conceptos que a menudo se confunden: La Seguridad es el candado en la puerta; asegura que los hackers no entren. La Privacidad, regulada por la Ley N° 29733, define qué pueden ver las personas que ya están adentro de la casa. ¿Qué pasa cuando fallan los controles? Nuestro Taller de Sensibilización advierte sobre un riesgo crítico llamado 'La Tormenta Perfecta'. Esto ocurre cuando tres fallas se cruzan: Un error técnico extrae información personal (Falla de Seguridad), se retienen datos de ciudadanos sin su consentimiento o por más tiempo del debido (Falla de Privacidad), y la base de datos está alojada en un servidor olvidado sin un Data Owner claro (Falla de Gobernanza). El resultado es el daño máximo institucional: pérdida total de la confianza ciudadana y multas de hasta 100 UIT."
* **Pantalla 4 (Soberanía en la Nube y Anonimización - Gap 4):**
  * **Visual:** Recuadros informativos que destacan el **Decreto de Urgencia N° 007-2020 (Marco de Confianza Digital)** y el rol del **Oficial de Datos Personales** como enlace con la ANPD, junto al interactivo de selección de identidad (Seudonimizar vs Anonimizar).
  * **Visual:** Interactivo de "Selección de Identidad" que muestra el rostro de un ciudadano. Al presionar "Seudonimizar", se le coloca un antifaz de superhéroe (proceso reversible con llave). Al presionar "Anonimizar", el rostro se pixela y se bloquea con un candado de forma irreversible.
  * **Título:** Soberanía en la Nube y Anonimización (Gap 4).
  * **Guion de Locución:** "Hoy en día, la modernización bajo el Marco de Confianza Digital (Decreto de Urgencia N° 007-2020) nos impulsa a utilizar la Nube. Pero, ¿cómo mantenemos la soberanía de los datos de los peruanos si los servidores de la nube están en el extranjero? La respuesta está en la responsabilidad compartida y en la protección desde el diseño. Antes de que un dato sensible salga de nuestra entidad, el Custodio Técnico debe aplicar técnicas de protección, coordinando con el Oficial de Datos Personales, quien es nuestro enlace oficial con la Autoridad Nacional de Protección de Datos (ANPD). Aquí es crucial no confundirse al momento de abrir datos: no es lo mismo seudonimizar que anonimizar. La Seudonimización es como ponerle una máscara a un ciudadano; si alguien tiene la llave o el código, puede quitarle la máscara y descubrir quién es. Esto sigue siendo un dato personal ante la ley. La Anonimización es destruir el molde irreversiblemente. Es imposible volver a identificar a la persona, quedando fuera del alcance de la Ley de Protección de Datos. Solo publicamos datos en formato abierto (como en la PNDA) cuando están total y estrictamente anonimizados."
* **Pantalla 5 (La Capa Azul y la Analítica - El destino final del dato):**
  * **Visual (Active Recall):** Muestra la Pirámide de Refinamiento del PPTX. Presenta un "Robot de IA" hambriento y tres tuberías: Amarilla (sucia/cruda), Verde (filtrada/plata) y Azul (refinada/oro). El usuario debe arrastrar y conectar la tubería correcta para alimentar al robot. Si conecta la Amarilla, el robot colapsa mostrando "Error: Basura entra, basura sale". Si conecta la Azul, el robot genera un "Dashboard de Decisiones Estratégicas".
  * **Título:** La Capa Azul y la Analítica: El Destino Final del Dato.
  * **Guion de Locución:** "Hemos llegado a la cima de nuestra Pirámide de Refinamiento: La Capa Azul o Capa de Oro. Después de que nuestros datos han sido capturados, organizados en dominios y limpiados matemáticamente, es el momento de generar valor. De acuerdo con la Fase 3 de nuestro PI-59, aquí entra en acción nuestro Equipo de BI y Analítica (los Científicos de Datos). Ellos toman esta 'Fuente Única de Verdad' para construir tableros de control y entrenar modelos predictivos. Pero debemos ser tajantes en una regla de oro: la Inteligencia Artificial no hace magia. Si ustedes alimentan a un modelo de IA con datos de la 'Capa Amarilla' (datos crudos, silos aislados o registros duplicados), la inteligencia artificial aprenderá esos errores, alucinará y multiplicará el caos a la velocidad de la luz. La analítica avanzada solo funciona si se construye sobre los cimientos sólidos de la gobernanza."
* **Pantalla 6 (La IA en Políticas Públicas y el "Humano en el Circuito"):**
  * **Visual:** Cabina de un avión de pasajeros con controles interactivos. Locución visual interactiva: "La IA es el piloto automático; puede procesar miles de variables de viento y velocidad por segundo (analítica). Pero tú eres el Capitán en la cabina; si hay turbulencia ética o riesgos para el ciudadano, tú tomas los controles."
  * **Título:** La IA en Políticas Públicas y el "Humano en el Circuito".
  * **Guion de Locución:** "La Inteligencia Artificial tiene un potencial transformador para el Estado: puede procesar el lenguaje natural de los ciudadanos, cruzar miles de variables georreferenciadas en GeoPerú y predecir dónde ocurrirá la próxima interrupción eléctrica antes de que suceda. Sin embargo, en el sector público, la máquina propone, pero el humano dispone. Aquí aplicamos el principio del 'Humano en el Circuito' (Human-in-the-loop). Un algoritmo puede recomendar a qué empresas fiscalizar o qué ciudadanos requieren atención prioritaria, pero la IA jamás debe ser el decisor final y autónomo. El Dueño del Dato (Data Owner) y el funcionario a cargo son quienes evalúan la evidencia, asumen la responsabilidad legal e institucional, y toman la decisión final para garantizar que no haya exclusiones injustas."
* **Pantalla 7 (Ética, Transparencia y Rendición de Cuentas):**
  * **Visual (Active Recall):** Muestra el "Núcleo de IA y Ética" de la diapositiva de Osinergmin con cuatro cuadrantes interactivos: Transparencia, Equidad, Privacidad y Rendición de Cuentas. Al pasar el mouse por "Rendición de Cuentas", se resalta el texto: "Si la IA falla, existe un humano responsable de auditar y reparar el impacto", conectándolo visualmente con el ícono del Dueño del Dato (Data Owner).
  * **Título:** Ética, Transparencia y Rendición de Cuentas.
  * **Guion de Locución:** "Finalmente, el uso de analítica y algoritmos nos obliga a mantener un estándar ético inquebrantable frente a la sociedad, basado en cuatro pilares: Transparencia, Equidad, Beneficio y Rendición de Cuentas. Si un ciudadano cuestiona por qué se tomó una decisión regulatoria o administrativa, no podemos responderle: 'Lo dijo la máquina'. Debemos evitar las 'cajas negras'. Gracias a los metadatos y a la trazabilidad que documenta nuestro Gestor de Datos (Data Steward), el Estado siempre debe poder explicar qué información se utilizó para entrenar el algoritmo, qué reglas se aplicaron y cómo se mitigan los sesgos o prejuicios históricos. La tecnología avanza, pero la vocación de servicio y la rendición de cuentas siempre serán profundamente humanas."

---

## COMPONENTE 2: EJERCICIOS INTERACTIVOS (Taxonomía de Bloom)

### Ejercicio 1: Nivel Comprender - "Casos Prácticos de Seguridad y Privacidad" (Drag & Drop)
* **Instrucción:** Arrastra cada escenario operativo de la izquierda hacia la estrategia o técnica de seguridad que le corresponde en la derecha.
* **Asociaciones:**
  * *Para un entorno de pruebas de desarrollo, el sistema debe reemplazar los nombres reales de los representantes legales por identificadores alfanuméricos aleatorios (ID_9482), almacenando la tabla de mapeo original en un servidor aislado y altamente restringido para auditorías futuras.* $\rightarrow$ **Seudonimización**
  * *Al transferir una base de datos histórica a un centro de investigación externo, la Oficina de Asesoría Jurídica determina que las columnas que contienen números de DNI y números telefónicos fijos deben borrarse por completo del esquema para evitar cualquier riesgo de reidentificación.* $\rightarrow$ **Supresión de variables**
  * *Al publicar un reporte estadístico sobre las multas impuestas a las empresas de hidrocarburos, se decide agrupar los montos exactos de las penalizaciones en bloques (ej. "De 10 a 50 UIT", "De 51 a 100 UIT") para proteger la confidencialidad comercial de los pequeños operadores.* $\rightarrow$ **Generalización**
  * *Implementar políticas estrictas de control de accesos, cifrado de datos en reposo y auditorías automáticas de logs en el sistema informático de la institución con la finalidad exclusiva de prevenir fugas de información y cumplir con las sanciones de la Autoridad Nacional de Protección de Datos Personales (ANPD).* $\rightarrow$ **Estrategia Defensiva**
  * *Utilizar los datos históricos de consumo de energía y denuncias de usuarios comerciales para entrenar un modelo analítico de Machine Learning que permita predecir qué zonas geográficas sufrirán mayores índices de saturación de red, optimizando la asignación de las cuadrillas de fiscalización.* $\rightarrow$ **Estrategia Ofensiva**

### Ejercicio 2: Nivel Aplicar - "El Escudo y el Motor" (Rellenar espacios en blanco)
* **Texto a completar:**
  > "Bajo el Marco de **[Confianza Digital]** (DU N° 007-2020), la publicación de datos no debe vulnerar la Ley N° 29733 de Protección de Datos Personales. Si el Estado se enfoca únicamente en la Estrategia **[Defensiva]**, corremos el riesgo de paralizar la innovación por exceso de controles. Por otro lado, aplicar una Estrategia **[Ofensiva]** sin cuidado puede derivar en multas severas de hasta 100 UIT. El equilibrio se logra aplicando técnicas como la **[Anonimización]**, la cual garantiza que la identificación del ciudadano sea **[irreversible]**, permitiendo que la información genere valor público sin riesgos legales."

### Ejercicio 3: Nivel Analizar - "Dilema de Ética Algorítmica: Ceguera vs Gobernanza Activa" (Elige tu propia aventura)
* **Escenario:**
  > "Tu equipo de Inteligencia Artificial está creando un modelo para automatizar el primer filtro de contratación de personal en Osinergmin. Te piden la base de datos histórica de los últimos 20 años de contrataciones, que contiene variables como la universidad de procedencia, código postal, género y edad. ¿Cómo tratas estas variables para evitar que el algoritmo discrimine?"
* **Opciones de decisión:**
  * **Opción A (Enfoque de Supresión / Ceguera - Trampa Intuitiva):** Eliminar por completo las columnas de 'género' y 'edad' del conjunto de datos antes de entregarlo al equipo de IA. Si el algoritmo no puede ver estos datos sensibles durante su entrenamiento, es matemáticamente imposible que tome decisiones discriminatorias basadas en ellos.
    * *Feedback (Incorrecto):* ¡Cuidado! Esta es la trampa de la 'Ceguera de Datos'. Aunque suene lógico, la IA puede inferir el género o la edad a través de variables proxy como la universidad de procedencia o el código postal (distritos históricamente segregados). Si borras los datos sensibles pero no auditas el modelo, la IA discriminará igual y tú no podrás detectarlo porque eliminaste las variables de control.
  * **Opción B (Enfoque de Generalización y Auditoría - Correcta):** Aplicar generalización de variables (convertir edades en rangos amplios y direcciones en macrorregiones). Además, mantener la variable 'género' en un entorno de prueba aislado estrictamente para medir y corregir los sesgos históricos que el algoritmo intente replicar a través de variables secundarias (como la universidad de procedencia).
    * *Feedback (Correcto/Seguro):* ¡Excelente decisión! Has aplicado 'Gobernanza Activa'. Al generalizar los datos sensibles y conservar una muestra controlada para auditar, puedes detectar si la IA está usando variables proxy para discriminar indirectamente. Esto es lo que exige la ética algorítmica real: no ceguera, sino transparencia y medición activa del sesgo (Human-in-the-loop).

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

## ESTRATEGIAS DE GOBIERNO DE DATOS

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
