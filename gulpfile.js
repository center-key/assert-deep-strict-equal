// assert-deep-strict-equal
// gulp configuration and tasks

// Imports
import gulp from        'gulp';
import header from      'gulp-header';
import mergeStream from 'merge-stream';
import rename from      'gulp-rename';
import size from        'gulp-size';
import { readFileSync } from 'fs';

// Setup
const pkg =    JSON.parse(readFileSync('./package.json'));
const home =   pkg.repository.replace('github:', 'github.com/');
const banner = '//! assert-deep-strict-equal v' + pkg.version + ' ~ ' + home + ' ~ MIT License\n\n';

// Tasks
const task = {

   makeDistribution() {
      const buildDts = () =>
         gulp.src('build/assert-deep-strict-equal.d.ts')
            .pipe(header(banner))
            .pipe(size({ showFiles: true }))
            .pipe(gulp.dest('dist'));
      const buildEsm = () =>
         gulp.src('build/assert-deep-strict-equal.js')
            .pipe(header(banner))
            .pipe(size({ showFiles: true }))
            .pipe(gulp.dest('dist'));
      const buildUmd = () =>
         gulp.src('build/umd/assert-deep-strict-equal.js')
            .pipe(header(banner))
            .pipe(rename({ extname: '.umd.cjs' }))
            .pipe(size({ showFiles: true }))
            .pipe(gulp.dest('dist'));
      return mergeStream(buildDts(), buildEsm(), buildUmd());
      },

   };

// Gulp
gulp.task('make-dist', task.makeDistribution);
