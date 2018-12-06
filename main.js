function callback(result){
    amount.innerText=result.amount-1
}
button.onclick=()=>{
    let script=document.createElement('script')
    script.src='/pay?callback=callback'//
    document.body.appendChild(script)
    script.onload=(e)=>{
        e.currentTarget.remove()
    }
    script.onerror=(e)=>{
        e.currentTarget.remove()
    }
}