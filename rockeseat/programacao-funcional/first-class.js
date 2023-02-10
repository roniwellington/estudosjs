const sayMyName = () => console.log('Mayk')
const runFunction  = fn => fn()

runFunction(sayMyName)
runFunction(() => console.log('discover'))

console.log(runFunction(Math.random))