// es6中new Promise 可以直接使用
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise

function ajaxFun(url,method,data){
    return new Promise((resolve,reject)=>{
    	// （IE5 和 IE6）不支持XMLHttpRequest  支持 new ActiveXObject("Microsoft.XMLHTTP");
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function (params) {
            if(xhr.readyState==XMLHttpRequest.DONE){
                if(xhr.status==200){
                    resolve(xhr.responseText);
                }else{
                    reject(new Error("error" + xhr.status));
                }
            }           
        };
        xhr.open(method,url);
        xhr.send(data);
    });
}
export default ajaxFun;
