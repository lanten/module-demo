export async function mount(el) {
  el.innerHTML =
    'module 2  ' +
    JSON.stringify(await (await import('./module3.js')).getData())
}
