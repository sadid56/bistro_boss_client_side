import { Helmet } from "react-helmet";
import img from "../assets/others/authentication2.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaSquareGithub } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Registation = () => {
  const navigate = useNavigate();
  const { createUser, googleLogin, profileUpdate } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)

      .then(() => {
        profileUpdate(data.name, data.photo)
          .then(() => {
            // create user to save database
            console.log(data.name);
            const userInfo = {
              name: data.name,
               email: data.email
              }
            axiosPublic.post("/users", userInfo)
            .then((res) => {
              // if (res.data.insertedId) {
              //   alert("registration success");
              //   navigate("/");
              // }
              console.log(res.data);
              navigate('/')
            });
          })

          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => console.log(error.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res)=>{
        const userInfo = {
          name: res?.user?.displayName,
           email: res?.user?.email
          }
        axiosPublic.post("/users", userInfo)
        .then((res) => {
          // if (res.data.insertedId) {
          //   alert("registration success");
          //   navigate("/");
          // }
          console.log(res.data);
          navigate('/')
        });
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Bistro Boss | Registraoin</title>
      </Helmet>
      <div className="hero-content gap-8 flex-col lg:flex-row">
        <div className="flex-1">
          <img src={img} alt="" />
        </div>
        <div className="card flex-1 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                {...register("photo", { required: true })}
                type="text"
                placeholder="Your photo"
                className="input input-bordered"
              />
              {errors.photo && (
                <span className="text-red-500">Photo is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  minLength: 6,
                  maxLength: 20,
                  required: true,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                })}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">
                  Password must be at least 6 characters long
                </p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password cannot exceed 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">Provide me a strong password</p>
              )}
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn bg-[#D1A054B2]">
                Registration
              </button>
              <p className="text-center text-[#D1A054B2] my-2">
                Already create account ?{" "}
                <Link to="/login" className="text-[#5c421cb2] font-medium">
                  login now
                </Link>
              </p>
              <p className="text-center font-medium">Or sign in with</p>
            </div>
          </form>
          <div className="flex justify-center gap-6 pb-5">
            <button className="btn btn-circle btn-outline text-xl btn-sm">
              <FaFacebookF />
            </button>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-circle btn-outline text-xl btn-sm">
              <FaGoogle />
            </button>
            <button className="btn btn-circle btn-outline text-xl btn-sm">
              <FaSquareGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registation;
