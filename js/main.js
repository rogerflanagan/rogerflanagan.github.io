"use strict";

$(document).ready(function() {
    // Highlight
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });

    // Sub Navigation
    $('.eros-nav__title').click(function() {
        event.stopPropagation();
        $('.js-menu-toggle').toggle();
    });

    $(document).click(function() {
        $('.js-menu-toggle').hide();
    });

    // Page Navigation
    // ======================================
    // Helper functions
    // ======================================
    // Get section or article by href
    function getRelatedContent(el){
      return $($(el).attr('href'));
    }
    // Get link by section or article id
    function getRelatedNavigation(el){
      return $('.js-nav-list a[href=#'+$(el).attr('id')+']');
    }


    // ======================================
    // Smooth scroll to content
    // ======================================
    $('.js-nav-list a').on('click',function(e){
      e.preventDefault();
      $('html,body').animate({scrollTop:getRelatedContent(this).offset().top - 20})
    });


    // ======================================
    // Waypoints
    // ======================================
    // Default cwaypoint settings
    // - just showing
    var wpDefaults={
      context: window,
      continuous: true,
      enabled: true,
      horizontal: false,
      offset: 0,
      triggerOnce: false
    };

    $('.eros-example')
       .waypoint(function(direction) {
         // Highlight element when related content
         // is 10% percent from the bottom...
         // remove if below
         getRelatedNavigation(this).toggleClass('eros-nav__link-active', direction === 'down');
       }, {
         offset: '90%' //
       })
       .waypoint(function(direction) {
         // Highlight element when bottom of related content
         // is 100px from the top - remove if less
         // TODO - make function for this
         getRelatedNavigation(this).toggleClass('eros-nav__link-active', direction === 'up');
       }, {
         offset: function() {  return -$(this).height() + 100; }
       });
});
