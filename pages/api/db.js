import { addRow } from "../../lib/dbc";

/*
 If using axios this endpoint expect something like shown:

    const url = "/api/db"

    const data = {
        
        username: "pepinillos",
        email: "vivael@betis.es"
    }

    const config = {
        method: 'post',
        url,
        data: data,
        responseType: 'text'
    }

 */

export default async function handler(req, res) {
  if (req.method === "POST") {
    const result = await addRow(req.body);

    if (result !== 200) {
      res.status(500).send("Something went wrong");
    }
    res.status(200).send("OK");
  } else if (req.method === "GET" || req.method === "HEAD") {
    res.status(204).send("Nothing to see here!");
  } else {
    res.status(405).send("Method not allowed");
  }
}
