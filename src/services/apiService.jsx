// Define your base API URL
const BASE_URL = 'http://localhost:3000';

/**
 * Fetches user data by user ID.
 * @param {number} userId - The ID of the user to fetch.
 * @returns {Promise<Object>} - A promise that resolves to user data.
 */
const getUserData = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}`);
    if (!response.ok) {
      throw new Error('Error fetching user data');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

/**
 * Fetches user activity data by user ID.
 * @param {number} userId - The ID of the user to fetch activity data for.
 * @returns {Promise<Object>} - A promise that resolves to user activity data.
 */
const getUserActivity = async (userId) => {
  try {
    const response = await fetch(`${BASE_URL}/user/${userId}/activity`);
    if (!response.ok) {
      throw new Error('Error fetching user activity');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

// Export the functions as part of a default export object
export default {
  getUserData,
  getUserActivity,
};
