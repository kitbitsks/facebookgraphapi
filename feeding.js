

$(document).ready(()=>{
	let getdetails= () => {
			let token = document.getElementById("tok2").value;
		$.ajax({
				type: 'GET',
				datatype: 'json',
				async : true,
				url : 'https://graph.facebook.com/me?fields=feed.limit(5){picture,description,full_picture,type,link,story,created_time},cover,picture,books&access_token='+token ,
			success: (response) => {
				console.log(response);
				$("#ct").text(response.feed.data[0].created_time)
				$("#tp").text(response.feed.data[0].type)
				$("#des").text(response.feed.data[0].description)
				$("#def1").text(response.feed.data[0].story)
				let pic1=response.picture.data.url
				$("#pic").append('<img class="img-thumbnail" alt="Missing Image" width=150em src="' + pic1 + '"/>');
				let pic2=response.cover.source;
				$("#piccc").append('<img class="card-img-top"  alt="Missing Image" src="' + pic2 + '"/>');
				let picf1=response.feed.data[0].full_picture
				$("#picfeed1").append('<img class="rounded float-left" alt="missing image" width=150em src="' + picf1 + '"/>');
				let link1=response.feed.data[0].link
				$('#fbtn1').click(function() {
   				window.location = link1;});
			

				$("#ct1").text(response.feed.data[1].created_time)
				$("#def2").text(response.feed.data[1].story)
				$("#tp1").text(response.feed.data[1].type)
				$("#des1").text(response.feed.data[1].description)
				let picf11=response.feed.data[1].full_picture
				$("#picfeed11").append('<img class="rounded float-left" alt="missing image" width=150em src="' + picf11 + '"/>');
				let link11=response.feed.data[1].link
				$('#fbtn11').click(function() {
   				window.location = link11;});
			
				$("#ct2").text(response.feed.data[2].created_time)
				$("#def3").text(response.feed.data[2].story)
				$("#tp2").text(response.feed.data[2].type)
				$("#des2").text(response.feed.data[2].description)
				let picf12=response.feed.data[2].full_picture
				$("#picfeed12").append('<img class="rounded float-left" alt="missing image" width=150em src="' + picf12 + '"/>');
				let link12=response.feed.data[2].link
				$('#fbtn12').click(function() {
   				window.location = link12;});
			
				$("#ct3").text(response.feed.data[3].created_time)
				$("#def4").text(response.feed.data[3].story)
				$("#tp3").text(response.feed.data[3].type)
				$("#des3").text(response.feed.data[3].description)
				let picf13=response.feed.data[3].full_picture
				$("#picfeed13").append('<img class="rounded float-left" alt="missing image" width=150em src="' + picf13 + '"/>');
				let link13=response.feed.data[3].link
				$('#fbtn13').click(function() {
   				window.location = link13;});
			
			
			},
			error : (err) => {
				console.log(err.responseJSON.error.message);
			}

		});
	}
			$("#btn2").on("click",getdetails);
		});

