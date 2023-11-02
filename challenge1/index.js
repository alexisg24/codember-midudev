const fs = require('node:fs/promises')
const path = require('path')

const decryptMessage = (message) => {
    const messageArray = message.split(' ')
    const messageCounterObject = messageArray.reduce((prev, current) =>{
        if(prev[current] !== undefined){
            prev[current] += 1
        }else{
            prev[current] = 1
        }
        return prev
    }, {})

  return Object.entries(messageCounterObject).map(letterCount => `${letterCount[0]}${letterCount[1]}`).join('')
}

const startScript = async (filename) =>{
    const filePath = path.join(__dirname,filename)
    const data = await fs.readFile(filePath, 'utf8')
    const value = decryptMessage(data)
    return value
}

startScript('message01.txt').then(data => console.log(data))