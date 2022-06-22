//importa o app(API)
const app = require('./src/app')
//define uma porta e ouvi-la
app.listen(4000, () => console.log(`Porta funcionando 200 OK`))
