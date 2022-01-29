import authors from "../utils/authors.json";
export function getAuthorData(userName) {
  return userName && authors.hasOwnProperty(userName.toLowerCase())
    ? authors[userName]
    : authors["tt"];
}

export function getAuthorImage(imageName) {
  if (!imageName || imageName.includes("default")) {
    return `url(img/generic.png)`;
  }

  return `url(img/authors/${imageName})`;
}
