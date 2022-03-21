import sendgrid from "@sendgrid/mail";
import renderTemplate from "../../email-templates/renderTemplate";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: req.body.to, // Your email where you'll receive emails
      from: "teacht3ch@gmail.com", // your website email address here
      subject: req.body.subject,
      html: renderTemplate(req.body),
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
