var http = require('http')
    , gulp = require('gulp')
    , ecstatic = require('ecstatic')
    , hostname = '127.0.0.1'
    , port = 8080;

var path = {
  app: __dirname.concat('/app')
};


gulp.task('serve', function() {
  var instanceOfEcstatic = ecstatic({ root: path.app });
  http.createServer(function(request, response) {
    instanceOfEcstatic(request, response);
  }).listen(port, hostname);
});

gulp.task('default', ['serve']);
