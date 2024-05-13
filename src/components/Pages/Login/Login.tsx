import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Services/Auth/AuthContext';
import { login } from '../../../Services/Auth/auth.service';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');
  const [authenticating, setAuthenticating] = useState<boolean>(false);
  const { loginUser } = useAuth(); // Use the login function provided by the authentication context
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAuthenticating(true);

    try {
      // Call the login function from the authentication context
      await login(email, password);
      
      // Redirect to the home page after successful login
      navigate('/', { replace: true });
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Erreur lors de la connexion');
    } finally {
      setAuthenticating(false);
    }
  };

  return (
    <div className="container-fluid bg-body-tertiary dark__bg-gray-1200">
      <div
        className="bg-holder bg-auth-card-overlay"
        style={{ backgroundImage: "url(../../../assets/img/bg/37.png)" }}
      />
      {/*/.bg-holder*/}
      <div className="row flex-center position-relative min-vh-100 g-0 py-7">
        <div className="col-11 col-sm-10 col-xl-8">
          <div className="card border border-translucent auth-card">
            <div className="card-body pe-md-0">
              <div className="row align-items-center gx-0 gy-7">
                <div className="col-auto bg-body-highlight dark__bg-gray-1100 rounded-3 position-relative overflow-hidden auth-title-box">
                  <div
                    className="bg-holder"
                    style={{
                      backgroundImage: "url(../../../assets/img/bg/38.png)"
                    }}
                  />
                  {/*/.bg-holder*/}
                  <div className="position-relative px-4 px-lg-7 pt-7 pb-7 pb-sm-5 text-center text-md-start pb-lg-7 pb-md-7">
                    <h3 className="mb-3 text-body-emphasis fs-7 text-center">
                      Authentication
                    </h3>
                    <p className="text-body-tertiary">
                      
                    </p>
                    
                  </div>
                  <div className="position-relative z-n1 mb-6 d-none d-md-block text-center mt-md-15">
                    <img
                      className="auth-title-box-img d-dark-none"
                      src="../../../assets/img/spot-illustrations/auth.png"
                      alt=""
                    />
                    <img
                      className="auth-title-box-img d-light-none"
                      src="../../../assets/img/spot-illustrations/auth-dark.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col mx-auto">
                  <div className="auth-form-box">
                    <div className="text-center mb-7">
                      <a
                        className="d-flex flex-center text-decoration-none mb-4"
                        href="../../../index.html"
                      >
                        <div className="d-flex align-items-center fw-bolder fs-3 d-inline-block">
                          <img
                            src="assets/img/icons/QuizoLogo.png"
                            alt="phoenix"
                            width={120}
                          />
                        </div>
                      </a>
                      <h3 className="text-body-highlight">Sign In</h3>
                      <p className="text-body-tertiary">
                        Get access to your account
                      </p>
                    </div>


                    <form onSubmit={handleLogin}>
                      <div className="mb-3 text-start">
                        <label className="form-label" htmlFor="email">
                          Email address
                        </label>
                        <div className="form-icon-container">
                          <input
                            className="form-control form-icon-input"
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <span className="fas fa-user text-body fs-9 form-icon" />
                        </div>
                      </div>
                      <div className="mb-3 text-start">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                        <div className="form-icon-container">
                          <input
                            className="form-control form-icon-input"
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          <span className="fas fa-key text-body fs-9 form-icon" />
                        </div>
                      </div>
                      {error && <p style={{ color: 'red' }}>{error}</p>}
                      <div className="row flex-between-center mb-7">
                        {/* <div className="col-auto">
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              id="basic-checkbox"
                              type="checkbox"
                            />
                            <label
                              className="form-check-label mb-0"
                              htmlFor="basic-checkbox"
                            >
                              Remember me
                            </label>
                          </div>
                        </div> */}
                        {/* <div className="col-auto">
                          <a className="fs-9 fw-semibold" href="forgot-password.html">
                            Forgot Password?
                          </a>
                        </div> */}
                      </div>
                      <button className="btn btn-primary w-100 mb-3">Sign In</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;