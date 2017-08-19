console.log('Loaded!');
//change content
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';
//move element
var img = document.getElementById('modi');
img.onclick = function()
{
    img.style.marginLeft = '100px';
};