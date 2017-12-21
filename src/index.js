import { languages } from './languages';

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
    return;
  }

  const prefix = `${langCode.toLowerCase()}-`;

  return listLanguageCodes()
    .filter(c => c.indexOf(prefix) === 0);
}

function getCountryLanguages(countryCode) {

  if (!countryCode) {
    return;
  }

  const suffix = `-${countryCode.toUpperCase()}`;

  return listLanguageCodes()
    .filter(c => c.indexOf(suffix) === c.length - suffix.length);
}

export {
  listLanguageCodes,
  getLanguageName,
  getLanguageCultures,
  getCountryLanguages
};
