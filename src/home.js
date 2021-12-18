export default function loadMenu() {
        let content = document.querySelector('#content')
        content.innerHTML = `<div class="inner-content header">
                                <h1>Beary's Breakfast Bar</h1>
                            </div>
                            <div class="inner-content">
                                <p>
                                    Beary's has the best porridge!
                                    The atmosphere and customer service make you feel like you are sitting in the middle of the woods,
                                    eating like a bear! This is exactly the kind of place that I like to return to again and again.
                                </p>
                                <h3 class="sub-header">Goldilocks</h3>
                            </div>
                            <div class="inner-content">
                                <h3 class="sub-header">Hours</h3>
                                <ul>
                                    <li>Sunday: 8am - 8pm</li>
                                    <li>Monday: 6am - 6pm</li>
                                    <li>Tuesday: 6am - 6pm</li>
                                    <li>Wednesday: 6am - 6pm</li>
                                    <li>Thursday: 6am - 10pm</li>
                                    <li>Friday: 6am - 10pm</li>
                                    <li>Saturday: 8am - 10pm</li>
                                </ul>
                            </div>
                            <div class="inner-content">
                                <h3 class="sub-header">Location</h3>
                                123 Forest Drive, Forestville, Maine
                            </div>`
};

