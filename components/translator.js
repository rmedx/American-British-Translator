const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    regexMaker(str) {
        var re = new RegExp(`(?<!-)\\b${str}\\b`, "ig");
        return re;
    }
    titleRegexMaker(str) {
        var re = new RegExp(`(?<!-)\\b${str}`, "ig");
        return re;
    }

    upperCaser(match, offset, str, repment) {
        console.log("match: " + match);
        if (match.charAt(0) == match.charAt(0).toUpperCase()) {
            let result = repment.charAt(0).toUpperCase() + repment.slice(1);
            console.log("result: " + result);
            return `<span class="highlight">${result}</span>`;
        }
        console.log("repment :" + repment);
        return `<span class="highlight">${repment}</span>`;
    }

    removeHighlight(text) {
        let regex = /<[^<>]*>/g;
        return text.replaceAll(regex, "");
    }

    translate(inputText, locale) {
        let text = inputText;
        console.log("text before translate: " + text);
        if (locale == "american-to-british") {
            for (const [key, value] of Object.entries(americanOnly)) {
                if (text.toLowerCase().includes(key)) {
                    text = text.replaceAll(this.regexMaker(key), (match, offset, text) => this.upperCaser(match, offset, text, value));
                }
            }
            for (const [key, value] of Object.entries(americanToBritishSpelling)) {
                if (text.toLowerCase().includes(key)) {
                    text = text.replaceAll(this.regexMaker(key), (match, offset, text) => this.upperCaser(match, offset, text, value));
                }
            }
            for (const [key, value] of Object.entries(americanToBritishTitles)) {
                if (text.toLowerCase().includes(key)) {
                    text = text.replaceAll(this.titleRegexMaker(key), (match, offset, text) => this.upperCaser(match, offset, text, value));
                }
            }
            // for (const [key, value] of Object.entries(britishOnly)) {
            //     if (text.toLowerCase().includes(value)) {
            //         text = text.replaceAll(this.regexMaker(value), (match, offset, text) => this.upperCaser(match, offset, text, key));
            //     }
            // }
            let timeregex = /([0-9]{1,2}):([0-9]{2})(?![0-9])/g
            text = text.replaceAll(timeregex, '<span class="highlight">$1.$2</span>');
        } else {
            for (const [key, value] of Object.entries(britishOnly)) {
                if (text.toLowerCase().includes(key)) {
                    text = text.replaceAll(this.regexMaker(key), (match, offset, text) => this.upperCaser(match, offset, text, value));
                }
            }
            for (const [key, value] of Object.entries(americanToBritishSpelling)) {
                if (text.toLowerCase().includes(value)) {
                    text = text.replaceAll(this.regexMaker(value), (match, offset, text) => this.upperCaser(match, offset, text, key));
                }
            }
            for (const [key, value] of Object.entries(americanToBritishTitles)) {
                if (text.toLowerCase().includes(value)) {
                    text = text.replaceAll(this.regexMaker(value), (match, offset, text) => this.upperCaser(match, offset, text, key));
                }
            }
            // for (const [key, value] of Object.entries(americanOnly)) {
            //     if (text.toLowerCase().includes(value)) {
            //         text = text.replaceAll(this.regexMaker(value), (match, offset, text) => this.upperCaser(match, offset, text, key));
            //     }
            // }
            let timeregex = /([0-9]{1,2}).([0-9]{2})(?![0-9])/g
            text = text.replaceAll(timeregex, '<span class="highlight">$1:$2</span>');
        }
        console.log("text after translate: " + text);
        return text;
    }
}

module.exports = Translator;