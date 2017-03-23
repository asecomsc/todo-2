function Grabar() {
	localStorage.clear();
	i = 0;
	$("input:checkbox").each(function(){
		if ($(this).prop("checked")==false) {
			i++;
			localStorage.setItem('test'+ i, $(this).closest('li').text());
		}
	});
}

function Leer() {
	for(var i in localStorage)
	{
		var newTask = localStorage[i];
		var newLi = $('<li><input type="checkbox">&#160;&#160;' + newTask + '</li>');
		newLi.on('click', function() {
				$(this).toggleClass('strike').fadeOut('slow');
		});
		$('ul').append(newLi); 
	}	
}

$(document).ready(function() {
	d = new Date();
	d.setHours(0,0,0,0);
	var miInterval;
	Leer();
	
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
	
	$('#start').click( function() { 
		miInterval = setInterval(miTimer,1000);
	});
	function miTimer() {
	    d.setSeconds(d.getSeconds()+1);
	    $('#uno').text(d.format("HH:MM:ss"));
	}
	$('#stop').click( function() {
		clearInterval(miInterval);
	});
	$('#reset').click( function() {
		clearInterval(miInterval);
		d.setHours(0,0,0,0);
		miInterval = setInterval(miTimer,1000);		
	});	
});

