import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Home = () => {

    const [users, setUsers] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
    }

    return (
        <>
            <div className="overflow-auto rounded-lg shadow-lg mt-3">
                <table className="w-full">
                    <thead className='bg-gray-500 border-b-2 '>
                        <tr>
                            <th className='w-20 p-3 text-sm font-semibold tracking-wide text-left'>ID</th>
                            <th className='w-36 p-3 text-sm font-semibold tracking-wide text-left'>Name</th>
                            <th className='w-36 p-3 text-sm font-semibold tracking-wide text-left'>Last Name</th>
                            <th className='w-36 p-3 text-sm font-semibold tracking-wide text-left'>Email</th>
                            <th className='w-36 p-3 text-sm font-semibold tracking-wide text-left'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-500'>

                        {
                            users.map((user, index) => (
                                <tr>
                                    <td className='p-3 text-sm font-bold whitespace-nowrap' key={index}>{index + 1}</td>
                                    <td className='p-3 text-sm text-gray-200 whitespace-nowrap'>{user.firstName}</td>
                                    <td className='p-3 text-sm text-gray-200 whitespace-nowrap'>{user.lastName}</td>
                                    <td className='p-3 text-sm text-gray-200 whitespace-nowrap'>{user.email}</td>
                                    <td className='flex flex-row gap-6 mt-2'>
                                        <Link to={`/edituser/${user.id}`} className='border pl-3 pr-3 border-cyan-600 rounded-md bg-cyan-800'>Edit</Link>
                                        <button className='border pl-3 pr-3 border-red-700 rounded-md bg-red-600'
                                            onClick={()=>deleteUser(user.id)}
                                        >Delete</button>
                                    </td>
                                </tr>

                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Home