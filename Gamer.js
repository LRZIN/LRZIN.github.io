var bola1 = document.querySelector('#bola1');
var bola2 = document.querySelector('#bola2');
var bola3 = document.querySelector('#bola3');
var bola4 = document.querySelector('#bola4');
var bola5 = document.querySelector('#bola5');
var bola6 = document.querySelector('#bola6');
var bola7 = document.querySelector('#bola7');
var bola8 = document.querySelector('#bola8');
var bola9 = document.querySelector('#bola9');
var bola10 = document.querySelector('#bola10');
var bola11 = document.querySelector('#bola11');
var bola12 = document.querySelector('#bola12');



var cmd = document.querySelector('#cmd');
var audio = document.querySelector('#audio');
                             
    function bolaa(){bola1.style.backgroundColor = cmd.value; audio.play();};
    function bolab(){bola2.style.backgroundColor = cmd.value; audio.play();};
    function bolac(){bola3.style.backgroundColor = cmd.value; audio.play();};
    function bolad(){bola4.style.backgroundColor = cmd.value; audio.play();};
    function bolae(){bola5.style.backgroundColor = cmd.value; audio.play();};
    function bolaf(){bola6.style.backgroundColor = cmd.value; audio.play();};
    function bolag(){bola7.style.backgroundColor = cmd.value; audio.play();};
    function bolah(){bola8.style.backgroundColor = cmd.value; audio.play();};
    function bolai(){bola9.style.backgroundColor = cmd.value; audio.play();};
    function bolaj(){bola10.style.backgroundColor = cmd.value; audio.play();};
    function bolak(){bola11.style.backgroundColor = cmd.value; audio.play();};
    function bolal(){bola12.style.backgroundColor = cmd.value; audio.play();};
                             
                             function limpar(){
                               bola1.style.backgroundColor = '#0000';
                               bola2.style.backgroundColor = '#0000';
                               bola3.style.backgroundColor = '#0000';
                               bola4.style.backgroundColor = '#0000';
                               bola5.style.backgroundColor = '#0000';
                               bola6.style.backgroundColor = '#0000';
                               bola7.style.backgroundColor = '#0000';
                               bola8.style.backgroundColor = '#0000';
                               bola9.style.backgroundColor = '#0000';
                               bola10.style.backgroundColor = '#0000';
                               bola11.style.backgroundColor = '#0000';
                               bola12.style.backgroundColor = '#0000';
                             }
                             
bola1.addEventListener('mouseover', bolaa);
bola2.addEventListener('mouseover', bolab);
bola3.addEventListener('mouseover', bolac);
bola4.addEventListener('mouseover', bolad);
bola5.addEventListener('mouseover', bolae);
bola6.addEventListener('mouseover', bolaf);
bola7.addEventListener('mouseover', bolag);
bola8.addEventListener('mouseover', bolah);
bola9.addEventListener('mouseover', bolai);
bola10.addEventListener('mouseover', bolaj);
bola11.addEventListener('mouseover', bolak);
bola12.addEventListener('mouseover', bolal);
