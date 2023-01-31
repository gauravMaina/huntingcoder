import fs from 'fs'
export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
       const data = await fs.promises.readdir('contactdata')
        fs.promises.writeFile(`contactdata/${data.length +1}.json`,JSON.stringify(req.body))
       res.status(200).json(req.body)

    } else {
        res.status(500).json({error:"Internal Server Error"})
        // Handle any other HTTP method
    }
}
