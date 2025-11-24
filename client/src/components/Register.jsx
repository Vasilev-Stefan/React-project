import { useState } from "react"
import { useNavigate } from "react-router"

const initialData = {
    email: '',
    password: '',
    rePass: '',
}

export function Register() {
    const [data, setData] = useState(initialData)
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()


    const onChangeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value

        setData(state => ({
            ...state,
            [name]: value
        }))

    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        const newErrors = {}


        //Validate Email
        if (data.email.length == 0) {
            newErrors.email = 'Email is required!'
        }

        if (data.password.length == 0) {
            newErrors.password = 'Password is required!'
        }

        if (data.password && data.password !== data.rePass) {
            newErrors.rePass = 'Passwords does not match!'
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        setErrors({})
        console.log('Succesfully registered')
        navigate('/')
    }


    return (
        // <!-- Register Page ( Only for Guest users ) -->
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmitHandler} >
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={data.email} onChange={onChangeHandler} placeholder="Your Email" />
                    {errors.email && <p>{errors.email}</p>}

                    <label htmlFor="pass">Password:</label>
                    <input type="password" name="password" value={data.password} onChange={onChangeHandler} id="register-password" placeholder="Password" />
                    {errors.password && <p>{errors.password}</p>}

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" name="rePass" value={data.rePass} onChange={onChangeHandler} id="confirm-password" placeholder="Repeat Password" />
                    {errors.rePass && <p>{errors.rePass}</p>}

                    <input className="btn submit" type="submit" value="Register" />


                </div>
            </form>
        </section>
    )
}