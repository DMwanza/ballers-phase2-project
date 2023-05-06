# Jest Learn Reporter

A Jest reporter for the [learn-test](https://github.com/learn-co/learn-test)
gem. Will probably break if any of
[this](https://github.com/learn-co/learn-test/blob/master/lib/learn_test/strategies/mocha.rb)
changes.

## Installation

Using [npm](https://www.npmjs.com/):

```sh
npm install @learn-co-curriculum/jest-learn-reporter
```

Using [yarn](https://yarnpkg.com/):

```sh
yarn add @learn-co-curriculum/jest-learn-reporter
```

## Usage

Jest CLI:

```sh
jest --reporters=@learn-co-curriculum/jest-learn-reporter
```

Jest config:

```json
{
  "reporters": ["@learn-co-curriculum/jest-learn-reporter"]
}
```

## License

MIT
