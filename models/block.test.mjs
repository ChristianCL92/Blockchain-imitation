import {describe, it, expect} from "vitest";
import Block from "./Block.mjs";

describe("Block", () => {
    
    const block = new Block()
    describe("Should have the following properties", () => {
          it('Timestamp, blockIndex, previousBlockHash, currentBlockHash, data, difficulty', () => {
            expect(block).toHaveProperty("timestamp")
            expect(block).toHaveProperty("blockIndex")
            expect(block).toHaveProperty("previousBlockHash")
            expect(block).toHaveProperty("currentBlockHash")
            expect(block).toHaveProperty("data")
            expect(block).toHaveProperty("difficulty")
          });

          describe('genesis() method', () => { 
            const genesisBlock = Block.genesis();

            it("Should return an instance of Block class", () => {
              expect(genesisBlock).toBeInstanceOf(Block)
            })
           })
    })
  
})