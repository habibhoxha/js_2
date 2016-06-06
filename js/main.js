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
		//var manufacturer = $(this).find(".phone_manufacturer").find("span").html();
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

		// $("#overlay").height("100%");
		$("#overlay").animate({
			height: "100%",
			duration: 500,
			opacity: "1"
		});
	});
	
	$("#overlay").click(function(){
		$(this).animate({
			height: "0",
			opacity: "0"
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


	var data = {
		"phones": [
			{
				"id": 1,
				"image": "images/sony-xperia-z3.jpg",
				"image_large": "images/sony-xperia-z3-large.jpg",
				"name": "Sony Xperia Z3",
				"manufacturer": "Sony",
				"storage": "16 GB",
				"os": "Android",
				"camera": "15 Mpx"
			},
			{
				"id": 2,
				"image": "images/iphone6.jpg",
				"image_large": "images/iphone6-large.jpg",
				"name": "iPhone 6",
				"manufacturer": "Apple",
				"storage": "16 GB",
				"os": "iOS",
				"camera": "8 Mpx"
			},
			{
				"id": 3,
				"image": "images/htc-one.jpg",
				"image_large": "images/htc-one-large.jpg",
				"name": "HTC One M8",
				"manufacturer": "HTC",
				"storage": "32 GB",
				"os": "Android",
				"camera": "5 Mpx"
			},
			{
				"id": 4,
				"image": "images/galaxy-alpha.jpg",
				"image_large": "images/galaxy-alpha-large.jpg",
				"name": "Galaxy Alpha",
				"manufacturer": "Samsung",
				"storage": "32 GB",
				"os": "Android",
				"camera": "12 Mpx"
			}
		]
	};

	console.log(data);

	var phones = data.phones;

	for(var i=0; i<phones.length; i++) {
		var phone = phones[i];
		var name = phone.name
		console.log(phone.name);

		var html = '';
		html += '<div class="col-md-3 ">' +
			'<div class="phone">' +
			'<div class="phone_thumbnail thumbnail">' +
			'<img data-large-image="'+phone.image_large+'" src="'+phone.image+'">' +
			'</div>' +
			'<div class="phone_title">' +
			phone.name +
			'</div>' +
			'<div class="phone_manufacturer">' +
			'	Manufacturer: <span>'+phone.manufacturer+'</span>' +
			'</div>' +
			'<div class="phone_storage">' +
			'	Storage: <span>'+phone.storage+' GB</span>' +
			'</div>' +
			'<div class="phone_os">' +
			'	OS: <span>'+phone.os+'</span>' +
			'</div>' +
			'<div class="phone_camera">' +
			'	Camera: <span>'+phone.camera+'</span>' +
			'</div>' +
			'</div>' +
			'</div>';

		console.log(html);
		$("#phone_list").append(html);
	}




		$.getJSON("http://jsonplaceholder.typicode.com/users", function(data){
			var users = data;
			console.log(users);

			var html = '<ul>';

			for(var i=0; i<users.length; i++) {
				var user = users[i];
				html += '<li class="usr" data-user-id="'+user.id+'">'+user.username+'</li>';
			}

			html += '</ul>';

			$("#users_list").append(html);


		});

		$( document ).on( "click", "ul li.usr", function() {
			var user_id = $(this).attr("data-user-id");
			var url = "http://jsonplaceholder.typicode.com/posts?userId="+user_id;

			$("#posts_list").html("Loading...");


			$.getJSON(url, function(data){
				var posts = data;
				console.log(posts);

				var html = '<ul>';

				for(var i=0; i<posts.length; i++) {
					var post = posts[i];
					html += '<li class="post" data-post-id="'+post.id+'">'+post.title+'</li>';
				}

				html += '</ul>';

				$("#posts_list").html(html);

			}).done(function(){
				$("#comments_list").html("");
			});
		});

	$( document ).on( "click", "ul li.post", function() {
		var post_id = $(this).attr("data-post-id");
		var url = "http://jsonplaceholder.typicode.com/comments?postId="+post_id;

		$("#comments_list").html("Loading...");
		$.getJSON(url, function(data){
			var comments = data;
			console.log(comments);

			var html = '<ul>';

			for(var i=0; i<comments.length; i++) {
				var comment = comments[i];
				html += '<li class="comment" data-comment-id="'+comment.id+'">';
				html += '<div class="comment_name">'+comment.name+'</div>';
				html += '<div class="comment_body">'+comment.body+'</div>';
				html += '</li>';
			}

			html += '</ul>';

			$("#comments_list").html(html);

		});
	});

});