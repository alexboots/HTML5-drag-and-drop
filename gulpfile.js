var http = require('http')
    , gulp = require('gulp')
    , less = require('gulp-less')
    , jshint = require('gulp-jshint')
    , uglify = require('gulp-uglify')
    , concat = require('gulp-concat')
    , watch = require('gulp-watch')
    , ecstatic = require('ecstatic')
    , hostname = '127.0.0.1'
    , jsUrl = './app/js/*.js'
    , lessUrl = './app/css/*.less'
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


gulp.task('less', function() {
  gulp.src(lessUrl)
    .pipe(watch(lessUrl))
    .pipe(less())
    .pipe(gulp.dest('./app/css/'));
});

gulp.task('watch-js', function() {
  gulp.watch(jsUrl, ['minify-js']);
});

gulp.task('minify-js', function() {  
  gulp.src(jsUrl)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(uglify())
    .pipe(concat('dragonDrop.min.js'))
    .pipe(gulp.dest('./app/js/dist/'));
});

gulp.task('default', ['serve', 'less', 'minify-js', 'watch-js']);
