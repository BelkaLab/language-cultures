import { languages } from './languages';

function listLanguageCodes() {
  return Object.keys(languages);
}

function getLanguageName(langCode) {
  if (!langCode) {
    return undefined;
  }

  // validate input to be in the format `[lang]-[country]`
  const [lang, country] = langCode.split('-');
  if(!lang || !country) {
    return undefined;
  }

  // fix case on input: `[lang]-[COUNTRY]`
  const fixedlangCode = `${lang.toLowerCase()}-${country.toUpperCase()}`;

  if (fixedlangCode in languages) {
    return languages[fixedlangCode].name;
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
