import * as fs from 'fs/promises';
import path from 'path';

const dupPaths = [];

async function mergePathObj(rootPath, inputPath) {
  for (const method of Object.keys(inputPath)) {
    if (!rootPath[method]) {
      rootPath[method] = inputPath[method];
      continue;
    }

    throw new Error(`method duplicate: ${method}`);
  }
}

async function mergeDefinitionObj(rootDef, inputDef) {
  for (const def of Object.keys(inputDef)) {
    if (!rootDef[def]) {
      rootDef[def] = inputDef[def];
    }
  }
}

async function mergeSingleSwaggerIntoRoot(root, swaggerObj) {
  for (const urlPath of Object.keys(swaggerObj.paths)) {
    if (!root.paths[urlPath]) {
      root.paths[urlPath] = swaggerObj.paths[urlPath];
      continue;
    }
    try {
      await mergePathObj(root.paths[urlPath], swaggerObj.paths[urlPath]);
    } catch (error) {
      dupPaths.push(urlPath);
    }
  }

  for (const defName of Object.keys(swaggerObj.definitions)) {
    if (!root.definitions[defName]) {
      root.definitions[defName] = swaggerObj.definitions[defName];
    }

    await mergeDefinitionObj(root.definitions, swaggerObj.definitions);
  }
}

async function listSwaggerJsonFile(dir) {
  const swaggerFiles = await fs.readdir(dir);

  const swaggerObjs = [];

  for (const jsonFile of swaggerFiles) {
    if (path.extname(jsonFile) === '.json') {
      const swaggerContent = await fs.readFile(`${dir}/${jsonFile}`);
      swaggerObjs.push(JSON.parse(swaggerContent.toString()));
    }
  }

  return swaggerObjs;
}

async function merge(rootSwaggerFilePath, swaggerDir, resultFile) {
  const rootContent = await fs.readFile(rootSwaggerFilePath);
  const root = JSON.parse(rootContent.toString());

  const swaggers = await listSwaggerJsonFile(swaggerDir);

  for (const swaggerObj of swaggers) {
    await mergeSingleSwaggerIntoRoot(root, swaggerObj);
  }

  await fs.writeFile(resultFile, JSON.stringify(root, null, 4));

  if (dupPaths.length > 0) {
    throw new Error(`there are dup paths: ${dupPaths}`);
  }
}

export default merge;
