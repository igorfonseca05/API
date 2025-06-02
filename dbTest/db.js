
function dbError() {
    throw new Error('Database not connected')
}

module.exports = { dbError }