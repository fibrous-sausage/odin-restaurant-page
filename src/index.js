import { createHomeTab } from "./home-tab";
import { createMenuTab } from "./menu-tab";

const rootElement = document.querySelector("#content");
const loadHomeTab = createHomeTab(document, rootElement);
const loadMenuTab = createMenuTab(document, rootElement);
loadHomeTab();
loadMenuTab();