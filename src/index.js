import { languages } from './languages';
import { countries } from 'country-data';

function listLanguageCodes() {
  return Object.keys(languages);
}

function getLanguageName(langCode) {
  if (langCode && langCode in languages) {
    return languages[langCode].name;
  }

  return undefined;
}

function getLanguageCultures(langCode) {
  if (!langCode) {
    return undefined;
  }

  const prefix = `${langCode.toLowerCase()}-`;

  return listLanguageCodes()
    .filter(c => c.startsWith(prefix));
}

function getCountryLanguages(countryCode) {
  if (!countryCode) {
    return undefined;
  }

  const suffix = `-${countryCode.toUpperCase()}`;

  return listLanguageCodes()
    .filter(c => c.endsWith(suffix));
}

function getCountryData(c) {

  if (!c || typeof c !== 'string') {
    return; 
  }

  const uc = c.toUpperCase();
  if (Object.prototype.hasOwnProperty.call(countries, uc)) {
    const { name, currencies, languages } = countries[uc];
    return {
      name,
      currencies, 
      languages,
      country_code: c
    }
  }

}

export {
  getCountryData,
  listLanguageCodes,
  getLanguageName,
  getLanguageCultures,
  getCountryLanguages
};
