export default function loadHeader() {
        let header = document.querySelector('#header')
        header.innerHTML = `<header id="header">
                                <div class="header-option home-header-option">Home</div>
                                <div class="header-option menu-header-option">Menu</div>
                                <div class="header-option contact-header-option">Contact</div>
                            </header>`;
        //let content = document.querySelector('#content');
};

function loadFooter() {
        let footer = document.createElement('footer')
        footer.innerHTML = '<a target="_blank" href="https://www.freepik.com/vectors/food" id="footer">Background created by freepik - www.freepik.com</a>'
        document.body.appendChild(footer)
};

export {loadFooter};