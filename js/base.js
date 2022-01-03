var menuHTML = "<a href='./index.html'><div class='ml hr'><p>Home</p></div></a><a href='./contact.html'><div class='ml'><p>Contact</p></div></a>";
var footerHTML = "2018 A. Lake";

function go(link) {
    console.log(link);
    document.location.href = link;

}

//JSON.stringify([...'example@example.com'].map((c, n) => [c, n, Math.random()]).sort((a, b) => a[2] - b[2]).map((e)=>e.slice(0,2)))
var email = [
    ["a", 0],
    ["g", 11],
    ["m", 12],
    ["c", 17],
    ["a", 7],
    ["r", 2],
    ["l", 15],
    ["i", 3],
    ["d", 1],
    ["k", 8],
    ["m", 19],
    ["l", 6],
    ["n", 5],
    ["@", 10],
    ["a", 13],
    ["o", 18],
    [".", 16],
    ["a", 4],
    ["i", 14],
    ["e", 9]
];

function insertEmail(ele) {
    // place characters in order
    for (const char of email) {
        e.innerHTML += `<div style='left:${char[1]}ch'>${char[0]}</div>`;
    }
}


function init() {

    for (e of document.getElementsByClassName('menu')) {
        e.innerHTML = menuHTML;
    }

    for (e of document.getElementsByClassName('menu')) {
        e.innerHTML = menuHTML;
    }

    for (e of document.getElementsByClassName('footer')) {
        e.innerHTML = footerHTML;
    }

    for (e of document.getElementsByClassName('email')) {
        insertEmail(e);
    }

}

invertState = false;

function invert() {
    if (invertState) {
        document.body.style.filter = "invert(0%)";
        document.body.style['background-color'] = "#fff";
        invertState = false;
    } else {
        document.body.style.filter = "invert(100%)";
        document.body.style['background-color'] = "#000";
        invertState = true;
    }
}