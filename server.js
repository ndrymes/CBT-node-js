const express = require('express')
const hbs = require('hbs')
const port=process.env.PORT || 3000
const app =express()
app.set('view engine','hbs')

app.use(express.static(__dirname +'/static/css'))

 app.get('',(req,res) => {
   res.render('test.hbs',{})
 })
app.listen(port,(report)=> {
  console.log('server is up on port 3000');
})
