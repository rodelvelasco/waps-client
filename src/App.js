import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, withRouter,Redirect, Link } from "react-router-dom";
import { connect } from 'react-redux';
// import * as actions from './store/actions';
import Dashboard from "./Layouts/Pages/Dashboard";
import Chart from "./Layouts/Pages/Chart";
import Setting from "./Layouts/Pages/Setting";

// import StorageUtil from "./utils/storageUtil";
// import logo from './logo.svg';
import './App.css';
// function App() {
//   return (
    // <div className="App">
    //   <header className="App-header">
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
//   );
// }

// export default App;


class App extends Component {
	
	componentDidMount() {
		// this.props.onTryAutoSignup();
	}


	render() {
		return (
			<Router basename="/">
            <div className="container mycontainer">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark myheader">
                    {/* <Link className="navbar-brand" to="/">
                        <img src={loadImg(user.company.logo)} alt="" />
                    </Link> */}
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/">
                                    {/* <img className="icon" src={loadImg("/assets/images/icons/pallet.svg")} alt="" /> */}
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.740234" y="0.398438" width="16" height="15" rx="3" fill="#2789FB" />
                                        <path
                                            d="M13.6398 7.74484L9.36251 4.1302C9.18765 3.98044 8.9673 3.89844 8.73976 3.89844C8.51223 3.89844 8.29188 3.98044 8.11702 4.1302L3.83973 7.74484C3.81176 7.76892 3.78867 7.79844 3.77178 7.8317C3.7549 7.86497 3.74455 7.90132 3.74132 7.9387C3.7381 7.97608 3.74206 8.01374 3.75299 8.04955C3.76392 8.08535 3.7816 8.11859 3.80501 8.14736L3.98279 8.36701C4.03007 8.42508 4.09783 8.46146 4.17118 8.46815C4.24452 8.47485 4.31745 8.45132 4.37394 8.40273L4.85085 7.99985V11.327C4.85126 11.4784 4.90993 11.6235 5.01403 11.7306C5.11812 11.8377 5.25919 11.898 5.40641 11.8984H7.62865C7.77586 11.898 7.91693 11.8377 8.02103 11.7306C8.12513 11.6235 8.18379 11.4784 8.18421 11.327V9.46975H9.29532V11.327C9.29574 11.4784 9.3544 11.6235 9.4585 11.7306C9.5626 11.8377 9.70367 11.898 9.85088 11.8984H12.0731C12.2196 11.8981 12.3601 11.8384 12.4641 11.7322C12.5681 11.626 12.6273 11.482 12.6287 11.3313V7.9995L13.1066 8.40344C13.1631 8.45203 13.236 8.47556 13.3094 8.46887C13.3827 8.46217 13.4505 8.42579 13.4978 8.36773L13.6754 8.14825C13.6989 8.1194 13.7166 8.08605 13.7275 8.05013C13.7385 8.01421 13.7424 7.97642 13.7391 7.93894C13.7358 7.90145 13.7253 7.86501 13.7083 7.8317C13.6912 7.79839 13.668 7.76887 13.6398 7.74484ZM11.7927 11.0413H10.1287V9.18402C10.1282 9.03259 10.0696 8.88748 9.96549 8.78041C9.86139 8.67333 9.72032 8.61299 9.5731 8.61256H7.90643C7.75921 8.61299 7.61814 8.67333 7.51404 8.78041C7.40994 8.88748 7.35128 9.03259 7.35087 9.18402V11.0413H5.68419V7.29589L8.73976 4.71326L11.7953 7.29482L11.7927 11.0413Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <span style={{color : 'white'}}>Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/charts">
                                    {/* <img className="icon" src={loadImg("/assets/images/icons/chart-pie.svg")} alt="" /> */}
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.324219" y="0.398438" width="16" height="15" rx="3" fill="#B25F1A" />
                                        <path
                                            d="M5.62207 8.31225C5.74414 8.43223 5.94199 8.43223 6.06406 8.31225L7.07422 7.31961L8.72832 8.94535C8.85039 9.06533 9.04824 9.06533 9.17031 8.94535L11.323 6.82933L11.899 7.39563C12.1943 7.68588 12.6992 7.48028 12.6992 7.06986V5.13237C12.6992 4.96267 12.5594 4.82522 12.3867 4.82522H10.4154C9.99785 4.82522 9.78867 5.32145 10.084 5.6117L10.6602 6.1778L8.94922 7.85941L7.29512 6.23367C7.17305 6.11369 6.9752 6.11369 6.85312 6.23367L5.40117 7.66073C5.2791 7.78071 5.2791 7.97517 5.40117 8.09514L5.62207 8.31225ZM13.0117 10.6609H4.26172V4.51808C4.26172 4.34838 4.12187 4.21094 3.94922 4.21094H3.63672C3.46406 4.21094 3.32422 4.34838 3.32422 4.51808V10.9681C3.32422 11.3073 3.6041 11.5824 3.94922 11.5824H13.0117C13.1844 11.5824 13.3242 11.4449 13.3242 11.2752V10.9681C13.3242 10.7984 13.1844 10.6609 13.0117 10.6609Z"
                                            fill="white"
                                        />
                                    </svg>
                                    <span style={{color : 'white'}}>Charts</span>
                                </Link>
                            </li>
                            <li className="nav-item"></li>
                            <li className="nav-item" aria-current="page">
                                <Link to="/setting">
									{/* <img className="icon" src={loadImg("/assets/images/icons/calendar-plus.svg")} alt="" /> */}
									<svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect x="0.0839844" y="0.398438" width="16" height="15" rx="3" fill="#F3810E" />
										<path
											d="M6.58398 6.27344V5.77344C6.58398 5.70469 6.64023 5.64844 6.70898 5.64844H9.95898C10.0277 5.64844 10.084 5.70469 10.084 5.77344V6.27344C10.084 6.34219 10.0277 6.39844 9.95898 6.39844H6.70898C6.64023 6.39844 6.58398 6.34219 6.58398 6.27344ZM6.70898 7.64844H9.95898C10.0277 7.64844 10.084 7.59219 10.084 7.52344V7.02344C10.084 6.95469 10.0277 6.89844 9.95898 6.89844H6.70898C6.64023 6.89844 6.58398 6.95469 6.58398 7.02344V7.52344C6.58398 7.59219 6.64023 7.64844 6.70898 7.64844ZM11.3824 10.1438C11.3168 10.3469 11.3168 10.95 11.3824 11.1531C11.4965 11.175 11.584 11.2766 11.584 11.3984V11.6484C11.584 11.7859 11.4715 11.8984 11.334 11.8984H5.83398C5.14336 11.8984 4.58398 11.3391 4.58398 10.6484V5.14844C4.58398 4.45781 5.14336 3.89844 5.83398 3.89844H11.334C11.4715 3.89844 11.584 4.01094 11.584 4.14844V9.89844C11.584 10.0203 11.498 10.1203 11.3824 10.1438ZM10.7402 10.1484H5.83398C5.55898 10.1484 5.33398 10.3734 5.33398 10.6484C5.33398 10.925 5.55742 11.1484 5.83398 11.1484H10.7402C10.698 10.8781 10.698 10.4187 10.7402 10.1484ZM10.834 4.64844H5.83398C5.55742 4.64844 5.33398 4.87187 5.33398 5.14844V9.50313C5.48711 9.43594 5.65586 9.39844 5.83398 9.39844H10.834V4.64844Z"
											fill="white"
										/>
									</svg>
									<span style={{color : 'white'}}>Settings</span>
								</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" component={withRouter(Dashboard)} />
                    <Route exact path="/dashboard" component={withRouter(Dashboard)} />
                    <Route exact path="/charts" component={withRouter(Chart)} />
                    <Route exact path="/setting" component={withRouter(Setting)} />
                    <Redirect to="/" />
                </Switch>
            </div>
			</Router>
		);
	}
}

const mapStateToProps = state => {
};

const mapDispatchToProps = dispatch => {
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));