import {fastify} from 'fastify'
import fastifyStatic from '@fastify/static' //importa a biblioteca que eu instalei para ler paginas estaticas e js ou seja permite acessar a pasta public
import path from 'node:path'


const server = fastify()

server.register(fastifyStatic,{
    root:path.resolve('public')
})

server.listen ({
    port:3333,
})