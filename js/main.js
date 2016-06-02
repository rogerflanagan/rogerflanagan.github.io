"use strict";

$(document).ready(function() {
    // Highlight
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });

    // Navigation
    $('.eros-nav__title').click(function() {
        $('.js-menu-toggle').addClass('is-open');
    });
});
