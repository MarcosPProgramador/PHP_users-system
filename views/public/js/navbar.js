"use strict";
var buttonBurgerNavbar = $('#burger');
var navbar = $('#navbar');
buttonBurgerNavbar.on('click', function () {
    buttonBurgerNavbar.toggleClass('active');
    navbar.toggleClass('active');
});
