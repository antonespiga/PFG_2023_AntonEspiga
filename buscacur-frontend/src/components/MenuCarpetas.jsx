import React from "react"
import './MenuCarpetas.css'
import { Container, Input, Label, Button, Col, Row } from "reactstrap"
import iconAdmin from '/admin.png'

function MenuCarpetas() {

	return (

		<Container className='container-fluid'>
			<Col >
				<i><img className="icon-perfil" src={iconAdmin} /></i>
			</Col>
			<Container className=" tab-menu">
				<Input type="radio" className="tab-1" id="contenidos" name="sel" ></Input>
				<Label for="contenidos" className="cont">Contenido</Label>

				<Input type="radio" className="tab-2" id="usuarios" name="sel"></Input>
				<Label for="usuarios" className="cont" ><span>Usuarios</span></Label>

				<Input type="radio" className="tab-3" id="sistema" name="sel"></Input>
				<Label for="sistema" className="cont">Sistema</Label>

				<Input type="radio" className="tab-4" id="copias" name="sel"></Input>
				<Label for="copias" className="cont">Copias</Label>

				<Container className="content">
					<Col className="contenidos">
						<Button className="btn-opt">AÑADIR CONTENIDO</Button>
						<Button className="btn-opt">ELIMINAR CONTENIDO</Button>
						<Button className="btn-opt">MODIFICAR CONTENIDO</Button>
					</Col>
					<Col className="usuarios">
						<Button className="btn-opt">ALTA USUARIO</Button>
						<Button className="btn-opt">BAJA USUARIO</Button>
						<Button className="btn-opt">MODIFICAR DATOS</Button>
					</Col>
					<Col className="sistema">
						<Button className="btn-opt">CONFIGURAR SISTEMA</Button>
						<Button className="btn-opt">REINSTALAR SISTEMA</Button>
					</Col>
					<Col className="copias">
						<Button className="btn-opt">COPIA DE SEGURIDAD</Button>
					</Col>
				</Container>
			</Container>
		</Container>
	)
}

export default MenuCarpetas