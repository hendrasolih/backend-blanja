const mysql = require('mysql');
const app = require('./app');

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'web_blanja'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySQL connected...');
});

const port =8000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});