import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.cinfig()


const app=express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.listen(process.env.PORT || 8080, () => {
    console.log('Server is running,,,');
})
    