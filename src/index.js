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

export {
  listLanguageCodes,
  getLanguageName,
  getLanguageCultures,
  getCountryLanguages
};
