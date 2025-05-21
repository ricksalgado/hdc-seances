import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
        <h2>Dashboard</h2>
        <nav>
            <ul>
                <li>
                    <Link to='profile' >Profile</Link>
                </li>
                <li>
                    <Link to='settings' >Settigns</Link>
                </li>
            </ul>
        </nav>
        <div>
            <Outlet />
        </div>
    </div>

  )
}

export default Dashboard
