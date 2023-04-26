import fs from 'fs';
import path from 'path';

function writeFolder(filename: string, data: string) {
    let currentPath = path.join(process.cwd(), filename);

    if(fs.existsSync(currentPath)){
        return false
    }
    
    fs.writeFileSync(currentPath, data);
    return true;
}

export { writeFolder };
