const root = document.getElementById('root')

const btn1 = document.createElement('button')
root.appendChild(btn1)
btn1.innerHTML = 'getConfig'
btn1.onclick = getConfig

const btn2 = document.createElement('button')
root.appendChild(btn2)
btn2.innerHTML = 'loadModule1'
btn2.onclick = loadModule1

const btn3 = document.createElement('button')
root.appendChild(btn3)
btn3.innerHTML = 'loadModule2'
btn3.onclick = loadModule2

const content = document.createElement('div')
root.appendChild(content)

async function getConfig() {
  const configModule = await import('./config.js')
  console.log(configModule)
  alert(JSON.stringify(configModule.config))
}

async function loadModule1() {
  ;(await import('./module1.js')).mount(content)
}

async function loadModule2() {
  ;(await import('./module2.js')).mount(content)
}
