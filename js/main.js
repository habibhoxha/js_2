$(document).ready(function(){
	
	// Navigation click
	$("#navbar li a").click(function(){
		var page = $(this).data("show");
		console.log(page);
		$(".section").hide();
		$("#"+page).show();
		
		//$(".section").fadeOut().promise().done(function(){
		//	$("#"+page).fadeIn();
		//});
		
	});
	
	$(".phone").click(function(){
		var title = $(this).find(".phone_title").html();
		var manufacturer = $(this).find(".phone_manufacturer span").html();
		var os = $(this).find(".phone_os").html();
		var storage = $(this).find(".phone_storage").html();
		var camera = $(this).find(".phone_camera").html();
		var image = $(this).find(".phone_thumbnail img").data("large-image");
		
		$("#phone_details").find(".phone_title").html(title);
		$("#phone_details").find(".phone_manufacturer span").html(manufacturer);
		$("#phone_details").find(".phone_os").html(os);
		$("#phone_details").find(".phone_storage").html(storage);
		$("#phone_details").find(".phone_camera").html(camera);
		$("#phone_details").find(".phone_thumbnail img").attr("src", image);
		
		$("#overlay").animate({
			height: "100%"
		});
	});
	
	$("#overlay").click(function(){
		$(this).animate({
			height: "0"
		});
	});
	
	
	$.getJSON("json/phones.json", function(data){
		var phones = data.phones;
		console.log(data.phones);
		
		for(var i=0; i<phones.length; i++) {
			var phone = phones[i];
			console.log(phone.name);
		}
	});
	
});