  import fs from "fs";
import path from "path";


export const writeToFile = (folderName, fileName, blockchain) => {
    try {
    
        const filePath = path.join(__appdir , folderName, fileName);
        console.log("du är här med appdir", filePath);
    
        fs.writeFileSync(filePath, JSON.stringify(blockchain, null, 2))        
    } catch (error) {
        console.log("error occured", error);
    }
} 

   