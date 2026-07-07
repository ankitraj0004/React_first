import React from 'react'


const Navbar = () => {
  return (
    <>
     <nav>
            <h2>My App</h2>

            <div className="nav-links">
                <h4 className="nav-link">About</h4>
                <h4 className="nav-link">Services</h4>
                <h4 className="nav-link">Contact</h4>
                <h4 className="nav-link">Login</h4>
            </div>
        </nav>
    </>
  )
}

export default Navbar
