import express, { Request, Response } from 'express'
const app = express()
const port = 3000
// json parser middleware
app.use(express.json())
// form data middleware
// app.use(express.urlencoded)

app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!!!')
})

app.post('/',(req:Request,res:Response)=>{
  // console.log(req);
  console.log(req.body);
  res.status(201).json({
    success:true
  })
  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
