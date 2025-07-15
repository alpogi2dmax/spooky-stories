import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { serveStatic } from './utils/serveStatic.js'
import { getData } from './utils/getData.js'
import { handleGet } from './handlers/routeHandlers.js'
import { handlePost } from './handlers/routeHandlers.js'
import { handleNews } from './handlers/routeHandlers.js'


const PORT = process.env.PORT || 8000;

// const __dirname = import.meta.dirname

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


// console.log('CWD', process.cwd())


const server = http.createServer(async (req, res) => {

    // const pathToResource = path.join(__dirname, '..', 'frontend', 'index.html')

    // console.log('Resolved path: ', pathToResource)
    // console.log('Received a request:', req.url) 

    if (req.url === '/api') {
        if (req.method === 'GET') {
            return await handleGet(res)
        }
        else if (req.method === 'POST') {
            handlePost(req, res)
        }
    } else if (req.url === "/api/news") {
        return await handleNews(req, res)
    } else if (!req.url.startsWith('/api')) {
        return await serveStatic(req, res, __dirname)
    }

    
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))