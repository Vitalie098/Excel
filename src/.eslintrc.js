module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        babelOptions: {
            configFile: './babel.config.json',
        }
    },
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: ['eslint:recommended', 'google'],
    rules: {
        'indent': 'off',
        'semi': 'off',
        'comma-dangle': 'off',
        'require-jsdoc': 'off',
        "linebreak-style": 0,
        'padded-blocks': 'off',
        'arrow-parens': 'off',
        'quotes': 'off',
        'operator-linebreak': 'off',
        'eol-last': ["error", "never"],
        'max-len': 'off'
    }
}
