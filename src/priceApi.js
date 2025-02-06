const axios = require("axios");

const BASE_URL = "http://localhost:3001/products";

/**
 * Fetches the price of a product from the API.
 * @param {string} productName - Name of the product.
 * @returns {Promise<number>} - Price of the product.
 */
async function getProductPrice(productName) {
    try {
        const response = await axios.get(`${BASE_URL}/${productName}`);
        return response.data.price; // Assuming API returns { price: 2.52 }
    } catch (error) {
        console.error(`Error fetching price for ${productName}:`, error.message);
        throw new Error(`Product ${productName} not found`);
    }
}

module.exports = { getProductPrice };
