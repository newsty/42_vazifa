const title=document.getElementById('title');
const inp=document.getElementById('inp');
const add=document.getElementById('btn');
const clear=document.getElementById('btn2');
 add.addEventListener('click',()=>{
    title.textContent=inp.value
   localStorage.setItem('key',JSON.stringify(inp.value))

 })
 clear.addEventListener('click',()=>{
    title.textContent=' '
    localStorage.removeItem('key',inp.value)
 })