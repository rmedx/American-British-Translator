'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      console.log(req.body);
      if (!req.body.text || !req.body.locale) {
        if (req.body.text == "") {
          return res.send({ error: 'No text to translate' });
        }
        return res.send({ error: 'Required field(s) missing' });
      } else if (req.body.text.length == 0) {
        return res.send({ error: 'No text to translate' });
      } else if (req.body.locale != "american-to-british" && req.body.locale != "british-to-american") {
        return res.send({ error: 'Invalid value for locale field' });
      }
      let text = req.body.text;
      let locale = req.body.locale;
      let translation = translator.translate(text, locale);
      if (translation == text) {
        return res.send({text, translation: "Everything looks good to me!"});
      } else {
        return res.send({text, translation});
      }
    });
};
