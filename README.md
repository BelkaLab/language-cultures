# Language-cultures

A ready-to-go language-cultures codes utility

[![npm version](https://badge.fury.io/js/language-cultures.svg)](https://badge.fury.io/js/language-cultures)
![Alt text](https://img.shields.io/badge/license-MIT-green.svg?style=flat)

```bash
$ npm install --save language-cultures
```

```js
// import all the module
import languageCultures from 'language-cultures';

languageCultures.getLanguageName('en-US');

// or import the single functions
import { getLanguageName } from 'language-cultures';

getLanguageName('en-US')
```

## API

It basically exports a few useful functions to list and describe *language codes*, complete with their respective *cultures* (e.g. the variants for each country in which is spoken), so for example `en-US`, `it-IT`, `es-ES`, ..

Here are the functions:

| Functions (w/ example parameters) | Description                                         | Output                                            |
|-----------------------------------|-----------------------------------------------------|---------------------------------------------------|
| listLanguageCodes()               | lists all the known language codes                  | ['af-ZA', 'ar-AE', 'ar-BH', 'ar-DZ', 'ar-EG', ..] |
| getLanguageName('en-US')          | describes the language                              | 'English - United States'                         |
| getLanguageCultures('en')         | lists all the language cultures of a given language | ['en-AU', 'en-BZ', 'en-CA', 'en-CB', 'en-GB', ..] |
| getCountryLanguages('CH')         | lists all the languages spoken in a country         | ['de-CH', 'fr-CH', 'it-CH']                       |

## Contributors
[Giovanni Frigo](https://github.com/giovannifrigo), Developer @[Belka](https://github.com/BelkaLab)

## License
language-cultures is Copyright (c) 2016 Belka, srl. It is free software, and may be redistributed under the terms specified in the LICENSE file. (TL;DR: MIT license)

## About Belka
![Alt text](http://s2.postimg.org/rcjk3hf5x/logo_rosso.jpg)

[Belka](http://belka.us/en) is a Digital Agency specialized in design, mobile applications development and custom solutions.
We love open source software! You can [see our projects](http://belka.us/en/portfolio/) or look at our case studies.

Interested? [Hire us](http://belka.us/en/contacts/) to help build your next amazing project.

[www.belka.us](http://belka.us/en)
