/*
Name : Main.JS Portofolio
Author : Fikri Maulana
Date : 7 April 2021
*/
document.addEventListener('contextmenu', event => event.preventDefault());

var domain = "./";
var c = document.querySelector('p[class="mt-2"]').textContent;

function initTyped() {
    if (typeof Typed === 'undefined' || !document.getElementById('typed')) {
        return;
    }

    new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 24,
        backSpeed: 12,
        backDelay: 1800,
        startDelay: 200,
        loop: true
    });
}

function loadPage(page) {
    $.ajax({
        type: 'GET',
        url: domain + page,
        cache: false,
        processData: false,
        contentType: false,
        success: function(result) {
            $("#content").html(result);
            initTyped();
        }
    });
}

$(document).ready(function() {
    loadPage('home.html');
});

$(document).on('click', 'a.home', function(event) {
    event.preventDefault();
    loadPage('home.html');
});

$(document).on('click', 'a.about', function(event) {
    event.preventDefault();
    loadPage('about.html');
});

$(document).on('click', 'a.skill', function(event) {
    event.preventDefault();
    loadPage('skill.html');
});

$(document).on('click', 'a.project', function(event) {
    event.preventDefault();
    loadPage('project.html');
});

$(document).on('click', 'a.contact', function(event) {
    event.preventDefault();
    loadPage('contact.html');
});
// }
