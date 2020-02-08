const axios = require('axios')
const fs = require('fs')

const request = axios.create({
  baseURL: 'https://view.inews.qq.com/g2'
})

function getData () {
  request.get('/getOnsInfo?name=disease_h5')
    .then(res => {
      let rawData = JSON.parse(res.data.data)
      fs.writeFileSync('./src/data/area.json', JSON.stringify(rawData))
    })
}

getData()
