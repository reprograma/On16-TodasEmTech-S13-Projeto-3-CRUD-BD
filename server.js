const app = require('./src/app')

const PORT = process.env.PORT


app.listen(PORT, () => console.log(`Alright, navigate through the door: ${PORT}`))
