import styled from "styled-components";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";

const ShareContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
  padding: 10px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  h4,
  .share-buttons {
    display: flex;
    justify-content: center;
  }

  .share-buttons {
    padding: 10px;
  }
`;
// This component is using this library: https://github.com/Bunlong/next-share
const SharedButtons = () => {
  return (
    <ShareContent>
      <h4>Ayúdanos a dar a conocer este proyecto </h4>
      <div className="share-buttons">
        <FacebookShareButton url={"http://localhost:3000"}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton
          url={"https://teacht3ch.com/"}
          title={
            "TeachTech es un proyecto para dar a conocer la programación. Conoce más sobre el proyecto aqui: "
          }
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={"https://teacht3ch.com/"}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <TelegramShareButton
          url={"https://teacht3ch.com/"}
          title={
            "TeachTech es un proyecto para dar a conocer la programación. Conoce más sobre el proyecto aqui: "
          }
        >
          <TelegramIcon size={32} round />
        </TelegramShareButton>
        <WhatsappShareButton
          url={"https://teacht3ch.com/"}
          title={
            "TeachTech es un proyecto para dar a conocer la programación. Conoce más sobre el proyecto aqui: "
          }
          separator=":: "
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    </ShareContent>
  );
};

export default SharedButtons;
