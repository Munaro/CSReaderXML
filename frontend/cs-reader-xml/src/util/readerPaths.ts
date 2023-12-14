import fs from 'fs';

export const readerPaths = () => {
    fs.writeFileSync('../files/teste.json', {"oi": "oi"});
    console.log('executing')
}
