import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import { TrackVisibility } from "react-on-screen"
import { TarjetaProyecto } from "./TarjetaProyecto"

import projImg1 from "../assets/proy1.png";
import projImg2 from "../assets/proy2.png";
import projImg3 from "../assets/proy3.png";
import projImg4 from "../assets/proy4.png";
import projImg5 from "../assets/proy5.png";
import projImg6 from "../assets/proy6.png";
import projImg7 from "../assets/proy7.png";
import projImg8 from "../assets/proy8.png";
import projImg9 from "../assets/proy9.png";

export default function Proyectos () {
	const proyectos = [
		{
			titulo: "Proyecto 1",
			descripcion: "Descrición del proyecto 1",
			imagen: projImg1
		},
		{
			titulo: "Proyecto 2",
			descripcion: "Descrición del proyecto 2",
			imagen: projImg2
		},
		{
			titulo: "Proyecto 3",
			descripcion: "Descrición del proyecto 3",
			imagen: projImg3
		},
		{
			titulo: "Proyecto 4",
			descripcion: "Descrición del proyecto 4",
			imagen: projImg4
		},
		{
			titulo: "Proyecto 5",
			descripcion: "Descrición del proyecto 5",
			imagen: projImg5
		},
		{
			titulo: "Proyecto 6",
			descripcion: "Descrición del proyecto 6",
			imagen: projImg6
		},
		{
			titulo: "Proyecto 7",
			descripcion: "Descrición del proyecto 7",
			imagen: projImg7
		},
		{
			titulo: "Proyecto 8",
			descripcion: "Descrición del proyecto 8",
			imagen: projImg8
		},
		{
			titulo: "Proyecto 9",
			descripcion: "Descrición del proyecto 9",
			imagen: projImg9
		}
	]
	return (
		<section className="project" id="projects">
			<Container>
				<Row>
					<Col size={12}>
						
						<h2>Proyectos</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy                  text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>

						<Tab.Container id="projects-tabs" defaultActiveKey="first">
							<Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
								<Nav.Item>
									<Nav.Link eventKey="first">Sección 1</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">Sección 2</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">Sección 3</Nav.Link>
								</Nav.Item>
							</Nav>

							<Tab.Content id="slideInUp">
								<Tab.Pane eventKey="first">
									<Row>
									{
										proyectos.map(( proyecto, indice ) => {
											return (
												<TarjetaProyecto
													key={indice}
													proyecto={proyecto}
												/>
											)
										})
									}
									</Row>
								</Tab.Pane>

								<Tab.Pane eventKey="second">
									<p>Sección 2: Aquí puedes agregar contenido para la sección 2</p>
								</Tab.Pane>

								<Tab.Pane eventKey="third">
									<p>Sección 3: Aquí puedes agregar contenido para la sección 3</p>
								</Tab.Pane>
							</Tab.Content>
						</Tab.Container>
					</Col>
				</Row>
			</Container>
		</section>
	)

}