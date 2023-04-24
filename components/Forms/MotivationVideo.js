import styled from "styled-components";
import TextInput from "./TextInput";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 12px;
`;

const StyledList = styled.ul`
  margin: 0;
  > li {
    margin: 12px 0;
  }
`;

const StyledLabel = styled.label`
  font-weight: 700;
  color: ${(props) => props.theme.colors.text100};
`;

const MotivationVideo = ({ label, ...rest }) => {
  return (
    <Container>
      <StyledLabel> ¡Queremos conocerte mejor! </StyledLabel>
      <p>
        Nos encantaría que nos contaras en{" "}
        <span className="bold"> un breve vídeo (5 min aprox)</span>:
      </p>
      <StyledList>
        <li>¿Por qué quieres hacer la modalidad mentorizada?</li>
        <li>
          ¿Has intentado aprender a programar antes? ¿Por qué no salió bien?
        </li>
        <li>¿A qué te dedicas actualmente?</li>
        <li> Y cualquier cosa que quieras compartir con nosotros </li>
      </StyledList>

      <p>
        📹 Cuando lo tengas grabado (puedes grabarlo con tu webcam, o tu móvil),
        súbelo a Internet (Google Drive, Youtube, Vimeo, Dropbox...)
      </p>
      <p>
        Péganos 👇 aquí el enlace 👇 para que podamos ver tu vídeo (¡no te
        olvides de dar permiso a &quot;cualquier persona con el enlace&quot;!).
        Valoraremos muy positivamente que lo incluyas.
      </p>

      <TextInput label="URL de tu vídeo" {...rest} />
    </Container>
  );
};

export default MotivationVideo;
