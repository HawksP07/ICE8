const express = require('express');
var exphbs = require('express-handlebars');
// Port
const PORT = 3000;
// Initialize method
const app = express();

// Setup template engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main'}) );
app.set('view engine', 'handlebars');
app.set('views', './views');


// express app.use()
app.use((req, res, next) => {
    console.log(`URL: ${req.url}`);
    req.myName = 'Austin';
    next();
})

// make the index route
app.get('/', (req, res) => {
    const titleText = 'Home for INFT 2202 Node101 with Handlebars'
    res.render('home', {
        title: titleText
    })
});

app.get('/home', (req, res) => {
    const titleText = 'Home for INFT 2202 Node101 with Handlebars'
    res.render('home', {
        title: titleText
    })
});

// add about route
app.get('/about', (req, res) => {
    res.render('about', {
        aboutTitle: 'This is my about page'
    });
});


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})