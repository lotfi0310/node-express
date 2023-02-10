var http =require('http');
var url=require('url');
var querystring=require('querystring')
var server = http.createServer(function(req,res){
    var page=url.parse(req.url).pathname;
    var params= querystring.parse(url.parse(req.url).query);
    console.log(page);
    console.log(params);
    res.writeHead(200,{"Content-Type":"Text/plain"});

    if(page=='/'){
        res.write('vous ete dans la page d\' accceuil'); 

    }
    else if (page=='/contact'){
        res.write('vous ete dans la page de contact !' ); 

    }
    else if (page=='/affichage/1/user/'){
       res.write('afficher l\'utilisateur qui a l\'id  1 !' );
    }
    else if (page=='/login'){
        if( 'id' in params && 'username' in params) {
            res.write('votre id est :' +params['id']+' et votre nom est : '+params['username']);

        }else{
            res.write('veuiller saisir votre username et votre id '); 
        }
    }
    else{
        res.write('page inconnue !!! '); 
    }
/*
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write('<DOCTYPE html>'+
    '<html>'+
    '<head>'+
    '<meta charset="utf-8"/>'+
    '<title> Ma page node.js !</title>'+
    '</head>'+
    '<body>'+
    '<p>voici un paragraphe en <strong>HTML !</strong> </p>'
    +'</body>'+'</html>');
    res.end();
*/
//res.write('bien on  avance !');
res.end();
});
server.listen(8080);