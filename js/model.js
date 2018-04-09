'use strict';

const $ = require('jquery');

module.exports.getStrategy = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'https://crossorigin.me/http://brianeno.needsyourhelp.org/draw',
        })
        .done(strategy => resolve(strategy))
        .fail(error => reject(error));
    });
};

module.exports.getFaves = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: '../lib/fav.json',
        })
        .done(faves => resolve(faves))
        .fail(error => reject(error));
    });
};

module.exports.getWork = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: '../lib/portfolio.json',
        })
        .done(faves => resolve(faves))
        .fail(error => reject(error));
    });
};