import React from 'react'
import {Link} from 'react-router-dom'
export default function Header() {
    return (
        <div>
            <div> <Link to="/"><i className="fas fa-user"></i></Link> </div>
            <div> <Link to="/products">Pear</Link> </div>
            <div><Link to="/cart"><i className="fas fa-shopping-cart"></i></Link></div>
        </div>
    )
}
