import { useEffect, useState } from "react";
import { getMockTests } from "../services/mockService";
import MockCard from "../components/MockCard";

function MockTest() {

    const [tests, setTests] = useState([]);

    useEffect(() => {
        loadTests();
    }, []);

    async function loadTests() {

        const data = await getMockTests();

        setTests(data);

    }

    return (

        <div className="min-h-screen bg-slate-100 p-10">

            <h1 className="text-4xl font-bold">
                Mock Tests
            </h1>

            <p className="text-gray-500 mt-2">
                Choose a Test
            </p>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">

                {tests.map((test) => (

                    <MockCard
                        key={test.id}
                        test={test}
                    />

                ))}

            </div>

        </div>

    );

}

export default MockTest;