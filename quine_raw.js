const data  = 'eJyNVMsVwzAIu3sKVtD+y/U1NkJ8nNaHpMEICZl62dvCWet1+59sSes1GiCyZ1SDJBUXaAWJogE9o748T4q/GxfZ1w2lsJvqNWGRTTxf36fHVewTPz+QzThbUNrCy6qbtcN3LOCB9DaBKllj3CHSVXEXKk+qeWeJ9FgbeRlqAvXWhBiWFIe4H8QhOTVWapEYAWW39NjcT1gi3D4rtLhsadWxeKAkhY6LzUjj1FW9uEHFDj85/q9PK1aHKIkPf0xcoguZlg0GaViSWtWDUQe8eMwDUE0yyHc/VZ5dpvTp4TEwNNRYdqeg7iFWLjJxqsOj/vstLrKuua2Zfqveyu6qH8iS9nI=';
const aa    = require('zlib').inflateSync(Buffer.from(data,"base64")).toString();
const code  = "a"
const chars = code.split("").join("")
const SPACE = String.fromCharCode(32);
let p       = 0;
let quine = "";
aa.split("").map( c => {
    if (c === SPACE) {
        quine += SPACE;
        return;
    }
    if (c === "1") {
        p %= chars.length;
        quine += chars[p];
        p++;
        return;
    }
    quine+=c;
})
console.log(quine);