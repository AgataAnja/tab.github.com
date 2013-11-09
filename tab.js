$(document).ready(showNavigation);

function showNavigation () {
	var wrapper = $('<div>'),
		class_name = ['first', 'center', 'last'],
		table,
		middle_vertical,
		middle_horizontal,
		cell_quantity,
		row_insertion,
		i;

	wrapper.addClass('wrapper');

	for (i=0; i<3; i++) {
		$('<div>').appendTo(wrapper)
				  .addClass('navigator')
				  .addClass(class_name[i])
				  .append($('<p>').append(class_name[i]));
	};

	$('body').append(wrapper);

	// добавление R+
	$('.navigator').each(function () {
		$('<button>').appendTo(this)
					 .attr('id', 'rowadd')
					 .text('R+')
					 .css('display', 'block');
	});

	// добавление C+
	$('.navigator').each(function () {
		$('<button>').appendTo(this)
					 .attr('id', 'coladd')
					 .text('C+');
	});

	// добавление C+
	$('.navigator').each(function () {
		$('<button>').appendTo(this)
					 .attr('id', 'coldel')
					 .text('C-');
	});

	// добавление R-
	$('.navigator').each(function () {
		$('<button>').appendTo(this)
					 .attr('id', 'rowdel')
					 .text('R-')
					 .css('display', 'block');
	});

	// обработчики кнопок
	// first
	$('.first').find('#rowadd').on('click', function () {
		cell_quantity = $('tr').eq(0).children().length || 1;
		row_insertion = $('<tr></tr>');

		for (i=0; i < cell_quantity; i++) {
			row_insertion.append($('<td></td>')
					     .addClass('first'));
		}

		row_insertion.prependTo($('tbody'));
	});

	$('.first').find('#rowdel').on('click', function () {
		$('tr:first').detach();
	});

	$('.first').find('#coladd').on('click', function () {
		$('tr').each(function () {
			$(this).prepend($('<td></td>')
				   .addClass('first'));
		});
	});

	$('.first').find('#coldel').on('click', function () {
		$('tr').each(function () {
			$(this).children()
				   .eq(0)
				   .detach();
		});
	});

	// center
	$('.center').find('#rowadd').on('click', function () {
		middle_horizontal = (($('tr').length - 1) / 2).toFixed();
		cell_quantity = $('tr').eq(0).children().length || 1;
		row_insertion = $('<tr></tr>');

		for (i=0; i < cell_quantity; i++) {
			row_insertion.append($('<td></td>')
						 .addClass('center'));
		}

		row_insertion.insertAfter($('tr')
					 .eq(middle_horizontal-1));
	})

	$('.center').find('#rowdel').on('click', function () {
		middle_horizontal = (($('tr').length - 1) / 2).toFixed();
		$('tr').eq(middle_horizontal - 1).detach();
	})

	$('.center').find('#coladd').on('click', function () {
		middle_vertical = (($('tr').eq(0).children().length - 1) / 2).toFixed();

		$('tr').each(function () {
			($('<td></td>').addClass('center'))
						   .insertAfter($(this)
						   .find('td')
						   .eq(middle_vertical-1))
			})
	})

	$('.center').find('#coldel').on('click', function () {
		middle_vertical = (($('tr').eq(0).children().length - 1) / 2).toFixed();

		$('tr').each(function () {
			$(this).children()
				   .eq(middle_vertical-1)
				   .detach()
		})
	})

	// last
	$('.last').find('#rowadd').on('click', function () {
		cell_quantity = $('tr').eq(0).children().length || 1;
		row_insertion = $('<tr></tr>');

		for (i=0; i < cell_quantity; i++) {
			row_insertion.append($('<td></td>')
						 .addClass('last'));
		}

		row_insertion.appendTo($('tbody'));
	})

	$('.last').find('#rowdel').on('click', function () {
		$('tr:last').detach();
	})

	$('.last').find('#coladd').on('click', function () {
		$('tr').each(function () {
			$(this).append($('<td></td>')
				   .addClass('last'))
		})
	})

	$('.last').find('#coldel').on('click', function () {
		$('tr').each(function () {
			$(this).children()
				   .eq($(this)
				   .children()
				   .length-1)
				   .detach()
		})
	})

	table = $('<table><tr><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td></tr></table>')
		.appendTo($('body'))
		.attr('id', 'table');
}