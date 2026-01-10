
import fs from 'fs/promises'
import path, { extname } from 'path'
import { fileURLToPath } from "url";



const categories = {
  document: ['txt', 'doc', 'docs', 'pdf'],
  image: ['png', 'jpg', 'jpeg'],
  video: ['mp4', 'mkv'],
  audio: ['mp3']
}

const categorize = (extName, categories) => {
  for (const categoryName in categories) {
    if (categories[categoryName].includes(extName)) {
      return categoryName
    }
  }
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

const moveFileToDirectory = async (sourceFilePath, destDirPath) => {
  try {
    const sourceExists = await fileExists(sourceFilePath);
    if (!sourceExists) {
      throw new Error(`${sourceFilePath} doesn't exists`)
    }
    const fullDestinationPath = path.join(destDirPath, path.basename(sourceFilePath))
    await fs.mkdir(destDirPath, { recursive: true });
    await fs.rename(sourceFilePath, fullDestinationPath)

  } catch (error) {
    throw new Error(error)
  }
}

const organizeFile = async (sourceDir, organizedDir) => {
  try {
    const files = await fs.readdir(sourceDir)
    for (const file of files) {
      const extName = path.extname(file).slice(1)
      const categoryName = categorize(extName, categories)
      if (categoryName) {
        const moveFileResult = await moveFileToDirectory(path.join(sourceDir, file), path.join(organizedDir, categoryName + 's'))
      }
    }
  return `${files.length} File Organized!`
  }
  catch (error) {
    throw Error(error)
  }
}

const sourceDir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'messy-files')
const organizedDir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'organized-files')

const result = await organizeFile(sourceDir, organizedDir)
console.log(result);



