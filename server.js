const { app } = require('./app')

const port = process.env.PORT || 4004

app.listen(port, () => {
    console.log('Servidor on')
    console.log(`Acesse em http://localhost:${port}`)
})


