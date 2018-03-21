let express = require('express');
let app = express();

const PORT = 4001;

app.use(express.static('server/public'))

app.listen(PORT, ()=>{
    console.log('listenting on port: ', PORT);
})