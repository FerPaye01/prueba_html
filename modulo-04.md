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
  * DataCamp - *Data Governance Concepts* (Calidad del Dato y Automatización).

### 2. Texto Didáctico Específico del Curso:

#### La Analogía del Coche Nuevo y la Calidad del Dato
Imagina que estás comprando un coche nuevo. Exiges que esté construido con materiales de primera, que sus funciones de seguridad operen a la perfección y que sea altamente fiable. Al plantearnos usar datos en el Estado para tomar decisiones o estructurar políticas públicas, también debemos exigir garantías mínimas y asegurar una alta calidad evaluando su completitud, exactitud, consistencia, validez, puntualidad e integridad. 

Si ingresamos "basura" a nuestros sistemas, las políticas públicas que diseñemos serán "basura" (efecto GIGO - *Garbage In, Garbage Out*). En el sector público, esto tiene un impacto directo y doloroso en el ciudadano. Por ejemplo, si en la lista de beneficiarios de un Bono de asistencia el nombre de un ciudadano tiene un error de tipeo y no coincide con su DNI, ese ciudadano no podrá cobrar el subsidio, afectando su bienestar. 

Para evitar esto, los programas de calidad de datos ayudan a garantizar que los usuarios reciban información completa, precisa y a tiempo. Además, las entidades deben implantar controles para asegurar:
1. **La validez:** Detectando errores operativos de introducción manual de datos.
2. **La coherencia:** Garantizando que el dato sea el mismo en todos los sistemas.
3. **La integridad:** Monitorizando posibles errores técnicos mientras el dato viaja.

#### De la Corrección Manual a la Automatización Escalar
Históricamente, las entidades públicas corrigen los errores a mano en hojas de cálculo una vez que se han detectado (enfoque reactivo). DataCamp advierte que esto no es sostenible ni escalable a largo plazo. 

La gestión de la calidad de datos debe realizarse mediante la creación de reglas, métricas e informes de excepciones. Utilizar las soluciones tecnológicas adecuadas y automatizadas (como perfilamientos proactivos para descubrir valores nulos, registros duplicados o anomalías), en lugar de procesos manuales, ayudará a sostener y escalar con éxito nuestro programa de Gobierno de Datos a nivel corporativo.

---

### 3. Diapositivas Específicas del Curso (Mockup Visual):

* **Diapositiva 1:**
  * **Visual:** Un coche deportivo brillante vs. un coche averiado o un ciudadano frustrado en una ventanilla de atención.
  * **Título:** ¿Conducirías a ciegas? El Impacto de la Mala Calidad.
  * **Contenido:** Así como al buscar un coche nuevo el requisito mínimo es la alta calidad y fiabilidad, al utilizar datos para Osinergmin debemos exigir garantías. Tomar decisiones con datos sin evaluar es como conducir un coche averiado. Un error de tipeo no es solo un problema técnico; es un trámite rechazado, una subvención no cobrada y una insatisfacción directa del ciudadano.
* **Diapositiva 2:**
  * **Visual:** Un panel de control de un auto con 6 medidores iluminados.
  * **Título:** El Tablero de la Calidad (Dimensiones).
  * **Contenido:** Todo dato estratégico debe pasar la revisión de nuestros medidores: ¿Es exacto y completo? ¿Cumple con la validez de formato (ej. RUC de 11 dígitos)? ¿Mantiene su integridad y coherencia lógica al viajar por los distintos sistemas de la entidad?
* **Diapositiva 3:**
  * **Visual:** Un robot escaneando un radar en una fábrica vs. una persona barriendo con una escoba.
  * **Título:** Automatizar para Escalar (Mejora Continua).
  * **Contenido:** No podemos depender de correcciones manuales eternas. Para que la calidad del dato crezca, debemos usar soluciones automatizadas que detecten valores nulos de forma proactiva, perfilen la base de datos y reporten excepciones atacando siempre la causa raíz del error.

---

## COMPONENTE 2: EJERCICIOS INTERACTIVOS (Taxonomía de Bloom)

### Ejercicio 1: Nivel Comprender - "Los Medidores del Coche" (Drag & Drop)
* **Instrucción:** Arrastra la situación de negocio hacia la dimensión o tipo de falla de calidad de DataCamp que representa.
* **Asociaciones:**
  * *Un ciudadano escribe su DNI, pero el sistema le acepta letras en lugar de solo números.* $\rightarrow$ **Falla de Validez**
  * *El presupuesto total de la obra aparece con montos diferentes dependiendo de la base de datos o sistema que consultes.* $\rightarrow$ **Falla de Coherencia / Consistencia**
  * *Hay una caída de red en el servidor y, al transferir la base de datos, se pierden campos técnicos vitales por el camino.* $\rightarrow$ **Falla de Integridad**
  * *El sistema del Banco Central necesita la canasta básica de este mes para predecir la inflación, pero solo está disponible la del año pasado.* $\rightarrow$ **Falla de Oportunidad (Timeliness)**

### Ejercicio 2: Nivel Aplicar - "Escalando la Calidad" (Rellenar espacios en blanco)
* **Texto a completar:**
  > "Según las mejores prácticas internacionales, para gestionar eficazmente la calidad de la información se debe priorizar la creación de reglas, métricas e informes de **[excepciones]**. DataCamp recomienda utilizar soluciones **[automatizadas]** (como perfiladores de datos), ya que depender de correcciones manuales en Excel impedirá, en última instancia, sostener y **[escalar]** nuestro programa de Gobierno de Datos, condenándonos a parches reactivos en lugar de una mejora continua en la **[causa raíz]**."

### Ejercicio 3: Nivel Analizar - "Cortando el Problema de Raíz" (Elige tu propia aventura)
* **Escenario:**
  > "Como Custodio de Datos del área de Recursos Humanos en Osinergmin, notas que el campo 'Fecha de Nacimiento' tiene miles de inconsistencias porque los usuarios lo llenan de forma manual usando distintos formatos (DD/MM/AA, MM-DD-AA, etc.), impidiendo realizar cálculos estadísticos automáticos."
* **Opciones de decisión:**
  * **Opción A:** Asigno a un practicante para que todos los viernes abra el archivo maestro en Excel y corrija a mano el formato de las fechas una por una para que el reporte de fin de mes salga limpio.
    * *Feedback (Incorrecto/Alto Riesgo):* ¡Cuidado! Estás aplicando un parche reactivo. Esto consume valiosas horas hombre, no soluciona el problema de fondo y perpetúa los reprocesos. La mala calidad volverá a ingresar en el siguiente registro.
  * **Opción B:** Analizo la causa raíz y coordino con TI para parametrizar el formulario de ingreso del sistema web con un calendario desplegable obligatorio (regla de validez de formato), impidiendo que el error entre al sistema desde la ventanilla origen.
    * *Feedback (Correcto/Seguro):* ¡Excelente! Has aplicado control de calidad en el origen. Has garantizado la dimensión de "Validez" y evitado futuros reprocesos mediante un control preventivo automatizado.

---

## COMPONENTE 3: BANCO DE PREGUNTAS TIPO EXAMEN (Pool para LMS)

El sistema seleccionará 5 preguntas al azar por cada intento del usuario.

#### Pregunta 1
Utilizando la analogía de DataCamp sobre la compra de un coche nuevo, ¿qué debemos exigir al momento de plantearnos usar datos en nuestra organización?
* a) Que los datos se almacenen en servidores físicos desconectados de internet.
* **b) Asegurar una alta calidad evaluando la completitud, la exactitud, la consistencia, la validez, la puntualidad y la integridad.** (Correcta)
* c) Que los datos sean propiedad exclusiva del departamento de TI.
* d) Que todos los datos se recopilen de forma manual sin intervención de software.

#### Pregunta 2
De acuerdo con DataCamp, ¿qué dimensión de la calidad de datos se encarga específicamente de garantizar que el dato sea exactamente el mismo en todos los sistemas de la empresa (evitando contradicciones)?
* a) Puntualidad (Timeliness).
* b) Validez (Validity).
* **c) Coherencia / Consistencia.** (Correcta)
* d) Integridad (Integrity).

#### Pregunta 3
¿Cuál es la recomendación principal de DataCamp para lograr sostener y escalar un programa de gobierno del dato a nivel de calidad?
* a) Contratar a más personal para corregir errores a mano en Excel los fines de semana.
* b) Imprimir todos los reportes de calidad para su revisión física y firma.
* **c) Utilizar soluciones adecuadas y automatizadas mediante la creación de reglas, métricas e informes de excepciones, evitando los procesos manuales.** (Correcta)
* d) Eliminar los estándares y dimensiones de calidad para que los datos fluyan rápido.

#### Pregunta 4
Si una entidad pública implementa controles de validación en su sistema web para detectar "errores operativos como los de introducción manual de datos" en las ventanillas de atención, ¿qué dimensión de calidad está asegurando principalmente según DataCamp?
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
* **b) Completitud / Integridad.** (Correcta)
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
