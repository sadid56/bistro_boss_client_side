import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaSquareGithub } from "react-icons/fa6";
import img from "../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleGoogleLogin = () => {
    googleLogin()
      .then(()=> navigate(location?.pathname ? location?.pathname : '/'))
      .catch((error) => console.log(error.message));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // const catpcha = form.catpcha.value;
    // console.log(email, password, catpcha);

    signIn(email, password)
      .then((res) => {
        navigate(location?.pathname ? location?.pathname : '/')
        console.log(res.user);
      })
      .catch((error) => console.log(error.message));
  };
  //! catpcha validate
  const handleValidation = (e) => {
    const capthChaValue = e.target.value;
    // console.log(capthChaValue);

    if (validateCaptcha(capthChaValue)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero-content gap-8 flex-col lg:flex-row">
        <div className="flex-1">
          <img src={img} alt="" />
        </div>
        <div className="card flex-1 shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleValidation}
                name="catpcha"
                type="text"
                placeholder="Type the captcha"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
     
              <button
                disabled={disabled}
                type="submit"
                className="btn bg-[#D1A054B2]">
                Login
              </button>
              <p className="text-center text-[#D1A054B2] my-2">
                New here ?{" "}
                <Link to="/registration" className="text-[#5c421cb2] font-medium">
                  Create a new account
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

export default Login;
