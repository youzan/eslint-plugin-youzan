# eslint-plugin-youzan

Eslint plugin for youzan

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-youzan`:

```
$ npm install eslint-plugin-youzan --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-youzan` globally.

## Usage

Add `youzan` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "youzan"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "youzan/rule-name": 2
    }
}
```

## Supported Rules

* [youzan/youzan-standard-words](https://github.com/youzan/eslint-plugin-youzan/blob/master/docs/rules/youzan-standard-words.md)





