var API = require('../lib/api'),
    settings = require('../settings.json'),
    cats = new API({
      host: settings.host,
      user: settings.user,
      password: settings.password,
      database: settings.database
    }),
    test = require('tape');

cats.start();

test('SELECT *', function(t){
  function mapName(arr) {
    return arr.map(function(o){
      return o.name;
    }).join()
  }

  cats.query('SELECT * FROM kittehs;', function(err, res, fields){
    t.error(err);

    t.equal(mapName(res), 'Bixa,Rex,kitty', 'all kittehs');

    cats.stop();

    t.end();

  });
});
