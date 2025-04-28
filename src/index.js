import { createLoadHomeContent } from "./home";

const rootElement = document.querySelector("#content");
const loadHomeContent = createLoadHomeContent(document, rootElement);
loadHomeContent();