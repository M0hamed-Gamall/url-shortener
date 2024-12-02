const router = require('express').Router();
const Url = require('../models/urlschema')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/' , async (req , res , next)=>{
    try{
        const newUrl = new Url({
            original : req.body.urlInput,
            alias    : req.body.aliasInput
        })

        await newUrl.save();
        console.log("new url added successfully");
        res.redirect('/');
    }catch(err){
        console.error("can't add new url :" , err);
    }
})

module.exports = router;
