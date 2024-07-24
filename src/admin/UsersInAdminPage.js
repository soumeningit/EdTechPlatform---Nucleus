import React from 'react';

const UsersInAdminPage = () => {
    return (
        <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
            <div className="bg-white p-4 rounded shadow">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">User Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Role</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2 px-4 border-b">Jane Doe</td>
                            <td className="py-2 px-4 border-b">jane.doe@example.com</td>
                            <td className="py-2 px-4 border-b">Instructor</td>
                            <td className="py-2 px-4 border-b">
                                <button className="bg-green-500 text-white px-2 py-1 rounded">Edit</button>
                                <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">Delete</button>
                            </td>
                        </tr>
                        {/* Add more user rows as needed */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersInAdminPage;