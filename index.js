function odliczanie()
	{
		let today = new Date();
		
		let day = today.getDate();

		let month = today.getMonth()+1;
		if (month<10) month = "0"+month;

		let year = today.getFullYear();
		
		let hour = today.getHours();
		if (hour<10) hour = "0"+hour;
		
		let minute = today.getMinutes();
		if (minute<10) minute = "0"+minute;
		
		let second = today.getSeconds();
		if (second<10) second = "0"+second;

		

		document.getElementById("timer").innerHTML = day+"."+month+"."+year+" | "+hour+":"+minute+":"+second; 
		 setTimeout("odliczanie()",1000);
	}
	function transform(event) {
		var x = event.clientX;
		var y = event.clientY;
		
		y-=360;

		var styles = `
		.container
		{ 
			margin-top:50px;
			
			transform: skewy(`+y/32+`deg) skewx(`+x/64+`deg) rotate(`+(y)/3+`deg);
		}
	`
	
	var styleSheet = document.createElement("style")
	styleSheet.type = "text/css"
	styleSheet.innerText = styles
	document.head.appendChild(styleSheet)

	  }