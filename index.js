const facesUrl = 'https://faces.w3ibm.mybluemix.net/api/find/?q='
const photoUrl = 'http://images.w3ibm.mybluemix.net/image/'
const https = require('https')

module.exports = {
	query: query,
	getPhotoUrl: getPhotoUrl
}

function query(q) {
return new Promise((resolve, reject) => {
	https.get(`${facesUrl}${q}`, res => {
  		res.on('data', buffer => {
  			let string = buffer.toString('ascii')
  			return resolve(JSON.parse(string))
  		})
	})
	.on('error', e => reject(e))
})
}

function getPhotoUrl(uid) {
	return `${photoUrl}${uid}`
}