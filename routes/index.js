var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Network-Checker' });
});




module.exports = router;

var networks =[ 
['0701','0802', '0808', '0812', '0902', '0907'],
['0705', '0805', '0807', '0811', '0815', '0905'],
['0703','0706', '0803', '0806', '0810', '0813', '0814', '0816', '0903', '0906'],
['0809', '0817', '0818', '0909', '0908']
]

router.get('/number/:number', function(req, res, next){
    var number = req.params.number;
    //display number and network
    var output=undefined;
    for(var i=0;i<10 ;i++){
        if(number.length===11)
        { if (number.startsWith(networks[0][i])){
            output='AIRTEL-NG';
        }
        else if (number.startsWith(networks[1][i])){
           output='GLO-NG';
        }
        else if (number.startsWith(networks[2][i])){
            output="MTN-NG";
        }
        else if (number.startsWith(networks[3][i])){
           output="9MOBILE-NG";
        }}
    }
   res.send("YOUR NUMBER IS "+ number + " AND YOUR NETWORK IS " + output);
});

     