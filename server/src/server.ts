import fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastify()
const prisma = new PrismaClient()

app.get('/', async (req, reply) => {
  const users = await prisma.user.findMany()

  return reply.send({
    users,
  })
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server is running on http://localhost:3333')
  })
