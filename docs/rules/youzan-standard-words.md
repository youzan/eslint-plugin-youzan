# youzan standard words (youzan-standard-words)

## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js
const a = '登陆';
```

Examples of **correct** code for this rule:

```js
const a = '登录';
```

## Options
This rule has an object option:

+ `ignore（string[]）`  does not check the keyword of the list. Accept regex.

### ignore

Examples of correct code for this rule with the allow option:

```js
/*"youzan/youzan-standard-words": ["error", { "ignore": ["登陆"] }]*/

const a = "登陆"
```
## Link

[有赞标准词汇库](https://design.youzan.com/strategy/standard-library.html)
