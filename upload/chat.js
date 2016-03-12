var express = require('express');
var parser = require('body-parser'),
    multer  = require('multer'),
    fs = require('fs'),
    path = require('path');

var app= new express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/views'));
app.set('views',__dirname+'/views');
app.set('view engine','ejs');
app.use(parser.urlencoded({ extended: false }));

/* Shows the directory list */
app.get('/',function(req,res){
	fs.readdir(path.join(process.cwd(),"/upload/"),function(err,files){
		var files_not_folders = [] ;
		files.forEach(function(ele,indx,arr){
			if(fs.lstatSync(path.join(process.cwd(),"/upload/",ele)).isFile()){
				files_not_folders.push(ele);
			}
		})
		res.render("dir.ejs",{files:files_not_folders});
	});
});

/*
io.on('connection', function(socket){
	console.log('a user connected');
			app.post('/', 
		  	multer({dest:'process.cwd()'}).single('upload'),function(req, res){ 
			var tmp_path = req.file.path;
		    var target_path = process.cwd()+'/'+req.file.originalname ;
		    var src = fs.createReadStream(tmp_path);
		    var dest = fs.createWriteStream(target_path);
		    src.pipe(dest);
		    res.redirect("/");
			})
    socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    socket.broadcast.emit('hi');
  });
});

*/

http.listen(16070, function(){
  console.log('listening on *:3000');
});