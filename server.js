// 1. importar o app (aplicação/api)
// 2. definir uma porta e ouvi-lá
const app = require('./src/app')

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Fé no pai que agora vai, porta: ${PORT} 8000`))



