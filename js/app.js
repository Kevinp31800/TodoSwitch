$(document).ready(function(){
	alert("Bienvenue !")
	$('#addItem').on('click', addItem); 
	$('#todos').on('change', '.completeItem', completeItem);
	$('#todos').on('click', '.deleteItem', deleteItem);
	$('#newTodo').on('keypress', function(event){

		if(event.which === 13){
			addItem();
			event.preventDefault();

		}
	});


	function addItem(){

		var newTodoText = $('#newTodo').val();
		$('#todos').append('<li><input class="completeItem" type = "checkbox">'+ newTodoText + '<span class = "glyphicon glyphicon-trash deleteItem"></span></li>');
		$('#newTodo').val("");

	}

	function deleteItem(){

		$(this).parent().remove();

	}

	function completeItem(){

		$(this).parent().toggleClass('done');


	}

});