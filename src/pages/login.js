import React from 'react';
import "./login.css";

function login() {
    return (
        <div className="back">
            <div className="box">
                <h2>Login</h2>
                <form action="">
                    <div className="inputBox">
                        <input type="text" name="" required="" />
                        <label for="">Username</label>
                    </div>
                    <div className="inputBox">
                        <input type="password" name="" required="" />
                        <label for="">Password</label>
                    </div>
                    <input type="submit" name="" value="Submit" />
                </form>
            </div>
        </div>

    );
};



export default login;