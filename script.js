

const dropDownContent = document.getElementsByClassName('dropdown-content');
const dropDownLink = document.getElementsByClassName('dropdown-link');
const popupButton = document.getElementById('popup-button');
const contactFormWindow = document.getElementById('contact-form');
const closeFormButton = document.getElementById('close-button');
const subscribeForm = document.getElementById('subscribe-form');
const subscribeInput = document.getElementById('subscribe-input');

const dropDownAnimation = [
    {display: 'none', opacity: 0},
    {display: 'block', opacity: 0},
    {display: 'block', opacity: 1}
];
const dropDownTiming = {
    duration: 400,
};

const imgArray = [
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
    });
};




// Navigation 'Thank you for subscribing' message

subscribeForm.addEventListener('submit', function() {
    event.preventDefault()
    let newParagraph = document.createElement('p');
    newParagraph.textContent = 'Thank you for subscribing!';
    newParagraph.style.fontSize = '0.8rem';
    subscribeForm.appendChild(newParagraph);
});




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




// Picture Slideshow Text

const para = new Array();
    para[0] = 'Every single one of \
    our retreats is handcrafted by our small team of wellness travel experts';

    para[1] = 'We seek out & indulge \
    in the most healing & transformative places on earth';

    para[2] = 'We search the world for the most \
    breathtaking locations and accommodations you could dream of';

    para[3] = 'Hot springs. Glaciers. Rivers. Oceans. \
    Cliff jumping. Paddle Boarding. In water we find ourselves';

const header = [
        'Handcrafted Retreats',
        'Healing Retreats',
        'Retreat Centers',
        'Dive In'
    ];

let counter = 0;



function slideShowTextLoop() {

    if (counter >= 4) {
        counter = 0;
    };
    document.getElementById('slideshow-header').innerHTML = header[counter];
    document.getElementById('slideshow-para').innerHTML = para[counter];
    counter++;
    setTimeout(slideShowTextLoop, 6000);
}

slideShowTextLoop();




// Journal Read Me Text

function changeJournalText() {
    const journalBox = document.querySelectorAll('.journal-box');
    const journalBoxHeader = document.querySelectorAll('.journal-header');

    for (let i = 0; i < journalBox.length; i++) {
        journalBox[i].addEventListener('mouseover', function() {
            journalBoxHeader[i].innerHTML = '[ Read more ]';
            journalBoxHeader[i].style.color = '#FFA500';
        });
        journalBox[i].addEventListener('mouseout', function() {
            journalBoxHeader[i].innerHTML = 'The journal';
            journalBoxHeader[i].style.color = 'white';
        });
    };

};

changeJournalText();




// Smooth scrolling functions

function scrollToRetreatSection() {
    document.getElementById('content-header').scrollIntoView({
        behavior: 'smooth'
    });
};

function scrollToJournalSection() {
    document.getElementById('journal').scrollIntoView({
        behavior: 'smooth'
    });
};

function scrollToConnectSection() {
    document.getElementById('connect').scrollIntoView({
        behavior: 'smooth'
    });
};




// Fixed navigation onscroll

window.onscroll = function() {fixNavOnScroll()};

const fixedNavbar = document.getElementById('fixed-nav-onscroll');

const navPosition = fixedNavbar.offsetTop;

function fixNavOnScroll() {
    if (window.pageYOffset > navPosition) {
        fixedNavbar.classList.add('fixed-nav');
        document.getElementById('content-header').style.paddingTop = '110px';
    } else {
        fixedNavbar.classList.remove('fixed-nav');
        document.getElementById('content-header').style.paddingTop = '0';
    };
};




// Change date color when hovering over featured retreat

const retreatTextbox = document.querySelectorAll('.retreat-box');

for (let i = 0; i < retreatTextbox.length; i++) {
    const date = document.querySelectorAll('.date');
    
    retreatTextbox[i].addEventListener('mouseover', function() {
        for (let i = 0; i < date.length; i++) {
            date[i].style.color = 'orange';
        };
    });

    retreatTextbox[i].addEventListener('mouseout', function() {
        for (let i = 0; i < date.length; i++) {
            date[i].style.color = 'white';
        };
    });
};