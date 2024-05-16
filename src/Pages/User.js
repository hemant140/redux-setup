import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import userActions from '../redux/user/actions'
import { Table } from 'antd';
const { getUser } = userActions;
const columns = [
    {
        title: '#',
        dataIndex: 'key',
        key: 'key',
    },
    {
        title: 'NAME',
        dataIndex: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name)
    },
    {
        title: 'EMAIL',
        dataIndex: 'email',
    },
    {
        title: 'PHONE',
        dataIndex: 'phone',
    },
    {
        title: 'WEBSITE',
        dataIndex: 'website',
    },

    {
        title: 'ADDRESS',
        dataIndex: 'address',

    },
    {
        title: 'CITY',
        dataIndex: 'city',
    },
    {
        title: 'ZIPCODE',
        dataIndex: 'zipcode',
    },
];
function User() {
    const dispatch = useDispatch()
    const { loading, userResult } = useSelector(state => state.userReducer)

    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])


    const dataSource = userResult && userResult.length > 0 && userResult.map((user, index) => {
        return {
            key: index + 1,
            name: user.name,
            email: user.email,
            phone: user.phone,
            website: user.website,
            address: user.address.street,
            city: user.address.city,
            zipcode: user.address.zipcode,

        }
    })
    return (
        <div className="user-page">
            <div className="header-h1">
                <h1 >Users</h1>
            </div>
            <div className='mt-3'>
                <Table
                    columns={columns}
                    dataSource={dataSource}
                    loading={loading}
                />
            </div>
        </div>
    )
}

export default User
