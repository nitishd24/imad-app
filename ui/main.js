console.log('Loaded!');
//change content
var element = document.getElementById('main-text');
element.innerHTML = 'SEXY Disha!!!!';
//move element
var img = document.getElementById('modi');
var marginLeft =0;
function moveRight ()
{
    marginLeft = marginLeft +1;
    img.style.marginLeft = marginLeft +'px';
}
img.onclick = function()
{
    var interval = setInterval(moveRight, 50);
};

function hello() {
    alert("Come back here you <em>SUCKER</em>")
}