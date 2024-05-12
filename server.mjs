import express from "express";
import { ErrorResponse } from "./utilities/ErrorResponseModel.mjs";
import { errorHandler } from "./middleware/errorHandler.mjs";
import blockchainRouter from "./routes/blockchain-routes.mjs"
import { logger } from "./middleware/logger.mjs";
const app = express()

app.use(logger)
app.use(express.json());
app.use("/api/v1/blockchain", blockchainRouter);

app.all("*", (req, res, next) => {
    next(new ErrorResponse(`Could not find resource ${req.originalUrl}`, 404));
 })

app.use(errorHandler);

const PORT = process.env.PORT || 7010;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));