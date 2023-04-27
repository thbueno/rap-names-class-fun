const express = require('express')
const app = express()
const PORT = (8000)

const rappers = {

    '21 savage':{
        'age': 29,
        'birth': 'Shéyaa Bin abraham-Joseph',
        'birthLocation':'London, England'
    },

    'chance the rapper':{
        'age': 29,
        'birth': 'Chancelor Bennett',
        'birthLocation':'Chicago, Illinois'
    },

    'dylan':{
        'age': 29,
        'birth': 'Dylan',
        'birthLocation':'Dylan'
    },
    
    
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')

} )

app.get('/api/:rapperName', (request, response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['Dylan'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The sever is running on port ${PORT}! you better go catch it!`)
}) 