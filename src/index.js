import { createHomeTab } from "./home-tab";
import { createMenuTab } from "./menu-tab";
import { createAboutTab } from "./about-tab";

const rootElement = document.querySelector("#content");
const navigation = document.querySelector('nav');
const loadHomeTab = createHomeTab(document, rootElement);
navigation.querySelector('#nav-home').addEventListener('click', (event) => loadHomeTab());
const loadMenuTab = createMenuTab(document, rootElement);
navigation.querySelector('#nav-menu').addEventListener('click', (event) => loadMenuTab());
const loadAboutTab = createAboutTab(document, rootElement);
navigation.querySelector('#nav-about').addEventListener('click', (event) => loadAboutTab());

loadHomeTab();