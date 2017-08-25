var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
      'article-one': {
         title:'Article One | Nitish',
         heading:'Articleone',
         date:'Sept 19,2017',
         content:`                <p>
                    This is content of my first article.
                </p>`},
      'article-two': {    
          title:'Article Two | Nitish',
          heading:'Articletwo',
          date:'Sept 20,2017',
          content:`                <p>
                    This is content of my second article.
                </p>`},
      'article-three': {    
          title:'Article Three | Nitish',
          heading:'Articlethree',
          date:'Sept 21,2017',
          content:`                <p>
                    This is content of my third article.
                </p>`}         
};

function createtemplate (data) {
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;
var htmltemplate = `<!doctype html>
<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width-device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
                <a href='/'>Home</a>
            </div>
            <div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
            </div>
            <div>
                ${date}
            </div>
            <div>
               ${content}
               <img src="https://s-media-cache-ak0.pinimg.com/originals/68/79/32/687932686bbefb49b1ac012ad2c4b3ab.jpg" alt="Shruti Hasan">
            </div>
        </div>
    </body>
</html>`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter = 0;
app.get('/' , function (req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});
app.get('/:articleName',function(req,res){
    var articleName = req.params.articleName;
  res.send(path.join(createtemplate(articles[articleName])));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
