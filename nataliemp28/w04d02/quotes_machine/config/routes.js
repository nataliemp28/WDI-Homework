const router = require('express').Router();

router.get('/', (req, res) => res.render('index'));



//index of quotes
router.get('/quotes', (req, res) => res.render('quotes/index', { quotes }));

//create a new quote
router.get('/quotes/new', (req, res) => res.render('quotes/new'));

//show - display a quotes
router.get('/quotes/:id', (req, res) => {
  console.log(req.params.id);

let quote = quotes.filter((quote) => {
  return quote.id == req.params.id;
})[0];

console.log(quote);

res.render('quotes/show', { quote });
});


//create
router.post('quotes', (req, res) => {
  let quote = req.body.quote;
  quote.id = id;
  quotes.push(quote);
  id ++;
  res.redirect(301, '/quotes');
});

//edit
router.get('/quotes/:id/edit', (req, res) => {
  let quote = quotes.filter((quote) => {
    return quote.id == req.params.id;
  })[0];
  res.render('quotes/edit', { quote });
});





module.exports = router;
