

$(document).ready(()=>{
		
	let getdetails= () => {
		var token = document.getElementById("tok2").value;

		$.ajax({
				type: 'GET',
				datatype: 'json',
				async : true,
				url : 'https://graph.facebook.com/me?fields=name,email,education,birthday,gender,hometown,cover,picture,books&access_token='+token ,
			success: (response) => {
				console.log(response);
				$("#n").text(response.name);
				$("#e").text(response.email);
				$("#ab").text(response.about);
				$("#birth").text(response.birthday);
				let pic1=response.picture.data.url
				$("#pic").append('<img class="img-thumbnail" alt="Missing Image" width=150em src="' + pic1 + '"/>');
				let pic2=response.cover.source;
				$("#piccc").append('<img class="card-img-top"  alt="Missing Image" src="' + pic2 + '"/>');
				$("#gender").text(response.gender);
				$("#Hometown").text(response.hometown.name);
				let book1 = () =>
				{
					let s="";
					for (x=0;x<response.books.data.length;x++)
					{
						s+=response.books.data[x].name+",";
					}
					return s;
				}
				$("#Books").text(book1());
				$("#Education").text(education1());
				function education1()
				{
					var s="";
					for (x=0; x<response.education.length;x++)
						s+= "\n"+response.education[x].school.name+","
					return s;
				}	
				
				
			},
			error : (err) => {
				console.log(err.responseJSON.error.message);
			}

		});
	}
			$("#btn2").on("click",getdetails);
		});

