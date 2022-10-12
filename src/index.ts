import express from 'express'
import dotenv from 'dotenv-defaults'

import { userController } from './controllers/user.controller'

dotenv.config()

const app = express()
app.use(express.json())
const PORT = process.env.PORT

const router = express.Router()

router.get('/', (_, response) => {
  response.send('Hello world!')
})

router.post('/user', userController)

async function main() {
  app.use('/', router)

  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}`)
  })
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
