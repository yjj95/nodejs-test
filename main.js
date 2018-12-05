button.onclick=()=>{
    let image=document.createElement('img')
    image.src='/pay'
    image.onload=()=>{
        //window.location.reload()
        //页面无刷新
        amount.innerText=amount.innerText-1
    }
    image.onerror=()=>{
        console.log('fail')
    }
}