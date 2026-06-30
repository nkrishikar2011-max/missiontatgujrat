export function validateResponse(response) {
  if (!response || typeof response !== "string") {
    return "માફ કરશો, હાલમાં જવાબ જનરેટ કરી શકાયો નથી. કૃપા કરીને ફરી પ્રયાસ કરો.";
  }

  let output = response.trim();

  // Remove extra blank lines
  output = output.replace(/\n{3,}/g, "\n\n");

  // Remove markdown code fences if AI wraps the whole response
  if (output.startsWith("```") && output.endsWith("```")) {
    output = output
      .replace(/^```[a-zA-Z]*\n?/, "")
      .replace(/```$/, "")
      .trim();
  }

  return output;
}