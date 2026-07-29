import { useState } from 'react'
import './App.css'

function Navbar() {
    const [isVisible, setVisible] = useState(false)

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li key={10}><a href='#about'>About</a></li>
                        <li key={11}><a href='#works'>Projects</a></li>
                        <li key={12}><a href='#contact'>Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar