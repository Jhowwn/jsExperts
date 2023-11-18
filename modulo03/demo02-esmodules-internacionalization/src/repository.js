import { writeFile, readFile } from 'fs/promises';

export const save = async (data) => {
  //não tem __filename, __dirname
  const { pathname: databaseFile} = new URL('./../database.json', import.meta.url);
  const filepath = databaseFile.replace("/C:", "");
  const currentData = JSON.parse((await readFile(filepath)));
  currentData.push(data);
  
  await writeFile(filepath, JSON.stringify(currentData));
}