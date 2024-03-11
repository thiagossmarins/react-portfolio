import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from '../../assets/project-images/dogs/dogs.webp'
import projImg2 from '../../assets/project-images/rick-and-morty/rick-and-morty.webp'
import projImg3 from '../../assets/project-images/carrinho-de-compras/carrinho-de-compras.webp'
import ProjectCard from './ProjectCard';
import './Project.css'

const Projects = () => {

    const projects = [
        {
            title: "Rede Social Dogs",
            description: "React App consuming API",
            imgUrl: projImg1,
        },
        {
            title: "Rick and Morty WiKi",
            description: "React App consuming API",
            imgUrl: projImg2,
        },
        {
            title: "Shopping Cart",
            description: "React App consuming API",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className='project' id='projects'>
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Projects developed with React.js</p>
                        <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                            <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>page 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second'>page 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='third'>page 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>This page is under development.</Tab.Pane>
                                <Tab.Pane eventKey='third'>This page is under development.</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects