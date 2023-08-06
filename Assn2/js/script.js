//target all elements to save to constants
const page1btn = document.querySelector("#page1btn");
const page2btn = document.querySelector("#page2btn");
const page3btn = document.querySelector("#page3btn");
const page4btn = document.querySelector("#page4btn");
const page5btn = document.querySelector("#page5btn");
const page6btn = document.querySelector("#page6btn");
const page7btn = document.querySelector("#page7btn");
const page8btn = document.querySelector("#page8btn");
var allpages = document.querySelectorAll(".page");
var allpages2 = document.getElementsByClassName(".page");

const hamBtn = document.querySelector("#hamIcon")
const menuItemsList = document.querySelector("nav ul");
//select all subtopic pages
console.log(allpages);
hideall();
show(8);
function hideall() { //function to hide all pages
    for (let onepage of allpages) { //go through all subtopic pages
        onepage.style.display = "none"; //hide it
    }
    for (let onepage of allpages2) { //go through all subtopic pages
        onepage.style.opacity = 0; //hide it
    }
}
function show(pgno) { //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage = document.querySelector("#page" + pgno);
   
    
    //show the page
    onepage.style.display = "block";
    fadeIn(onepage);
}
function fadeIn(page) {
    var opacity = 0; // Initial opacity
    var interval = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.05;
            page.style.opacity = opacity;
        } else {
            clearInterval(interval); // Stop the interval when opacity reaches 0
        }
    }, 50);
}

function toggleMenus() { /*open and close menu*/
    if (menuItemsList.style.display == "block")
        menuItemsList.style.display = "none";
    else menuItemsList.style.display = "block";
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
    show(1)
});
page2btn.addEventListener("click", function () {
    show(2)
});
page3btn.addEventListener("click", function () {
    show(3)
});
page4btn.addEventListener("click", function () {
    show(4)
});
page5btn.addEventListener("click", function () {
    show(5)
});
page6btn.addEventListener("click", function () {
    show(6)
});
page7btn.addEventListener("click", function () {
    show(7)
});
page8btn.addEventListener("click", function () {
    show(9)
});

hamBtn.addEventListener("click", function () {
    toggleMenus()
});

