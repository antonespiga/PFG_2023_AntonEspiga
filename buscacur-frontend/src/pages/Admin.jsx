import React, { useState, useEffect } from "react"
import '../components/MenuCarpetas.css'
import { Container, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap"
import MenuCRUDCursos from "../components/MenuCRUDCursos"
import MenuCRUDUsuarios from "../components/MenuCRUDUsuarios"
import MenuSistema from "../components/MenuSistema"
import MenuCopias from "../components/MenuCopias"
import Perfil from "../components/Perfil"

export default function Admin() {

	const [actTab, setActTab] = useState('1')

	const handleClick = (num) => {
		setActTab(num)
	}

	return (
		<Container id="content">
			<Col >
				<Perfil  />
			</Col>
			<Nav justified tabs>
				<NavItem>
					<NavLink id="navlink" active={actTab === "1"} onClick={() => handleClick('1')}>
						Cursos
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink id="navlink" active={actTab === "2"} onClick={() => handleClick("2")}>
						Usuarios
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink id="navlink" active={actTab === "3"} onClick={() => handleClick("3")}>
						Sistema
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink id="navlink" active={actTab === "4"} onClick={() => handleClick("4")}>
						Copias
					</NavLink>
				</NavItem>
			</Nav>
			<TabContent activeTab={actTab} >
				<TabPane tabId="1">
					<MenuCRUDCursos />
				</TabPane>
				<TabPane tabId="2">
					<MenuCRUDUsuarios />
				</TabPane>
				<TabPane tabId="3">
					<MenuSistema />
				</TabPane>
				<TabPane tabId="4">
					<MenuCopias />
				</TabPane>
			</TabContent>
		</Container>
	)
}

