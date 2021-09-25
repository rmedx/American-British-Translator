const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    // Translation with text and locale fields: POST request to /api/translate
    test('Translation with text and locale fields: POST request to /api/translate', function(done) {
        chai.request(server)
            .post('/api/translate')
            .type('form')
            .send({text: 'I ate yogurt for breakfast.', locale: 'american-to-british'})
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.body.text, 'I ate yogurt for breakfast.')
                assert.equal(res.body.translation, 'I ate <span class=\"highlight\">yoghurt</span> for breakfast.');
                done();
            });
    });
    // Translation with text and invalid locale field: POST request to /api/translate
    test('Translation with text and invalid locale field: POST request to /api/translate', function(done) {
        chai.request(server)
            .post('/api/translate')
            .type('form')
            .send({text: 'I ate yogurt for breakfast.', locale: 'invalid'})
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.body.error, 'Invalid value for locale field')
                done();
            });
    });
    // Translation with missing text field: POST request to /api/translate
    test('Translation with missing text field: POST request to /api/translate', function(done) {
        chai.request(server)
            .post('/api/translate')
            .type('form')
            .send({locale: 'american-to-british'})
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.body.error, 'Required field(s) missing')
                done();
            });
    });
    // Translation with missing locale field: POST request to /api/translate
    test('Translation with missing locale field: POST request to /api/translate', function(done) {
        chai.request(server)
            .post('/api/translate')
            .type('form')
            .send({text: 'I ate yogurt for breakfast.'})
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.body.error, 'Required field(s) missing')
                done();
            });
    });
    // Translation with empty text: POST request to /api/translate
    test('Translation with empty text: POST request to /api/translate', function(done) {
        chai.request(server)
            .post('/api/translate')
            .type('form')
            .send({text: '', locale: 'american-to-british'})
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.body.error, 'No text to translate')
                done();
            });
    });
    // Translation with text that needs no translation: POST request to /api/translate
    test('Translation with text that needs no translation: POST request to /api/translate', function(done) {
        chai.request(server)
            .post('/api/translate')
            .type('form')
            .send({text: 'I ate.', locale: 'american-to-british'})
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.body.text, 'I ate.')
                assert.equal(res.body.translation, 'Everything looks good to me!')
                done();
            });
    });    
});
