const express = require('express');
const sqlite3 = require('sqlite3');
const path = require('path');

var app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

var db = new sqlite3.Database('crypto.db');

log_enabled = true;
function log(str) {
    if (log_enabled) {
        console.log(str);
    }
}

function insert_spot(crypto, fiat, amount, price, date) {
    db.serialize(() => {
        var stmt = db.prepare('INSERT INTO spot VALUES (?, ?, ?, ?, ?);');
        stmt.run(crypto, fiat, amount, price, date);
        stmt.finalize();
    });
}

app.get('/investment/add/:crypto/:fiat/:amount/:purchase_price/:date/', (req, res) => {
    var crypto = req.params.crypto;
    var fiat = req.params.fiat;
    var amount = req.params.amount;
    var purchase_price = req.params.purchase_price;
    var date = req.params.date;
    log(`add investment crypto: ${crypto}, fiat: ${fiat}, amount: ${amount}, purchase price: ${purchase_price}, date: ${date}`);
    insert_spot(crypto, fiat, amount, purchase_price, date);
    res.send("OK");
});

app.listen(port, () => {
    log("listening...");
});