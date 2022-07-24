//gulp буде використовувати такі пакети
const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const autoPrefix = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');

//Static server
//сервер сам знайде файл index.html
gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    }
  });
});

//створюєм задачу по компіляції стилів sass в css
gulp.task('styles', function() {
  return gulp.src('src/sass/*.+(scss|sass)') //берем файли sass або scss
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) //компілюєм в css і одночасно оптимізовуєм
    .pipe(rename({ //після компіляції файла переіменовуєм його (щоб він не заміщував файл style.css)
      prefix: '',
      suffix: '.min',
    }))
    .pipe(autoPrefix({ //добавляєм вендорні префікси в готовий css файл
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCss({ //оптимізовуєм файл css
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('src/css')) //зкомпільовані css файли ставимо в папку css
    .pipe(browserSync.stream()); //запускаєм browserSync щоб зміни відобразились на сайті
});

//включаєм слідкування gulp за оновленням файлів
gulp.task('watch', function() {
  gulp.watch('src/sass/*.+(scss|sass)', gulp.parallel('styles'));
  gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('default', gulp.parallel('watch', 'server', 'styles')); //запускаєм декілька задач одночасно