button.onclick=()=>{
    let script=document.createElement('script')
    script.src='/pay'
    document.body.appendChild(script)
    script.onerror=()=>{
        console.log('fail')
    }
}