module.exports = class Translator {
  constructor(filesList) {
    const translations = filesList.map(file => require(file));

    this.sourceStrings = translations.reduce((strings, trans) => {
      const locale = Object.keys(trans.translations)[0];
      const messagesPerDomain = Object.values(trans.translations[locale]);
      const translations = Object.values(messagesPerDomain).reduce(
        (allKeys, domainKeys) => Object.assign(allKeys, domainKeys),
        {}
      );

      return Object.assign(strings, translations);
    }, {});
  }

  getTranslation(key) {
    const translation = this.sourceStrings[key];

    return translation ? translation : key;
  }
};
