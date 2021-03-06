import NavLink from "next/link";

export const home = {
  header: {
    preTitle: {
      open: `隆Edici贸n 2022 en marcha 馃殌!`,
      closed: "Inscripciones 2022 ya cerradas, 隆a por 2023!",
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
      open: `Descubre las bases de la programaci贸n con este curso gratuito de verano de la mano del equipo de profes y mentores de Teacht3ch.`,
      closed: `Descubre las bases de la programaci贸n con este curso gratuito de verano de la mano del equipo de profes y mentores de Teacht3ch.`,
    },
    cta: { open: `隆Quiero apuntarme!`, close: `隆Quiero informarme!` },
  },
  aboutUsSection: {
    title: "We are TeachTech!",
    description: (
      <p>
        Somos un grupo de{" "}
        <span className="bold">apasionados de la programaci贸n</span> que nos
        hemos unido para ayudar a gente como t煤 a{" "}
        <span className="bold">perderle el miedo a programar</span>. Queremos
        transmitirte la misma pasi贸n que sentimos nosotros por nuestro trabajo y
        que veas que es posible conseguir eso que te ronda hace tiempo.
      </p>
    ),
    cta: "Conoce a los profes y mentores",
    link: "O descubre c贸mo surgi贸 Teach[t3ch]",
  },
  courseSection: {
    title: "Mismo curso, dos modalidades",
    description:
      "En cada edici贸n buscamos tener un enfoque pr谩ctico que te ayude a aprender con las manos en la masa. Podr谩s completar el curso en dos modalidades, Full Power o A tu aire.",
  },
  achieveSection: {
    title: "驴Y c贸mo lo conseguiremos?",
    description:
      "La clave est谩 en dedicarle tiempo al curso, al igual que los profes y mentores lo dedican en prepararlo para ti.",
    items: [
      {
        img: "calendar.png",
        title: "Clases semanales",
        description:
          "Clases online una vez por semana donde prodr谩s interactuar con otros alumnos y profesores",
      },
      {
        img: "carpeta.png",
        title: "Ejercicios",
        description:
          "Tendr谩s ejercicios para aplica los nuevos conocimientos de diversa dificultad",
      },
      {
        img: "manos.png",
        title: "Una mentorizaci贸n",
        description:
          "Uno de nuestros miembros de Teach[T3ch] te acompa帽ar谩 personalmente durante todo el proceso",
      },
      {
        img: "mano-lapiz.png",
        title: "Proyecto final",
        description:
          "Har谩s un proyecto que t煤 elijas para poner en pr谩ctica todo lo que has aprendido",
      },
    ],
  },
  ctaSection: {
    open: {
      title: "隆Este a帽o s铆 que s铆!",
      description:
        "驴Te interesa lo que has visto? Pues vamos a por ello. El equipo de profes y mentores de TeachT3ch estar谩 encantado de tenerte en nuestras filas.",
      img: "home-victory.png",
      cta: "隆Quiero apuntarme!",
    },
    closed: {
      title: "脷nete a nuestra newsletter",
      description:
        "驴Te interesa lo que has visto? Si quieres estar al d铆a sobre la apertura de nuevas plazas, trucos sobre programaci贸n y mucho m谩s, 煤nete a nuestra newsletter.",
      img: "home-sign-hand.png",
      cta: "隆Quiero apuntarme!",
    },
  },
  figuresSection: {
    title: "Ya estamos logrando grandes cosas",
  },
  sponsors: {
    title: "隆Gracias a nuestras empresas colaboradoras!",
    description:
      "Adem谩s de nuestros voluntarios, tambi茅n estas empresas ayudan a que este proyecto siga adelante, bien con financiaci贸n, con herramientas o aportando tiempo laboral para que nuestros voluntarios puedan participar aqu铆.",
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
    "TeachT3ch es un curso de verano, pero tambi茅n una experiencia de voluntariado para profes y mentores. Esto es lo que dicen de su experiencia",
  content: {
    students: [
      {
        testimonial:
          "Me ha ayudado a sentirme capaz de seguir ese camino. Al terminar me sent铆a hiper-motivada para seguir programando y estudiando.",
        author: "Bea",
        image: "default",
        role: "student",
        tag: "Alumna - Edici贸n 2020",
      },
      {
        testimonial:
          "TeachTech es el paso m谩s importante para mi cambio de carrera. El temario del curso esta muy bien pensado y la estructuracion ha sido muy bien ideada, yendo m谩s all谩 de otros cursos. ",
        author: "Alianna",
        image: "default",
        role: "student",
        tag: "Alumna - Edici贸n 2021",
        edition: "2021",
        work: "https://ct1mp.csb.app/index.html",
      },
      {
        testimonial:
          "TeachTech me hizo sentir que siempre era un buen momento para aprender programaci贸n y que siempre estaban ah铆 cerca como familia, de esas que te impulsan a ser mejor profesional y personalmente. ",
        author: "Alianna",
        image: "default",
        role: "student",
        tag: "Alumna - Edici贸n 2021",
        edition: "2021",
        work: "https://ct1mp.csb.app/index.html",
      },
      {
        testimonial:
          "El equipo de  organizadores, profesores y mentores es el equilibrio perfecto entre conocimientos, experiencia en el campo y calidad humana. Siempre llevar茅 conmigo lo que me ense帽aron. ",
        author: "Alianna",
        image: "default",
        role: "student",
        tag: "Alumna - Edici贸n 2021",
        edition: "2021",
        work: "https://ct1mp.csb.app/index.html",
      },

      {
        testimonial:
          "Ha supuesto la oportunidad de conocer a personas que disfrutan con la programaci贸n, y que quieren que tod@s disfrutemos tambi茅n. Es un gran proyecto del que formar parte.",
        author: "M贸nica",
        image: "default",
        role: "student",
        tag: "Alumna - Edici贸n 2021",
        edition: "2021",
        work: "https://lu6sx.csb.app/",
      },
      {
        testimonial:
          "Si empiezas de 0 es muy interesante, puedes aprender m谩s o menos depende del tiempo que le dedique uno mismo, pero aprendes a nivel personal a no rendirte. A m铆 me sirvi贸 mucho, y sobre todo... a conocer gente altruista que brilla por su ausencia en esta sociedad 隆Me alegro mucho de poder haber recibido la oportunidad de haberos conocido a todos!",
        author: "Diego",
        image: "default",
        role: "student",
        tag: "Alumno - Edici贸n 2021",
        edition: "2021",
        work: "https://codesandbox.io/s/proyecto-5cgrw",
      },
      {
        testimonial:
          "Para m铆 ha supuesto abrirme un mundo completamente nuevo y distinto que me parece fascinante. En un verano he conocido a profesionales geniales que han convertido en f谩cil lo dif铆cil. ",
        author: "Berta",
        image: "default",
        role: "student",
        tag: "Alumna - Edici贸n 2021",
        edition: "2021",
        work: "https://bertaog.github.io/Proyecto-Generador-de-Carnets-TeachT3ch/generador-de-carnets.html",
      },
      {
        testimonial:
          "Mi cabeza ha hecho clic y ahora quiero seguir form谩ndome. Antes de empezar dudaba que con 37 a帽os fuese capaz de seguir el ritmo de aprendizaje, ahora mismo estoy s煤per orgullosa de lo que he conseguido y me veo capaz de cualquier cosa.  ",
        author: "Berta",
        image: "default",
        role: "student",
        tag: "Alumna - Edici贸n 2021",
        edition: "2021",
        work: "https://bertaog.github.io/Proyecto-Generador-de-Carnets-TeachT3ch/generador-de-carnets.html",
      },
      {
        testimonial:
          " Voy a seguir trabajando duro y ojal谩 en unos a帽os pueda volver, esta vez ayudando yo, como lo hicieron conmigo. El verano del 2021 lo recordar茅 siempre, como en el que TeachTech me dio fuerzas para ir a por todo. ",
        author: "Berta",
        image: "default",
        role: "student",
        tag: "Alumna - Edici贸n 2021",
        edition: "2021",
        work: "https://bertaog.github.io/Proyecto-Generador-de-Carnets-TeachT3ch/generador-de-carnets.html",
      },
      {
        testimonial:
          " He aprendido mucho, l@s profesor@s y mi mentora siempre me han atendido y ayudado, ha sido una experiencia muy buena.",
        author: "Elsa",
        image: "default",
        role: "student",
        tag: "Alumna - Edici贸n 2021",
        edition: "2021",
        work: "",
      },
      {
        testimonial:
          "He aprendido mucho, l@s profesor@s y mi mentora siempre me han atendido y ayudado, ha sido una experiencia muy buena.",
        author: "Elsa",
        image: "default",
        role: "student",
        tag: "Alumna - Edici贸n 2021",
        edition: "2021",
        work: "",
      },
      {
        testimonial:
          "Lo recomendar铆a con los ojos cerrados. Para m铆 fue un sue帽o hecho realidad. La organizaci贸n del curso, las clases, el material de apoyo, los profesores y mentores son maravillosos.",
        author: "Loana",
        image: "default",
        role: "student",
        tag: "Alumna - Edici贸n 2021",
        edition: "2021",
        work: "https://codesandbox.io/s/proyecto-m5b9j",
      },
      {
        testimonial:
          "Sin dudas los mentores son de gran ayuda y est谩n para responder todas nuestras dudas. Una atenci贸n personalizada que ni siquiera he visto en cursos pagos. Gracias chicos, realmente me encant贸 esta experiencia.",
        author: "Loana",
        image: "default",
        role: "student",
        tag: "Alumna - Edici贸n 2021",
        edition: "2021",
        work: "https://codesandbox.io/s/proyecto-m5b9j",
      },
      {
        testimonial:
          "Es un gran curso, los profesores y los mentores son lo M脕S. He aprendido much铆simo m谩s de lo que me imaginaba, y es que, con gente como ellos con tantas ganas de transmitir lo que hacen con esa ilusi贸n es todo mucho m谩s f谩cil. S贸lo tengo palabras de agradecimiento para este proyecto, este gran equipo y sobretodo para mi mentor. ",
        author: "Maru",
        image: "default",
        role: "student",
        tag: "Alumna - Edici贸n 2021",
        edition: "2021",
        work: "",
      },
      {
        testimonial:
          "S贸lo tengo palabras de agradecimiento para este proyecto, este gran equipo y sobretodo para mi mentor. ",
        author: "Maru",
        image: "default",
        role: "student",
        tag: "Alumna - Edici贸n 2021",
        edition: "2021",
        work: "",
      },
    ],
    collaborators: [
      {
        testimonial:
          "Nunca ha sido tan f谩cil ayudar a personas que est谩n empezando en este maravilloso mundo de escribir c贸digo",
        author: "David",
        image: "david-torres.jpg",
        role: "teacher",
        tag: "Mentor y Profe",
        edition: "2021",
      },
      {
        testimonial:
          "Ense帽amos y dedicamos tiempo, pero lo que recibimos a cambio es incluso m谩s aprendizaje y satifacci贸n de ayudar y ver crecer a otras personas.",
        author: "Nadine Th锚ry",
        image: "nadine-thery.jpg",
        role: "teacher",
        tag: "Mentora y Profe",
        edition: "2021",
      },
      {
        testimonial:
          "Acompa帽ar a una persona en sus primeros pasos en el mundo de la programaci贸n es muy reconfortante y una hermosa manera de hacer crecer la comunidad hispana de programadores.",
        author: "Diego Dom铆nguez",
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
    icon: "馃敟",
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
      { icon: "people", text: "Mentorizaci贸n del proyecto" },
      { icon: "medal", text: "Diploma tras presentar el proyecto" },
      { icon: "check", text: "Gratuito" },
    ],
    requirements: [
      { icon: "check", text: "Implicaci贸n con las clases y ejercicios" },
      {
        icon: "check",
        text: "Edad m铆nima 15 a帽os (menores require autorizaci贸n)",
      },
      { icon: "check", text: "Ning煤n conocimiento de programaci贸n previo" },
    ],
    cta: {
      open: { icon: "check", text: "Quiero apuntarme", url: "#" },
      closed: {
        icon: "info",
        text: (
          <p>
            <span className="bold"> Inscripciones para 2022 cerradas.</span>{" "}
            Pero puedes apuntante a la{" "}
            <NavLink href="/#cta-section">newsletter</NavLink> para estar al
            tanto de las pr贸ximas ediciones y eventos.
          </p>
        ),
      },
    },
  },
  modB: {
    title: "A tu aire",
    badge: "Sin l铆mite de plazas",
    icon: "馃寠",
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
      { icon: "check", text: "Ning煤n conocimiento de programaci贸n previo" },
    ],
    cta: {
      open: { icon: "check", text: "Quiero apuntarme", url: "#" },
      closed: {
        icon: "info",
        text: (
          <p>
            <span className="bold"> Inscripciones para 2022 cerradas.</span>{" "}
            Pero puedes apuntante a la{" "}
            <NavLink href="/#cta-section">newsletter</NavLink> para estar al
            tanto de las pr贸ximas ediciones y eventos.
          </p>
        ),
      },
    },
  },
};

export const figures = [
  // Modify first element to update figures. If you want to keep track of the figures, unused data can be pushed to the end of the array. The home will only display the first two elements.
  {
    event: "脷ltima Edici贸n (2021)",
    figures: [
      { number: 140, description: "Alumnxs FullPower y ATuAire" },
      { number: "88%", description: "Alumnxs contin煤an form谩ndose" },
      { number: 40, description: "Profes y mentorxs" },
    ],
  },
  {
    event: "Primera edici贸n (2020)",
    figures: [
      { number: 19, description: "Alumnxs" },
      { number: "50%", description: "Alumnxs continuaron form谩ndose" },
      { number: 11, description: "Profes y mentorxs" },
    ],
  },
];

export const faqSection = {
  title: "驴Tienes alguna duda?",
  description:
    "Consulta nuestras preguntas frecuentes o escr铆benos, estaremos encantados de leerte :).",
  qa: [
    {
      q: "驴Cu谩les son los requisitos t茅cnicos?",
      a: "Los ejercicios de programaci贸n que haremos no requieren disponer de un gran despliegue tecnol贸gico. Pero es fundamental que puedas disponer de un ordenador y conexi贸n a internet que te permitan asistir y participar en las clases sin interrupciones.",
      links: [
        {
          label: "Velocidad que necesitas para una videollamada",
          url: "https://www.redeszone.net/2018/10/20/que-velocidad-internet-necesaria/",
        },
      ],
    },
    {
      q: "驴Tengo que repasar o saber algo de antemano?",
      a: "NO. De hecho, este curso empieza verdaderamente desde cero. Por lo que si ya has estudiado programaci贸n (Bootcamp, FP, Universidad, cursos online...) y sabes aplicar los principios b谩sicos como bucles (for, while, do-while), condicionales, tipos de variables o recursividad quiz谩s este curso no sea el adecuado para ti. Puedes consultar el temario en el enlace a continuaci贸n para ver si el contenido se ajusta a lo que ya sabes. ",
      links: [{ label: "Temario del curso", url: "/curso" }],
    },
    {
      q: "驴Qu茅 significa que hace falta implicaci贸n en el curso?",
      a: "Si quieres apuntarte a la modalidad 'Full Power 馃敟', tienes que asistir a las clases, interactuar con los dem谩s, realizar los ejercicios, entregarlos y preparar el proyecto. Si tus ocupaciones actuales no te permiten atender esto, quiz谩s te interese apuntarte mejor a la modalidad 'A tu aire 馃寠'. Pedimos implicaci贸n porque durante las 10 semanas que dura el curso tanto los profes como los mentores estamos implicados al 100% con el proyecto y con el aprendizaje y pedimos lo mismo a cambio para que la iniciativa sea un 茅xito.",
      links: [],
    },
    {
      q: "驴Cu谩nto cuesta este curso?",
      a: "Ambas modalidades son completamente gratuitas. S贸lo pedimos compromiso por tu parte y dedicaci贸n durante las 8 semanas que dura el curso, igual que nosotros lo hacemos para ti.",
      links: [],
    },
    {
      q: "驴El curso es solo para Espa帽a?",
      a: "Por supuesto que no. Puedes participar vengas de d贸nde vengas. Debes saber que para la modalidad 'Full Power 馃敟' existe un proceso de selecci贸n y uno de los requisitos m铆nimos es el de poder atender las clases (mi茅rcoles de 18:00 a 20:00, CEST (GMT+2)). 'A tu aire 馃寠' no tiene ning煤n l铆mite de plazas.",
      links: [],
    },
    {
      q: "驴Cu谩ndo se realiza el curso?",
      a: "Las fechas concretas pueden variar dependiendo de la edici贸n. Sin embargo te podemos contar algunas cosas que son fijas: tiene una duraci贸n de 10 semanas, se imparte en castellano, es 100% online y las clases son los mi茅rcoles de 18:00 a 20:00 (CEST (GMT+2), horario de Espa帽a peninsular)",
      links: [
        {
          label: "Si quieres saber m谩s sobre el contenido y modalidades",
          url: "https://www.teacht3ch.com/curso",
        },
      ],
    },
    {
      q: "驴Ten茅is un c贸digo de conducta?",
      a: "Si, lo tenemos. Es muy importante y debes leerlo tanto si eres voluntario, alumno o formas parte de la iniciativa de cualquier otra manera",
      links: [
        {
          label: "Accede aqu铆",
          url: "https://www.teacht3ch.com/code-conduct",
        },
      ],
    },
  ],
};

export const cursoSection = {
  header: {
    title: "Curso de programaci贸n TeachTech",
    description:
      "Conoce nuesto curso de verano para iniciarte en la programaci贸n",
  },
  videoId: "Ai0yO3zh06s",
  objective: {
    title: "驴Cu谩l es el objetivo del curso?",
    description:
      "Durante los meses de junio y julio, el objetivo es que le pierdas el miedo y que veas que empezar es m谩s f谩cil de lo que crees. Nos adentraremos en la programaci贸n poquito a poco, a trav茅s del desarrollo de una peque帽a aplicaci贸n web.",
  },
  syllabus: {
    title: "Temario",
    description:
      "脡stos son los contenidos que recorreremos juntos a lo largo de estas 9 semanas.",
    items: [
      {
        tag: "Semana 1",
        imageURL: "html5.png",
        title: "HTML",
        description: (
          <p>
            Contruyamos el esqueleto de nuestro proyecto. Aprenderemos{" "}
            <span className="bold">qu茅 es el HTML</span>, las principales
            etiquetas que se usan habitualmente y c贸mo ver este documento en el
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
            capa de contenido (HTML) de la capa de presentaci贸n (CSS) y
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
            隆Por fin! Vamos a meterle mano a JavaScript. Empezaremos por conocer
            el DOM, y c贸mo crear objetos y dotarlos de comportamiento. Y para
            ello conoceremos qu茅 son las variables y los eventos.
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
            aprender a identificar nuestros elementos a trav茅s de JS para poder
            modificarlos, as铆 como dotarlos de comportamientos adicionales a
            trav茅s de funciones.
          </p>
        ),
      },
      {
        tag: "Semana 5",
        imageURL: "js.png",
        title: "Javascript - Bucles y arrays",
        description: (
          <p>
            Vamos conocer las estructuras b谩sicas de la programaci贸n y que est谩n
            presentes en casi todos los lenguajes (no s贸lo en Javascript).
            Trabajaremos el concepto de arrays (arreglos) para poder manejar
            variables con muchos datos y c贸mo poder acceder a ellos y usarlos.
            Para ello tambi茅n tendremos que conocer los bucles una estructura
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
            de la programaci贸n (tambi茅n conocidos como diccionarios).
          </p>
        ),
      },
      {
        tag: "Semana 7",
        imageURL: "data.png",
        title: "Persistencia de datos en Local Storage",
        description: (
          <p>
            En alg煤n punto quiz谩s necesites guardar informaci贸n y luego poder
            recuperarla. Hay muchas formas de conseguir esto, como con bases de
            datos. Pero vamos a conocer una forma muy sencilla para que puedas
            ir empezando. Aprenderemos c贸mo persistir (guardar) datos en nuestro
            disco local a trav茅s de nuestra app y c贸mo recuperarlos.
          </p>
        ),
      },
      {
        tag: "Semanas 8 y 9 ",
        imageURL: "project.png",
        title: "Proyecto personal",
        description: (
          <p>
            Durante estas semanas, tendr谩s que ponerte manos a la obra y poner
            en pr谩ctica todo lo que has aprendido estas semanas. Porque a
            programar se aprende programando, as铆 que con este proyecto (el que
            t煤 elijas) y mano a mano con tu mentor o mentora, te enfrentar谩s a
            problemas reales de la programaci贸n. 隆Al acabar el curso
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
    title: "隆Suscr铆bete a nuestra newsletter!",
    img: "home-sign-hand.png",
    description:
      "No te pierdas ninguna novedad, eventos, nuevos recursos y mucho m谩s...",
    cta: "隆Me suscribo!",
  },
};
