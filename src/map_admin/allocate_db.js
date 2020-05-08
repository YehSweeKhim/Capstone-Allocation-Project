const mysql = require("mysql");
const fs = require("fs");

const {Allocator, Path} = require("./allocate.js");
const {SPACE1, SPACE2} = require("./space.js");

function setup_allocator(allocator) {

    allocator.load_grid(1, SPACE1);
    allocator.load_grid(2, SPACE2);
}

function get_allocation(allocator) {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'myuser',
        password: 'password',
        database: 'capstone_form',
        multipleStatements: true
    });

    connection.connect();
    connection.query('SELECT * FROM registration', (error, results, fields) => {
        if (error) throw error;
        allocator.load_booths_obj(results);

        allocator.allocate(65);
        connection.end();
    });
}

let allocator = new Allocator();

setup_allocator(allocator);
get_allocation(allocator);
