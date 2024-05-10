export default class Block {
  constructor(
    timestamp,
    blockIndex,
    previousBlockHash,
    currentBlockHash,
    data,
    difficulty
  ) {
    this.timestamp = timestamp;
    this.blockIndex = blockIndex;
    this.previousBlockHash = previousBlockHash;
    this.currentBlockHash = currentBlockHash;
    this.data = data;
    this.difficulty = difficulty || +process.env.DIFFICULTY;
  }

  static genesis() {
    return new this(Date.now(), 1, '0', '0', [], process.env.DIFFICULTY);
  }
}