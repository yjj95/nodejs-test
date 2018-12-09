window.ajax=function({method,url,body}){
    return new Promise(function(reslove,reject){
        let request=new XMLHttpRequest()
        request.open(method,url)
        request.onreadystatechange=function(){
            if(request.readyState===4){
                if(request.status>=200&&request.status<=300){
                    //请求成功，调回调
                    let response=JSON.parse(request.responseText)
                    reslove.call(undefined,response)
                }else{
                    reject.call(undefined,request.response)
                }
            }
        }
        request.send(body)
    })
    
  }
function success(response){
   amount.innerText=response.amount
}
function fail(response){
    amount.innerText=response
 }
button.onclick=()=>{
    window.ajax({
        'method':'post',
        'url':'/pay',
        'body':'a=1&&b=2',
    }).then(success,fail)
}