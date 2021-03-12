const io = require('socket.io-client')('http://localhost:3000');

module.exports = {
}
const post = (event, body) => {
    io.emit(event, body)
}

const on = (event, fn) => {
    io.on(event, fn)
}
    
post('saveTasks', 
    {
        "tasks": [
            {
                "name": "Buy",
                "date": "1.1.2020"
            }
        ]
    })
