import { hashToCreate } from "../utilities/crypto-lib.mjs";
import Block from "./Block.mjs"; 
export default class Blockchain {
  constructor() {
    
    this.chain = [Block.genesis()];
   
  }

  createBlock(
    timestamp,
    previousBlockHash,
    currentBlockHash,
    data,
    difficulty
  ) {
    const block = new Block(
      timestamp,
      this.chain.length + 1,
      previousBlockHash,
      currentBlockHash,
      data,
      difficulty
    );

    this.chain.push(block);
    return block;
  }

  getLastBlock() {
    return this.chain.at(-1);
  }

  hashBlock(timestamp, previousBlockHash, currentBlockData, nonce, difficulty) {
    const stringToHash =
      timestamp.toString() +
      previousBlockHash +
      JSON.stringify(currentBlockData) +
      nonce +
      difficulty;

    const hash = hashToCreate(stringToHash);

    return hash;
  }

  proofOfWork(previousBlockHash, data) {
    /* let DIFFICULTY_LEVEL = DIFFICULTY; */
    //const DIFFICULTY_LEVEL = process.env.DIFFICULTY
    const lastBlock = this.getLastBlock();
    let difficulty, hash, timestamp;
    let nonce = 0;
    /*         let hash = this.hashBlock(timestamp,previousBlockHash, data, nonce);
     */
    do {
      nonce++;
      timestamp = Date.now();
      difficulty = this.difficultyAdjustment(lastBlock, timestamp);
      hash = this.hashBlock(
        timestamp,
        previousBlockHash,
        data,
        nonce,
        difficulty
      );
    } while (hash.substring(0, difficulty) !== '0'.repeat(difficulty));
    {
      return { nonce, difficulty, timestamp };
     
    }
  }

  difficultyAdjustment(lastBlock, timestamp) {
    const MINE_RATE = process.env.MINE_RATE
    let { difficulty } = lastBlock;

    if(difficulty < 1) return 1;

    return timestamp - lastBlock.timestamp > MINE_RATE
    ? +difficulty + 1
    : +difficulty - 1;
    
  }
}