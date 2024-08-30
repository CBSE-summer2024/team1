import React from 'react'
import SearchBar from './SearchBar'
import AvatarDropDown from './AvatarDropDown'
import TabList from './TabList'
import { Link } from 'react-router-dom'
import {useAuth} from '../../context/AuthContext'

const tabs = [
    { path: '/products', label: 'Products' },
    { path: '/', label: 'Services' },
    { path: '/', label: 'Contact' }
];
export default function NavBar() {
    const {session} = useAuth()
    return (
        <div className="bg-base-100 shadow ">
            <div className='w-5/6 mx-auto navbar justify-between'>
                <Link className="btn btn-ghost text-xl" to="/">mart.ps</Link>
                <TabList routes={tabs}/>
                <div className="gap-2">
                    <SearchBar />
                    {
                        !session?<Link to={'auth'} className='btn btn-neutral'>login</Link>:<AvatarDropDown />
                    }
                </div>
            </div>
        </div>

    )
}
