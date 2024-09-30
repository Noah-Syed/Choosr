
//Express and Socket Boilerplate, stolen from docs
const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const cors = require('cors')
const app = express()
const server = http.createServer(app)
const bodyParser = require('body-parser');

// Enable CORS so that I can actually send and receive requests without errors.
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

app.use(cors({
  origin: 'http://localhost:3000',  // Allow requests from this origin
  methods: ['GET', 'POST'],  // Specify allowed HTTP methods
  //credentials: true,  // If you are dealing with cookies/authentication
}));

//0 initial connections
let peopleConnected = 0;
io.on('connection', (socket) => {
 
  peopleConnected++;
  
  console.log("Someone Joined! Connected Users: " + peopleConnected);
  

  //This decides which initial web page is shown
  if (peopleConnected === 1) {
    socket.emit('user-status', { isFirstUser: true });
  } else {
    socket.emit('user-status', { isFirstUser: false });
  }
  console.log("Emitted to Client!");


  //Handle disconnects?
  io.on('disconnect', (scoket) => {
    peopleConnected--;
    console.log('Someone Left D:');
  })
})

app.use(bodyParser.urlencoded({ extended: true })); // To handle form data
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  console.log("Successful post request!!!!");
  const userInput = req.body.inputName;
  console.log('Form input received:', userInput);
    
  let dataToSend = ["1", "2", "3"];
  
  console.log("Trying to send: ", dataToSend)

  io.emit('card-data', {data: dataToSend});

  io.emit('redirect', {url: '/swipe'});
  console.log("Emitted Redirect to all users!");  
  
  res.sendStatus(200);
  // You can process the data here
});

//start server
server.listen(3001, () => {
  console.log("Magic happens on port 3001 ^_^");
})


