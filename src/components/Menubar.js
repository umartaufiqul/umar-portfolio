import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export default function Menubar() {
    return (
        <div>
            <Navbar bg="light" className="justify-content-center">
                <Nav className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link href="/">Introduction</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/project">Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">Timeline</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </div>
    )
}