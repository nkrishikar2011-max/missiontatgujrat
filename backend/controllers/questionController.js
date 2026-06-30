import {
  uploadQuestionsService,
  getQuestionsService,
} from "../services/questionService.js";

/*
========================================
Upload Questions
========================================
*/

export async function uploadQuestions(req, res) {

  try {

    const questions = req.body;

    if (!Array.isArray(questions)) {

      return res.status(400).json({

        success: false,

        message: "Questions must be an array",

      });

    }

    await uploadQuestionsService(questions);

    return res.status(200).json({

      success: true,

      message: "Questions Uploaded Successfully",

    });

  } catch (err) {

    console.error("Upload Error:", err);

    return res.status(500).json({

      success: false,

      message: err.message,

    });

  }

}

/*
========================================
Get Questions By Test ID
========================================
*/

export async function getQuestions(req, res) {

  try {

    const { testId } = req.params;

    if (!testId) {

      return res.status(400).json({

        success: false,

        message: "Test ID is required",

      });

    }

    const questions = await getQuestionsService(testId);

    return res.status(200).json(questions);

  } catch (err) {

    console.error("Get Questions Error:", err);

    return res.status(500).json({

      success: false,

      message: err.message,

    });

  }

}