const axios = require('axios');

let engText = "How do I get from leetCode to topCoder?";
console.log('I can translate sentences');
console.log('eg: test sentence = '+engText)

let config = {
    method: 'post',
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "AndroidTranslate/5.3.0.RC02.130475354-53000263 5.1 phone TRANSLATE_OPM5_TEST_1",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Headers": "*",
        // "Access-Control-Allow-Methods": "*",
        // "Access-Control-Allow-Credentials": true
    },
    url: "https://translate.google.com/translate_a/single?client=at&dt=t&dt=ld&dt=qca&dt=rm&dt=bd&dj=1&hl=%25s&ie=UTF-8&oe=UTF-8&inputm=2&otf=2&iid=1dd3b944-fa62-4b55-b330-74909a99969e&"
}

let data = "sl=en&tl=cs&q=" + engText;
axios({...config, data})
    .then(res => console.log(res.data.sentences[0].trans))
    .catch(err => console.log(err))