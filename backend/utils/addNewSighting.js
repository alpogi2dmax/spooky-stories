
import { getData } from "./getData.js";
import path from 'node:path'
import fs from 'node:fs/promises'
import { fileURLToPath } from "node:url";


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export async function addNewSighting(newSighting) {

    try {
        const sightings = await getData()
        sightings.push(newSighting)
        const pathJSON = path.join(__dirname, '..', 'data', 'data.json')

        await fs.writeFile(
            pathJSON,
            JSON.stringify(sightings, null, 2),
            'utf8'
        )

    } catch (err) {
        throw new Error(err)
    }
}