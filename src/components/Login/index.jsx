import React from 'react'

const Login = () => {
    return (
        <div class="container my-3">
            <h2>Login</h2>
            <form action="/" method="POST">
                <div class="mb-3">
                    <label for="name" class="form-label">User Name</label>
                    <input type="text" class="form-control" name="name" id="name" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" name="password" id="password" />
                </div>
                <button type="submit" class="btn btn-dark">Login</button>
            </form>
        </div>
    )
}

export default Login
