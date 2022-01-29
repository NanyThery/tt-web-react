import { format, parse } from "date-fns";
import { es } from "date-fns/locale";
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

export function getFormattedPublishDate(date) {
  const validDate = parse(date, "dd/MM/yyyy", new Date());
  const formattedDate = format(validDate, "dd MMM. yyyy", {
    locale: es,
  });

  return formattedDate;
}
