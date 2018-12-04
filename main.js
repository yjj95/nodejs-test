let image=document.createElement('img')
image.src=''
image.onload=()=>{
    console.log(success)
}
image.onerror=()=>{
    console.log(fail)
}