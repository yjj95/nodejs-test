window.ajax=function({method,url,body,success,fail}){
    let request=new XMLHttpRequest()
    request.open(method,url)
    request.onreadystatechange=function(){
      if(request.readyState===4){
          if(request.status>=200&&request.status<=300){
            //请求成功，调回调
            let response=JSON.parse(request.responseText)
            success.call(undefined,response)
          }else{
            fail.call(undefined,request.response)
          }
      }
    }
    request.send(body)
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
        'success':success,
        'fail':fail
    })
}