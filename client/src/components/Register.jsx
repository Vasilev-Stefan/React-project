import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm";
import { useUser } from "../hooks/useUser";
import { useFetch } from "../hooks/useFetch";

const initialData = {
  email: "",
  password: "",
  rePass: "",
};

export function Register() {
  const navigate = useNavigate();
  const { login } = useUser();
  const { request } = useFetch();

  const validate = (data) => {
    const errors = {};

    if (!data.email) {
      errors.email = "Email is required!";
    }
    if (!data.password) {
      errors.password = "Password is required!";
    }
    if (data.password && data.password !== data.rePass) {
      errors.rePass = "Passwords do not match!";
    }

    return errors;
  };

  const registerUser = async (data) => {
    try {
        const result = await request('users/register', 'POST', data)
        login(result);
        navigate("/")
        
    } catch (error) {
        alert(error.message)
    }
  };

  const { errors, onSubmitHandler, inputFiller } = useForm(
    initialData,
    registerUser,
    validate
  );

  return (
    // <!-- Register Page ( Only for Guest users ) -->
    <section id="register-page" className="content auth">
      <form id="register" action={onSubmitHandler}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Register</h1>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...inputFiller("email")}
            placeholder="Your Email"
          />
          {errors.email && <p>{errors.email}</p>}

          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            {...inputFiller("password")}
            id="register-password"
            placeholder="Password"
          />
          {errors.password && <p>{errors.password}</p>}

          <label htmlFor="con-pass">Confirm Password:</label>
          <input
            type="password"
            {...inputFiller("rePass")}
            id="confirm-password"
            placeholder="Repeat Password"
          />
          {errors.rePass && <p>{errors.rePass}</p>}

          <input className="btn submit" type="submit" value="Register" />
        </div>
      </form>
    </section>
  );
}
