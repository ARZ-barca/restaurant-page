export default function loadMenu() {
    let content = document.querySelector('#content')
    let menuContent = document.createElement('div')

    //to create a menu header
    function createMainMenuHeader() {
        let mainMenuHeader = document.createElement('div')
        mainMenuHeader.classList.add('inner-content', 'menu-header')
        mainMenuHeader.innerHTML = '<h1>Menu</h1>'
        menuContent.appendChild(mainMenuHeader)
    }

    //to create a section header
    function createMenuSubHeader(text) {
        let menuSubHeader = document.createElement('div')
        menuSubHeader.classList.add("inner-content", "menu-sub-header")
        menuSubHeader.innerHTML = `<h2>${text}</h2>`
        menuContent.appendChild(menuSubHeader)
    }

    // to create a menu item
    function createMenuItem(title , description, price, imageClass) {
        let menuItem = document.createElement('div')
        menuItem.classList.add("inner-content", "menu-item")
        menuItem.innerHTML = `  <h3 class="sub-header">${title}</h3>
                                <p>
                                    ${description}
                                </p>
                                <div class="item-price">$${price}</div>
                                <div class="menu-item-image ${imageClass}"></div>
                                `
        menuContent.appendChild(menuItem)
    }


    createMainMenuHeader()

    createMenuSubHeader('Beverages')

    createMenuItem('Honey Tea',
                    `A warm, sweet tea made with the highest
                    quality honey 
                    and a bit of lemon to 
                    start your day off right!`, 2, 'honey-tea-image')

    createMenuItem('Beary Tea',
                    `A comforting, almost filling,
                    tea that is infused with the flavors of
                    several kinds of berries. Best served cold,
                    but can be served hot on request.`, 3, 'beary-tea-image')

    createMenuSubHeader('Sides')

    createMenuItem('Toast and Jam',
                    `A slice of toast, your choice of bread,
                     and our homemade blackberry or
                     raspberry jam.`, 1, 'toast-and-jam-image')

    createMenuItem('Fresh Fruit',
                     `A small bowl of fresh fruit,
                      whatever we find at the market
                       for the day.`, 3, 'fresh-fruit-image')

    createMenuSubHeader('Main Dishes')
    
    createMenuItem('Pancakes',
                    `A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.`, 4, 'pancakes-image')

    createMenuItem('French Toast',
                    `Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.`, 5, 'french-toast-image')

    createMenuItem('Beary Veggie Sandwich',
                    `Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.`, 8, 'beary-veggie-sandwich-image')

    createMenuItem('BLT',
                    `Interested in the Beary Veggie Sandwich but also love bacon? Say no more.`, 6, 'blt-image')

    createMenuItem('Bagel and Lox',
                    `Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.`, 8, 'bagel-and-lox-image')

    createMenuItem('Honeycomb',
                    `Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.`, 6, 'honeycomb-image')
    
    createMenuItem('Beary Bowl',
                    `Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.`, 7, 'beary-bowl-image')

    createMenuItem('The Beary Best Porridge',
                    `Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.`, 5, 'the-beary-best-porridge-image')


    content.appendChild(menuContent)
}