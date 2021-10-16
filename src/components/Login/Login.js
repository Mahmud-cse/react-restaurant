import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div>
        <div className="container customLogin">
            <div id="customLogin2">
            <form className="p-5">
                    <h3>Sign In</h3>

                    <div className="form-group mb-2">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" style={{width:"100%"}}/>
                    </div>

                    <div className="form-group mb-2">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" style={{width:"100%"}}/>
                    </div>

                    <div className="form-group mb-2">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">LOGIN</button>
                    {/* <p className="text-right">
                        <Link to="/register" className="custom-link">Forget Password</Link>
                    </p> */}
                    <div style={{marginTop:"20px"}}>
                    <p>Don't Have an Account? <Link to="/register"><button type="button" className="btn btn-primary">Sign Up Now</button></Link></p>
                    </div>
                    <div style={{textAlign:"center",margin:"25px"}}>---------------or---------------</div>
                    <button onClick={''} type="button" className="btn btn-primary">Google Sign In</button>
                    <button type="button" className="btn btn-success m-3">Github Sign In</button>
                </form>
            </div>
        </div>
        <div  style={{textAlign:"center"}}>
            
        </div>
    </div>
    );
};

export default Login;