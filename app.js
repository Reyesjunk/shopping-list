//Single state object
var state = {
  items: ['apples', 'oragnges', 'milk', 'bread']
};

//State modification functions
function addItem(state, item){
  state.items.push(item);
}
function getItem(state, itemIndex){
  return state.item[itemIndex];
}

function deleteItem(state, item){

}

//Render functions
function shoppingItem(name){
  return{
    name: name,
    itemHtml: function(){
      return '<li>'+
                '<span class="shopping-item">' + name + '</span>' +
                '<div class="shopping-item-controls">'+
                  '<button class="shopping-item-toggle">'+
                    '<span class="button-label">check</span>'+
                  '</button>'+
                  '<button class="shopping-item-delete">'+
                    '<span class="button-label">delete</span>'+
                  '</button>'+
                '</div>'+
              '</li>';
    }


  };
}
console.log(shoppingItem('kidney').itemHTml);


//Event listeners
function handleAddingItems(){
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    var item = $('#shopping-list-entry').val();
    var form = $('#js-shopping-list-form');
    var input = $('#shopping-list-entry');
    addItem(state, item);
    console.log(item);
    $('ul').append(shoppingItem(item).itemHtml);
  });
}
function handleCheckToggles(){
$('.shopping-item-toggle').on('click', function(event){
  $(event.target).closest('li').toggleClass('shopping-item__checked');
  // checked = !checked;
  // var itemText = $('.shopping-item').text();
  // console.log(itemText);
  // checked ? $('.shopping-item').removeClass('shopping-item__checked') :
  //  $('.shopping-item').addClass('shopping-item__checked');
});
}

function handleItemDeletes(){
  $('.shopping-list').on('click', '.shopping-item-delete', function(event){

    deleteItem(state);
    $(event.target).closest('li').remove();
  });
}
$(function(){
  handleCheckToggles();
  handleItemDeletes();
  handleAddingItems();
});
