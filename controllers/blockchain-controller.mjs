import ResponseModel from "../utilities/ResponseModel.mjs" 
import blockchain from "../startBlockchain.mjs"
  import {
    writeToFile,
  } from '../utilities/fileHandler.mjs';  

  const folder = "data";
const file = "blockchain.json";  


export const getBlockchain = (req, res, next) => {  
  console.log(blockchain);
res.status(200).json(new ResponseModel({statusCode: 200, data: blockchain}))
}

export const addNewBlock = (req, res, next) => {
    const data = req.body;
    const lastBlock = blockchain.getLastBlock();
    const timestamp = Date.now(); 

    const currentBlockHash = blockchain.hashBlock(timestamp, lastBlock.currentBlockHash, data);
    const block = blockchain.createBlock(
       timestamp,
       lastBlock.currentBlockHash,
       currentBlockHash,
        data
  ); 


    writeToFile(folder, file, blockchain)  
  res.status(201).json(new ResponseModel({ statusCode: 201, data: block }));
}

export const blockByIndex = (req, res, next) => {
    try {
      const blockIndex = req.params.id;
      const block = blockchain.chain[blockIndex - 1];

      if (block) {
        res.status(201).json(new ResponseModel({ statusCode: 201, data: block }));
  
      }
    } catch (error) {
      console.log("Could not find vehicle", error);
    }


}
