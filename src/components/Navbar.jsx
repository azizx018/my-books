import React from 'react';

import {Link} from 'react-router-dom'
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function Navbar() {
    return (
        <nav>
            
            <Link to='/'>Books</Link>
            
            <AutoStoriesIcon/>

            <ul>
                <li>
                    <Link to='/mybooks'>My Books</Link>
                </li>
                <li>
                    <Link to='/browse'>Browse</Link>
                </li>
                <li>
                    <Link to='/community'>Community</Link>
                </li>
            </ul>
            
            

        </nav>
    )
}

export default Navbar;