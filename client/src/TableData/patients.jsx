import React from 'react'
import JsonData from './fakeData.json'
function TableDisplay() {
    const DisplayData = JsonData.map(
        (info) => {
            return (
                <tr>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                </tr>
            )
        }
    )

    return (
        <div>
            <table class="cool-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
}

export default TableDisplay;
