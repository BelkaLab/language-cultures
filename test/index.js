'use strict';

const languageCultures = require('../');
const expect = require('chai').expect;

describe('listLanguageCodes', function () {
  it('should return a language code list', function () {
    expect(languageCultures.listLanguageCodes()).to.be.an('array');
  });

  it('should count 150 languages', function () {
    expect(languageCultures.listLanguageCodes()).to.have.length.of(149);
  });

  it('should return language codes', function () {
    expect(languageCultures.listLanguageCodes().every(
      l => l.match(/[a-z]{2}-[A-Z]{2}/)
    )).to.be.true;
  });
});

describe('getLanguageName', function () {
  it('should return a language name', function () {
    expect(languageCultures.getLanguageName('en-US')).to.be.a('string');
  });

  it('should return undefined on invalid key', function () {
    expect(languageCultures.getLanguageName('invalid key')).to.be.undefined;
  });
});

describe('getLanguageCultures', function () {
  it('should return an array of languages', function () {
    expect(languageCultures.getLanguageCultures('en')).to.be.an('array');
  });

  it('should return an empty array on invalid lang code', function () {
    expect(languageCultures.getLanguageCultures('invalid lang code')).to.be.have.length.of(0);
  });
});

describe('getCountryLanguages', function () {
  it('should return an array of languages', function () {
    expect(languageCultures.getCountryLanguages('CH')).to.be.an('array');
  });

  it('should return an empty array on invalid country code', function () {
    expect(languageCultures.getCountryLanguages('invalid country code')).to.be.have.length.of(0);
  });
});
