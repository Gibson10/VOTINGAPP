$(document).ready(function() {
    
    $(".dropdown-toggle").dropdown();
    
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });
    
    $('#trigger').click(function () {
        $('#modalYT').modal({show : true});
    });
    
});