import { useForm, type SubmitHandler } from "react-hook-form"


type FormData = {
  name: string,
  email: string,
  message: string
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data)

  return (
      <div className="container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label className="label">Name</label>
                <input type="text" id="visitors" className="input" placeholder="" {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}
            </div>
            <div>
                <label className="label">Email</label>
                <input type="email" id="visitors" className="input" placeholder="" {...register("email", { required: true })} />
                {errors.name && <span>This field is required</span>}
            </div>
            <div>
                <label className="label">Message</label>
                <input type="text" id="visitors" className="input" placeholder="" {...register("message", { required: true })} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
  )
}