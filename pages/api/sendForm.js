import axios from "axios";

export async function handler(req, res) {
  if (req.method === "POST") {
    const addToDBConfig = {
      method: "post",
      url: "api/db",
      data: req.body,
      responseType: "text",
    };

    const addRowToDB = await axios(addToDBConfig);

    if (addRowToDB.status != 200) {
      res.status(200).send("No ha sido 200, le mandaremos un email a tt");
    }

    const sendEmailToUserConfig = {
      method: "post",
      url: "api/email",
      data: req.body,
      responseType: "text",
    };

    const sendEmailToUser = await axios(sendEmailToUserConfig);

    res.status(200).send("OK");
  } else if (req.method === "GET" || req.method === "HEAD") {
    res.status(204).send("Nothing to see here!");
  } else {
    res.status(405).send("Method not allowed");
  }
}
