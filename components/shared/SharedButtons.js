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

  @media only screen and (max-width: 850px) {
    h4 {
      font-size: 14px;
      text-align: center;
    }
  }

  .share-buttons {
    padding: 10px;
  }
`;
// https://github.com/Bunlong/next-share
const SharedButtons = ({ text, url }) => {
  return (
    <ShareContent>
      <h4>¿Nos ayudas a dar a conocer el proyecto? ¡Mil gracias!</h4>
      <div className="share-buttons">
        <FacebookShareButton
          url={"http://localhost:3000"}
          quote={text}
          hashtag={"#teachtech"}
        >
          <FacebookIcon size={28} round />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={text}>
          <TwitterIcon size={28} round />
        </TwitterShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon size={28} round />
        </LinkedinShareButton>
        <TelegramShareButton url={url} title={text}>
          <TelegramIcon size={28} round />
        </TelegramShareButton>
        <WhatsappShareButton url={url} title={text} separator=":: ">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    </ShareContent>
  );
};

export default SharedButtons;
