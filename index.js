$("#js-shopping-list-form").on('submit', function(e){
    e.preventDefault();
      const newItem = $('#shopping-list-entry').val();
    $('.shopping-list').append(`<li>
    <span class="shopping-item">`+ newItem +`</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div></li>`);
    $('.shopping-list').val('');
  });
  
  $('.shopping-list').on('click', '.shopping-item-delete', function deleteItem(e) {
    e.preventDefault();
    $(this).closest('li').remove();
  });
  
  $('.shopping-list').on('click', '.shopping-item-toggle', function toggleItem(e) {
    e.preventDefault();
    $(this).closest('li').children('.shopping-item').toggleClass('shopping-item__checked');
  });