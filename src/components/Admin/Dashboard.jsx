import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <>
        <Container>
            <Row>
                <Col md={3}>
                    <div className="dashboard_menu">
                        <ul className="list-group">
                            <li className="list-group-item"><Link Link to="/admin">Dashboard</Link></li>
                            <li className="list-group-item"><Link to="/admin/category">Category</Link></li>
                            <li className="list-group-item"><Link to="/admin/tags">Tags</Link></li>
                            <li className="list-group-item"><Link to="/admin/slug">Slug</Link></li>
                            <li className="list-group-item"><Link to="/admin/products">Products</Link></li>
                        </ul>
                    </div>
                </Col>
                <Col md={9}>
                    <Outlet />
                </Col>
            </Row>
        </Container>
        
        </>
    )
}

export default Dashboard
