import merge from './tools/swagger-merge.mjs';

const cloudSwaggerDir = './swagger-files/cloud';
const edgeSwaggerDir = './swagger-files/edge';

const rootSwagger = './root-swagger.json';

const result = 'result.json';

async function main() {
  await merge(rootSwagger, cloudSwaggerDir, `./public/cloud_${result}`);

  await merge(rootSwagger, edgeSwaggerDir, `./public/edge_${result}`);
}

main();
