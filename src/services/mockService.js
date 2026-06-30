const API_URL = "http://localhost:5000/api/mocktests";

export async function getMockTests() {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch mock tests");
        }

        return await response.json();

    } catch (error) {

        console.error("Error loading mock tests:", error);

        return [];

    }

}