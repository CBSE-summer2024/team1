import React from 'react'
import SearchBar from './SearchBar'
import AvatarDropDown from './AvatarDropDown'
import TabList from './TabList'
import { Link } from 'react-router-dom'
import {useAuth} from '../../context/AuthContext'
import {ROUTES} from "Shared"

const tabs = [
    { path: ROUTES.PRODUCTS, label: 'Products' },
    { path: ROUTES.HOME, label: 'Services' },
    { path:  ROUTES.HOME , label: 'Contact' }
];
export default function NavBar() {
    const {session,loading} = useAuth()
    if(loading){
        return <h1>loading</h1>
    }
    return (
        <div className="bg-base-100 shadow ">
            <div className='w-5/6 mx-auto navbar justify-between'>
                <Link className="btn btn-ghost text-xl" to="/">mart.ps</Link>
                <TabList routes={tabs}/>
                <div className="gap-2">
                    <SearchBar />
                    {
                        !session?<Link to={ROUTES.AUTH} className='btn btn-neutral'>login</Link>:<AvatarDropDown />
                    }
                </div>
            </div>
        </div>

    )
}
