import styled from "styled-components";
import Image from "next/image";
import LoadingAnimation from "../LoadingAnimation";
import { scrollToTop } from "../../utils/scrollToTop";
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  gap: 36px;
  align-items: center;

  & .img-container {
    position: relative;
    width: 40%;
  }

  text-align: center;
`;

const FormSending = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Container>
      <h2>Estamos procesando tu formulario</h2>
      <LoadingAnimation />
      <h3>¡No cierres esta pestaña!</h3>

      <div className="img-container">
        <Image
          key={"Procesando formulario"}
          src={`/img/mano-lapiz.png`}
          alt="Imagen Procesando formulario"
          width="250"
          height="200"
          layout="responsive"
        />
      </div>
    </Container>
  );
};

export default FormSending;
