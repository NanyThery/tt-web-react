const copies = {
  home: {
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
        open: `Descubre las bases de la programación con el curso de verano de la mano del equipo de profes y mentores de Teacht3ch.`,
        closed: `Descubre las bases de la programación con el curso de verano de la mano del equipo de profes y mentores de Teacht3ch.`,
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
          transmitirte la misma pasión que sentimos nosotros por nuestro trabajo
          y que veas que es posible conseguir eso que te ronda hace tiempo.
        </p>
      ),
      cta: "Conoce a los profes y mentores",
      link: "O descubre cómo surgió Teach[t3ch]",
    },
  },
}

export default copies
