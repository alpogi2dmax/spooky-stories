import path from 'node:path'
import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

// Resolve __dirname equivalent in ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function getData() {
    try {
        // const pathJSON = path.join('data', 'data.json')

        const filePath = path.join(__dirname, '..', 'data', 'data.json')

        const data = await fs.readFile(filePath, 'utf8')
        const parsedData = JSON.parse(data)
        return parsedData
    } catch(err) {
        console.log(err)
        return []
    }
    // return 'I am from getData()!'
}