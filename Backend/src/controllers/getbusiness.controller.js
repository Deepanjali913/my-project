import client from '../db/index.js'

// Controller function to get businesses by category
const getBusinessesByCategory = async (req, res) => {
    const { categoryId } = req.params; // Assuming the category ID is passed as a URL parameter

    try {
        // SQL query to fetch businesses by category
        const queryText = `
            SELECT business_id, name, description, address, city, state, category_id
            FROM "Business_Info"
            WHERE category_id = $1
        `;
        const result = await client.query(queryText, [categoryId]);

        // Sending response
        res.status(200).json({
            success: true,
            data: result.rows // PostgreSQL results are in the rows array
        });
    } catch (error) {
        console.error('Error fetching businesses:', error);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
};

export {getBusinessesByCategory};