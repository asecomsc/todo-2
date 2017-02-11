$(document).ready(function($) {
    $('form').submit(function() {
        if ($('.input').val() !== '') {
            var newTask = $('.input').val();
            var newLi = $('<li><input type="checkbox">&#160;&#160;' + newTask + '</li>');
            newLi.on('click', function() {
            		$(this).toggleClass('strike').fadeOut('slow');
            });
            $('ul').append(newLi); // To put the new task at the top of the list
            $('.input').val('');
            return false; // So the change persists
        }
    });
    $('ul').sortable(); // Because what good is a to-do list that you can't sort? :)
});