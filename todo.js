$(document).ready(function($) {
    $('form').submit(function() {
        if ($('#task').val() !== '') {
            var newTask = $('#task').val();
            var newLi = $('<li><input type="checkbox">&#160;&#160;' + newTask + '</li>');
            newLi.on('click', function() {
            		$(this).toggleClass('strike').fadeOut('slow');
            });
            $('ul').append(newLi); // To put the new task at the top of the list
            $('#task').val('');
            return false; // So the change persists
        }
		if ($('#min').val() !== '') {
			miMin = $('#min').val() * 1000 * 60;
			setTimeout(function () {
				alert( $('#aviso').val() );
				},miMin);
			return false;
		}
    });
    $('ul').sortable(); // Because what good is a to-do list that you can't sort? :)
});
