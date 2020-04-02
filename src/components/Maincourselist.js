import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'

export default function Maincourselist() {
    const [maincourses, setMaincourses] = useState([]);

    useEffect(() => {
        getMaincourses();
    }, [])

    const getMaincourses = () => {
        fetch('https://rateyourmeal.herokuapp.com/maincourses')
            .then(response => response.json())
            .then(data => {
                setMaincourses(data)
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
            accessor: 'sidedish.sidedish'
        },
        {
            Header: 'Rating',
            accessor: 'rating.rating'
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