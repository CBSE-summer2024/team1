import React from 'react'
import SearchBar from './SearchBar'
import AvatarDropDown from './AvatarDropDown'
import TabList from './TabList'
import { Link } from 'react-router-dom'

const tabs = [
    { path: '/products', label: 'Products' },
    { path: '/', label: 'Services' },
    { path: '/', label: 'Contact' }
];
export default function NavBar() {
    return (
        <div className="bg-base-100 shadow ">
            <div className='w-5/6 mx-auto navbar justify-between'>
                <Link className="btn btn-ghost text-xl" to="/">mart.ps</Link>
                <TabList routes={tabs}/>
                <div className="gap-2">
                    <SearchBar />
                    <AvatarDropDown />
                </div>
            </div>
        </div>

    )
}
