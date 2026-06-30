const API="http://localhost:5000/api/questions";

export async function getQuestions(testId){

const response=await fetch(

`${API}/${testId}`

);

if(!response.ok){

throw new Error("Questions Load Failed");

}

return await response.json();

}