const express = require('express')
const app = express()

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    var x, y, z
    x = 5
    y = 3
    z = x + y

    return res.send(`The value of z is ${z}`)
})

app.post('/', (req, res) => {
    let email = req.body.email
    
    return res.send(`The email value is ${email}`)
})

app.post('/tambah', (req, res) => {
    var a, b, c
    /**
     * Data type of variable a & b must be number, not string
     */
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = a + b

    /**
     * Check data type of all variable
     */
    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    
    return res.send(`The result value is ${c}`)
})

app.post('/kurang', (req, res) => {
    var a, b, c
    /**
     * Data type of variable a & b must be number, not string
     */
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = a - b

    /**
     * Check data type of all variable
     */
    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    
    return res.send(`The result value is ${c}`)
})

app.post('/lingkaran', (req, res) => {
    var r
    /**
     * Data type of variable a & b must be number, not string
     */
    r = parseInt(req.body.r)
    c = 3.14 * r * r

    /**
     * Check data type of all variable
     */
    console.log(typeof r)
    console.log(typeof c)
    
    return res.send(`The result value is ${c}`)
})

app.post('/kali', (req, res) => {
    var a, b, c
    /**
     * Data type of variable a & b must be number, not string
     */
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = a * b

    /**
     * Check data type of all variable
     */
    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    
    return res.send(`The result value is ${c}`)
})

app.post('/bagi', (req, res) => {
    var a, b, c
    /**
     * Data type of variable a & b must be number, not string
     */
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = a / b

    /**
     * Check data type of all variable
     */
    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    
    return res.send(`The result value is ${c}`)
})

app.post('/modulus', (req, res) => {
    var a, b, c
    /**
     * Data type of variable a & b must be number, not string
     */
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = a % b

    /**
     * Check data type of all variable
     */
    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    
    return res.send(`The result value is ${c}`)
})

app.post('/latihan', (req, res) => {
    var a, b, c
    /**
     * Data type of variable a & b must be number, not string
     */
    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    c = parseInt(req.body.c)
    d = parseInt(req.body.d)
    e = a + b * c - d

    /**
     * Check data type of all variable
     */
    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
    console.log(typeof d)
    console.log(typeof e)
    
    return res.send(`The result value is ${e}`)
})

app.post('/kondisi', (req,res) => {
    var x, y 

    x = parseInt(req.body.x)
    y = parseInt(req.body.y)

    if (x > y) {
        alert = "Hello " + `${x}`;
      } else { 
        alert = "Hello " + `${y}`;
      }

      console.log(typeof x)
      console.log(typeof y)

      return res.send(` ${alert}`)
})

app.post('/kondisiif', (req,res) => {
    var time , greeting

    time = parseInt(req.body.time)
    greeting = req.body.greeting

    if (time < 10){
        greeting = "Good Morning"
    } else if ( time > 20){
        greeting = "Good Night"
    } else {
        greeting = "Good Evening"
    }

    return res.send(`Hallo, ${greeting}`)
})

app.post('/loop', (req,res) => {
    
    var i,text

    i = parseInt(req.body.i)
    
    for (i = 0; i < 5; i++) {
    text += "The number is " + i + "\n";
  }

  return res.send(`${text}`)
})
app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})