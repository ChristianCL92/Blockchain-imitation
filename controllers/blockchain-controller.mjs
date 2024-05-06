import ResponseModel from "../utilities/ResponseModel.mjs" 
import blockchain from "../startBlockchain.mjs"
  import {
    writeToFile,
  } from '../utilities/fileHandler.mjs';  
import { ErrorResponse } from "../utilities/ErrorResponseModel.mjs";


  const folder = "data";
const file = "blockchain.json";  


export const getBlockchain = (req, res, next) => { 
res.status(200).json(new ResponseModel({ statusCode: 200,  data: blockchain}))
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

 if (!block.data.data) {
  return next(new ErrorResponse("Block must include data to be added to the blockchain", 404))
 }
    writeToFile(folder, file, blockchain)  
  res.status(201).json(new ResponseModel({ statusCode: 201, data: block }));
}

export const blockByIndex = (req, res, next) => {
    try {
      /* throw new Error("Something went wrong with the execution of code") */
      const blockIndex = req.params.id;
      const block = blockchain.chain[blockIndex - 1];

      if(!block) {
        return next(new ErrorResponse(`Car with id:${blockIndex} does not exist`, 404))
      }
        res.status(201).json(new ResponseModel({
           statusCode: 201,
            data: block 
          }));
    } catch (error) {
      next(error)
    }


}
