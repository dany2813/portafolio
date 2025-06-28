import { Col } from "react-bootstrap"

export const TarjetaProyecto = ({ proyecto }) => {
	return (
		<Col size={12} sm={6} md={4}>
			<div className="proj-imgbx">
				<img src={ proyecto.imagen } />
				<div className="proj-txtx">
					<h4>{ proyecto.titulo }</h4>
					<span>{ proyecto.descripcion }</span>
				</div>					
			</div>
		</Col>
	)
}