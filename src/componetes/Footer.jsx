import { Container, Row, Col } from "react-bootstrap"

import logo from "../assets/DevIcon.svg"
import facebookIcon from "../assets/facebook.svg"
import xIcon from "../assets/X.svg"

export default function Footer (){

	return (
		<footer className="footer">
			<Container>
				<Row className="align-items-center">
					<Col size={12} sm={6} >
						<img src={logo} alt="Logo" />
					</Col>

					<Col size={12} sm={6} className="text-center text-sm-end">
						<div className="social-icon">
							<a href="#" ><img src={facebookIcon} alt="Facebook" /></a>
							<a href="#" ><img src={xIcon} alt="X" /></a>
						</div>

						<p>Copyright 2025 All rights reserved</p>
					</Col>
				</Row>
			</Container>
			
		</footer>
	)

}