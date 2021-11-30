var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('crypto.db');

db.serialize(() => {
    db.run("CREATE TABLE spot (crypto VARCHAR(20), fiat VARCHAR(20), amount REAL, price REAL, date TEXT)");
});
