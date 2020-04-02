import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'

export default function Maincourselist() {
    const [maincourses, setMaincourses] = useState([]);

    useEffect(() => {
        getMaincourses();
    }, [])

    const getMaincourses = () => {
        fetch('https://rateyourmeal.herokuapp.com/api/mainCourses')
            .then(response => response.json())
            .then(data => {
                setMaincourses(data._embedded.mainCourses)
            })
            .catch(err => console.error(err))
    }
    
    const columns = [
        {
            Header: 'Main course',
            accessor: 'meal'
        },
        {
            Header: 'Date',
            accessor: 'date'
        },
        {
            Header: 'Price',
            accessor: 'price'
        },
        {
            Header: 'Red glasses',
            accessor: 'numberOfRedGlasses'
        },
        {
            Header: 'Comment',
            accessor: 'comment'
        },
        {
            Header: 'Side dish',
            accessor: '_links.sidedish.href'
        },
        {
            Header: 'Rating',
            accessor: '_links.rating.href'
        }
    ]

    return (
        <div>
            <ReactTable
                defaultPageSize={10}
                filterable={true}
                data={maincourses}
                columns={columns}
            />
        </div>
    )
}