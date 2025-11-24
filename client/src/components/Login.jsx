import { useState } from "react"
import { useNavigate } from "react-router"

const initialData = {
    email: '',
    password: ''
}

export function Login() {
    const [data, setData] = useState(initialData)
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    const onChangeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value

        setData(state => ({
            ...state,
            [name]: value,
        }))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        const newErrors = {}

        if(data.email.length == 0){
            newErrors.email = 'Email is required!'
        }

        if(data.password.length == 0){
            newErrors.password = 'Password is required!'
        }

        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors)
            return
        }

        setErrors({})
        console.log('Successful login')
        navigate('/')
    }

    return (
        <section id="login-page">

            <form id="login" onSubmit={onSubmitHandler}>
                <div className="container">
                    <h1>Login</h1>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={onChangeHandler} value={data.email} name="email" placeholder="Your Email" />
                    {errors.email && <p>{errors.email}</p>}


                    <label htmlFor="login-pass">Password</label>
                    <input type="password" id="login-password" onChange={onChangeHandler} value={data.password} name="password" placeholder="Password" />
                    {errors.password && <p>{errors.password}</p>}

                    <input type="submit" className="btn submit" value="Login" />
                </div>
            </form>
        </section>
    )
}