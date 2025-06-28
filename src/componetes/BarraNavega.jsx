import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom'

import logo from '../assets/dev-icon.svg'
import facebookIcon from '../assets/facebook.svg'
import instagramIcon from '../assets/instagram.svg'
import linkedinIcon from '../assets/linkedin.svg'



function BarraNavegacion () {
	const [ linkActivo, setLinkActivo ] = useState('home')
	const [ scrollActivo, setScrollActivo ] = useState(false)

	useEffect( () => {
		function enScroll () {
			if ( window.scrollY > 50 ) {
				setScrollActivo( true )
			} else {
				setScrollActivo( false )
			}
		}
		window.addEventListener( 'scroll', enScroll )
		return () => window.removeEventListener( 'scroll', enScroll )
	}, [])

	function manejarLinkActivo (nuevoLinkActivo) {
		setLinkActivo(nuevoLinkActivo)
		console.log(linkActivo)
	}

	return (
		<BrowserRouter>
		<Navbar expand="md" className={scrollActivo ? 'scrolled' : ''}>
			<Container className="">
				<Navbar.Brand className="" href="/">
					<img src={logo} alt="Logo" />
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="barra-navegacion" >
					<span className="navbar-toggler-icon"></span>
				</Navbar.Toggle>

				<Navbar.Collapse id="barra-navegacion" >
					<Nav className="ms-auto">
						<Nav.Link href="#home" className={linkActivo === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => manejarLinkActivo('home')}>Home</Nav.Link>
						<Nav.Link href="#skills" className={linkActivo === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => manejarLinkActivo('skills')}>Skills</Nav.Link>
						<Nav.Link href="#projects" className={linkActivo === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => manejarLinkActivo('projects')}>Projects</Nav.Link>
					</Nav>

					<span className="navbar-text">
						<div className="social-icon">
							<a href="#"><img src={facebookIcon} alt="Facebook" /></a>
							<a href="#"><img src={instagramIcon} alt="Instagram" /></a>
							<a href="#"><img src={linkedinIcon} alt="LinkedIn" /></a>
						</div>

						<HashLink to="#connect">
							<button className="vvd"><span>Let's Connect</span></button>
						</HashLink>
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
		</BrowserRouter>
	)
	
}


export default BarraNavegacion