const expreess = require('express');

const app = expreess();

app.use(expreess.json());

app.get('/', (req, res) => {
    res.send('Hello Word!');
})

app.listen(3000, () => {
    console.log('Ejemplo app listening on port 30000!');
})