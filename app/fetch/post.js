import 'whatwg-fetch';
import 'es6-promise';

//将对象转换成参数形式
function obj2params(obj){
    var result = '';
    var item;
    for(item in obj){
        result += `&${item}=${encodeURIComponent(obj[item])}`;
    }
    if(result){
        result = result.slice(1);
    }
    return result;
}

//发送post请求
export function post(url, paramObj){
    var result = fetch(url, {
        method: 'POST', 
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: obj2params(paramObj)
    })
    return result;
}