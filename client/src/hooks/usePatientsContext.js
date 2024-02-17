import { PatientContext } from "../context/PatientContext";
import { useContext } from "react";

export const usePatientContext = () => {
    const context = useContext(PatientContext)

    if (!context){
        throw Error('usePatientsContext must be used inside a PatientsContextProvider')
    }

    return context
}