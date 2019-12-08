function generateList(listItem){
	return `<li><span class="shopping-item">${listItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`
}

function createShoppingList() {
	$('#js-shopping-list-form').on('submit', function(e){
		e.preventDefault();

		const listItem = $('#shopping-list-entry').val();
		//console.log(value);

		$('.shopping-list').append($(generateList(listItem)));
		//$('#shopping-list-entry').val('');
  });
};

function lineThroughItem(){
	$('.shopping-list').on('click', '.shopping-item-toggle', function(e){
		e.preventDefault();
		$(e.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');

	})
}

function deleteListItem(){
	$('.shopping-list').on('click', '.shopping-item-delete', function(e){
		e.preventDefault();
		$(e.target).closest('li').remove();
	})
}


$(createShoppingList)
$(lineThroughItem)
$(deleteListItem)