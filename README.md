#Notification Service:

The web app allows the users to upload a file into “/upload/” directory  and can decide to restrict at max 3 number of sessions from getting the notification .

#Dependencies:

Express =4.*.*
ejs=0.0.0
fs=5.*.*
path=5.*.*
body-parser=1.*.*
multer
socket.io
http

#Install dependencies:
$npm install</c></p>


#How to use:</c></p>

1. Clone the git repo into desired location.
2. Install dependencies using [$npm install]
3. Start the server [$nodejs notify.js]
4. Open the url="localhost:9000/” . {all the files uploaded by the sessions can be viewed.at bottom there is upload form and restriction form. and at right-hand-side there is a notification panel }.
