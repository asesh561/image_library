$(document).ready(function() {
    // Initialize Isotope
    var $grid = $('.gallery').isotope({
      itemSelector: '.card',
      layoutMode: 'masonry'
    });
  
    // Handle filter button clicks
    $('.filter-button').on('click', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
  
    // Handle sort button clicks
    $('.sort-button').on('click', function() {
      var sortValue = $(this).attr('data-sort-value');
      $grid.isotope({ sortBy: sortValue });
    });
  
    // Handle click on "All" button
    $('#all').on('click', function() {
        $grid.isotope({ filter: '*' });
      });
  });
  