import crypto from "crypto";

export const hashToCreate = (stringToHash) => {
     return crypto.createHash('sha256').update(stringToHash).digest('hex');
}