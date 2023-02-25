import json from "@rollup/plugin-json"
import htmlTemplate from 'rollup-plugin-generate-html-template';
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';


export default {
    input: 'src/main.js',
    output: {
        file: './dist/bundle.js',
        format: 'esm'
    },
    watch:{
        include:'src/**'
    },
    plugins: [
        json(),
        nodeResolve(),
        commonjs(),
        htmlTemplate({
            template: 'src/template.html',
            target: 'index.html',
        }),
        serve({
            open:true,
            contentBase:'dist',
            host: 'localhost',
            port: 10001,
        }),
        livereload({
            watch: 'dist',
            // port: 12345,
        })
    ]
}