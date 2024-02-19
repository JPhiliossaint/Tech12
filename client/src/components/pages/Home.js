import TableDisplay from "../../TableData/Patients";
export default function Home() {
    return (
        <div>
            <h1 className="HomePageHeader">Patient Log</h1>
            <TableDisplay />
        </div>
    );


}