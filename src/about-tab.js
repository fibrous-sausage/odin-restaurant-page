export const createAboutTab = (document, rootElement) => {
    return () => {
        rootElement.replaceChildren(); // Empty the root element
        rootElement.append(
            (() => {
                const h1 = document.createElement('h1');
                h1.textContent = 'About Amazing Restaurant';
                return h1;
            })(),
            (() => {
                const p = document.createElement('p');
                p.textContent = 'Amazing Restaurant doesn\'t exist. Stop asking about it. I am SICK and TIRED of people asking about this place. Yesterday I had a guy walk up to me in public and ask about Amazing Restaurant and I had to start screaming very loudly to get him to stop talking about it and go away. The public is not happy about the means I use to get people to stop asking about Amazing Restaurant.';
                return p;
            })(),
            (() => {
                const p = document.createElement('p');
                p.textContent = 'That being said, Amazing Restaurant is the host of wonderful, talented, world class chefs such as Joe Eoj, Jeff Fejj, Erin Nire, Mel Lem, and Paul Luap. Our wonderful selection of talent gives us an edge over other restaurants. We won\'t tell you what that edge is. If we did, we\'d have to bring the edge to you.';
                return p;
            })(),
            (() => {
                const p = document.createElement('p');
                p.textContent = 'Our wide selection of chefs is what brings a wide variety of items. Each chef puts their own unique spin onto each of the dishes of we have, which mind you, is a large selection. Our menu is big. Look at our menu and buy something.';
                return p;
            })()
        );
    }
}