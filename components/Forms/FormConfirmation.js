import styled from "styled-components";
import { ButtonPrimary } from "../Button";
import NavLink from "next/link";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 36px;
  align-items: center;

  & .img-container {
    position: relative;
    width: 60%;
  }

  text-align: center;
`;

const texts = {
  ["full-power"]:
    "Muchas gracias por enviarnos tu solicitud. Revisaremos tu perfil y nos pondremos en contacto contigo si has sido seleccionad@ para la nueva edición de Tech[Tech]. Si no recibes un correo de confirmación en los próximos minutos, por favor vuelve a enviar el formulario.",
  ["a-tu-aire"]:
    "Muchas gracias por enviarnos tu inscripción ¡Ya estás dentro de A tu Aire! En cuanto empiece el curso empezarás a recibir el material para darle caña ¡Atención al correo!",
  ["voluntarios"]:
    "Muchas gracias por querer formar parte de este proyecto. En breve nos pondremos en contacto contigo para más detalles.",
};

const FormConfirmation = ({ type }) => {
  return (
    <Container>
      <h2>¡Formulario enviado!✉️</h2>
      <p>{texts[type]}</p>
      <NavLink href="/" passHref>
        <ButtonPrimary>Volver a TeachTech</ButtonPrimary>
      </NavLink>
      <div className="img-container">
        <Image
          key={"Inscripción confirmada"}
          src={`/img/full-rocket.png`}
          alt="Imagen full power"
          width="415"
          height="430"
          layout="responsive"
        />
      </div>
    </Container>
  );
};

export default FormConfirmation;
