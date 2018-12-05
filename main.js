button.onclick=()=>{
    let script=document.createElement('script')
    script.src='/pay'
    document.body.appendChild(script)
    script.onload=(e)=>{
        e.currentTarget.remove()
    }
    script.onerror=(e)=>{
        e.currentTarget.remove()
    }
}