import x from './x.js'
import jpg from './assets/1.jpg'

console.log(jpg)
const img = document.querySelector('img')
img.src=jpg

const body = document.querySelector('body')

const button =document.createElement('button')
button.textContent='懒加载'
body.appendChild(button)
button.onclick=()=>{
  const promise = import('./lazy')
  promise.then((module)=>{
    const fn = module.default//模块的默认值 
    fn()
  },()=>{

  })
}


