/**
 * Source form https://css-tricks.com/gulp-for-wordpress-creating-the-tasks/
 */
import { src, dest, watch, series, parallel } from 'gulp';

import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
const PRODUCTION = yargs.argv.prod;
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import imagemin from 'gulp-imagemin';
import del from 'del';
import named from 'vinyl-named';
import browserSync from "browser-sync";
import zip from "gulp-zip";
import info from "./package.json";
import replace from "gulp-replace";
import webpack from 'webpack-stream';
import wpPot from "gulp-wp-pot";

export const styles = () => {
    return src('src/scss/theme.scss')
        .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulpif(PRODUCTION, postcss([ autoprefixer ])))
        .pipe(gulpif(PRODUCTION, cleanCss({compatibility:'ie8'})))
        .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
        .pipe(dest('dist/css'))
        .pipe(server.stream());
}

export const images = () => {
    return src('src/images/**/*.{jpg,jpeg,png,svg,gif}')
        .pipe(gulpif(PRODUCTION, imagemin()))
        .pipe(dest('dist/images'));
}




export const copy = () => {
    return src(['src/**/*','!src/{images,js,scss}','!src/{images,js,scss}/**/*'])
        .pipe(dest('dist'));
}



export const scripts = () => {
    return src(['src/js/app.js','src/js/admin.js'])
        .pipe(named())
        .pipe(webpack({
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: []
                            }
                        }
                    }
                ]
            },
            mode: PRODUCTION ? 'production' : 'development',
            devtool: !PRODUCTION ? 'inline-source-map' : false,
            output: {
                filename: '[name].js'
            },
            externals: {
                jquery: 'jQuery'
            },
        }))
        .pipe(dest('dist/js'));
}
export const clean = () => del(['dist']);


export const watchForChanges = () => {
    watch('src/scss/**/*.scss', series(styles, reload));
    watch('src/images/**/*.{jpg,jpeg,png,svg,gif}', series(images, reload));
    watch(['src/**/*','!src/{images,js,scss}','!src/{images,js,scss}/**/*'], series(copy, reload));
    watch('src/js/**/*.js', series(scripts, reload));
    watch("**/*.php", reload);

}


const server = browserSync.create();
export const serve = done => {
    server.init({
        proxy: "https://demo.test:8890" // put your local website link here
    });
    done();
};
export const reload = done => {
    server.reload();
    done();
};

export const compress = () => {
    return src([
        "**/*",
        "!node_modules{,/**}",
        "!bundled{,/**}",
        "!src{,/**}",
        "!.babelrc",
        "!.gitignore",
        "!gulpfile.babel.js",
        "!package.json",
        "!package-lock.json",
    ])
        .pipe(
            gulpif(
                file => file.relative.split(".").pop() !== "zip",
                replace("alpha-elemenda", info.name)
            )
        )
        .pipe(zip(`${info.name}.zip`))
        .pipe(dest('bundled'));
};

export const pot = () => {
    return src("**/*.php")
        .pipe(
            wpPot({
                domain: "alpha-elemenda",
                package: info.name
            })
        )
        .pipe(dest(`languages/${info.name}.pot`));
};


export const dev = series(clean, series(styles, images, copy, scripts), serve, watchForChanges);
export const build = series(clean, parallel(styles, images, copy, scripts), pot, compress);

export default dev;