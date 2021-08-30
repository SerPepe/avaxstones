const axios = require('axios')
const { isMinted, allowCors } = require('../../utils/utils')

const handler = async (req, res) => {
    try {
        const fullUrl = `https://${req.headers.host}`
        const tokenId = req.query.id

        const minted = await isMinted(tokenId)
        if (!minted) return res.status(400).json({ error: 'This token has not been minted.' })

        const url = `https://ipfs.io/ipfs/QmSu8enMgD5bVq3JjCUct9z7LgFpyrLx8LZa95BnXM2JzC${tokenId}`
        const { data } = await axios.get(url)
        data.image = `${fullUrl}/api/image?id=${tokenId}`
        res.json(data)
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'An error occurred.' })
    }
}

module.exports = allowCors(handler)
