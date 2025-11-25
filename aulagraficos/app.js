const express = require('express')
const path = require('path')

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


app.use(express.static(path.resolve(__dirname, 'public')))

const dadosExemplo = {
    line:{
        labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul'],
        values: [12,19,3,5,2,3,15]
    },
    bar:{
        labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul'],
        values: [1,12,33,35,22,13,25]
    },
    pie:{
        labels: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul'],
        values: [11,13,34,36,27,18,21]
    }
}

app.get('/', (req,res) => {
    res.render('index', {
        titulo: 'aprendendo graficos com o senai',
        data: dadosExemplo
    })
} )


const porta = 3000;
app.listen(porta, () => {
    console.log(`servidor rodando em http://localhost:${porta}`)
});