var express = require('express');
var parser = require('body-parser'),
    multer  = require('multer'),
    fs = require('fs'),
    path = require('path');

var app= new express();

var http = require('http').createServer();
var io = require('socket.io').listen(http);

app.use(express.static(__dirname));
app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.use(parser.urlencoded({ extended: false }));
var user=[];
var rest1=6;
var rest2=6;
var rest3=6;

/* Shows the directory list */
app.get('/',function(req,res){
	fs.readdir(path.join(process.cwd(),"/upload/"),function(err,files){
		var files_not_folders = [] ;
		files.forEach(function(ele,indx,arr){
			if(fs.lstatSync(path.join(process.cwd(),"/upload/",ele)).isFile()){
				files_not_folders.push(ele);
			}
		});
		res.render("dir.ejs",{files:files_not_folders});
	});
});


io.sockets.on('connection', function (socket) {
	
	console.log("new client connection attempt");
	
  	user.push(socket.id);

	app.post('/', 
		  	multer({dest:process.cwd()+'/temp/'}).single('upload'),function(req, res){ 
			var tmp_path = req.file.path;
		    var target_path = process.cwd()+'/upload/'+req.file.originalname ;
		    var src = fs.createReadStream(tmp_path);
		    var dest = fs.createWriteStream(target_path);
		    src.pipe(dest);
		    var rest1 = req.body.rest1-1;
		    var rest2 = req.body.rest2-1;
		    var rest3 = req.body.rest3-1;
		    for(i=0;i<user.length;i++)
		    {
		    	if((i!=rest1)&&(i!=rest2)&&(i!=rest3))
		    	    io.sockets.in(user[i]).emit('uploaded',{'uploaded':req.file.originalname});
		    }
            res.send('ok');
	});

});


http.listen(8000, function(){
	console.log('ws on 8000');
});


app.listen(9000,function(){
	console.log('http on 9000');
});

