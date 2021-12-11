import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";
import { ButtonPrimary } from "../Button";

const Container = styled.div`
`;

const InputField = styled.div`
  display: flex;
  max-width: 250px;
  flex-flow: column;
  gap: 8px;

  > input {
    padding: 8px;
    line-height: 2;
    border-radius: 4px;
    border: 1px solid gray;
    margin-bottom: 8px;
  }

  > label {
    font-size: 12px;
    font-weight: 700;
  }

  @media only screen and (max-width: 850px) {
    max-width: 100%;
  }
`;
const CheckboxInput = styled.div`
display: flex; 
gap: 8px; 
padding: 8px 0 12px 0; 
  > input {
  }

  > span,
  a {
    color: white;
    font-size: 12px;
  }
`;

const CustomButton = styled(props => <ButtonPrimary {...props}/>)`


@media only screen and (max-width: 850px) {
  margin-top: 15px; 
    width: 100%;
  }
`
const NewsletterForm = () => {
  const [data, setData] = useState({ username: "", email: "", rgpd: "" });
  const urlId =
    "https://gmail.us10.list-manage.com/subscribe/post?u=1359a4d31ba1d60fad7f7d4e7&amp;id=616d10efaf";

  const onChangeData = ({ prop, value }) => {
    setData((prevState) => {
      return { ...prevState, [prop]: value };
    });
  };

  return (
    <Container>
      <form
        action={urlId}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        target="_blank"
        noValidate
      >
        <InputField>
          <label htmlFor="mce-FNAME">Nombre</label>
          <input
            required
            type="text"
            value={data.username}
            onChange={(e) =>
              onChangeData({ prop: "username", email: e.target.value })
            }
            name="FNAME"
            id="mce-FNAME"
          />
        </InputField>
        <InputField>
          <label htmlFor="mce-EMAIL">E-mail</label>
          <input
            required
            type="email"
            value={data.email}
            onChange={(e) =>
              onChangeData({ prop: "email", value: e.target.value })
            }
            name="EMAIL"
            id="mce-EMAIL"
          />
        </InputField>

        <CheckboxInput>
          <input
            type="checkbox"
            id="gdpr_56557"
            name="gdpr[56557]"
            value={data.rgpd}
            onChange={(e) =>
              onChangeData({ prop: "rgpd", value: e.target.value })
            }
          />
          <span>
            He leído y acepto la{" "}
            <Link href={"/privacy-policy"}> Política de privacidad</Link> y la{" "}
            <Link href={"/cookies"}>Política de Cookies</Link>
          </span>{" "}
        </CheckboxInput>

        <div id="mce-responses" className="clear foot">
          <div
            className="response"
            id="mce-error-response"
            style={{ display: "none" }}
          ></div>
          <div
            className="response"
            id="mce-success-response"
            style={{ display: "none" }}
          ></div>
        </div>
        {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
        <div aria-hidden="true">
          <input
            hidden
            type="text"
            name="b_1359a4d31ba1d60fad7f7d4e7_616d10efaf"
            tabIndex="-1"
            value=""
          />
        </div>
        <CustomButton
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="button"
        >Enviar</CustomButton>
      </form>

      {/* <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script> */}
    </Container>
  );
};

export default NewsletterForm;
