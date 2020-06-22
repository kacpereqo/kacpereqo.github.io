let complete = 1;
let font=0.2;
function loading()
{
    const bar = document.getElementById('loading');
    complete+=0.1;
    if(complete>=99)
    {
        complete=99;
    }
    font+=0.03;
    if (font>=20)
    {
     font=20;
    }
    console.log(complete);
    bar.innerHTML= Math.round(complete)+'% ukonczone';
    bar.style.width = complete+'%';
    bar.style.fontSize = font+'px';
    bar.style.letterSpacing= complete/10+'px';

    setTimeout("loading()",10)
}