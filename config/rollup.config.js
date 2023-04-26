
const formats = ['es', 'amd', 'cjs', 'iife', 'umd', 'system']

export default {
    input: './src/test.js',
    output: formats.map(format => {
        return {
            file: `dist/bundletest.${format}.js`,
            format: format
        }
    })
}