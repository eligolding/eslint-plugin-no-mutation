# eslint-plugin-no-mutation

Warns against use of methods that mutate arrays.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-mutation`:

```
$ npm install eslint-plugin-no-mutation --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-mutation` globally.

## Usage

Add `no-mutation` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-mutation"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-mutation/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





