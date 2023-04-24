function voluntarios(data) {
  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <title>Hemos recibido tu formulario</title>
  </head>
  <body
    style="
      color: #2a324b;
      font-family: Ubuntu, sans-serif;
      line-height: 2;
      max-width: 650px;
    "
  >
    <style></style>
    <main>
      <h1>¡Gracias, ${data.nombre}!</h1>
      <h2>Hemos recibido tu formulario para apuntarte como voluntari@</h2>
      <p>
        Es genial que quieras formar parte de esta iniciativa. Ya sea
        mentorizando, dando clases, charlas o incluso echando una mano en redes
        sociales u organización. Hay muchísimas cosas que hacemos y más que
        podemos hacer.
      </p>
      <p>En breve nos pondremos en contacto contigo,</p>

      <p>Un abrazo,</p>
      <strong
        >El equipo
        <span class="dark-purple" style="color: #150639"
          >Teach<span class="accent" style="color: #ff7c04">[</span>T3ch<span
            class="accent"
            style="color: #ff7c04"
            >]</span
          ></span
        ></strong
      >
    </main>
  </body>
</html>`;
}

function backupEmail(data) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Backup Email</title>
      </head>
      <body>
        <h1>Hola Equipo TT:</h1>
        <h2>La inscripción en la hoja de Google Sheets ha fallado.</h2>
        <h3>
          Así que recibimos este correo con la info de backup para introducirla
          manualmente:
        </h3>        
        <ul>
            <li> Formulario: ${data.message.modalidad} </li>
            <li> Nombre: ${data.message.nombre} </li>
            <li> Email: ${data.message.email} </li>
            <li> Datos del form: ${JSON.stringify(data.message)}</li>
        </ul>
        <br />
        <br />
        <p>Con cariño,</p>
        <strong>El 🤖 de la web de TeachT3ch</strong>
      </body>
    </html>
    `;
}

function fullPower(data) {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
      <title>Hemos recibido tu formulario</title>
    </head>
    <body
      style="
        color: #2a324b;
        font-family: Ubuntu, sans-serif;
        line-height: 2;
        max-width: 650px;
      "
    >
      <style></style>
      <main>
        <h1>¡Gracias, ${data.nombre}!</h1>
        <h2>Hemos recibido tu formulario para Full-Power 🔥</h2>
        <h3>¿Y ahora qué?</h3>
        <ul>
          <li>
            Vamos a esperar a que finalice el plazo de inscripciones (<strong
              >14/05/2023</strong
            >
            inclusive)
          </li>
          <li>
            Nuestro equipo de admisiones revisará todas las solicitudes (¿has
            incluido tu vídeo? ¡es muy importante!)
          </li>
          <li>
            <strong class="accent" style="color: #ff7c04"
              >¡Atención a tu correo!</strong
            >
            En la semana del <strong>22/05/2023</strong> recibirás un correo
            indicándote si has sido seleccionado/a. Y debes respondernos antes del
            <strong>26/05/2023</strong> para confirmar tu plaza.
          </li>
        </ul>
  
        <p>¡A por todas, este es el año del cambio!</p>
        <p>Un abrazo,</p>
        <strong
          >El equipo
          <span class="dark-purple" style="color: #150639"
            >Teach<span class="accent" style="color: #ff7c04">[</span>T3ch<span
              class="accent"
              style="color: #ff7c04"
              >]</span
            ></span
          ></strong
        >
      </main>
    </body>
  </html>
  `;
}

function aTuAire(data) {
  return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
    <title>Hemos recibido tu formulario</title>
  </head>
  <body
    style="
      color: #2a324b;
      font-family: Ubuntu, sans-serif;
      line-height: 2;
      max-width: 650px;
    "
  >
    <style></style>
    <main>
      <h1>¡Gracias, ${data.nombre}!</h1>
      <h2>Hemos recibido tu formulario para A tu Aire🌊</h2>
      <h3>¿Y ahora qué?</h3>
      <ul>
        <li>¡Ya estás dentro! Ahora sigue estos pasos:</li>
        <li>
          Únete a la clase en Google Classroom en
          <a href="https://classroom.google.com/c/NDgwMDk0NDkyNTk0?cjc=nztkeqx"
            >este enlace</a
          >
        </li>
        <li>
          El curso empieza el próximo 01/06/2022, a partir de esta fecha
          empezaremos a compartir en el Classroom las clases, recursos y avisos.
        </li>
        <li>
          Cuando haya actualizaciones, recibirás notificaciones en tu correo
          (necesitarás una cuenta de Google para poder acceder al Classroom).
        </li>
        <li>
          Podrás usar el Classroom para hacer preguntas a los profesores, dudas
          o incluso interactuar con otros estudiantes.
        </li>
        <li>
          ¡No te descuelgues! Participa en los grupos, haz tus ejercicios y
          mantente activ@ en redes sociales así sabemos que podemos contar
          contigo si se nos libera una plaza.
        </li>
      </ul>

      <p>¡A por todas, este es el año del cambio!</p>
      <p>Un abrazo,</p>
      <strong
        >El equipo
        <span class="dark-purple" style="color: #150639"
          >Teach<span class="accent" style="color: #ff7c04">[</span>T3ch<span
            class="accent"
            style="color: #ff7c04"
            >]</span
          ></span
        ></strong
      >
    </main>
  </body>
</html>

    `;
}
const renderTemplate = (data) => {
  switch (data.template) {
    case "backup-email":
    default:
      return backupEmail(data);
    case "full-power":
      return fullPower(data);
    case "a-tu-aire":
      return aTuAire(data);
    case "voluntarios":
      return voluntarios(data);
  }
};

export default renderTemplate;
