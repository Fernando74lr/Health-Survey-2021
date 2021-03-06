$('.sv-footer__complete-btn').css('value', 'Completar');
$('.sv-logo__image').css('border-radius', '5px');

Survey
    .StylesManager
    .applyTheme("modern");

//var json = {surveyId: '125f8b76-2eea-4c7b-9891-428c2abef506'}
var json = {
    "locale": "es",
    "pages": [
        {
        "name": "page1",
        "elements": [
        {
        "type": "html",
        "name": "question2",
        "html": {
            "default": "<h1>BENEMÉRITA UNIVERSIDAD AUTÓNOMA DE PUEBLA.</h1>\n<br><h2>CONSENTIMIENTO INFORMADO (ADULTOS).</h2>\n<br>\n<div id='consentId'>\n<h3>Nombre del estudio</h3>\n<p>Evaluación de los niveles de depresión y ansiedad por confinamiento, en estudiantes universitarios  de diferentes universidades de México y Colombia, relacionada a la pandemia de COVID-19.</p>\n<h3>Número de registro</h3>\n<p>REGISTRO VIEP PENDIENTE.</p>\n<h3>Justificación y objetivo del estudio</h3>\n<p>La situación a nivel mundial ocasionada por la enfermedad de COVID-19, ha generado un\ngran impacto en las personas, el presente estudio pretende evaluar los niveles de depresión\ny ansiedad, en estudiantes universitarios  de diferentes universidades de México y Colombia, debido al\nconfinamiento relacionada a la pandemia.</p>\n<h3>Procedimientos</h3>\n<p>Se aplicarán instrumentos que evalúan ansiedad, depresión y estrés, actividad física, conductas asociadas al confinamiento y medidas preventivas.</p>\n<h3>Posibles riesgos y molestias</h3>\n<p>Vulnerabilidad al responder con honestidad las preguntas de los instrumentos aplicados. Hastío al contestar las preguntas.</p>\n<h3>Posibles beneficios que recibirá al participar en el estudio</h3>\n<p>El participante conocerá sus niveles de ansiedad, estrés y depresión, de así conceder, se\npodrá canalizar al Departamento de Psiquiatría de la Facultad de medicina para su\nevaluación y posterior seguimiento buscando la mejoría del estado de salud mental del encuestado y/o revertir daños a la misma.</p>\n<h3>Confidencialidad</h3>\n<p>La información de los resultados es estrictamente confidencial y estará resguardada por el equipo de salud. Será utilizada para este único estudio de investigación.</p>\n<h3>Participación o retiro</h3>\n<p>Usted podrá retirarse sin ninguna consecuencia en el momento que lo decida (cuestionarios incompletos serán eliminados del estudio).</p>\n<h3>Privacidad y confidencialidad</h3>\n<p>Nuestra responsabilidad y obligación como investigadores será el respetar su privacidad y\nmantener la confidencialidad de la información proporcionada que se derive de su participación en el estudio. Siguiendo el Artículo 14.1 de la ley federal de protección de\ndatos personales y siguiendo los lineamientos de la convención de Helsinki.</p>\n<h3>En caso de colección de material biológico (si aplica)</h3>\n<p>No colectaremos material biológico.</p>\n</div>\n<h3>En caso de dudas o aclaraciones relacionadas con el estudio podrá dirigirse a:</h3><br>\n<h4>Investigador Responsable</h4>\n<p><u>D.C. Martha Elba González Mejía</u>. Departamento de Genética\nde la Facultad de Medicina, Benemérita Universidad Autónoma de Puebla. Matrícula BUAP: 100519099. WhatsApp: <a>22-25-24-44-97</a>. Email: <a>elba.gonzalezmejia@gmail.com</a></p>\n<h4>Colaboradores</h4>\n<p><u>D.C Ricardo Pérez Fuentes</u>. Departamento de Metodología de la\ninvestigación de la Facultad de Medicina, Benemérita Universidad Autónoma de Puebla. Matrícula BUAP: 100170644. WhatsApp: <a>22-21-94-57-58</a>. Email: <a>rycardoperez@hotmail.com</a></p>\n<p><u>Denilson Xipe Pacheco Tobón</u>. Alumno de la Licenciatura en Medicina de la Facultad de Medicina, Benemérita Universidad Autónoma de Puebla. Matricula: 201612501. WhatsApp: <a>22-26-70-05-65</a>. Email: <a>xipept@gmail.com</a></p>\n<p><u>Claudia Arellano Ramírez</u>. Alumna de la Licenciatura en Medicina de la de Facultad de Medicina, Benemérita Universidad Autónoma de Puebla. Matricula: 201605314. WhatsApp: 22-11-88-60-73. Email: <a>clau_a_r@outlook.com</a></p>",
            "es": "<h1>BENEMÉRITA UNIVERSIDAD AUTÓNOMA DE PUEBLA.</h1>\n<br>\n<h3>Esta es una invitación a participar en un proyecto de investigación que está desarrollando la Facultad de Medicina BUAP, por parte de alumnos y docentes. Esta participación se realizará a través de un cuestionario en línea que nos permitirá recopilar información valiosa sobre nuestra población estudiantil y docente.</h3>"
        }
        },
        {
        "type": "boolean",
        "name": "firstMessage",
        "title": {
            "es": "Estoy de acuerdo."
        },
        "hideNumber": true,
        "isRequired": true,
        "labelTrue": {
            "es": "Sí"
        },
        "labelFalse": {
            "es": "No"
        }
        },
        {
        "type": "html",
        "name": "consentText",
        "visibleIf": "{firstMessage} = true",
        "html": {
            "es": "<h2>CONSENTIMIENTO INFORMADO.</h2>\n<br>\n<div id='consentId'>\n<h3>Nombre del estudio</h3>\n<p>Evaluación de los niveles de depresión y ansiedad por confinamiento, en estudiantes universitarios de diferentes universidades de México y Colombia, relacionada a la pandemia de COVID-19.</p>\n<h3>Número de registro</h3>\n<p>REGISTRO VIEP PENDIENTE.</p>\n<h3>Justificación y objetivo del estudio</h3>\n<p>La situación a nivel mundial ocasionada por la enfermedad de COVID-19, ha generado un\ngran impacto en las personas, el presente estudio pretende evaluar los niveles de depresión\ny ansiedad, en estudiantes universitarios de diferentes universidades de México y Colombia, debido al\nconfinamiento relacionado a la pandemia, a partir de marzo de 2020 a la fecha.</p>\n<h3>Procedimientos</h3>\n<p>Se aplicarán instrumentos que evalúan ansiedad, depresión y estrés, actividad física, conductas asociadas al confinamiento y medidas preventivas.</p>\n<h3>Posibles riesgos y molestias</h3>\n<p>Vulnerabilidad al responder con honestidad las preguntas de los instrumentos aplicados y/o hastío al contestar las preguntas.</p>\n<h3>Posibles beneficios que recibirá al participar en el estudio</h3>\n<p>El participante conocerá sus niveles de ansiedad, estrés y depresión, de así conceder, se\npodrá canalizar al Departamento de Psiquiatría de la Facultad de medicina para su\nevaluación y posterior seguimiento buscando la mejoría del estado de salud mental del encuestado y/o revertir daños a la misma.</p>\n<h3>Confidencialidad</h3>\n<p>La información de los resultados es estrictamente confidencial y estará resguardada por el equipo de investigadores. La información será utilizada para este único estudio de investigación.</p>\n<h3>Participación o retiro</h3>\n<p>Usted podrá retirarse sin ninguna consecuencia en el momento que lo decida (cuestionarios incompletos serán eliminados del estudio).</p>\n<h3>Privacidad y confidencialidad</h3>\n<p>Nuestra responsabilidad y obligación como investigadores será el respetar su privacidad y\nmantener la confidencialidad de la información proporcionada que se derive de su participación en el estudio. Siguiendo el Artículo 14.1 de la ley federal de protección de\ndatos personales y siguiendo los lineamientos de la convención de Helsinki.</p>\n<h3>En caso de colección de material biológico</h3>\n<p>No colectaremos material biológico.</p>\n</div>\n<h3>En caso de dudas o aclaraciones relacionadas con el estudio podrá dirigirse a:</h3><br>\n<h4>Investigador Responsable</h4>\n<p><u>D.C. Martha Elba González Mejía</u>. Departamento de Genética\nde la Facultad de Medicina, Benemérita Universidad Autónoma de Puebla. Matrícula BUAP: 100519099. WhatsApp: <a>22-25-24-44-97</a>. Email: <a>elba.gonzalezmejia@gmail.com</a></p>\n<h4>Colaboradores</h4>\n<p><u>D.C Ricardo Pérez Fuentes</u>. Departamento de Metodología de la\ninvestigación de la Facultad de Medicina, Benemérita Universidad Autónoma de Puebla. Matrícula BUAP: 100170644. WhatsApp: <a>22-21-94-57-58</a>. Email: <a>rycardoperez@hotmail.com</a></p>\n<p><u>Denilson Xipe Pacheco Tobón</u>. Alumno de la Licenciatura en Medicina de la Facultad de Medicina, Benemérita Universidad Autónoma de Puebla. Matricula: 201612501. WhatsApp: <a>22-26-70-05-65</a>. Email: <a>xipept@gmail.com</a></p>\n<p><u>Claudia Arellano Ramírez</u>. Alumna de la Licenciatura en Medicina de la de Facultad de Medicina, Benemérita Universidad Autónoma de Puebla. Matricula: 201605314. Email: <a>clau_a_r@outlook.com</a></p>"
        }
        },
        {
        "type": "boolean",
        "name": "consent",
        "visibleIf": "{firstMessage} = true",
        "title": {
            "default": "Sí autorizo participar y que se utilicen mis datos, así como la información derivada en estricta confidencialidad.",
            "es": "Participaré y autorizo que se utilicen mis datos, así como la información derivada de estos en estricta confidencialidad."
        },
        "hideNumber": true,
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "html",
        "name": "imageText",
        "visibleIf": "{consent} = true",
        "html": {
            "es": "<h3>A continuación tome una foto de su nombre completo con su firma como se muestra en la siguiente imagen</h3>"
        }
        },
        {
        "type": "image",
        "name": "imageExample",
        "visibleIf": "{consent} = true",
        "imageLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlQRNA4UBgFEmIXNhDM4-COeYMucr3iaRw5w&usqp=CAU"
        },
        {
        "type": "file",
        "name": "image",
        "visibleIf": "{consent} = true",
        "title": {
            "default": "Tome una foto de su firma con su nombre completo.",
            "es": "Nombre y firma"
        },
        "hideNumber": true,
        "isRequired": true,
        "maxSize": 0
        },
        {
        "type": "html",
        "name": "idMessage",
        "visibleIf": "{consent} = true",
        "html": "<h2>Por favor ingrese los siguientes datos para generar un ID de registro.</h2>"
        },
        {
        "type": "html",
        "name": "thankYouMessage",
        "visibleIf": "{consent} = false or {firstMessage} = false",
        "html": {
            "default": "<b style='font-size:30px'>La encuesta ha terminado. Muchas gracias por el tiempo invertido. </b>",
            "es": "<b style='font-size:30px'>Muchas gracias por el tiempo invertido. </b>"
        }
        },
        {
        "type": "text",
        "name": "facultyYear",
        "visibleIf": "{consent} = true",
        "title": "Año de ingreso a la facultad de medicina (generación)",
        "hideNumber": true,
        "isRequired": true,
        "placeHolder": "AAAA"
        },
        {
        "type": "text",
        "name": "name",
        "visibleIf": "{consent} = true",
        "title": {
            "default": "Nombre completo",
            "es": "Iniciales de su nombre"
        },
        "description": {
            "es": "Ejemplo: Pablo Ramírez González - PRG"
        },
        "hideNumber": true,
        "isRequired": true,
        "size": 50,
        "placeHolder": {
            "default": "Pepito Gonzáles Pérez",
            "es": " "
        }
        },
        {
        "type": "html",
        "name": "generalData",
        "visibleIf": "{name} notempty",
        "html": "<h1>DATOS GENERALES</h1><br>\n<h2>Por favor contesta las siguientes preguntas.</h2>"
        },
        {
        "type": "text",
        "name": "age",
        "visibleIf": "{name} notempty",
        "title": "Edad",
        "hideNumber": true,
        "isRequired": true,
        "inputType": "number",
        "min": "0",
        "max": "100",
        "placeHolder": "¿Cuántos años tiene?"
        },
        {
        "type": "radiogroup",
        "name": "gender",
        "visibleIf": "{name} notempty",
        "title": "Género",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Masculino",
            "text": "Masculino"
            },
            {
            "value": "Femenino",
            "text": "Femenino"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "civilStatus",
        "visibleIf": "{name} notempty",
        "title": "Estado civil",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Soltero (a)",
            "text": "Soltero (a)"
            },
            {
            "value": "Casado (a)",
            "text": "Casado (a)"
            },
            {
            "value": "Unión Libre",
            "text": "Unión Libre"
            }
        ],
        "otherText": "Unión libre"
        },
        {
        "type": "boolean",
        "name": "kids",
        "visibleIf": "{name} notempty",
        "title": {
            "default": "¿Tienes hijos?",
            "es": "¿Tiene hijos?"
        },
        "hideNumber": true,
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "dropdown",
        "name": "state",
        "visibleIf": "{name} notempty",
        "title": "Estado de residencia",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Colombia",
            "text": "Colombia"
            },
            {
            "value": "Aguascalientes",
            "text": "Aguascalientes"
            },
            {
            "value": "Baja California",
            "text": "Baja California"
            },
            {
            "value": "Baja California Sur",
            "text": "Baja California Sur"
            },
            {
            "value": "Campeche",
            "text": "Campeche"
            },
            {
            "value": "Chiapas",
            "text": "Chiapas"
            },
            {
            "value": "Chihuahua",
            "text": "Chihuahua"
            },
            {
            "value": "Ciudad de México",
            "text": "Ciudad de México"
            },
            {
            "value": "Coahuila",
            "text": "Coahuila"
            },
            {
            "value": "Colima",
            "text": "Colima"
            },
            {
            "value": "Durango",
            "text": "Durango"
            },
            {
            "value": "Guanajuato",
            "text": "Guanajuato"
            },
            {
            "value": "Guerrero",
            "text": "Guerrero"
            },
            {
            "value": "Hidalgo",
            "text": "Hidalgo"
            },
            {
            "value": "Jalisco",
            "text": "Jalisco"
            },
            {
            "value": "Estado de México",
            "text": "Estado de México"
            },
            {
            "value": "Michoacán",
            "text": "Michoacán"
            },
            {
            "value": "Morelos",
            "text": "Morelos"
            },
            {
            "value": "Nayarit",
            "text": "Nayarit"
            },
            {
            "value": "Nuevo León",
            "text": "Nuevo León"
            },
            {
            "value": "Oaxaca",
            "text": "Oaxaca"
            },
            {
            "value": "Puebla",
            "text": "Puebla"
            },
            {
            "value": "Querétaro",
            "text": "Querétaro"
            },
            {
            "value": "Quintana Roo",
            "text": "Quintana Roo"
            },
            {
            "value": "San Luis Potosí",
            "text": "San Luis Potosí"
            },
            {
            "value": "Sinaloa",
            "text": "Sinaloa"
            },
            {
            "value": "Sonora",
            "text": "Sonora"
            },
            {
            "value": "Tabasco",
            "text": "Tabasco"
            },
            {
            "value": "Tamaulipas",
            "text": "Tamaulipas"
            },
            {
            "value": "Tlaxcala",
            "text": "Tlaxcala"
            },
            {
            "value": "Veracruz",
            "text": "Veracruz"
            },
            {
            "value": "Yucatán",
            "text": "Yucatán"
            },
            {
            "value": "Zacatecas",
            "text": "Zacatecas"
            }
        ],
        "otherText": "Ciudad de México"
        },
        {
        "type": "text",
        "name": "municipality",
        "visibleIf": "{name} notempty",
        "title": "Municipio",
        "hideNumber": true,
        "isRequired": true,
        "placeHolder": "Nombre completo del municipio donde vive"
        },
        {
        "type": "radiogroup",
        "name": "typeOfResidence",
        "visibleIf": "{name} notempty",
        "title": "Tipo de lugar de residencia (en este momento)",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Urbano",
            "text": "Urbano"
            },
            {
            "value": "Rural",
            "text": "Rural"
            }
        ]
        },
        {
        "type": "text",
        "name": "email",
        "visibleIf": "{name} notempty",
        "title": "Correo electrónico",
        "hideNumber": true,
        "isRequired": true,
        "inputType": "email",
        "placeHolder": "Introduzca un correo electrónico válido que use con frecuencia"
        },
        {
        "type": "html",
        "name": "emailMessageConfirmation",
        "visibleIf": "{name} notempty",
        "html": {
            "default": "<h2>Por favor confirme el correo electrónico al que le serán enviados sus resultados (pueden tardar hasta un mes, gracias por su paciencia).</h2>",
            "es": "<h2>Por favor confirme el correo electrónico al que le serán enviados sus resultados (pueden tardar hasta un mes, gracias por su paciencia).</h2>"
        }
        },
        {
        "type": "text",
        "name": "emailConfirmation",
        "visibleIf": "{name} notempty",
        "title": {
            "default": "Correo electrónico",
            "es": "Confirmación de correo electrónico"
        },
        "hideNumber": true,
        "isRequired": true,
        "inputType": "email",
        "placeHolder": {
            "default": "Introduzca un correo electrónico válido que use con frecuencia",
            "es": "Introduzca nuevamente su correo electrónico"
        }
        },
        {
        "type": "radiogroup",
        "name": "occupation",
        "visibleIf": "{name} notempty",
        "title": "Seleccione la opción que mejor le describa",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Alumno",
            "text": "Alumno activo de la Facultad de medicina"
            },
            {
            "value": "MIP",
            "text": "MIP activo de la Facultad de medicina"
            },
            {
            "value": "MPSS",
            "text": "MPSS activo de la Facultad de medicina"
            },
            {
            "value": "Docente",
            "text": "Docente activo de la Facultad de medicina"
            }
        ],
        "otherText": "Unión libre"
        },
        {
        "type": "dropdown",
        "name": "semester",
        "visibleIf": "{occupation} = 'Alumno'",
        "title": "Indica el semestre que cursaste durante el periodo PRIMAVERA 2020",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "1ro",
            "text": "Primero"
            },
            {
            "value": "2do",
            "text": "Segundo"
            },
            {
            "value": "3er",
            "text": "Tercero"
            },
            {
            "value": "4to",
            "text": "Cuarto"
            },
            {
            "value": "5to",
            "text": "Quinto"
            },
            {
            "value": "6to",
            "text": "Sexto"
            },
            {
            "value": "7mo",
            "text": "Séptimo"
            },
            {
            "value": "8vo",
            "text": "Octavo"
            },
            {
            "value": "9no",
            "text": "Noveno"
            },
            {
            "value": "10mo",
            "text": "Décimo"
            }
        ]
        },
        {
        "type": "boolean",
        "name": "worked",
        "visibleIf": "{occupation} = 'Alumno'",
        "title": "¿Trabajó además de tomar clases en línea?",
        "hideNumber": true,
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "radiogroup",
        "name": "seriousWorkProblems",
        "visibleIf": "{occupation} anyof ['MIP', 'MPSS', 'Docente'] or {worked} = true and {occupation} notempty",
        "title": "¿Ha tenido problemas laborales graves?",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Nunca o casi nunca",
            "text": "Nunca o casi nunca"
            },
            {
            "value": "Algunas veces",
            "text": "Algunas veces"
            },
            {
            "value": "Bastantes veces",
            "text": "Bastantes veces"
            },
            {
            "value": "Muchas veces",
            "text": "Muchas veces"
            },
            {
            "value": "Siempre o casi siempre",
            "text": "Siempre o casi siempre"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "workDifficulties",
        "visibleIf": "{occupation} anyof ['MIP', 'MPSS', 'Docente']",
        "title": "¿Ha tenido dificultades en el trabajo?",
        "description": {
            "default": "Relacionados con el desplazamiento, cambios de horarios, funciones a desempeñar, problemas con compañeros o superiores, problemas con clientes (pacientes o alumnos), etc.",
            "es": "Relacionados con el desplazamiento, cambios de horarios, funciones a desempeñar, problemas con compañeros o superiores, problemas con pacientes o alumnos, etc."
        },
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Nunca o casi nunca",
            "text": "Nunca o casi nunca"
            },
            {
            "value": "Algunas veces",
            "text": "Algunas veces"
            },
            {
            "value": "Bastantes veces",
            "text": "Bastantes veces"
            },
            {
            "value": "Muchas veces",
            "text": "Muchas veces"
            },
            {
            "value": "Siempre o casi siempre",
            "text": "Siempre o casi siempre"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "accessToInternetAndDevicesDoctor",
        "visibleIf": "{occupation} anyof ['MIP', 'MPSS', 'Docente'] and {workDifficulties} notempty",
        "title": "El acceso a internet y dispositivos electrónicos como computadora, tablet, celular etc. para impartir clases en línea fue:",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Difícil de obtener",
            "text": "Difícil de obtener"
            },
            {
            "value": "Fácil de obtener",
            "text": "Fácil de obtener"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "accessToInternetAndDevicesStudent",
        "visibleIf": "{worked} notempty",
        "title": "El acceso a internet y dispositivos electrónicos como computadora, tablet, celular etc. para tomar clases en línea fue:",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Difícil de obtener",
            "text": "Difícil de obtener"
            },
            {
            "value": "Fácil de obtener",
            "text": "Fácil de obtener"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "academicPerformance",
        "visibleIf": "{worked} notempty",
        "title": "¿Cómo fue tu rendimiento académico en el periodo pasado (formato en línea) respecto a otros semestres?",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Tuve menor aprovechamiento",
            "text": "Tuve menor aprovechamiento"
            },
            {
            "value": "Tuve el mismo aprovechamiento",
            "text": "Tuve el mismo aprovechamiento"
            },
            {
            "value": "Tuve mejor aprovechamiento",
            "text": "Tuve mejor aprovechamiento"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "difficultiesToStudy",
        "visibleIf": "{worked} notempty",
        "title": "¿Ha tenido dificultades en los estudios?",
        "description": "Dificultades para estudiar, falta de concentración, bajo rendimiento al realizar exámenes, etc.",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Nunca o casi nunca",
            "text": "Nunca o casi nunca"
            },
            {
            "value": "Algunas veces",
            "text": "Algunas veces"
            },
            {
            "value": "Muchas veces",
            "text": "Muchas veces"
            },
            {
            "value": "Siempre o casi siempre",
            "text": "Siempre o casi siempre"
            }
        ]
        },
        {
        "type": "html",
        "name": "indication_1",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevicesDoctor} notempty",
        "html": "<h1>Indicación</h1><br>\n<h2>Por favor lea las siguientes afirmaciones y seleccione qué grado le ha ocurrido a usted esa afirmación durante la semana pasada.</h2>"
        },
        {
        "type": "radiogroup",
        "name": "pt1_1",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevicesDoctor} notempty",
        "title": "Me ha costado mucho descargar la tensión.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_2",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevicesDoctor} notempty",
        "title": "Me di cuenta que tenía la boca seca.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_3",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevicesDoctor} notempty",
        "title": "No podía sentir ningún sentimiento positivo.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_4",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevicesDoctor} notempty",
        "title": "Se me hizo difícil respirar.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_5",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevicesDoctor} notempty",
        "title": "Se me hizo difícil tomar la iniciativa para hacer cosas.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_6",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevicesDoctor} notempty",
        "title": "Reaccioné exageradamente en ciertas situaciones.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_7",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevicesDoctor} notempty",
        "title": "Sentí que mis manos temblaban.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_8",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevicesDoctor} notempty",
        "title": "He sentido que estaba gastando una gran cantidad de energía.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_9",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevicesDoctor} notempty",
        "title": "Estaba preocupado por situaciones en las cuales podía tener pánico o en las que podría hacer el ridículo.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_10",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevicesDoctor} notempty",
        "title": "He sentido que no había nada que me ilusionara.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_11",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevicesDoctor} notempty",
        "title": "Me he sentido inquieto.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_12",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevicesDoctor} notempty",
        "title": "Se me hizo difícil relajarme.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_13",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevicesDoctor} notempty",
        "title": "Me sentí triste y deprimido.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_14",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevicesDoctor} notempty",
        "title": "No toleré nada que no me permitiera continuar con lo que estaba haciendo.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_15",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevicesDoctor} notempty",
        "title": "Sentí que estaba al punto de pánico.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_16",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevicesDoctor} notempty",
        "title": "No me pude entusiasmar por nada.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_17",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevicesDoctor} notempty",
        "title": "Sentí que valía muy poco como persona.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_18",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevicesDoctor} notempty",
        "title": "He tendido a sentirme enfadado con facilidad.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_19",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevicesDoctor} notempty",
        "title": "Sentí los latidos de mi corazón a pesar de no haber hecho ningún esfuerzo físico.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_20",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevicesDoctor} notempty",
        "title": "Tuve miedo sin razón.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt1_21",
        "visibleIf": "{difficultiesToStudy} notempty or {accessToInternetAndDevicesDoctor} notempty",
        "title": "Sentí que la vida no tenía ningún sentido.",
        "isRequired": true,
        "choices": [
            {
            "value": "No me ha ocurrido",
            "text": "No me ha ocurrido"
            },
            {
            "value": "Me ha ocurrido poco, o durante parte del tiempo.",
            "text": "Me ha ocurrido poco, o durante parte del tiempo."
            },
            {
            "value": "Me ha ocurrido bastante, o durante una buena parte del tiempo.",
            "text": "Me ha ocurrido bastante, o durante una buena parte del tiempo."
            },
            {
            "value": "Me ha ocurrido mucho, o la mayor parte del tiempo.",
            "text": "Me ha ocurrido mucho, o la mayor parte del tiempo."
            }
        ]
        },
        {
        "type": "html",
        "name": "indication_2",
        "visibleIf": "{pt1_21} notempty",
        "html": "<h1>Indicación</h1><br>\n<h2>Las siguientes preguntas se refieren al tiempo que usted destinó a estar físicamente activo en los últimos 7 días.</h2>\n<br><h4><u>Por favor</u> responda a cada pregunta aún si no se considera una persona activa. Por favor, piense acerca de las actividades que realiza en su trabajo, como parte de sus tareas en el hogar, jardín, moviéndose de un lugar a otro, o en su tiempo libre para la recreación, el ejercicio o el deporte.</h4>"
        },
        {
        "type": "radiogroup",
        "name": "typeOfActivity",
        "visibleIf": "{pt1_21} notempty",
        "title": "Tipo de actividad que realiza",
        "hideNumber": true,
        "isRequired": true,
        "choices": [
            {
            "value": "Actividad física intensa",
            "text": "Actividad física intensa"
            },
            {
            "value": "Actividad física moderada",
            "text": "Actividad física moderada"
            },
            {
            "value": "Caminatas",
            "text": "Caminatas"
            },
            {
            "value": "Sentado (nula actividad física)",
            "text": "Sentado (nula actividad física)"
            }
        ]
        },
        {
        "type": "html",
        "name": "intensePhysicActivity",
        "visibleIf": "{typeOfActivity} = 'Actividad física intensa'",
        "html": "<h2>Actividad física intensa</h2><br>\n<h3>Se refieren a aquellas que implican un esfuerzo físico intenso y\nque lo hacen respirar mucho más intensamente que lo normal. Piense solo en aquellas actividades físicas que realizó durante por lo menos 10 minutos seguidos.</h3>"
        },
        {
        "type": "dropdown",
        "name": "pt2_Intense_1",
        "visibleIf": "{typeOfActivity} = 'Actividad física intensa'",
        "title": "Durante los últimos 7 días, ¿En cuántos realizó actividades físicas intensas tales como levantar pesas, clavar, hacer ejercicios aeróbicos o andar rápido en bicicleta?",
        "isRequired": true,
        "choices": [
            {
            "value": "1 día",
            "text": "1 día"
            },
            {
            "value": "2 días",
            "text": "2 días"
            },
            {
            "value": "3 días",
            "text": "3 días"
            },
            {
            "value": "4 días",
            "text": "4 días"
            },
            {
            "value": "5 días",
            "text": "5 días"
            },
            {
            "value": "6 días",
            "text": "6 días"
            },
            {
            "value": "7 días",
            "text": "7 días"
            },
            {
            "value": "Ningún día",
            "text": "Ningún día"
            }
        ]
        },
        {
        "type": "text",
        "name": "pt2_Intense_2",
        "visibleIf": "{typeOfActivity} = 'Actividad física intensa'",
        "title": {
            "es": "Habitualmente, ¿Cuántas horas en total dedicó a una actividad física intensa en uno de esos días?"
        },
        "inputType": "number",
        "min": "0",
        "max": "24",
        "step": 1
        },
        {
        "type": "html",
        "name": "ModeratedPhysicActivity",
        "visibleIf": "{typeOfActivity} = 'Actividad física moderada'",
        "html": "<h2>Actividad física moderada</h2><br>\n<h3>Son aquellas que requieren un esfuerzo físico moderado que lo hace respirar algo más intensamente que lo normal. Piense en aquellas actividades\nfísicas que realizó durante por lo menos 10 minutos seguidos.</h3>"
        },
        {
        "type": "dropdown",
        "name": "pt2_Moderated_1",
        "visibleIf": "{typeOfActivity} = 'Actividad física moderada'",
        "title": "Durante los últimos 7 días, ¿En cuántos días hizo actividades físicas moderadas como transportar pesos livianos, andar en bicicleta a velocidad regular, jugar tenis? No incluya caminar.",
        "isRequired": true,
        "choices": [
            {
            "value": "1 día",
            "text": "1 día"
            },
            {
            "value": "2 días",
            "text": "2 días"
            },
            {
            "value": "3 días",
            "text": "3 días"
            },
            {
            "value": "4 días",
            "text": "4 días"
            },
            {
            "value": "5 días",
            "text": "5 días"
            },
            {
            "value": "6 días",
            "text": "6 días"
            },
            {
            "value": "7 días",
            "text": "7 días"
            },
            {
            "value": "Ningún día",
            "text": "Ningún día"
            }
        ]
        },
        {
        "type": "text",
        "name": "pt2_Moderated_2",
        "visibleIf": "{typeOfActivity} = 'Actividad física moderada'",
        "title": {
            "es": "Habitualmente, ¿Cuántas horas en total dedicó a una actividad física moderada en uno de esos días?"
        },
        "inputType": "number",
        "min": "0",
        "max": "24",
        "step": 1
        },
        {
        "type": "html",
        "name": "hike",
        "visibleIf": "{typeOfActivity} = 'Caminatas'",
        "html": "<h2>Caminata</h2><br>\n<h3>Esto incluye caminar en el trabajo o en la casa, para trasladarse de un lugar a\notro, o cualquier caminata que usted podría hacer solamente para recreación, deporte,\nejercicio u ocio.</h3>"
        },
        {
        "type": "dropdown",
        "name": "pt2_Hike_1",
        "visibleIf": "{typeOfActivity} = 'Caminatas'",
        "title": "Durante los últimos 7 días, ¿En cuántos días caminó por lo menos 10 minutos seguidos?",
        "isRequired": true,
        "choices": [
            {
            "value": "1 día",
            "text": "1 día"
            },
            {
            "value": "2 días",
            "text": "2 días"
            },
            {
            "value": "3 días",
            "text": "3 días"
            },
            {
            "value": "4 días",
            "text": "4 días"
            },
            {
            "value": "5 días",
            "text": "5 días"
            },
            {
            "value": "6 días",
            "text": "6 días"
            },
            {
            "value": "7 días",
            "text": "7 días"
            },
            {
            "value": "Ningún día",
            "text": "Ningún día"
            }
        ]
        },
        {
        "type": "text",
        "name": "pt2_Hike_2",
        "visibleIf": "{typeOfActivity} = 'Caminatas'",
        "title": {
            "es": "Habitualmente, ¿Cuántas horas dedicó a caminar en uno de esos días?"
        },
        "inputType": "number",
        "min": "0",
        "max": "24",
        "step": 1
        },
        {
        "type": "html",
        "name": "seated",
        "visibleIf": "{typeOfActivity} = 'Sentado (nula actividad física)'",
        "html": "<h2>Sentado</h2><br>\n<h3>Esto incluye el tiempo dedicado al trabajo, en la casa, clase, durante tiempo libre. Puede incluir el tiempo que pasó sentado en el escritorio, visitando a un amigo, leyendo, viajando en bus, sentado o recostado mirando televisión.</h3>"
        },
        {
        "type": "text",
        "name": "pt2_Seated_1",
        "visibleIf": "{typeOfActivity} = 'Sentado (nula actividad física)'",
        "title": {
            "es": "Durante los últimos 7 días, ¿Cuántas horas pasó sentado durante un día hábil?"
        },
        "inputType": "number",
        "min": "0",
        "max": "24",
        "step": 1
        },
        {
        "type": "html",
        "name": "indication_3",
        "visibleIf": "{pt2_Intense_2} notempty or {pt2_Moderated_2} notempty or {pt2_Hike_2} notempty or {pt2_Seated_1} notempty",
        "html": "<h1>Indicación</h1><br>\n<h2>A continuación se indican varias conductas relacionadas con el periodo de confinamiento y el coronavirus. Por favor conteste seleccionando Sí o No, según sea su caso.</h2>"
        },
        {
        "type": "boolean",
        "name": "pt3_1",
        "visibleIf": "{pt2_Intense_2} notempty or {pt2_Moderated_2} notempty or {pt2_Hike_2} notempty or {pt2_Seated_1} notempty",
        "title": "¿Ha salido habitualmente de casa (su lugar de residencia actual) por cuestiones laborales?",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt3_2",
        "visibleIf": "{pt2_Intense_2} notempty or {pt2_Moderated_2} notempty or {pt2_Hike_2} notempty or {pt2_Seated_1} notempty",
        "title": "¿Ha dormido más que antes?",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt3_3",
        "visibleIf": "{pt2_Intense_2} notempty or {pt2_Moderated_2} notempty or {pt2_Hike_2} notempty or {pt2_Seated_1} notempty",
        "title": "¿Ha visto la TV más que antes?",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt3_4",
        "visibleIf": "{pt2_Intense_2} notempty or {pt2_Moderated_2} notempty or {pt2_Hike_2} notempty or {pt2_Seated_1} notempty",
        "title": "¿Ha practicado ejercicio físico de forma regular?",
        "description": "3 o más días a la semana.",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt3_5",
        "visibleIf": "{pt2_Intense_2} notempty or {pt2_Moderated_2} notempty or {pt2_Hike_2} notempty or {pt2_Seated_1} notempty",
        "title": "¿Ha utilizado las redes sociales más que antes?",
        "description": "WhatsApp, Instagram, Facebook, Twitter, etc.",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt3_6",
        "visibleIf": "{pt2_Intense_2} notempty or {pt2_Moderated_2} notempty or {pt2_Hike_2} notempty or {pt2_Seated_1} notempty",
        "title": "¿Han cambiado mucho sus rutinas?",
        "description": "Horas de acostarse y levantarse, comer/cenar, etc.",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt3_7",
        "visibleIf": "{pt2_Intense_2} notempty or {pt2_Moderated_2} notempty or {pt2_Hike_2} notempty or {pt2_Seated_1} notempty",
        "title": "¿Ha utilizado internet más que antes?",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt3_8",
        "visibleIf": "{pt2_Intense_2} notempty or {pt2_Moderated_2} notempty or {pt2_Hike_2} notempty or {pt2_Seated_1} notempty",
        "title": "¿Ha dedicado más tiempo que antes a ver películas, leer, o jugar a videojuegos?",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt3_9",
        "visibleIf": "{pt2_Intense_2} notempty or {pt2_Moderated_2} notempty or {pt2_Hike_2} notempty or {pt2_Seated_1} notempty",
        "title": "¿Ha aprovechado para realizar actividades en casa para las que antes no disponía de tiempo?",
        "description": "3 o más días a la semana.",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt3_10",
        "visibleIf": "{pt2_Intense_2} notempty or {pt2_Moderated_2} notempty or {pt2_Hike_2} notempty or {pt2_Seated_1} notempty",
        "title": "¿Ha mantenido sus cuidados personales habituales?",
        "description": "Aseo personal, vestirse, arreglarse, etc.",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "html",
        "name": "indication_4",
        "visibleIf": "{pt3_10} notempty",
        "html": "<h1>Indicación</h1><br>\n<h2>Estas son algunas de las conductas para evitar el contagio del coronavirus. Por favor conteste seleccionando Sí o No, según sea su caso.</h2>"
        },
        {
        "type": "radiogroup",
        "name": "useOfMask",
        "visibleIf": "{pt3_10} notempty",
        "title": "¿Utiliza siempre o casi siempre cubrebocas cuando sale de casa?",
        "isRequired": true,
        "choices": [
            {
            "value": "Siempre",
            "text": "Siempre"
            },
            {
            "value": "Casi siempre",
            "text": "Casi siempre"
            },
            {
            "value": "No uso",
            "text": "No uso"
            }
        ]
        },
        {
        "type": "imagepicker",
        "name": "typeOfMask",
        "visibleIf": "{pt3_10} notempty and {useOfMask} anyof ['other', 'item2', 'Siempre', 'Casi siempre']",
        "title": "Seleccione qué tipo de cubrebocas utiliza",
        "isRequired": true,
        "choices": [
            {
            "value": "Quirúrgico",
            "text": {
            "es": "Quirúrgico"
            },
            "imageLink": "https://raw.githubusercontent.com/Fernando74lr/Survey_Health/master/surveyHealth/static/core/img/quir%C3%BArgico.jpg"
            },
            {
            "value": "Neopreno",
            "text": "Neopreno",
            "imageLink": "https://raw.githubusercontent.com/Fernando74lr/Survey_Health/master/surveyHealth/static/core/img/neopreno.jpg"
            },
            {
            "value": "KN95",
            "text": "KN95",
            "imageLink": "https://raw.githubusercontent.com/Fernando74lr/Survey_Health/master/surveyHealth/static/core/img/KN95.jpg"
            },
            {
            "value": "Tela",
            "text": {
            "es": "Tela"
            },
            "imageLink": "https://raw.githubusercontent.com/Fernando74lr/Survey_Health/master/surveyHealth/static/core/img/tela.jpg"
            }
        ]
        },
        {
        "type": "boolean",
        "name": "pt4_1",
        "visibleIf": "{pt3_10} notempty",
        "title": "¿Utiliza siempre o casi siempre guantes cuando sale de casa?",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt4_2",
        "visibleIf": "{pt3_10} notempty",
        "title": "¿Mantiene siempre o casi siempre la distancia de seguridad con otras personas fuera de casa (al menos 2 metros)?",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt4_3",
        "visibleIf": "{pt3_10} notempty",
        "title": "¿Cree que se lava o desinfecta las manos con excesiva frecuencia?",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt4_4",
        "visibleIf": "{pt3_10} notempty",
        "title": "¿Desinfecta habitualmente los objetos y superficies con gel desinfectante, jabón, alcohol, etc.?",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt4_5",
        "visibleIf": "{pt3_10} notempty",
        "title": "¿Toma precauciones habitualmente al llegar del supermercado, lavando los alimentos, desinfectando el teléfono celular o las llaves, etc.?",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "boolean",
        "name": "pt4_6",
        "visibleIf": "{pt3_10} notempty",
        "title": "¿Se protege habitualmente al tocar zonas de posible contagio, como manijas, ascensores, lectores de tarjetas de crédito, etc.?",
        "isRequired": true,
        "labelTrue": "Sí",
        "labelFalse": "No"
        },
        {
        "type": "html",
        "name": "indication_5",
        "visibleIf": "{pt4_6} notempty",
        "html": "<h1>Indicación</h1><br>\n<h2>¿Ha perturbado su vida el coronavirus o el confinamiento? Indique la frecuencia con\nque le ha ocurrido</h2>"
        },
        {
        "type": "radiogroup",
        "name": "pt5_1",
        "visibleIf": "{pt4_6} notempty",
        "title": "¿Ha tenido discusiones o conflictos con sus familiares?",
        "isRequired": true,
        "choices": [
            {
            "value": "Nunca o casi nunca",
            "text": "Nunca o casi nunca"
            },
            {
            "value": "Algunas veces",
            "text": "Algunas veces"
            },
            {
            "value": "Bastantes veces",
            "text": "Bastantes veces"
            },
            {
            "value": "Muchas veces",
            "text": "Muchas veces"
            },
            {
            "value": "Siempre o casi siempre",
            "text": "Siempre o casi siempre"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt5_2",
        "visibleIf": "{pt4_6} notempty",
        "title": "¿Le ha perturbado o alterado no poder ver a algunos de sus familiares que veía habitualmente?",
        "isRequired": true,
        "choices": [
            {
            "value": "Nunca o casi nunca",
            "text": "Nunca o casi nunca"
            },
            {
            "value": "Algunas veces",
            "text": "Algunas veces"
            },
            {
            "value": "Bastantes veces",
            "text": "Bastantes veces"
            },
            {
            "value": "Muchas veces",
            "text": "Muchas veces"
            },
            {
            "value": "Siempre o casi siempre",
            "text": "Siempre o casi siempre"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt5_3",
        "visibleIf": "{pt4_6} notempty",
        "title": "¿Le ha perturbado o alterado no poder ver a sus amigos?",
        "isRequired": true,
        "choices": [
            {
            "value": "Nunca o casi nunca",
            "text": "Nunca o casi nunca"
            },
            {
            "value": "Algunas veces",
            "text": "Algunas veces"
            },
            {
            "value": "Bastantes veces",
            "text": "Bastantes veces"
            },
            {
            "value": "Muchas veces",
            "text": "Muchas veces"
            },
            {
            "value": "Siempre o casi siempre",
            "text": "Siempre o casi siempre"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt5_4",
        "visibleIf": "{pt4_6} notempty",
        "title": "¿Le ha perturbado o alterado no poder realizar actividades de ocio fuera de casa (viajar, salir, etc.)?",
        "isRequired": true,
        "choices": [
            {
            "value": "Nunca o casi nunca",
            "text": "Nunca o casi nunca"
            },
            {
            "value": "Algunas veces",
            "text": "Algunas veces"
            },
            {
            "value": "Bastantes veces",
            "text": "Bastantes veces"
            },
            {
            "value": "Muchas veces",
            "text": "Muchas veces"
            },
            {
            "value": "Siempre o casi siempre",
            "text": "Siempre o casi siempre"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt5_5",
        "visibleIf": "{pt4_6} notempty",
        "title": "¿Ha tenido problemas para realizar actividades de ocio en casa (leer, escribir, ver películas, videojuegos, etc.)?",
        "isRequired": true,
        "choices": [
            {
            "value": "Nunca o casi nunca",
            "text": "Nunca o casi nunca"
            },
            {
            "value": "Algunas veces",
            "text": "Algunas veces"
            },
            {
            "value": "Bastantes veces",
            "text": "Bastantes veces"
            },
            {
            "value": "Muchas veces",
            "text": "Muchas veces"
            },
            {
            "value": "Siempre o casi siempre",
            "text": "Siempre o casi siempre"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt5_6",
        "visibleIf": "{pt4_6} notempty",
        "title": "¿Le ha perturbado o alterado no poder realizar actividades físicas fuera de casa (deporte, ejercicio físico, ir al campo, etc.)?",
        "isRequired": true,
        "choices": [
            {
            "value": "Nunca o casi nunca",
            "text": "Nunca o casi nunca"
            },
            {
            "value": "Algunas veces",
            "text": "Algunas veces"
            },
            {
            "value": "Bastantes veces",
            "text": "Bastantes veces"
            },
            {
            "value": "Muchas veces",
            "text": "Muchas veces"
            },
            {
            "value": "Siempre o casi siempre",
            "text": "Siempre o casi siempre"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt5_7",
        "visibleIf": "{pt4_6} notempty",
        "title": "¿Le ha perturbado o alterado no poder salir de casa salvo para cosas muy necesarias?",
        "isRequired": true,
        "choices": [
            {
            "value": "Nunca o casi nunca",
            "text": "Nunca o casi nunca"
            },
            {
            "value": "Algunas veces",
            "text": "Algunas veces"
            },
            {
            "value": "Bastantes veces",
            "text": "Bastantes veces"
            },
            {
            "value": "Muchas veces",
            "text": "Muchas veces"
            },
            {
            "value": "Siempre o casi siempre",
            "text": "Siempre o casi siempre"
            }
        ]
        },
        {
        "type": "radiogroup",
        "name": "pt5_8",
        "visibleIf": "{pt4_6} notempty",
        "title": "¿Le ha perturbado o alterado no poder disponer de cosas que necesitaba?",
        "isRequired": true,
        "choices": [
            {
            "value": "Nunca o casi nunca",
            "text": "Nunca o casi nunca"
            },
            {
            "value": "Algunas veces",
            "text": "Algunas veces"
            },
            {
            "value": "Bastantes veces",
            "text": "Bastantes veces"
            },
            {
            "value": "Muchas veces",
            "text": "Muchas veces"
            },
            {
            "value": "Siempre o casi siempre",
            "text": "Siempre o casi siempre"
            }
        ]
        },
        {
        "type": "html",
        "name": "question1",
        "visibleIf": "{pt5_8} notempty",
        "html": {
            "default": "<b style='font-size:30px;'>La encuesta ha terminado. Muchas gracias por el tiempo invertido. En breve se le mostrará el ID con el que fue registrado junto con su número de folio.</b>",
            "es": "<b style='font-size:30px;'>La encuesta ha terminado. Muchas gracias por el tiempo invertido. En breve se le mostrará el ID con el que fue registrado.</b>"
        }
        }
        ]
        }
    ]
    };

window.survey = new Survey.Model(json);

// Capitalize each word
let capitalizeWords = (str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

// Create and upload image to firestore storage
function createAndUpload(filename, userID) {
    const apiUrl = 'https://health-survey-2021-309005.uc.r.appspot.com';
    fetch(`${apiUrl}/storeImage?filename=${filename}&userID=${userID}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'no-cors'
    }).then(response => response.json())
        .then(data => {
            console.log("RESPONSE API: ", data);
        });
}

// Send an email to with the results to the user
function sendEmail(userID) {
    const apiUrl = 'https://health-survey-2021-309005.uc.r.appspot.com';
    fetch(`${apiUrl}/sendEmail?userID=${userID}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'no-cors'
    }).then(response => response.json())
        .then(data => {
            console.log("RESPONSE API: ", data);
        });
}

// Create an ID
function getId(name, facultyYear) {
    let abrev;
    if (!(name.length <= 2)) {
        try {
            if (name.length > 3)
                abrev = name[2] + name[3] + name[0] + name[1];
            else
                abrev = name[1] + name[2] + name[0] + '0';
        } catch (error) {
            console.log("Error while generating the ID");
            console.log(error);
        }
    } else {
        abrev = 'GENERICO';
    }
    let surveyId = facultyYear + abrev + '_' + Date.now();
    return surveyId;
}

async function modal() {
    const { value: formValues } = await Swal.fire({
        title: 'Credenciales',
        html:
          '<input id="swal-input1" class="swal2-input" placeholder="Usuario">' +
          '<input type="password" id="swal-input2" class="swal2-input" placeholder="Contraseña">',
        focusConfirm: false,
        preConfirm: () => {
            const user = document.getElementById('swal-input1').value;
            const password = document.getElementById('swal-input2').value;
            if (user === 'HealthSurvey' && password === 'MASTERcapitan121') {
                let url = "https://health-survey-2021.web.app/results.html";
                $(location).attr('href',url);
            } else {
                return "No tienes permisos para ver los resultados ✋";
            }
        }
      })
      
      if (formValues) {
        Swal.fire(JSON.stringify(formValues))
      }
}

function errorMessageSurvey(title, tip) {
    $('.center').html(
        `<div class='alert alert-danger' role='alert'>
            ${title}<br>
            <small>${tip}</small>
        </div>
        <div class="buttons_panel" style="margin-top:10px;display:flex;justify-content:center;text-align:center;">
            <a href="https://health-survey-2021.web.app/"><button type="button" id="buttonHome"class="btn btn-primary" style="margin-right:10px;border-radius:1.214em!important;">Inicio</button></a>
        </div>
        <br>
        `
    );
}

function getSeverity(points) {
    let depression;
    let anxiety;
    let stress;

    if (points >= 0 && points <= 9) depression = 'Normal';
    if (points >= 10 && points <= 13) depression = 'Baja';
    if (points >= 14 && points <= 20) depression = 'Moderada';
    if (points >= 21 && points <= 27) depression = 'Severa';
    if (points >= 28) depression = 'Extremadamente severa';

    if (points >= 0 && points <= 7) anxiety = 'Normal';
    if (points >= 8 && points <= 9) anxiety = 'Baja';
    if (points >= 10 && points <= 14) anxiety = 'Moderada';
    if (points >= 15 && points <= 19) anxiety = 'Severa';
    if (points >= 20) anxiety = 'Extremadamente severa';

    if (points >= 0 && points <= 14) stress = 'Normal';
    if (points >= 15 && points <= 18) stress = 'Baja';
    if (points >= 19 && points <= 25) stress = 'Moderada';
    if (points >= 26 && points <= 33) stress = 'Severa';
    if (points >= 34) stress = 'Extremadamente severa';

    return [depression, anxiety, stress];
}

function checkPoints(question, points) {
    if (question == 'Me ha ocurrido poco, o durante parte del tiempo.') points+=1;
    if (question == 'Me ha ocurrido bastante, o durante una buena parte del tiempo.') points+=2;
    if (question == 'Me ha ocurrido mucho, o la mayor parte del tiempo.') points+=3;
    return points
}

function getPart1Individual(user) {
    let points = 0;
    let severity = [];
    
    points = checkPoints(user.pt1_1, points);
    points = checkPoints(user.pt1_2, points);
    points = checkPoints(user.pt1_3, points);
    points = checkPoints(user.pt1_4, points);
    points = checkPoints(user.pt1_5, points);
    points = checkPoints(user.pt1_6, points);
    points = checkPoints(user.pt1_7, points);
    points = checkPoints(user.pt1_8, points);
    points = checkPoints(user.pt1_9, points);
    points = checkPoints(user.pt1_10, points);
    points = checkPoints(user.pt1_11, points);
    points = checkPoints(user.pt1_12, points);
    points = checkPoints(user.pt1_13, points);
    points = checkPoints(user.pt1_14, points);
    points = checkPoints(user.pt1_15, points);
    points = checkPoints(user.pt1_16, points);
    points = checkPoints(user.pt1_17, points);
    points = checkPoints(user.pt1_18, points);
    points = checkPoints(user.pt1_19, points);
    points = checkPoints(user.pt1_20, points);
    points = checkPoints(user.pt1_21, points);

    severity = getSeverity(points);

    const res = {
        'name': user.name,
        'id': user.surveyId,
        'depression': severity[0],
        'anxiety': severity[1],
        'stress': severity[2]
    };

    return res;
}

survey
    .onComplete
    .add(function (result) {
        // console.log("RESULT: ", result.data);

        const user = {
            // User info.
            firstMessage: result.data.firstMessage,
            consent: result.data.consent,
            image: {
                name: result.data.image[0].name,
                type: result.data.image[0].type,
                content: result.data.image[0].content
            },
            surveyId: getId(result.data.name, result.data.facultyYear),
            facultyYear: result.data.facultyYear,
            name: result.data.name,
            age: result.data.age,
            gender: result.data.gender,
            civilStatus: result.data.civilStatus,
            kids: result.data.kids,
            state: result.data.state,
            municipality: result.data.municipality,
            typeOfResidence: result.data.typeOfResidence,
            email: result.data.email,
            emailConfirmation: result.data.emailConfirmation,
            occupation: result.data.occupation,
            semester: result.data.semester || 'No aplica',
            worked: result.data.worked || 'No aplica',
            workDifficulties: result.data.workDifficulties || 'No aplica',
            academicPerformance: result.data.academicPerformance || 'No aplica',
            difficultiesToStudy: result.data.difficultiesToStudy || 'No aplica',
            seriousWorkProblems: result.data.seriousWorkProblems || 'No aplica',
            accessToInternetAndDevicesDoctor: result.data.accessToInternetAndDevicesDoctor || 'No aplica',
            accessToInternetAndDevicesStudent: result.data.accessToInternetAndDevicesStudent || 'No aplica',
            academicPerformance: result.data.academicPerformance || 'No aplica',
            difficultiesToStudy: result.data.difficultiesToStudy || 'No aplica',
            typeOfActivity: result.data.typeOfActivity || 'No aplica',
            useOfMask: result.data.useOfMask,
            typeOfMask: result.data.typeOfMask,
            // Questions part 1.
            pt1_1: result.data.pt1_1,
            pt1_2: result.data.pt1_2,
            pt1_3: result.data.pt1_3,
            pt1_4: result.data.pt1_4,
            pt1_5: result.data.pt1_5,
            pt1_6: result.data.pt1_6,
            pt1_7: result.data.pt1_7,
            pt1_8: result.data.pt1_8,
            pt1_9: result.data.pt1_9,
            pt1_10: result.data.pt1_10,
            pt1_11: result.data.pt1_11,
            pt1_12: result.data.pt1_12,
            pt1_13: result.data.pt1_13,
            pt1_14: result.data.pt1_14,
            pt1_15: result.data.pt1_15,
            pt1_16: result.data.pt1_16,
            pt1_17: result.data.pt1_17,
            pt1_18: result.data.pt1_18,
            pt1_19: result.data.pt1_19,
            pt1_20: result.data.pt1_20,
            pt1_21: result.data.pt1_21,
            // Questions part 2.
            pt2_Intense_1: result.data.pt2_Intense_1,
            pt2_Intense_2: result.data.pt2_Intense_2,
            pt2_Moderated_1: result.data.pt2_Moderated_1,
            pt2_Moderated_2: result.data.pt2_Moderated_2,
            pt2_Hike_1: result.data.pt2_Hike_1,
            pt2_Hike_2: result.data.pt2_Hike_2,
            pt2_Seated_1: result.data.pt2_Seated_1,
            // Questions part 3.
            pt3_1: result.data.pt3_1 === false ? 'No' : 'Sí',
            pt3_2: result.data.pt3_2 === false ? 'No' : 'Sí',
            pt3_3: result.data.pt3_3 === false ? 'No' : 'Sí',
            pt3_4: result.data.pt3_4 === false ? 'No' : 'Sí',
            pt3_5: result.data.pt3_5 === false ? 'No' : 'Sí',
            pt3_6: result.data.pt3_6 === false ? 'No' : 'Sí',
            pt3_7: result.data.pt3_7 === false ? 'No' : 'Sí',
            pt3_8: result.data.pt3_8 === false ? 'No' : 'Sí',
            pt3_9: result.data.pt3_9 === false ? 'No' : 'Sí',
            pt3_10: result.data.pt3_10 === false ? 'No' : 'Sí',
            // Questions part 4.
            pt4_1: result.data.pt4_1 === false ? 'No' : 'Sí',
            pt4_2: result.data.pt4_2 === false ? 'No' : 'Sí',
            pt4_3: result.data.pt4_3 === false ? 'No' : 'Sí',
            pt4_4: result.data.pt4_4 === false ? 'No' : 'Sí',
            pt4_5: result.data.pt4_5 === false ? 'No' : 'Sí',
            pt4_6: result.data.pt4_6 === false ? 'No' : 'Sí',
            // Questions part 5.
            pt5_1: result.data.pt5_1,
            pt5_2: result.data.pt5_2,
            pt5_3: result.data.pt5_3,
            pt5_4: result.data.pt5_4,
            pt5_5: result.data.pt5_5,
            pt5_6: result.data.pt5_6,
            pt5_7: result.data.pt5_7,
            pt5_8: result.data.pt5_8
        };
        
        let email = result.data.email;
        let emailConfirm = result.data.emailConfirmation;
        if (email === emailConfirm) {
            if (!emails.includes(user.email)) {
                // Render and Send Data.
                console.log("USER: ", user);
                createUser(user);
                let results = getPart1Individual(user);
                setTimeout(() => {
                    uploadResults(results);
                    sendEmail(user.name);
                    createAndUpload(user.surveyId, user.name);
                }, 3000);
                $('#result').removeClass('hidden');
                $('#surveyIDShow').html(user.surveyId);
                $('#anxiety').html(results.anxiety);
                $('#stress').html(results.stress);
                $('#depression').html(results.depression);
            } else {
                errorMessageSurvey(
                    'La dirección de correo electrónico ya está registrada.',
                    'Por favor cambia de correo.'
                )
            }
        } else {
            errorMessageSurvey(
                'Tu dirección de correo electrónico no coincide con la primera que pusiste.',
                'Por favor asegúrate de poner el mismo correo.'
            )
        }
    });

$("#surveyElement").Survey({model: survey});
$('#consentId').removeAttr('style');