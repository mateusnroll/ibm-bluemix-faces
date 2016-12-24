const Faces = require('./index.js')

Faces.query('mateusp@')
.then(res => {
	console.log('Foi!')
	console.log(res)
})
.catch(err => {
	console.log('Deu erro!')
	console.log(err)
})
