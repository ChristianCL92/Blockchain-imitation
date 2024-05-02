import Block from "./Block.mjs"; 

export default class Blockchain {
    constructor() {
        this.chain = [];
        //genesis block creaton
        this.createBlock(Date.now(), "0", "0", [] )
    }

    createBlock(timestamp,
         previousBlockHash,
          currentBlockHash,
           data ) {
        const block = new Block(
            timestamp, 
            this.chain.length -1,
             previousBlockHash,
              currentBlockHash,
               data
             )

             this.chain.push(block);
             return block;
    }

}