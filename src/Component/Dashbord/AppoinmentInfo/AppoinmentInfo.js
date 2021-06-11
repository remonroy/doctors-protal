import React from 'react';

const AppoinmentInfo = ({appoinmentDatedata}) => {
    return (
        <table className="table table-borderless">
            <thead className="text-center">
                <tr>
                <th className="text-secondary" scope="col">sr</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Service</th>
                </tr>
            </thead>
            <tbody>
                {   
                    appoinmentDatedata.map((appoinmentDatedata, index) => 
                        
                        <tr style={{borderBottom:"1px solid #ddd"}} className="text-center">
                            <td>{index + 1}</td>
                            <td>{appoinmentDatedata.name}</td>
                            <td>{appoinmentDatedata.phone}</td>
                            <td>{appoinmentDatedata.email}</td>
                            <td>{appoinmentDatedata.service}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AppoinmentInfo;