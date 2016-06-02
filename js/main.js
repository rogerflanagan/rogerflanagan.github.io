"use strict";

$(document).ready(function() {
    // Highlight
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });

    // Navigation
    $('.eros-nav__title').click(function() {
        event.stopPropagation();
        $('.js-menu-toggle').toggle();
    });

    $(document).click(function() {
        $('.js-menu-toggle').hide();
    });
});
