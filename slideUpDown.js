$(document).on('click', '[data-action=delete]', function (e) {
  e.preventDefault();
  var $this   = $(this)
  var target  = $this.attr('data-target') 
  var targetConfirm = $this.attr('data-confirm') 
  var $target = $(target)
  var $targetConfirm = $(targetConfirma)

  $target.slideUp("fast");
  $targetConfirma.slideDown("fast");


});

$(document).on('click', '[data-action=undo]', function (e) {
  e.preventDefault();
  var $this   = $(this)
  var target  = $this.attr('data-target') 
  var targetConfirm  = $this.attr('data-confirm') 
  var $target = $(target)
  var $targetConfirm = $(targetConfirm)
  $targetConfirm.slideUp("fast");
  $target.slideDown("fast");
    
});


$(document).on('click', '[data-action=confirm]', function (e) {
  e.preventDefault()
  var $this   = $(this)
  var id   = $(this).data('id'); 
  var target  = $this.attr('data-target') 
  var $target = $(target)
  
  if (!id){return;}

  $.ajax({
          type: "POST",
          url: "",
          dataType: "json",
          cache: false,
          success: function(data) {
              
              /*Do something*/
          },
          error:function(xhr,errmsg,err) {
              console.log(xhr.status + ": " + xhr.responseText);
          } 
        });
  });