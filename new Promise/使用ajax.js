import ajax from "./ajax.js";
// 按照一定的顺序执行ajax  js->tpl->img  读取文件
ajax('js/main.js','get').then((js)=>{
    console.log('File--js',js);
    return ajax('index-ed.html', 'get');
}).then((tpl)=>{
    console.log('File--html',tpl);
    return ajax('img/bannerBg-min.png', 'get');
}).then((img)=>{
    console.log('File--img',img);
}).catch((err)=>{
    console.log('errMsg',err);
});