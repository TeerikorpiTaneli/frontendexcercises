$(function(){

  $("register-form").validate({
    rules: {
      firstName: {
        required: true,
      }
    }
  });
});