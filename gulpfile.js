var gulp = require('gulp');

var paths = {
    src: 'src/main/webapp',
    target: 'target/hot-swap-gulp-watch'
};

gulp.task('watch', function () {
    gulp.watch(paths.src + '/**/*.*', function(e){
        console.log("Aquivo alterado: " + e.path);

        // copia arquivos alterados para o diretório target
        // base é importante senão o gulp nao copia o arquivo com a estrutura do diretorio
        gulp.src(e.path, {base: paths.src})
            .pipe(gulp.dest(paths.target));
    });
});

gulp.task('default', ['watch']);