const mySQL = require("mysql");
const app = require("./app");
const http = require("http");
const socketio = require("socket.io");
const { MYSQL_HOST, MYSQL_DATABASE, MYSQL_USER, MYSQL_PASS } = process.env;

//socket io
const server = http.createServer(app);
const io = socketio(server).sockets;

io.on("connection", (socket) => {
  const id = socket.handshake.query.user_id;

  console.log("a user connected ...", id, socket.id);

  socket.join(id);

  socket.on("chat message", (msg, id_recepient, room_id) => {
    console.log(msg);
    //console.log(msg.sender);
    console.log(id_recepient);
    io.to(id_recepient).to(id).emit(room_id, msg);
  });

  socket.on("sending", (customer_id) => {
    io.to(customer_id).emit(
      "sending customer",
      "Your product is being shipped now"
    );
    io.to(id).emit("sending seller", "Product status is Shipping now");
  });

  socket.on("recieved", (seller_id) => {
    io.to(seller_id).emit(
      "recieved seller",
      "Customer has received the product"
    );
    io.to(id).emit("recieved customer", "Product status is Delivered now");
  });
});
//socket io

// Create connection
const db = mySQL.createConnection({
  // Setting DB
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASS,
  database: MYSQL_DATABASE,
});

// Connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL connected...");
});

const port = 8000;

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
