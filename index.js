const translate = require('google-translate-api');
 
translate('请问如何调用谷歌翻译API', {to: 'en'}).then(res => {
    console.log(res.text);
    //=> I speak English
    console.log(res.from.language.iso);
    //=> nl
}).catch(err => {
    console.error(err);
});