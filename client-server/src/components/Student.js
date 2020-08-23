import React from 'react'
import { useQuery, gql } from '@apollo/client';

const GET_STUDENTS = gql`
  query GetALLStudents {
    students{
      name,
      id,
      email,
      age,
    }
  }
`;

function Students() {
    const { loading, error, data } = useQuery(GET_STUDENTS);

    if (loading)
    return <h1>Loading...</h1>

    if(error)
    return <h1>Error</h1>

    const {students} = data;
    return (

        <div>
            <table border='2'>
                {
                    students.map(std=>{
                        return(
                            <tr key={std.id} >
                                <td>{std.name} </td>
                                <td>{std.age} </td>
                                <td>{std.email} </td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>

    );
}

export default Students;
