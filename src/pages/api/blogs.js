import fs from 'fs'

export default async function handler (req, res) {
  const data = await fs.promises.readdir('blogdata')
  let allBlogs = []
  let myFile
  for (let index = 0; index < data.length; index++) {
    const item = data[index]
    myFile = await fs.promises.readFile('blogdata/' + item, 'utf-8')
    allBlogs.push(JSON.parse(myFile))
  }
  console.log(allBlogs)
  res.status(200).json(allBlogs)
}
