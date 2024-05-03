 import ResponseModel from "../utilities/ResponseModel.mjs" 
import blockchain from "../startBlockchain.mjs"

export const getBlockchain = (req, res, next) => {
res.status(200).json(new ResponseModel({statusCode: 200, data: blockchain}))
}

export const createBlock = (req, res, next) => {
  const data = req.body;
     const previousBlockHash = 0;
    const currentBlockHash = 0;
    const timestamp = Date.now(); 
   const block = blockchain.createBlock(
    timestamp,
    previousBlockHash,
    currentBlockHash,
    data
  ); 

console.log(timestamp);

  res.status(201).json(new ResponseModel({ statusCode: 201, data: block }));
  console.log(block);
}