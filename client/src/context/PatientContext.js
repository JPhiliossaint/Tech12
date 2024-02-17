import { createContext, useReducer } from "react";

export const PatientContext = createContext()
export const patientsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PATIENTS':
            return {
                patients: action.payload
            }
            case 'CREATE_PATIENT':
                return {
                    patients: [action.payload, ...state.patients]
                  }
            case 'DELETE_PATIENT' :
                return {
                    patients: state.patients.filter((p) => p._id !== action.payload._id)
                }
                  default:
                     return state
}
}

const PatientsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(patientsReducer, {
        patient : null
    })

    

    return (
        <PatientContext.Provider value={{...state, dispatch}}>
            {children}
        </PatientContext.Provider>
            
    )
}
