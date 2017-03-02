var mysql = require('mysql');

var api = module.exports = function(opts) {
  if (!opts) {
    throw new Error('missing args');
  }
  this.connection = mysql.createConnection(opts);
}

api.prototype.start = function() {
  this.connection.connect();
}

api.prototype.stop = function() {
  this.connection.end();
}

api.prototype.query = function(query, cb) {
  this.connection.query(query, cb);
}
