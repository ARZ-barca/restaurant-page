export default function loadContact() {
    let content = document.querySelector('#content');
    let contactContent = document.createElement('div');
    
    //to create a header
    function createContactHeader(header) {
        let contactTitle = document.createElement('div');
        contactTitle.classList.add("inner-content", "content-header");
        contactTitle.innerHTML = `<h1>${header}</h1>`;
        contactContent.appendChild(contactTitle);
    }

    //to create each contact
    function createContactItem(name, title, number, email, imageClass) {
        let contactItem = document.createElement('div');
        contactItem.classList.add("inner-content", "content-item")
        contactItem.innerHTML = `<h3 class="sub-header">${name}</h3>
                                 <p>${title}<br>${number}<br>${email}</p>
                                 <div class="content-item-image ${imageClass}"></div>`;
        contactContent.appendChild(contactItem);
    }
    

    createContactHeader('Contact Us')
    createContactItem('Mama Bear', 'Chef', '555-555-5554', 'totallyRealEmail@notFake.com', 'mama-bear-image')
    createContactItem('Papa Bear', 'Manager', '555-555-5555', 'perfectlyRealEmail@notFake.com', 'papa-bear-image')
    createContactItem('Baby Bear', 'Waiter', '555-555-5556', 'totallyRealEmail@notFake.com', 'baby-bear-image')
    content.appendChild(contactContent)
}