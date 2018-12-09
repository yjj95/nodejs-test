window.ajax=function(method,url,body,success,fail){
    let request=new XMLHttpRequest()
    request.open(method,url)
    request.onreadystatechange=function(){
      if(request.readyState===4){
          if(request.status>=200&&request.status<=300){
            //请求成功，调回调
            let response=JSON.parse(request.responseText)
            success.call(undefined,response)
          }else{
            fail.call(undefined,response)
          }
      }
    }
    request.send(body)
  }
function success(result){
   amount.innerText=result.amount
}
function fail(result){
    amount.innerText=result
 }
button.onclick=()=>{
    window.ajax('get','/pay','',success,fail)
}