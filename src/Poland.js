let express = require('express');
let app = express();
app.use(express.static('public'));
app.listen(1488, function(){
  console.log('Host on 1488');
});