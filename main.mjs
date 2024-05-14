import express from 'express'
import knex from 'knex'
import knexfile from './knexfile.js'

const app = express()
const db = knex(knexfile)

app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))

// page definitions
app.get('/', async (req, res) => {
    res.render('index', {
        title: 'AlbumDB',
        description: 'Music database'
    })
})
app.get('/search/', async (req, res) => {
    res.render('search', {
        // title: 'AlbumDB',
        // description: 'Music database'
    })
})
app.get('/detail/:id', async (req, res, next) => {
    const album = await db('albums').select('*').where('id', req.params.id).first()

    if (!album) return next()

    res.render('detail', {
        album,
    })
})
app.get('/add/', async (req, res) => {
    res.render('add', {
        // title: 'AlbumDB',
        // description: 'Music database'
    })
})


app.post('/add-album', async (req, res) => {
    const album = {
        title: req.body.title,
        artists: req.body.artists,
        songs: req.body.artists,
        year: req.body.year,
        genre: req.body.genre
    }

    await db('albums').insert(album);

    res.redirect('/');
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