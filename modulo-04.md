# MÓDULO 4: Gestión de la Calidad (Data Quality) y Estandarización

Este documento recopila la información teórica, metodológica y los recursos prácticos del Módulo 4 para su posterior integración en la plataforma de aprendizaje (LMS).

---

## COMPONENTE 1: FUENTE DE CONOCIMIENTO (Material de Estudio)

Este material se presentará como un paquete interactivo tipo SCORM que incluye lecturas, normativas y apoyo visual para los colaboradores.

### 1. Fuentes Normativas y Manuales (Sección de "Descargables"):
* **Marco Legal Peruano:** 
  * Estrategia Nacional de Gobierno de Datos 2026-2030 (Eje 2: Calidad, gestión y privacidad).
* **Estándar Internacional:** 
  * ISO/IEC 25000 - Modelo general de calidad de datos.
  * Guía Internacional DAMA-DMBOK2 - Capítulo 13: *Data Quality Management*.
* **Manual Corporativo Osinergmin:** 
  * PI-59: Procedimiento de Definiciones de Calidad de Datos Gobernados de Osinergmin.
* **Material Didáctico Internacional:** 
  * Estándares internacionales de Gobernanza de Datos (*Data Governance Concepts*: Calidad del Dato y Automatización).

### 2. Texto Didáctico Específico del Curso:

#### La Analogía de la Planta de Tratamiento y la Calidad del Dato
Imagina que llenas un vaso con agua directamente de un río turbio. Sin filtros, el agua está contaminada y no es apta para consumo. De la misma forma, si usamos datos sin aplicar controles de calidad, las decisiones y políticas públicas que diseñemos llegarán "contaminadas" al ciudadano.

El **estándar ISO/IEC 25000** define el modelo general de calidad de datos, estableciendo las dimensiones que todo dato debe cumplir: exactitud, completitud, consistencia, validez, oportunidad y unicidad. En el Perú, el **Eje 2 de la Estrategia Nacional de Gobierno de Datos 2026-2030** exige que toda entidad pública implemente controles de calidad en origen.

Los filtros de calidad —basados en el **PI-59 de Osinergmin** y en el marco internacional— transforman el dato crudo en información confiable. Si ingresamos "basura" a nuestros sistemas, las decisiones serán "basura" (efecto GIGO - *Garbage In, Garbage Out*). En el sector público, esto tiene un impacto directo en el ciudadano: un error de tipeo en un DNI puede bloquear la entrega de un bono de asistencia.

#### Las Seis Dimensiones de Calidad
Para evaluar la calidad de un dato, debemos medirlo contra seis dimensiones:

1. **Exactitud:** ¿El dato refleja correctamente la realidad? Ejemplo: las coordenadas GPS de una estación de servicio no deben apuntar al mar si la estación está en una avenida.
2. **Completitud:** ¿Falta algún campo obligatorio? Ejemplo: un expediente de reclamo sin número de teléfono de contacto del ciudadano.
3. **Consistencia:** ¿El dato coincide en todos los sistemas? Ejemplo: un operador que figura como "Habilitado" en Fiscalización pero como "Inactivo" en Administración.
4. **Oportunidad:** ¿El dato está disponible a tiempo para la toma de decisiones? Ejemplo: querer analizar el precio de combustibles de esta semana pero tener datos de hace 3 años.
5. **Validez:** ¿El formato y tipo de dato son correctos? Ejemplo: un campo RUC que permite guardar solo 5 dígitos en lugar de los 11 obligatorios.
6. **Unicidad:** ¿Hay registros duplicados? Ejemplo: una misma estación de servicio registrada dos veces con IDs distintos en la base de datos.

#### De la Corrección Manual a la Automatización Escalar
Históricamente, las entidades públicas corrigen los errores a mano en hojas de cálculo una vez que se han detectado (enfoque reactivo). Los expertos en gobernanza de datos advierten que esto no es sostenible ni escalable a largo plazo. 

La gestión de la calidad de datos debe realizarse mediante la creación de reglas, métricas e informes de excepciones. Utilizar las soluciones tecnológicas adecuadas y automatizadas (como perfilamientos proactivos para descubrir valores nulos, registros duplicados o anomalías), en lugar de procesos manuales, ayudará a sostener y escalar con éxito nuestro programa de Gobierno de Datos a nivel corporativo.

---

### 3. Contenido Visual del Curso (Mockup):

* **Pantalla 1 (Slide 3) - La Calidad y el Impacto en el Ciudadano:**
  * **Visual:** Analogía de la Planta de Tratamiento de Agua. Izquierda: ícono de agua turbia (río) → filtros → agua potable. Derecha: dos tarjetas con ISO/IEC 25000 y Eje 2 de la Estrategia Nacional de Gobierno de Datos 2026-2030.
  * **Título:** La Calidad y el Impacto en el Ciudadano
  * **Contenido:** El dato crudo es como agua turbia de río. Sin filtros de calidad (PI-59, ISO 25000, Eje 2), las decisiones públicas llegan contaminadas al ciudadano.
* **Pantalla 2 (Slide 4) - De la Corrección Manual a la Automatización Escalar:**
  * **Visual:** Dos columnas: Controles Clave (Validez, Coherencia, Integridad) vs. Mejores Prácticas de Automatización.
  * **Título:** De la Corrección Manual a la Automatización Escalar
  * **Contenido:** Se deben definir reglas de calidad y perfilamientos automatizados que descubran anomalías en origen.
* **Pantalla 3 (Slide 5) - ¿Conducirías a ciegas?:**
  * **Visual:** Imagen de un coche deportivo brillante vs. coche averiado.
  * **Título:** ¿Conducirías a ciegas? El Impacto de la Mala Calidad
  * **Contenido:** Tomar decisiones con datos sin evaluar es como conducir un coche averiado. Un error de tipeo no es solo un problema técnico; es un trámite rechazado.
* **Pantalla 4 (Slide 6) - El Tablero de la Calidad (Dimensiones):**
  * **Visual:** Grilla de 6 tarjetas (Exactitud, Completitud, Consistencia, Oportunidad, Validez, Unicidad) cada una con un ejemplo concreto de Osinergmin. Debajo, un interactivo embebido "Diagnóstico Rápido: ¿Qué dimensión falla?" con 3 casos (A = Validez, B = Consistencia, C = Exactitud) y botones de selección que dan feedback inmediato.
  * **Título:** El Tablero de la Calidad (Dimensiones)
  * **Contenido:** Las 6 dimensiones de ISO 25000 con ejemplos prácticos. El interactivo permite al usuario diagnosticar fallas de calidad en escenarios reales.
* **Pantalla 5 (Slide 7) - Automatizar para Escalar (Mejora Continua):**
  * **Visual:** Robot escaneando un radar vs. persona barriendo con escoba.
  * **Título:** Automatizar para Escalar (Mejora Continua)
  * **Contenido:** Debemos usar soluciones automatizadas que perfilen la base de datos y reporten excepciones atacando siempre la causa raíz.

---

## COMPONENTE 2: EJERCICIOS INTERACTIVOS (Taxonomía de Bloom)

### Ejercicio 1: Nivel Comprender - "Los Medidores del Coche" (Drag & Drop)
* **Instrucción:** Arrastra la situación de negocio hacia la dimensión o tipo de falla de calidad que representa.
* **Asociaciones (6 dimensiones):**
  * *El sistema de registro de estaciones de servicio acepta que el usuario guarde el campo de correo electrónico sin el símbolo @ y permite ingresar un RUC de solo 5 dígitos en lugar de 11.* $\rightarrow$ **Falla de Validez**
  * *Al contrastar el padrón de empresas autorizadas, la Gerencia de Fiscalización encuentra que un mismo operador aparece activo con el estado de "Habilitado", pero en el sistema de Administración figura como "Inactivo".* $\rightarrow$ **Falla de Consistencia**
  * *Al revisar el padrón de estaciones de servicio, el analista detecta que la "Estación Los Olivos" aparece registrada 3 veces con códigos distintos y direcciones ligeramente diferentes.* $\rightarrow$ **Falla de Unicidad**
  * *El equipo de analítica necesita calcular el índice de variación del precio de los combustibles de esta semana para un reporte de la Alta Dirección, pero la última actualización de la base de datos es de hace tres meses.* $\rightarrow$ **Falla de Oportunidad**
  * *El equipo de catastro encuentra que las coordenadas GPS registradas para 15 estaciones de servicio apuntan al océano Pacífico, a 3 km de la ubicación real verificada en campo.* $\rightarrow$ **Falla de Exactitud**
  * *Al revisar la base de datos de reclamos, el analista descubre que el campo "Dirección del Domicilio del Reclamante" está vacío en el 40% de los registros del último trimestre.* $\rightarrow$ **Falla de Completitud**

### Ejercicio 2: Nivel Aplicar - "Escalando la Calidad" (Rellenar espacios en blanco)
* **Texto a completar:**
  > "Según las mejores prácticas internacionales, para gestionar eficazmente la calidad de la información se debe priorizar la creación de reglas, métricas e informes de **[excepciones]**. Los estándares de gobernanza recomiendan utilizar soluciones **[automatizadas]** (como perfiladores de datos), ya que depender de correcciones manuales en Excel impedirá, en última instancia, sostener y **[escalar]** nuestro programa de Gobierno de Datos, condenándonos a parches reactivos en lugar de una mejora continua en la **[causa raíz]**."

### Ejercicio 3: Nivel Analizar - "Cortando el Problema de Raíz" (Elige tu propia aventura)
* **Escenario:**
  > "Como Custodio de Datos del área de Recursos Humanos en Osinergmin, notas que el campo 'Fecha de Nacimiento' tiene miles de inconsistencias porque los usuarios lo llenan de forma manual usando distintos formatos (DD/MM/AA, MM-DD-AA, etc.), impidiendo realizar cálculos estadísticos automáticos."
* **Opciones de decisión:**
  * **Opción A:** Asigno a un practicante para que todos los viernes abra el archivo maestro en Excel y corrija a mano el formato de las fechas una por una para que el reporte de fin de mes salga limpio.
    * *Feedback (Incorrecto/Alto Riesgo):* ¡Cuidado! Estás aplicando un parche reactivo. Esto consume valiosas horas hombre, no soluciona el problema de fondo y perpetúa los reprocesos. La mala calidad volverá a ingresar en el siguiente registro.
  * **Opción B:** Analizo la causa raíz y coordino con TI para parametrizar el formulario de ingreso del sistema web con un calendario desplegable obligatorio (regla de validez de formato), impidiendo que el error entre al sistema desde la ventanilla origen.
    * *Feedback (Correcto/Seguro):* ¡Excelente! Has aplicado control de calidad en el origen. Has garantizado la dimensión de "Validez" y evitado futuros reprocesos mediante un control preventivo automatizado.

### Interactivo Embebido en Slide 6: Diagnóstico Rápido de Dimensiones (Nivel Comprender/Aplicar)
* **Descripción:** Durante la navegación del Slide 6 ("El Tablero de la Calidad"), el usuario encuentra 3 tarjetas de casos reales y 6 botones de dimensión. Debe seleccionar un caso y luego la dimensión correcta.
* **Casos:**
  * **Caso A (Respuesta: Validez):** "El formulario web de registro de estaciones permite guardar el campo 'RUC' aunque tenga solo 5 dígitos."
  * **Caso B (Respuesta: Consistencia):** "Un operador logístico figura como 'Habilitado' en Fiscalización pero como 'Inactivo' en Administración."
  * **Caso C (Respuesta: Exactitud):** "Las coordenadas GPS de una estación de servicio apuntan al océano Pacífico en vez de la Av. Principal registrada en el expediente."
* **Feedback:** Correcto: tarjeta se vuelve verde. Incorrecto: tarjeta parpadea rojo y permite reintentar. Al completar los 3: mensaje de celebración.

---

## COMPONENTE 3: BANCO DE PREGUNTAS TIPO EXAMEN (Pool para LMS)

El sistema seleccionará 5 preguntas al azar por cada intento del usuario.

#### Pregunta 1
Utilizando la analogía de la planta de tratamiento de agua, ¿qué debemos hacer con los datos antes de usarlos para tomar decisiones en nuestra organización?
* a) Almacenarlos en servidores físicos desconectados de internet.
* **b) Aplicar filtros de calidad evaluando exactitud, completitud, consistencia, oportunidad, validez y unicidad.** (Correcta)
* c) Entregarlos al departamento de TI sin ningún tratamiento previo.
* d) Recopilarlos todos de forma manual sin intervención de software.

#### Pregunta 2
De acuerdo con los estándares internacionales de calidad de datos, ¿qué dimensión se encarga específicamente de garantizar que el dato sea exactamente el mismo en todos los sistemas de la empresa (evitando contradicciones)?
* a) Puntualidad (Timeliness).
* b) Validez (Validity).
* **c) Coherencia / Consistencia.** (Correcta)
* d) Integridad (Integrity).

#### Pregunta 3
¿Cuál es la recomendación principal de las mejores prácticas internacionales para lograr sostener y escalar un programa de gobierno del dato a nivel de calidad?
* a) Contratar a más personal para corregir errores a mano en Excel los fines de semana.
* b) Imprimir todos los reportes de calidad para su revisión física y firma.
* **c) Utilizar soluciones adecuadas y automatizadas mediante la creación de reglas, métricas e informes de excepciones, evitando los procesos manuales.** (Correcta)
* d) Eliminar los estándares y dimensiones de calidad para que los datos fluyan rápido.

#### Pregunta 4
Si una entidad pública implementa controles de validación en su sistema web para detectar "errores operativos como los de introducción manual de datos" en las ventanillas de atención, ¿qué dimensión de calidad está asegurando principalmente?
* **a) La validez.** (Correcta)
* b) La puntualidad.
* c) La protección.
* d) La privacidad.

#### Pregunta 5
Según el estándar ISO/IEC 25000 y el PI-59, ¿por qué es crítico realizar un análisis de "causa raíz" cuando detectamos valores nulos o inconsistentes?
* a) Para identificar y culpar públicamente al ciudadano o funcionario que digitó el campo.
* **b) Para implementar una validación en el origen y pasar de un ciclo reactivo (corregir el error) a un ciclo de mejora continua proactivo (evitar que el error ingrese al sistema).** (Correcta)
* c) Para justificar técnicamente la compra de una nueva base de datos.
* d) Para borrar la tabla de datos completa de la base de datos relacional.

#### Pregunta 6
En el contexto del sector público (Eje 2 de la Estrategia Nacional), ¿qué impacto directo tiene la mala calidad de un dato maestro, como un DNI o un RUC mal digitado?
* a) Solo genera una alerta visual inofensiva en los servidores de TI.
* b) Acelera el tiempo de respuesta y la entrega de subsidios al saltar validaciones.
* **c) Afecta directamente el derecho del ciudadano, pudiendo impedirle cobrar un bono, validar su identidad o realizar un trámite oficial.** (Correcta)
* d) Mejora la privacidad de los usuarios al hacer inubicables sus registros.

#### Pregunta 7
¿A qué se refiere la dimensión de "Exactitud" dentro de la calidad de datos?
* a) A que el dato esté almacenado localmente en computadoras portátiles.
* **b) A que el dato represente, describa y refleje la realidad correctamente y sin errores.** (Correcta)
* c) A que el dataset no tenga ningún valor duplicado en toda la columna.
* d) A que el dato sea compartido de forma abierta en redes sociales.

#### Pregunta 8
Si en el formulario oficial de denuncias en línea el ciudadano deja en blanco el campo obligatorio "Dirección del Incidente", estamos ante un problema de:
* a) Consistencia.
* **b) Completitud.** (Correcta)
* c) Seguridad.
* d) Trazabilidad.

#### Pregunta 9
El uso de fechas estandarizadas o catálogos compartidos de Ubigeo (como los del INEI) son ejemplos de soluciones técnicas para evitar:
* a) El exceso de seguridad.
* b) El análisis predictivo.
* **c) La fragmentación e inconsistencia de la información en los sistemas del Estado.** (Correcta)
* d) El uso de la inteligencia artificial.

#### Pregunta 10
¿Qué es el "Perfilamiento de Datos" (Data Profiling) dentro del ciclo de calidad?
* a) El proceso de borrar la base de datos al final de cada año.
* **b) El análisis proactivo para identificar anomalías, formatos incorrectos, valores nulos o duplicados en un dataset antes de usarlo.** (Correcta)
* c) La publicación obligatoria del dato en el portal de transparencia.
* d) Asignar contraseñas seguras a los administradores del sistema.

#### Pregunta 11
Cuando se identifican "Valores Nulos" o vacíos en una base de datos crítica de negocio, la mejor práctica de calidad dicta:
* a) Llenar los espacios con "0" o "N/A" automáticamente para ignorar la alerta.
* b) Eliminar la columna entera inmediatamente de la base de datos.
* **c) Analizar si es un vacío justificado o un error, y realizar un análisis de "causa raíz" para corregir el proceso de captura.** (Correcta)
* d) Ignorar el error si este representa menos de la mitad de la base de datos.

#### Pregunta 12
La "Trazabilidad" (Traceability) es una dimensión de calidad crucial en el sector público porque:
* a) Hace que las consultas SQL sean más rápidas en el servidor.
* **b) Permite rastrear el origen, el autor y las modificaciones de un dato, previniendo alteraciones no autorizadas o arbitrarias.** (Correcta)
* c) Traduce la información automáticamente a idiomas oficiales.
* d) Reemplaza automáticamente a los custodios de datos ante fallas.

#### Pregunta 13
El principio de "Mejora Continua" en la calidad de datos busca que la entidad:
* **a) Pase de realizar correcciones reactivas al final del proceso, a implementar controles proactivos desde la captura del dato.** (Correcta)
* b) Modifique sus sistemas y adquiera software nuevo de manera anual.
* c) Corrija los reportes de manera manual en archivos Excel antes de enviarlos.
* d) Amoneste formalmente al personal que cometa errores de tipeo accidentales.

#### Pregunta 14
¿Por qué la calidad de datos es un requisito indispensable para implementar Inteligencia Artificial (IA) de manera exitosa?
* a) Porque la IA limpia los datos mágicamente sin importar el desorden en el origen.
* **b) Porque si la IA se entrena con datos sesgados o de mala calidad, las predicciones o decisiones automatizadas también serán erróneas (GIGO).** (Correcta)
* c) Porque la calidad de datos aumenta el ancho de banda de red del servidor.
* d) Porque los algoritmos de IA exigen que todos los datos sean textos libres y sin estructura.

#### Pregunta 15
Si un registro de recursos humanos indica que un empleado "nació en 2025" pero "se graduó en la universidad en 2020", estamos frente a un error crítico de:
* a) Duplicidad.
* **b) Consistencia lógica.** (Correcta)
* c) Encriptación.
* d) Autorización de accesos.
