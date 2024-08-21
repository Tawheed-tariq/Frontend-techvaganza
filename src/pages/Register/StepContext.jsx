import { Children, createContext, useState } from "react";
export const MultiStepContext = createContext();
export default function StepContext({children}) {
    const [currStep, setCurrStep] = useState(1);
    const [userData, setUserData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        contact: "",
        college: "NITS",
        collegename : "NIT Srinagar",
        enrollmentNumber: "",
        address: "",
      });
    const [finalData, setFinalData] = useState({});
    // const submitData = () => {
    //     setFinalData((prev) => [...prev, userData]);
    //     setUserData([]);
    //     setCurrStep(0);
    //     if (finalData.length > 0) {
    //         console.log("Data submitted successfully");
    //         console.log(finalData);
    //     }
    // };
    return (
        <>
            <MultiStepContext.Provider value={{ currStep, setCurrStep, userData, setUserData, finalData, setFinalData }}>
                {children}
            </MultiStepContext.Provider>
        </>
    );
}