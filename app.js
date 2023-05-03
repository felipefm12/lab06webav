const express = require('express');
const app = express();

app.use(express.static('public'));

// Configurar el motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

// Ruta para renderizar la plantilla Pug
app.get('/pug', (req, res) => {
  res.render('index', { nombre: 'Usuario Pug' });
});

// Configurar EJS como motor de plantillas para una ruta específica
app.engine('ejs', require('ejs').renderFile);

// Ruta para renderizar la plantilla EJS
app.get('/ejs', (req, res) => {
  res.render('index.ejs', { nombre: 'Usuario EJS' });
});

// Ruta para renderizar la plantilla "perfil"
app.get('/perfil/:id', (req, res) => {
  const userId = req.params.id;
  // Aquí puedes buscar los datos del usuario en una base de datos, por ejemplo
  const user = {
    id: userId,
    nombre: 'Usuario ' + userId,
    correo: 'usuario' + userId + '@gmail.com',
    telefono: '95602345' + userId,
    direccion: 'Calle ' + userId + ', Arequipa',
    foto: 'FOTO.JPG', // URL de la foto del usuario
  };
  res.render('perfil', { user: user });
});

// Ruta para renderizar la plantilla Pug "miplantilla.pug"
app.get('/miplantilla-pug', (req, res) => {
  res.render('miplantilla.pug', {
    mensaje: '¡Hola desde la plantilla Pug!',
    imagen: 'PUG.PNG', // URL de la imagen para mostrar
    enlace: 'https://www.pug.com', // URL del enlace a otro sitio web
  });
});

// Ruta para renderizar la plantilla EJS "miplantilla.ejs"
app.get('/miplantilla-ejs', (req, res) => {
  res.render('miplantilla.ejs', {
    mensaje: '¡Hola desde la plantilla EJS!',
    imagen: 'EJS.PNG', // URL de la imagen para mostrar
    enlace: 'https://www.ejs.com', // URL del enlace a otro sitio web
  });
});

// Ruta para la página de inicio del portafolio
app.get('/portafolio', (req, res) => {
  res.render('inicio.ejs', {
    imagen: '/images/usuario.png',
    nombre: 'Jorge Felipe Flores Maque',
    perfil: 'Full Stack Developer',
    email: 'f.floresmaque@gmail.com',
    celular: '981094206',
    titulos: [
      'TwoLF',
      '¡Bienvenido a mi portafolio!',
      'Sobre mi',
      'Skill',
      'Sobre mi',
      'Mi portafolio'
    ],
    lenguajes: [
      'HTML',
      'CSS3',
      'PHP',
      'JAVASCRIPT',
    ],
    descripciones: 'Estudiante de la carrera de Diseño y Desarrollo de Software con conocimientos en bases de datos y lenguajes de programación, adaptable a los cambios con capacidad de trabajar en equipo y a la solución efectiva de problemas. Busco prácticas profesionales con el objetivo de aplicar las habilidades y conocimientos aprendidos en la carrera y agregar valor en la organización. Nivel intermedio de inglés.'
  });
});

// Ruta para la página de habilidades del portafolio
app.get('/portafolio/habilidades', (req, res) => {
  res.render('habilidades.ejs', {
    titulos: [
      'TwoLF',
      '¡Estas son mis habilidades principales!',
      'Mis Habilidades',
      'Habilidades',
      'Habilidades',
    ],
    habilidades: [
      'DISEÑO WEB',
      'DESARROLLO WEB',
      'BASES DE DATOS',
      'SOLUCION DE PROBLEMAS',
      'DISEÑO GRÁFICO',
      'SERVICIOS DE MARKETING',
    ],
    descripciones: [
      'He creado numerosos diseños de sitios web para clientes de diferentes sectores utilizando herramientas como Sketch, Adobe XD y Figma. Mis diseños se enfocan en la experiencia del usuario, la accesibilidad y la usabilidad, y siempre están adaptados a las necesidades y objetivos del cliente.',
      'Tengo experiencia en el desarrollo de sitios web en HTML, CSS, JavaScript y PHP. También he trabajado con CMS como WordPress y Shopify, y con frameworks como React y Angular. Siempre me aseguro de que mis sitios web sean rápidos, seguros y responsivos en todos los dispositivos.',
      'He trabajado con bases de datos relacionales y no relacionales como MySQL, PostgreSQL, MongoDB y Firebase. Tengo experiencia en diseño de esquemas, consultas y optimización de rendimiento. He desarrollado sistemas de gestión de contenido y aplicaciones web que utilizan bases de datos para almacenar y recuperar información.',
      'Me encanta resolver problemas complejos y encontrar soluciones creativas. He trabajado en proyectos que requerían investigación exhaustiva, análisis de datos y diseño de algoritmos para encontrar soluciones efectivas. Siempre trato de abordar los problemas de manera sistemática y eficiente, y de mantener una comunicación clara con los miembros del equipo.',
      'He diseñado logotipos, folletos, carteles, tarjetas de presentación y otros materiales de marketing para clientes en diferentes sectores. Me enfoco en crear diseños atractivos y efectivos que se ajusten a la identidad de la marca y a las necesidades del cliente.',
      'Tengo experiencia en la planificación y ejecución de campañas de marketing digital, incluyendo SEO, PPC, redes sociales y marketing por correo electrónico. Me enfoco en crear estrategias de marketing efectivas que ayuden a los clientes a alcanzar sus objetivos de negocio. También tengo experiencia en el análisis de datos y la medición de resultados para mejorar continuamente la efectividad de las campañas.'
    ]
  });
});

// Ruta para la página de contacto del portafolio
app.get('/portafolio/contacto', (req, res) => {
  res.render('contacto.ejs', {
    ubicacion: 'ASOC. JOSE OLAYA ZN. A MZ. B LT. 13 CAYMA',
    email: 'f.floresmaque@gmail.com',
    celular: '981094206',
    titulos: [
      'TwoLF',
      '¡Contáctame para cualquier consulta!',
      'Contactos',
      'Envíame un mensaje',
      'Ponerse en contacto',
      'Contacto',
    ],
    descripciones: '¿Está buscando un experto en diseño y desarrollo web con habilidades en bases de datos y solución de problemas? ¡Estás en el lugar correcto! Con mi experiencia en diseño gráfico y servicios de marketing, puedo ayudarlo a llevar su presencia en línea al siguiente nivel. No dude en ponerse en contacto conmigo para discutir cómo puedo ayudarlo.',
    
  });
});


// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Aplicación web dinámica ejecutándose en el puerto 3000');
});
