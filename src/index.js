import languages from './languages';

function listLanguageCodes() {
  return Object.keys(languages);
}

function getLanguageName(langCode) {
  if (langCode in languages) {
    return languages[langCode].name;
  }

  return undefined;
}

function getLanguageCultures(langCode) {
  const prefix = `${langCode.toLowerCase()}-`;

  return listLanguageCodes()
    .filter(c => c.indexOf(prefix) === 0);
}

function getCountryLanguages(countryCode) {
  const suffix = `-${countryCode.toUpperCase()}`;

  return listLanguageCodes()
    .filter(c => c.indexOf(suffix) === c.length - suffix.length);
}

export {
  languages,
  listLanguageCodes,
  getLanguageName,
  getLanguageCultures,
  getCountryLanguages
};
