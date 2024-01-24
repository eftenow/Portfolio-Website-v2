import fs from 'fs/promises';
import path from 'path';

type JsonFileName = 'about' | 'buttons' | 'portfolioData' | 'qualificationsData' | 'servicesData' | 'titles' | 'tools';

const jsonPaths = {
    'about': '/app/data/about.json',
    'buttons': '/app/data/buttons.json',
    'portfolioData': '/app/data/portfolioData.json',
    'qualificationsData': '/app/data/qualificationsData.json',
    'servicesData': '/app/data/servicesData.json',
    'titles': '/app/data/titles.json',
    'tools': '/app/data/about.json',
}

async function getJsonFile(fileName: JsonFileName) {
    const fullPath = path.join(process.cwd(), jsonPaths[fileName]);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    return JSON.parse(fileContents);
}

export default getJsonFile;
