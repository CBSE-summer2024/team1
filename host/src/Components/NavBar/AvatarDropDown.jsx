import React from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from '../LogoutButton'


export default function AvatarDropDown() {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <Link className="justify-between" to="profile">
            Profile
          </Link>
        </li>
        <li>
          <Link to="/order-history">
            Order History
          </Link>
        </li>
        <li>
          <LogoutButton/>
        </li>
      </ul>
    </div>
  )
}
