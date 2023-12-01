import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props){
    return(
        <div>
            <nav className={`navbar navbar-expand-lg bg-${props.mode} nav justify-content-center container-fluid`}>
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Active</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
            </li>
        </ul>
        <div className="dropdown d-flex">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Themes
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <button className='dropdown-item' onClick={props.darkSwitch} id="switchDarkText">Dark</button>
                <button className='dropdown-item' onClick={props.matrixSwitch} id="switchMatrixText">Matrix</button>
                <button className='dropdown-item' onClick={props.ujjuSwitch} id="switchUjjuText">Pink!</button>
            </div>
        </div>
        </nav>
        </div>
    )
}

export default Navbar
