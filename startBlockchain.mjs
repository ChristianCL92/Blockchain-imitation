  import { fileURLToPath } from 'url';
  import path from "path";
  import Blockchain from "./models/Blockchain.mjs";
  import { writeToFile } from './utilities/fileHandler.mjs';
  import blockchainDataJson from "./data/blockchain.json" assert {type:"json"}

// Globala objektet appdir 
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
global.__appdir = dirname;

let blockchain = blockchainDataJson 

//let blockchain = new Blockchain();

if (!blockchain.chain) {
  blockchain = new Blockchain();
  writeToFile('data', "blockchain.json", blockchain );
  
} else {
  Object.setPrototypeOf(blockchain, Blockchain.prototype)
 
}
 export default blockchain;  


