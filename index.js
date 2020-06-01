
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

	function carosuel() {
		
		let interval = setInterval(animation,1000);
		let pslide = 3;
		i=0;
		function animation()
		{
			
				document.getElementById('frame1').innerHTML = '<div style="transform: translateX('+i+'px);" class="frame"><img src="frame'+pslide+'.jpg"</div>';
			pslide--;
			if (pslide<=0)
			pslide=3;
			document.getElementById('frame2').innerHTML = '<div style="transform: translateX('+i+'px); scale(2);" class="frame"><img src="frame'+pslide+'.jpg"</div>';
			pslide--;
			if (pslide<=0)
			pslide=3;
			document.getElementById('frame3').innerHTML = '<div style="transform: translateX('+i+'px);" class="frame"><img src="frame'+pslide+'.jpg"</div>';
			pslide += 1;
			if (pslide > 3)
			pslide=1;

		}
		
		
		
}
function pesel()
{
    const pesel = document.getElementById('pesel').value

    let suma = 0;

	for (i=0;i<10;i++)
	{   
		waga = [9,7,3,1];
		suma+= pesel.slice(i,i+1)*waga[i%4];
	}


    if (suma%10 == pesel.slice(10,11))
    {

    let miesiac = pesel.slice(2,4);

    if  (pesel.slice(9,10)%2==0)
    {
      document.getElementById('plec').innerHTML = '|kobieta';
    }
    else
    {
      document.getElementById('plec').innerHTML = 'mężczyzna';
    }

    if (80<miesiac && miesiac<93)
    {
        rok = '18'+pesel.slice(0,2);
        miesiac-=80;
    }
    else if (0<miesiac && miesiac<13)
    {
        rok = '19'+pesel.slice(0,2);
    }
    else if (20<miesiac && miesiac<33)
    {
        rok = '20'+pesel.slice(0,2);
        miesiac-=20;
    }
    else if (40<miesiac && miesiac<53)
    {
        rok = '21'+pesel.slice(0,2);
        miesiac-=40;
    }
    else 
    {
        rok = '22'+pesel.slice(0,2);
        miesiac -= 60;
    }

    miesiace = ['styczeń','luty','marzec','kwiecień','maj','czerwiec','lipec','sierpień','wrzesień','październik','listopad','grudzień'];
    
    document.getElementById('rok').innerHTML = rok;
    document.getElementById('miesiac').innerHTML = '-'+miesiace[miesiac-1];
    document.getElementById('dzien').innerHTML = '-'+pesel.slice(4,6);

    }
    else
    {
        document.getElementById('answer').innerHTML = 'podany adres pesel jest niepoprawny!';
    }
    
}