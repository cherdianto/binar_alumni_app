/* eslint-disable no-undef */
import React from 'react'
import { Nav, Container, Row, Col, Button } from 'react-bootstrap'
import classes from './DashboardComponent.module.css'
import {Link} from 'react-router-dom'

function DashboardComponent() {
    return (
        <div>
            <Container className="my-4">
                <Row className="row">
                    {/* SIDEBAR CONTAINER */}
                    <Col md={3} className={classes.sidebar}>
                        <Nav className={classes.sidebarNav}>
                            <div>
                                {/* <form className={`${classes.sidebarForm} mb-3`}>
                                    <input className="form-control" type="text" placeholder="Search..." />
                                </form> */}
                                <Nav className="flex-column" variant="pills">
                                    <li className="nav-header">Dashboards</li>
                                    <Nav.Item>
                                        <Nav.Link  as={Link} to="/">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="active" as={Link} to="/profile">Profile</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link as={Link} to="/redux">Redux</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link  as={Link} to="/page1">Page 1</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <hr className="visible-xs mt-3" />
                            </div>
                        </Nav>
                    </Col>
                    
                    {/* CONTENT CONTAINER */}
                    <Col md={9} className={classes.content}>
                        <div className={classes.dashhead}>
                            <div className={classes.dashheadTitles}>
                                <h6 className={classes.dashheadSubtitle}>Dashboards</h6>
                                <h2 className={classes.dashheadTitle}>Order history</h2>
                            </div>

                            <Button className={`${classes.btnToolbar} ${classes.dashheadToolbar}`} variant="light">
                                <div className={`${classes.btnToolbarItem} ${classes.inputWithIcon}`}>
                                    <input type="text" value="01/01/15 - 01/08/15" className={classes.formControl} data-provide="datepicker" />
                                    {/* <span className="icon icon-calendar"></span> */}
                                </div>
                            </Button>
                        </div>

                        <div className={`${classes.flextable} ${classes.tableActions}`}>
                            <div className={`${classes.flextableItem} ${classes.flextablePrimary}`}>
                                <div className={`${classes.btnToolbarItem} ${classes.inputWithIcon}`}>
                                <input type="text" className="form-control input-block" placeholder="Search orders" />
                                {/* <span className="icon icon-magnifying-glass"></span> */}
                                </div>
                            </div>
                            <div className={classes.flextableItem}>
                                <div className="btn-group">
                                    <Button type="button" variant="outline-primary">
                                        Edit
                                    </Button>
                                    <Button type="button" variant="outline-primary">
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="table-responsive">
                            <table className="table" data-sort="table">
                                <thead>
                                <tr>
                                    <th><input type="checkbox" className="select-all" id="selectAll" /></th>
                                    <th>Order</th>
                                    <th>Customer name</th>
                                    <th>Description</th>
                                    <th>Date</th>
                                    <th>Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox" className="select-row" /></td>
                                        <td><a href="#">#10001</a></td>
                                        <td>First Last</td>
                                        <td>Admin theme, marketing theme</td>
                                        <td>01/01/2015</td>
                                        <td>$200.00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" className="select-row" /></td>
                                        <td><a href="#">#10002</a></td>
                                        <td>Firstname Last</td>
                                        <td>Admin theme</td>
                                        <td>01/01/2015</td>
                                        <td>$100.00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" className="select-row" /></td>
                                        <td><a href="#">#10003</a></td>
                                        <td>Name Another</td>
                                        <td>Personal blog theme</td>
                                        <td>01/01/2015</td>
                                        <td>$100.00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" className="select-row" /></td>
                                        <td><a href="#">#10004</a></td>
                                        <td>One More</td>
                                        <td>Marketing theme, personal blog theme, admin theme</td>
                                        <td>01/01/2015</td>
                                        <td>$300.00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" className="select-row" /></td>
                                        <td><a href="#">#10005</a></td>
                                        <td>Name Right Here</td>
                                        <td>Personal blog theme, admin theme</td>
                                        <td>01/02/2015</td>
                                        <td>$200.00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" className="select-row" /></td>
                                        <td><a href="#">#10006</a></td>
                                        <td>First Last</td>
                                        <td>Admin theme, marketing theme</td>
                                        <td>01/01/2015</td>
                                        <td>$200.00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" className="select-row" /></td>
                                        <td><a href="#">#10007</a></td>
                                        <td>Firstname Last</td>
                                        <td>Admin theme</td>
                                        <td>01/01/2015</td>
                                        <td>$100.00</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" className="select-row" /></td>
                                        <td><a href="#">#10008</a></td>
                                        <td>Name Another</td>
                                        <td>Personal blog theme</td>
                                        <td>01/01/2015</td>
                                        <td>$100.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="text-center">
                            <nav>
                                <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                    </a>
                                </li>
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">4</a></li>
                                <li className="page-item"><a className="page-link" href="#">5</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                    </a>
                                </li>
                                </ul>
                            </nav>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DashboardComponent
