import path from "path";
import fs from "fs";

export const logger = (req, res, next) => {
    const filePath = path.join(__appdir, "logs", "app.log");
    
    const message = ` Method: ${req.method} URL: ${req.originalUrl} - ${new Date().toLocaleDateString('sv-SE')} - ${new Date().toLocaleTimeString('sv-SE')}\n`;  

     fs.appendFileSync(filePath, message)


     next() 
}