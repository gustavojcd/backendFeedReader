import express from 'express'
import mainRouter from '../routes/main'

const app = express();

app.use('/api', mainRouter)

export default app;