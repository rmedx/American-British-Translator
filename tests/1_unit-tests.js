const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator();

suite('Unit Tests', () => {
    // Translate Mangoes are my favorite fruit. to British English
    test('Translate Mangoes are my favorite fruit. to British English', () => {
        let inputText = 'Mangoes are my favorite fruit.';
        let locale = 'american-to-british';
        let output = translator.translate(inputText, locale);
        output = translator.removeHighlight(output);
        assert.equal(output, 'Mangoes are my favourite fruit.');
    });
    // Translate I ate yogurt for breakfast. to British English
    test('Translate I ate yogurt for breakfast. to British English', () => {
        let inputText = 'I ate yogurt for breakfast.';
        let locale = 'american-to-british';
        let output = translator.translate(inputText, locale);
        output = translator.removeHighlight(output);
        assert.equal(output ,'I ate yoghurt for breakfast.');
    });
    // Translate We had a party at my friend's condo. to British English
    test("Translate We had a party at my friend's condo. to British English", () => {
        let inputText = "We had a party at my friend's condo.";
        let locale = 'american-to-british';
        let output = translator.translate(inputText, locale);
        output = translator.removeHighlight(output);
        assert.equal(output ,"We had a party at my friend's flat.");
    });
    // Translate Can you toss this in the trashcan for me? to British English
    test('Translate Can you toss this in the trashcan for me? to British English', () => {
        let inputText = "Can you toss this in the trashcan for me?";
        let locale = 'american-to-british';
        let output = translator.translate(inputText, locale);
        output = translator.removeHighlight(output);
        assert.equal(output,"Can you toss this in the bin for me?");
    });
    // Translate The parking lot was full. to British English
    test('Translate The parking lot was full. to British English', () => {
        let inputText = "The parking lot was full.";
        let locale = 'american-to-british';
        let output = translator.translate(inputText, locale);
        output = translator.removeHighlight(output);
        assert.equal(output, "The car park was full.");
    });
    // Translate Like a high tech Rube Goldberg machine. to British English
    test('Translate Like a high tech Rube Goldberg machine. to British English', () => {
        let inputText = "Like a high tech Rube Goldberg machine.";
        let locale = 'american-to-british';
        let output = translator.translate(inputText, locale);
        output = translator.removeHighlight(output);
        assert.equal(output, "Like a high tech Heath Robinson device.");
    });
    // Translate To play hooky means to skip class or work. to British English
    test('Translate To play hooky means to skip class or work. to British English', () => {
        let inputText = "To play hooky means to skip class or work.";
        let locale = 'american-to-british';
        let output = translator.translate(inputText, locale);
        output = translator.removeHighlight(output);
        assert.equal(output, "To bunk off means to skip class or work.");
    });
    // Translate No Mr. Bond, I expect you to die. to British English
    test('Translate No Mr. Bond, I expect you to die. to British English', () => {
        let inputText = "No Mr. Bond, I expect you to die.";
        let locale = 'american-to-british';
        let output = translator.translate(inputText, locale);
        output = translator.removeHighlight(output);
        assert.equal(output,"No Mr Bond, I expect you to die.");
    });
    // Translate Dr. Grosh will see you now. to British English
    test('Translate Dr. Grosh will see you now. to British English', () => {
        let inputText = "Dr. Grosh will see you now.";
        let locale = 'american-to-british';
        let output = translator.translate(inputText, locale);
        output = translator.removeHighlight(output);
        assert.equal(output,"Dr Grosh will see you now.");
    });
    // Translate Lunch is at 12:15 today. to British English
    test('Translate Lunch is at 12:15 today. to British English', () => {
        let inputText = "Lunch is at 12:15 today.";
        let locale = 'american-to-british';
        let output = translator.translate(inputText, locale);
        output = translator.removeHighlight(output);
        assert.equal(output,"Lunch is at 12.15 today.");
    });
    // Translate We watched the footie match for a while. to American English
    test('Translate We watched the footie match for a while. to American English', () => {
        let inputText = "We watched the footie match for a while.";
        let locale = 'british-to-american';
        let output = translator.translate(inputText, locale);
        output = translator.removeHighlight(output);
        assert.equal(output,"We watched the soccer match for a while.");
    });
    // Translate Paracetamol takes up to an hour to work. to American English
    test('Translate Paracetamol takes up to an hour to work. to American English', () => {
        let inputText = "Paracetamol takes up to an hour to work.";
        let locale = 'british-to-american';
        let output = translator.translate(inputText, locale);
        output = translator.removeHighlight(output);
        assert.equal(output,"Tylenol takes up to an hour to work.");
    });
    // Translate First, caramelise the onions. to American English
    test('Translate First, caramelise the onions. to American English', () => {
        let inputText = "First, caramelise the onions.";
        let locale = 'british-to-american';
        let output = translator.translate(inputText, locale);
        output = translator.removeHighlight(output);
        assert.equal(output,"First, caramelize the onions.");
    });
    // Translate I spent the bank holiday at the funfair. to American English
    test('Translate I spent the bank holiday at the funfair. to American English', () => {
        let inputText = "I spent the bank holiday at the funfair.";
        let locale = 'british-to-american';
        let output = translator.translate(inputText, locale);
        output = translator.removeHighlight(output);
        assert.equal(output,"I spent the public holiday at the carnival.");
    });
    // Translate I had a bicky then went to the chippy. to American English
    test('Translate I had a bicky then went to the chippy. to American English', () => {
        let inputText = "I had a bicky then went to the chippy.";
        let locale = 'british-to-american';
        let output = translator.translate(inputText, locale);
        output = translator.removeHighlight(output);
        assert.equal(output,"I had a cookie then went to the fish-and-chip shop.");
    });
    // Translate I've just got bits and bobs in my bum bag. to American English
    test("Translate I've just got bits and bobs in my bum bag. to American English", () => {
        let inputText = "I've just got bits and bobs in my bum bag.";
        let locale = 'british-to-american';
        let output = translator.translate(inputText, locale);
        output = translator.removeHighlight(output);
        assert.equal(output, "I've just got odds and ends in my fanny pack.");
    });
    // Translate The car boot sale at Boxted Airfield was called off. to American English
    test('Translate The car boot sale at Boxted Airfield was called off. to American English', () => {
        let inputText = "The car boot sale at Boxted Airfield was called off.";
        let locale = 'british-to-american';
        let output = translator.translate(inputText, locale);
        output = translator.removeHighlight(output);
        assert.equal(output,"The swap meet at Boxted Airfield was called off.");
    });
    // Translate Have you met Mrs Kalyani? to American English
    test('Translate Have you met Mrs Kalyani? to American English', () => {
        let inputText = "Have you met Mrs Kalyani?";
        let locale = 'british-to-american';
        let output = translator.translate(inputText, locale);
        output = translator.removeHighlight(output);
        assert.equal(output,"Have you met Mrs. Kalyani?");
    });
    // Translate Prof Joyner of King's College, London. to American English
    test("Translate Prof Joyner of King's College, London. to American English", () => {
        let inputText = "Prof Joyner of King's College, London.";
        let locale = 'british-to-american';
        let output = translator.translate(inputText, locale);
        output = translator.removeHighlight(output);
        assert.equal(output,"Prof. Joyner of King's College, London.");
    });
    // Translate Tea time is usually around 4 or 4.30. to American English
    test('Translate Tea time is usually around 4 or 4.30. to American English', () => {
        let inputText = "Tea time is usually around 4 or 4.30.";
        let locale = 'british-to-american';
        let output = translator.translate(inputText, locale);
        output = translator.removeHighlight(output);
        assert.equal(output,"Tea time is usually around 4 or 4:30.");
    });
    // Highlight translation in Mangoes are my favorite fruit.
    test('Highlight translation in Mangoes are my favorite fruit.', () => {
        let inputText = "Mangoes are my favorite fruit.";
        let locale = 'american-to-british';
        let output = translator.translate(inputText, locale);
        assert.equal(output,"Mangoes are my <span class=\"highlight\">favourite</span> fruit.");
        assert.equal();
    });
    // Highlight translation in I ate yogurt for breakfast.
    test('Highlight translation in I ate yogurt for breakfast.', () => {
        let inputText = "I ate yogurt for breakfast.";
        let locale = 'american-to-british';
        let output = translator.translate(inputText, locale);
        assert.equal(output, "I ate <span class=\"highlight\">yoghurt</span> for breakfast.");
    });
    // Highlight translation in We watched the footie match for a while.
    test('Highlight translation in We watched the footie match for a while.', () => {
        let inputText = "We watched the footie match for a while.";
        let locale = 'british-to-american';
        let output = translator.translate(inputText, locale);
        assert.equal(output, "We watched the <span class=\"highlight\">soccer</span> match for a while.");
    });
    // Highlight translation in Paracetamol takes up to an hour to work.
    test('Highlight translation in Paracetamol takes up to an hour to work.', () => {
        let inputText = "Paracetamol takes up to an hour to work.";
        let locale = 'british-to-american';
        let output = translator.translate(inputText, locale);
        assert.equal(output, "<span class=\"highlight\">Tylenol</span> takes up to an hour to work.");
    });
});