'use strict';

const $ = require('jquery');
const Handlebars = require('hbsfy/runtime');

const main = $("#mainContainer");
const home = $("#homeContainer");
const about = $("#aboutContainer");
const portfolio = $("#portfolioContainer");
const contact = $("#contactContainer");

const homeSection = require('../templates/home.hbs');
const aboutSection = require('../templates/about.hbs');
const portfolioSection = require('../templates/portfolio.hbs');
const contactSection = require('../templates/contact.hbs');

const {getStrategy, getFaves, getWork} = require('./model');

const randomInt = (range) => Math.floor(Math.random() * +range);

const clearAll = () => {
    portfolio.fadeOut();
    portfolio.empty();
    contact.fadeOut();
    contact.empty();
    about.fadeOut();
    about.empty();
    home.fadeOut();
    home.empty();
};

// on page load function
const aboutAppend = () => {
    about.append(aboutSection);
    about.fadeIn();
};


const homeView = () => {
    clearAll();
    getStrategy().then(strategies => home.append(homeSection(strategies[randomInt(strategies.length)])));
    home.fadeIn();
};

const aboutView = () => {
    clearAll();
    aboutAppend();
};

const portfolioView = () => {
    clearAll();
    // portfolio.append(portfolioSection);
    getWork().then(works => {
        // let mapWorks = works.map(work=>$.parseHTML(work));
        portfolio.append(portfolioSection({objects: works}));
    });
    portfolio.fadeIn();
    $.parseHTML($(".workBrief"));
};

const contactView = () => {
    clearAll();
    contact.append(contactSection);
    contact.fadeIn();
};

const newFact = () => {
    getFaves()
    .then(faves => {
        let randomFav = faves[randomInt(faves.length)];
        $('#favTitleOut').html(`${randomFav.title}`);
        $('#favTextOut').html(`${randomFav.text}`);
    });
};

module.exports = { aboutAppend, homeView, aboutView, portfolioView, contactView, newFact };