import { saveResultService } from "../services/resultService.js";

export async function saveResult(req, res) {

  try {

    const result = req.body;

    await saveResultService(result);

    return res.status(200).json({

      success: true,

      message: "Result Saved Successfully",

    });

  }

  catch (err) {

    console.error(err);

    return res.status(500).json({

      success: false,

      message: err.message,

    });

  }

}