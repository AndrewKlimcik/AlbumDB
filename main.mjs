import express from 'express'


const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.get('/', async (req, res) => {
    res.render('index', {
        title: 'AlbumDB',
        description: 'Music database'
    })
})




app.use((req, res, next) => {
    res.status(404).send('Stránka nenalezena');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Něco se pokazilo!');
});

const server = app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000')
})