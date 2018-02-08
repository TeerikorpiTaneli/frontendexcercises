$().ready(function(){

	$(#"form").validate({
		rules: {
			firstName: "required",
			lastName: "required"
		}
	});
})