import lasagnaImage from './images/lasagna.webp';
import cranberrySauceImage from './images/cranberry-sauce.webp';
import mashedPotatoesImage from './images/mashed-potatoes.jpg';

export const createMenuTab = (document, rootElement) => {
    const createMenuItem = ((numberFormatter) => {
        return (imageUrl, description, price) => {
            const menuItem = document.createElement('div');

            const itemImage = document.createElement('img');
            itemImage.src = imageUrl;

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = description;

            const priceElement = document.createElement('p');
            priceElement.textContent = numberFormatter.format(price);

            menuItem.append(itemImage, descriptionElement, priceElement);
            return menuItem;
        }
    })(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }));

    return () => {
        rootElement.replaceChildren(); // Empty the root element

        rootElement.append(
            (() => {
                const h1 = document.createElement('h1');
                h1.textContent = 'Menu Items';
                return h1;
            })(),
            createMenuItem(lasagnaImage, 'Yummy lasagna sure to make you say "Yummy lasagna sure to make you say "Yummy lasagna sure to make you say ...""', 17.38),
            createMenuItem(cranberrySauceImage, 'Yeah, just sauce.', 20.99),
            createMenuItem(mashedPotatoesImage, 'Our chefs get really angry sometimes and take it out on the potatoes.', 0.38)
        );
    }
}