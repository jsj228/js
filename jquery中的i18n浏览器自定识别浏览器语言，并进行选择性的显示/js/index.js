$(document).ready(function(){
    loadProperties('main', './languages/'); 
});

function loadProperties(name, path, lang){  //语言文件的命名，name+'_'+语言类型.properties
    // var lang = lang || navigator.language;  //获取当前浏览器的使用的语言类型
    $.i18n.properties({         
        name:name,          //资源文件的名称
        path:path,          //资源文件所在目录的路径
        mode:'map',         //加载模式：“map”表示以 Map 的方式使用资源文件中的 Key，默认值是“vars”。
        language:navigator.language,     //语言类型
        callback: function() {
            $("[data-localize]").each(function() { //each循环 
                var els = $(this),  //每个带有data-localize属性的DOM元素
                localizedValue =$.i18n.map[els.data("localize")]; //使用$.i18n.map[key] 读取资源文件中key对应的值
                console.log(els.data()); //获取所有HTML元素data-localize的属性值
               
                // 设置html元素属性
                if (els.is("input[type=text]") || els.is("input[type=password]") || els.is("input[type=email]")) { els.attr("placeholder", localizedValue); }
                else if (els.is("input[type=button]") || els.is("input[type=submit]")) {els.attr("value", localizedValue);}
                else if (els.is("img")) {els.attr("alt", localizedValue);}
                else if (els.is("a")) {els.attr("title", localizedValue);}
                else {els.text(localizedValue);}
            });
        }
    });
}