//DISCLAIMER: This file is an example of /db endpoint usage, please delete this when the inscription forms are implemented.

const axios = require("axios");

const handleClick = (e) => {
  e.preventDefault();

  const url = "/api/db";

  const data = {
    username: "pepinillos",
    email: "vivael@betis.es",
  };

  const config = {
    method: "post",
    url,
    data: data,
    responseType: "text",
  };

  axios(config)
    .then((response) => {
      console.log("OK");
    })
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
};

export default function Test() {
  return (
    <button onClick={(e) => handleClick(e)} style={{ marginTop: "100px" }}>
      Test
    </button>
  );
}
