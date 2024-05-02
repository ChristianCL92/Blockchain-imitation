export const getBlockchain = (req, res, next) => {
    res.status(200).json({success: true, data:`hello you have a blockchain`})
}