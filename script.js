

let dropDownContent = document.getElementsByClassName('dropdown-content');
let dropDownLink = document.getElementsByClassName('dropdown-link');
let popupButton = document.getElementById('popup-button');
let contactFormWindow = document.getElementById('contact-form');
let closeFormButton = document.getElementById('close-button');
let subscribeForm = document.getElementById('subscribe-form');
let subscribeInput = document.getElementById('subscribe-input');

let dropDownAnimation = [
    {display: 'none', opacity: 0},
    {display: 'block', opacity: 0},
    {display: 'block', opacity: 1}
];
let dropDownTiming = {
    duration: 400,
};

let imgArray = [
    '/gallery/mountains.jpg',
    '/gallery/nature.jpeg',
    '/gallery/nature1.jpg',
    '/gallery/sea.jpeg'
];


// Dropdown-menu on mouseover

for (let i = 0; i < dropDownLink.length; i++) {
    dropDownLink[i].addEventListener('mouseover', function() {
            dropDownContent[i].animate(
                dropDownAnimation,
                dropDownTiming
            );
            dropDownContent[i].classList.add('show');
            dropDownContent[i].classList.remove('hidden');
    });
    dropDownLink[i].addEventListener('mouseout', function() {
        setTimeout(function() {
            dropDownContent[i].classList.remove('show');
            dropDownContent[i].classList.add('hidden');
        }, 200);
    })
};


// Thank you for subscribing message

subscribeForm.addEventListener('submit', function() {
    event.preventDefault()
    let newParagraph = document.createElement('p');
    newParagraph.textContent = 'Thank you for subscribing!';
    newParagraph.style.fontSize = '0.8rem';
    subscribeForm.appendChild(newParagraph);
})

// Background image animation

let curIndex = 0;
let imgDuration = 6000;

let bgContainer = document.getElementById('bg-container');

function slideShow() {
    bgContainer.style.backgroundImage = 'url(' + imgArray[curIndex % 4] + ')';
    curIndex++;
    setTimeout("slideShow()", imgDuration);
};

slideShow();



// Journal Read Me Text


function changeJournalText() {
    let journalBox = document.querySelectorAll('.journal-box');
    let journalBoxHeader = document.querySelectorAll('.journal-header');

    for (let i = 0; i < journalBox.length; i++) {
        journalBox[i].addEventListener('mouseover', function() {
            journalBoxHeader[i].innerHTML = '[ Read more ]';
            journalBoxHeader[i].style.color = '#FFA500';
        });
        journalBox[i].addEventListener('mouseout', function() {
            journalBoxHeader[i].innerHTML = 'The journal';
            journalBoxHeader[i].style.color = 'white';
        })
    }

}

changeJournalText();


/////////////////////////////




function slideShowTextLoop() {

    let paras = new Array();
    paras[0] = 'Every single one of \
    our retreats is handcrafted by our small team of wellness travel experts';

    paras[1] = 'We seek out & indulge \
    in the most healing & transformative places on earth';

    paras[2] = 'We search the world for the most \
    breathtaking locations and accommodations you could dream of';

    paras[3] = 'Hot springs. Glaciers. Rivers. Oceans. \
    Cliff jumping. Paddle Boarding. In water we find ourselves';

    let header = [
        'Handcrafted Retreats',
        'Healing Retreats',
        'Retreat Centers',
        'Dive In'
    ];

    let counter = 0;



    if (counter > 4) {
        counter = 0;
    };
    
    document.getElementById('slideshow-header').innerHTML = header[counter];
    document.getElementById('slideshow-para').innerHTML = paras[counter];
    counter++;
    setTimeout(slideShowTextLoop, 6000);
}

slideShowTextLoop();