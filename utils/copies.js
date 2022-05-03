import NavLink from "next/link";

export const home = {
  header: {
    preTitle: {
      open: `¡Edición 2022 en marcha 🚀!`,
      closed: "Preparando próxima edición... 👨‍🍳👩‍🍳",
    },
    title: (
      <h1>
        Aprende a{" "}
        <span className="no-wrap">
          <span className="color-emphasys"> {`{`} </span> programar{" "}
          <span className="color-emphasys"> {"}"} </span>
        </span>{" "}
        desde cero
      </h1>
    ),
    description: {
      open: `Descubre las bases de la programación con este curso gratuito de verano de la mano del equipo de profes y mentores de Teacht3ch.`,
      closed: `Descubre las bases de la programación con este curso gratuito de verano de la mano del equipo de profes y mentores de Teacht3ch.`,
    },
    cta: { open: `¡Quiero apuntarme!`, close: `¡Quiero informarme!` },
  },
  aboutUsSection: {
    title: "We are TeachTech!",
    description: (
      <p>
        Somos un grupo de{" "}
        <span className="bold">apasionados de la programación</span> que nos
        hemos unido para ayudar a gente como tú a{" "}
        <span className="bold">perderle el miedo a programar</span>. Queremos
        transmitirte la misma pasión que sentimos nosotros por nuestro trabajo y
        que veas que es posible conseguir eso que te ronda hace tiempo.
      </p>
    ),
    cta: "Conoce a los profes y mentores",
    link: "O descubre cómo surgió Teach[t3ch]",
  },
  courseSection: {
    title: "Mismo curso, dos modalidades",
    description:
      "En cada edición buscamos tener un enfoque práctico que te ayude a aprender con las manos en la masa. Podrás completar el curso en dos modalidades, Full Power o A tu aire.",
  },
  achieveSection: {
    title: "¿Y cómo lo conseguiremos?",
    description:
      "La clave está en dedicarle tiempo al curso, al igual que los profes y mentores lo dedican en prepararlo para ti.",
    items: [
      {
        img: "calendar.png",
        title: "Clases semanales",
        description:
          "Clases online una vez por semana donde prodrás interactuar con otros alumnos y profesores",
      },
      {
        img: "carpeta.png",
        title: "Ejercicios",
        description:
          "Tendrás ejercicios para aplica los nuevos conocimientos de diversa dificultad",
      },
      {
        img: "manos.png",
        title: "Una mentorización",
        description:
          "Uno de nuestros miembros de Teach[T3ch] te acompañará personalmente durante todo el proceso",
      },
      {
        img: "mano-lapiz.png",
        title: "Proyecto final",
        description:
          "Harás un proyecto que tú elijas para poner en práctica todo lo que has aprendido",
      },
    ],
  },
  ctaSection: {
    open: {
      title: "¡Este año sí que sí!",
      description:
        "¿Te interesa lo que has visto? Pues vamos a por ello. El equipo de profes y mentores de TeachT3ch estará encantado de tenerte en nuestras filas.",
      img: "home-victory.png",
      cta: "¡Quiero apuntarme!",
    },
    closed: {
      title: "Únete a nuestra newsletter",
      description:
        "¿Te interesa lo que has visto? Si quieres estar al día sobre la apertura de nuevas plazas, trucos sobre programación y mucho más, únete a nuestra newsletter.",
      img: "home-sign-hand.png",
      cta: "¡Quiero apuntarme!",
    },
  },
  figuresSection: {
    title: "Ya estamos logrando grandes cosas",
  },
  sponsors: {
    title: "¡Gracias a nuestras empresas colaboradoras!",
    description:
      "Además de nuestros voluntarios, también estas empresas ayudan a que este proyecto siga adelante, bien con financiación, con herramientas o aportando tiempo laboral para que nuestros voluntarios puedan participar aquí.",
    companies: [
      {
        companyName: "Liferay",
        url: "https://www.liferay.com/es/home",
        imageURL: "/img/sponsors/liferay.png",
      },
      {
        companyName: "Corunet",
        url: "https://coru.net",
        imageURL: "/img/sponsors/corunet.svg",
      },
      {
        companyName: "Agile Spain",
        url: "https://agile-spain.org/",
        imageURL: "/img/sponsors/agile-spain.png",
      },
    ],
  },
};

export const testimonials = {
  title: "Lo que dicen de nosotros",
  description:
    "TeachT3ch es un curso de verano, pero también una experiencia de voluntariado para profes y mentores. Esto es lo que dicen de su experiencia",
  content: {
    students: [
      {
        testimonial:
          "Me ha ayudado a sentirme capaz de seguir ese camino. Al terminar me sentía hiper-motivada para seguir programando y estudiando.",
        author: "Bea",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2020",
      },
      {
        testimonial:
          "TeachTech es el paso más importante para mi cambio de carrera. El temario del curso esta muy bien pensado y la estructuracion ha sido muy bien ideada, yendo más allá de otros cursos. ",
        author: "Alianna",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "https://ct1mp.csb.app/index.html",
      },
      {
        testimonial:
          "TeachTech me hizo sentir que siempre era un buen momento para aprender programación y que siempre estaban ahí cerca como familia, de esas que te impulsan a ser mejor profesional y personalmente. ",
        author: "Alianna",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "https://ct1mp.csb.app/index.html",
      },
      {
        testimonial:
          "El equipo de  organizadores, profesores y mentores es el equilibrio perfecto entre conocimientos, experiencia en el campo y calidad humana. Siempre llevaré conmigo lo que me enseñaron. ",
        author: "Alianna",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "https://ct1mp.csb.app/index.html",
      },

      {
        testimonial:
          "Ha supuesto la oportunidad de conocer a personas que disfrutan con la programación, y que quieren que tod@s disfrutemos también. Es un gran proyecto del que formar parte.",
        author: "Mónica",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "https://lu6sx.csb.app/",
      },
      {
        testimonial:
          "Si empiezas de 0 es muy interesante, puedes aprender más o menos depende del tiempo que le dedique uno mismo, pero aprendes a nivel personal a no rendirte. A mí me sirvió mucho, y sobre todo... a conocer gente altruista que brilla por su ausencia en esta sociedad ¡Me alegro mucho de poder haber recibido la oportunidad de haberos conocido a todos!",
        author: "Diego",
        image: "default",
        role: "student",
        tag: "Alumno - Edición 2021",
        edition: "2021",
        work: "https://codesandbox.io/s/proyecto-5cgrw",
      },
      {
        testimonial:
          "Para mí ha supuesto abrirme un mundo completamente nuevo y distinto que me parece fascinante. En un verano he conocido a profesionales geniales que han convertido en fácil lo difícil. ",
        author: "Berta",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "https://bertaog.github.io/Proyecto-Generador-de-Carnets-TeachT3ch/generador-de-carnets.html",
      },
      {
        testimonial:
          "Mi cabeza ha hecho clic y ahora quiero seguir formándome. Antes de empezar dudaba que con 37 años fuese capaz de seguir el ritmo de aprendizaje, ahora mismo estoy súper orgullosa de lo que he conseguido y me veo capaz de cualquier cosa.  ",
        author: "Berta",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "https://bertaog.github.io/Proyecto-Generador-de-Carnets-TeachT3ch/generador-de-carnets.html",
      },
      {
        testimonial:
          " Voy a seguir trabajando duro y ojalá en unos años pueda volver, esta vez ayudando yo, como lo hicieron conmigo. El verano del 2021 lo recordaré siempre, como en el que TeachTech me dio fuerzas para ir a por todo. ",
        author: "Berta",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "https://bertaog.github.io/Proyecto-Generador-de-Carnets-TeachT3ch/generador-de-carnets.html",
      },
      {
        testimonial:
          " He aprendido mucho, l@s profesor@s y mi mentora siempre me han atendido y ayudado, ha sido una experiencia muy buena.",
        author: "Elsa",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "",
      },
      {
        testimonial:
          "He aprendido mucho, l@s profesor@s y mi mentora siempre me han atendido y ayudado, ha sido una experiencia muy buena.",
        author: "Elsa",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "",
      },
      {
        testimonial:
          "Lo recomendaría con los ojos cerrados. Para mí fue un sueño hecho realidad. La organización del curso, las clases, el material de apoyo, los profesores y mentores son maravillosos.",
        author: "Loana",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "https://codesandbox.io/s/proyecto-m5b9j",
      },
      {
        testimonial:
          "Sin dudas los mentores son de gran ayuda y están para responder todas nuestras dudas. Una atención personalizada que ni siquiera he visto en cursos pagos. Gracias chicos, realmente me encantó esta experiencia.",
        author: "Loana",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "https://codesandbox.io/s/proyecto-m5b9j",
      },
      {
        testimonial:
          "Es un gran curso, los profesores y los mentores son lo MÁS. He aprendido muchísimo más de lo que me imaginaba, y es que, con gente como ellos con tantas ganas de transmitir lo que hacen con esa ilusión es todo mucho más fácil. Sólo tengo palabras de agradecimiento para este proyecto, este gran equipo y sobretodo para mi mentor. ",
        author: "Maru",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "",
      },
      {
        testimonial:
          "Sólo tengo palabras de agradecimiento para este proyecto, este gran equipo y sobretodo para mi mentor. ",
        author: "Maru",
        image: "default",
        role: "student",
        tag: "Alumna - Edición 2021",
        edition: "2021",
        work: "",
      },
    ],
    collaborators: [
      {
        testimonial:
          "Nunca ha sido tan fácil ayudar a personas que están empezando en este maravilloso mundo de escribir código",
        author: "David",
        image: "david-torres.jpg",
        role: "teacher",
        tag: "Mentor y Profe",
        edition: "2021",
      },
      {
        testimonial:
          "Enseñamos y dedicamos tiempo, pero lo que recibimos a cambio es incluso más aprendizaje y satifacción de ayudar y ver crecer a otras personas.",
        author: "Nadine Thêry",
        image: "nadine-thery.jpg",
        role: "teacher",
        tag: "Mentora y Profe",
        edition: "2021",
      },
      {
        testimonial:
          "Acompañar a una persona en sus primeros pasos en el mundo de la programación es muy reconfortante y una hermosa manera de hacer crecer la comunidad hispana de programadores.",
        author: "Diego Domínguez",
        image: "diego-dom.jpg",
        role: "teacher",
        tag: "Mentor y Profe",
        edition: "2021",
      },
    ],
  },
};

export const courseInfo = {
  modA: {
    icon: "🔥",
    title: "Full Power",
    imgFileName: "full-power.png",
    badge: "Plazas limitadas",
    url: "full-power",
    description: (
      <p>
        Ideal si puedes dedicarle al menos{" "}
        <span className="bold"> 10 horas</span> a la semana
      </p>
    ),
    summary: [
      { icon: "smile", text: "Una mentora o mentor asignado" },
      { icon: "chat", text: "Grupo privado con otros alumnos" },
      { icon: "code", text: "Clases en directo" },
      { icon: "people", text: "Mentorización del proyecto" },
      { icon: "medal", text: "Diploma tras presentar el proyecto" },
      { icon: "check", text: "Gratuito" },
    ],
    requirements: [
      { icon: "check", text: "Implicación con las clases y ejercicios" },
      {
        icon: "check",
        text: "Edad mínima 15 años (menores require autorización)",
      },
      { icon: "check", text: "Ningún conocimiento de programación previo" },
    ],
    cta: {
      open: { icon: "check", text: "Quiero apuntarme", url: "#" },
      closed: {
        icon: "info",
        text: (
          <p>
            <span className="bold"> Inscripciones cerradas.</span> Pero puedes
            apuntante a la <NavLink href="/#cta-section">newsletter</NavLink>{" "}
            para estar al tanto de las nuevas ediciones y eventos
          </p>
        ),
      },
    },
  },
  modB: {
    title: "A tu aire",
    badge: "Sin límite de plazas",
    icon: "🌊",
    description: "Por tu cuenta y a tu ritmo",
    url: "a-tu-aire",
    imgFileName: "a-tu-aire.png",
    summary: [
      { icon: "cup", text: "Gestionas tu ritmo" },
      { icon: "book", text: "Dispones de las clases, ejercicios y soluciones" },
      {
        icon: "smile",
        text: "Dispones de un grupo donde consultar dudas y apoyarte",
      },
      { icon: "cross", text: "No entregas ejercicios" },
      { icon: "cross", text: "No entregas proyecto" },
      { icon: "check", text: "Gratuito" },
    ],
    requirements: [
      { icon: "check", text: "Solo requieres de constancia" },
      { icon: "check", text: "Ningún conocimiento de programación previo" },
    ],
    cta: {
      open: { icon: "check", text: "Quiero apuntarme", url: "#" },
      closed: {
        icon: "info",
        text: (
          <p>
            <span className="bold"> Inscripciones cerradas.</span> Pero puedes
            apuntante a la <a href="#newsletter">newsletter</a> para estar al
            tanto de las nuevas ediciones y eventos
          </p>
        ),
      },
    },
  },
};

export const figures = [
  // Modify first element to update figures. If you want to keep track of the figures, unused data can be pushed to the end of the array. The home will only display the first two elements.
  {
    event: "Última Edición (2021)",
    figures: [
      { number: 140, description: "Alumnxs FullPower y ATuAire" },
      { number: "88%", description: "Alumnxs continúan formándose" },
      { number: 40, description: "Profes y mentorxs" },
    ],
  },
  {
    event: "Primera edición (2020)",
    figures: [
      { number: 19, description: "Alumnxs" },
      { number: "50%", description: "Alumnxs continuaron formándose" },
      { number: 11, description: "Profes y mentorxs" },
    ],
  },
];

export const faqSection = {
  title: "¿Tienes alguna duda?",
  description:
    "Consulta nuestras preguntas frecuentes o escríbenos, estaremos encantados de leerte :).",
  qa: [
    {
      q: "¿Cuáles son los requisitos técnicos?",
      a: "Los ejercicios de programación que haremos no requieren disponer de un gran despliegue tecnológico. Pero es fundamental que puedas disponer de un ordenador y conexión a internet que te permitan asistir y participar en las clases sin interrupciones.",
      links: [
        {
          label: "Velocidad que necesitas para una videollamada",
          url: "https://www.redeszone.net/2018/10/20/que-velocidad-internet-necesaria/",
        },
      ],
    },
    {
      q: "¿Tengo que repasar o saber algo de antemano?",
      a: "NO. De hecho, este curso empieza verdaderamente desde cero. Por lo que si ya has estudiado programación (Bootcamp, FP, Universidad, cursos online...) y sabes aplicar los principios básicos como bucles (for, while, do-while), condicionales, tipos de variables o recursividad quizás este curso no sea el adecuado para ti. Puedes consultar el temario en el enlace a continuación para ver si el contenido se ajusta a lo que ya sabes. ",
      links: [{ label: "Temario del curso", url: "/curso" }],
    },
    {
      q: "¿Qué significa que hace falta implicación en el curso?",
      a: "Si quieres apuntarte a la modalidad 'Full Power 🔥', tienes que asistir a las clases, interactuar con los demás, realizar los ejercicios, entregarlos y preparar el proyecto. Si tus ocupaciones actuales no te permiten atender esto, quizás te interese apuntarte mejor a la modalidad 'A tu aire 🌊'. Pedimos implicación porque durante las 10 semanas que dura el curso tanto los profes como los mentores estamos implicados al 100% con el proyecto y con el aprendizaje y pedimos lo mismo a cambio para que la iniciativa sea un éxito.",
      links: [],
    },
    {
      q: "¿Cuánto cuesta este curso?",
      a: "Ambas modalidades son completamente gratuitas. Sólo pedimos compromiso por tu parte y dedicación durante las 8 semanas que dura el curso, igual que nosotros lo hacemos para ti.",
      links: [],
    },
    {
      q: "¿El curso es solo para España?",
      a: "Por supuesto que no. Puedes participar vengas de dónde vengas. Debes saber que para la modalidad 'Full Power 🔥' existe un proceso de selección y uno de los requisitos mínimos es el de poder atender las clases (miércoles de 18:00 a 20:00, CEST (GMT+2)). 'A tu aire 🌊' no tiene ningún límite de plazas.",
      links: [],
    },
    {
      q: "¿Cuándo se realiza el curso?",
      a: "Las fechas concretas pueden variar dependiendo de la edición. Sin embargo te podemos contar algunas cosas que son fijas: tiene una duración de 10 semanas, se imparte en castellano, es 100% online y las clases son los miércoles de 18:00 a 20:00 (CEST (GMT+2), horario de España peninsular)",
      links: [
        {
          label: "Si quieres saber más sobre el contenido y modalidades",
          url: "https://www.teacht3ch.com/curso",
        },
      ],
    },
    {
      q: "¿Tenéis un código de conducta?",
      a: "Si, lo tenemos. Es muy importante y debes leerlo tanto si eres voluntario, alumno o formas parte de la iniciativa de cualquier otra manera",
      links: [
        {
          label: "Accede aquí",
          url: "https://www.teacht3ch.com/code-conduct",
        },
      ],
    },
  ],
};

export const cursoSection = {
  header: {
    title: "Curso de programación TeachTech",
    description:
      "Conoce nuesto curso de verano para iniciarte en la programación",
  },
  videoId: "Ai0yO3zh06s",
  objective: {
    title: "¿Cuál es el objetivo del curso?",
    description:
      "Durante los meses de junio y julio, el objetivo es que le pierdas el miedo y que veas que empezar es más fácil de lo que crees. Nos adentraremos en la programación poquito a poco, a través del desarrollo de una pequeña aplicación web.",
  },
  syllabus: {
    title: "Temario",
    description:
      "Éstos son los contenidos que recorreremos juntos a lo largo de estas 9 semanas.",
    items: [
      {
        tag: "Semana 1",
        imageURL: "html5.png",
        title: "HTML",
        description: (
          <p>
            Contruyamos el esqueleto de nuestro proyecto. Aprenderemos{" "}
            <span className="bold">qué es el HTML</span>, las principales
            etiquetas que se usan habitualmente y cómo ver este documento en el
            ordenador.
          </p>
        ),
      },
      {
        tag: "Semana 2",
        imageURL: "css.png",
        title: "CSS",
        description: (
          <p>
            Vamos a darle formato a nuestro esqueleto con CSS. Separaremos la
            capa de contenido (HTML) de la capa de presentación (CSS) y
            repasaremos las principales propiedades que podemos encontrarnos.
          </p>
        ),
      },
      {
        tag: "Semana 3",
        imageURL: "dom.png",
        title: "El DOM (1)",
        description: (
          <p>
            ¡Por fin! Vamos a meterle mano a JavaScript. Empezaremos por conocer
            el DOM, y cómo crear objetos y dotarlos de comportamiento. Y para
            ello conoceremos qué son las variables y los eventos.
          </p>
        ),
      },
      {
        tag: "Semana 4",
        imageURL: "dom.png",
        title: "El DOM (2)",
        description: (
          <p>
            Ahora que ya sabemos crearlos, vamos a modificarlos. Vamos a
            aprender a identificar nuestros elementos a través de JS para poder
            modificarlos, así como dotarlos de comportamientos adicionales a
            través de funciones.
          </p>
        ),
      },
      {
        tag: "Semana 5",
        imageURL: "js.png",
        title: "Javascript - Bucles y arrays",
        description: (
          <p>
            Vamos conocer las estructuras básicas de la programación y que están
            presentes en casi todos los lenguajes (no sólo en Javascript).
            Trabajaremos el concepto de arrays (arreglos) para poder manejar
            variables con muchos datos y cómo poder acceder a ellos y usarlos.
            Para ello también tendremos que conocer los bucles una estructura
            fundamental para trabajar con arrays, entre otras cosas.
          </p>
        ),
      },
      {
        tag: "Semana 6",
        imageURL: "js.png",
        title: "Javascript - Objetos y funciones",
        description: (
          <p>
            Ampliemos nuestra caja de herramientas aprendiendo a eliminar
            elementos de los arrays. Introduciremos el concepto de objeto dentro
            de la programación (también conocidos como diccionarios).
          </p>
        ),
      },
      {
        tag: "Semana 7",
        imageURL: "data.png",
        title: "Persistencia de datos en Local Storage",
        description: (
          <p>
            En algún punto quizás necesites guardar información y luego poder
            recuperarla. Hay muchas formas de conseguir esto, como con bases de
            datos. Pero vamos a conocer una forma muy sencilla para que puedas
            ir empezando. Aprenderemos cómo persistir (guardar) datos en nuestro
            disco local a través de nuestra app y cómo recuperarlos.
          </p>
        ),
      },
      {
        tag: "Semanas 8 y 9 ",
        imageURL: "project.png",
        title: "Proyecto personal",
        description: (
          <p>
            Durante estas semanas, tendrás que ponerte manos a la obra y poner
            en práctica todo lo que has aprendido estas semanas. Porque a
            programar se aprende programando, así que con este proyecto (el que
            tú elijas) y mano a mano con tu mentor o mentora, te enfrentarás a
            problemas reales de la programación. ¡Al acabar el curso
            compartiremos entre todos nuestro proyecto!
          </p>
        ),
      },
    ],
  },
};

export const blogSection = {
  explore: "Explora tags populares",
  popularTags: ["Clases", "DevOps", "Eventos", "Ver todo"],
  newsletter: {
    title: "¡Suscríbete a nuestra newsletter!",
    img: "home-sign-hand.png",
    description:
      "No te pierdas ninguna novedad, eventos, nuevos recursos y mucho más...",
    cta: "¡Me suscribo!",
  },
};
