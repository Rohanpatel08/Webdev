let txt = document.getElementById('textarea')
let output = document.getElementById('output')
let len = document.getElementById('len-txt')

let uppercase = document.getElementById('upper')
let lowercase = document.getElementById('lower')
let cpy = document.getElementById('copy')
let delet = document.getElementById('delete')
let xspace = document.getElementById('xspace')
let target
let n = 0
let w = ''

txt.addEventListener('input', (e)=>{
    target = e.target
    let paras = target.value
    n = target.value.length
    w = target.value.split(' ').length
    len.innerHTML = `${w} Words and ${n} Characters`
    output.innerHTML = `${paras}`
})

uppercase.addEventListener('click', ()=>{
    let paras = target.value
    output.innerHTML = `${paras.toUpperCase()}`
})
lowercase.addEventListener('click', ()=>{
    let paras = target.value
    output.innerHTML = `${paras.toLowerCase()}`
})
delet.addEventListener('click', (e)=>{
    target = e.target
    target.value = ''
    txt.innerHTML = `${target.value}`
    output.innerHTML = `${''}`
})
cpy.addEventListener('click', ()=>{
    let paras = target.value
    paras.select
    navigator.clipboard.writeText(paras);
})
xspace.addEventListener('click', (e)=>{
    target = e.target
    let paras = target.value
    output.innerHTML = `${(paras.split(/[]+/)).join(' ')}`
})