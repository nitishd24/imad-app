console.log('Loaded!');
//change content
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';
//move element
var img = document.getElementById('modi');
function moveRight ()
{
    marginLeft = marginLeft +1;
    img.style.marginLeft = marginLeft +'px';
}
img.onclick = function()
{
    var interval = setinterval(moveRight, 50);
};