var button = document.getElementById('counter');
var count =0;
/*button.onclick = function ()  {
    
    var request =new XMLHttpRequest();
    
    request.onreadystatechange = function () {
      if(request.readyState === XMLHttpRequest.DONE) {
          if(request.status === 200) {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML = counter.toString();
          }
      } 
    };
    
    request.open('GET',"http://nitishkumar24oct.imad.hasura-app.io/counter", true);
    request.send(null);
};
*/
button.onclick = function() {
    count = count + 1;
    var span =document.getElementById('counter');
    span.innerHTML = count.toString();
};