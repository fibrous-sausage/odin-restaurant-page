import customerImage from './images/cat.jpg';

export const createHomeTab = (document, rootElement) => {
    return () => {
        rootElement.replaceChildren(); // Empty the root element

        const headline = document.createElement('h1');
        headline.textContent = 'Amazing Restaurant';

        const happyCustomer = document.createElement('img');
        happyCustomer.src = customerImage;
        happyCustomer.height = 400;

        const description = document.createElement('p');
        description.textContent = 'Just look at how happy this customer is with this Amazing Restaurant!';

        const invitation = document.createElement('p');
        invitation.textContent = 'Drop by for a wonderful morning/afternoon/evening with a loved one (or yourself, or a hated one) and enjoy a lovely meal prepared by our critically acclaimed chefs!';

        rootElement.append(headline, happyCustomer, description, invitation);
    }
}