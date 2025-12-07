import { useNavigate } from "react-router"
import { useUser } from "../hooks/useUser"
import { useFetch } from "../hooks/useFetch"
import { useForm } from "../hooks/useForm"

const initialData = {
    email: '',
    password: ''
}

export function Login() {
    const { login } = useUser()
    const { request } = useFetch()
    const navigate = useNavigate()



    const validate = (data) => {
        const erros = {}

        if(!data.email){
            erros.email = 'Email is required!'
        }

        if(!data.password){
            erros.password = 'Password is required!'
        }

        return erros
    }

    const loginUser = async (data) => {
        try {
            const result = await request('users/login', 'POST', data)
            login(result)
            navigate('/')
        } catch (error) {
            alert(error.message)
        }
    }

    const { errors, onSubmitHandler, inputFiller } = useForm(initialData, loginUser, validate)

    return (
        <section id="login-page">

            <form id="login" action={onSubmitHandler}>
                <div className="container">
                    <h1>Login</h1>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...inputFiller('email')} placeholder="Your Email" />
                    {errors.email && <p>{errors.email}</p>}


                    <label htmlFor="login-pass">Password</label>
                    <input type="password" id="login-password" {...inputFiller('password')} placeholder="Password" />
                    {errors.password && <p>{errors.password}</p>}

                    <input type="submit" className="btn submit" value="Login" />
                </div>
            </form>
        </section>
    )
}