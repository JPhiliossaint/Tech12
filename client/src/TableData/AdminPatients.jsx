import React, { useState } from 'react'
import JsonData from './fakeData.json'
function TableDisplay() {
    const [searchTerm, setSearchTerm] = useState('');

    // Filter data based on search term
    const filteredData = JsonData.filter(info =>
        info.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const DisplayData = filteredData.map(
        (info) => {
            return (
                <tr key={info.id}>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>
                        <div className="buttonContainer">
                            <button className='update'>Update</button>
                            <button className='delete'>Delete</button>
                        </div>
                    </td>

                </tr>
            )
        }
    );

    return (
        <div class="table-container">
            <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
            <table className="cool-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
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
