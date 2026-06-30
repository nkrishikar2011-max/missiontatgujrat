import { getAllMockTests } from "../services/mockTestService.js";

export async function getMockTests(req, res) {

    try {

        const tests = await getAllMockTests();

        res.status(200).json(tests);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Failed to load mock tests"
        });

    }

}