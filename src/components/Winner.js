import React from 'react';
import '../app.css';
import { Link } from 'react-router-dom';

export default function Winner(props) {
    const {no, year, name, title} = props.winner

    return (

        <tr className="">

            <td>{no} </td>
            <td>{year} </td>
            <td> {name} </td>
            <td> <Link to={`/akutagawashou/${no}`}> <button className="titleBtn">{title} </button> </Link> </td>
            
                 
           
        </tr>
    )
}