import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    setError,
    isSubmitting,
    formState: { errors },
  } = useForm()

const onSubmit = (data) => {
console.log(data)
if (data.firstname !== 'admin')
setError("myForm", {message: "Invalid credentials"})
}


  return (
    <>
     {isSubmitting && <p>Submitting...</p>}
      <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstName">First Name: </label>
          <input type="text" {...register("firstName", {required: true , minLength: 2})} placeholder="First Name"/> <br />
          {errors.firstName && <p>First name is required and must be at least 2 characters long</p>}

          <label htmlFor="lastName">Last Name: </label>
          <input type="text" {...register("lastName" , {required: true})} placeholder="Last Name"/> <br />

          <label htmlFor="password">Password : </label>
          <input type="password" {...register("password" , {required: true , minLength: {
          value: 6, message: "Password must be at least 6 characters long"
          }})} placeholder="Password"/><br />
          {errors.password && <p>{errors.password.message}</p>}

          <button disabled={isSubmitting} type="submit">Login</button>
          {errors.myForm && <p>{errors.myForm.message}</p>}
        </form>
      </div>
    </>
  )
}

export default App
