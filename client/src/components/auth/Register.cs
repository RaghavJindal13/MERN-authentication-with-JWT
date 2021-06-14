body {
  margin: 0;
  font-family: sans-serif;
}
/* LANDING CONTAINER */
.landing-container {
  height: 100vh;
}
/* LANDING LEFT */
.landing-left {
  position: relative;
  float: left;
  width: 50%;
  height: 100%;
  min-height: 500px;
  overflow: auto;
}
/* LANDING IMAGE */
.landing-image {
  display: block;
  position: fixed;
  right: 0;
  width: 50%;
  height: 100vh;
  object-fit: cover;
}
/* ------------ GENERAL CSS USED FOR SIGNUP/LOGIN FORM ------------ */
.form-container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  height: auto;
  max-height: 380px;
  width: 500px;
  max-width: 90%;
}
.form-title {
  text-align: left;
  font-size: 34px;
  font-weight: 300;
  color: #2E384D;
}
.form-subtitle {
  text-align: left;
  color: #8798AD;
  font-size: 15px;
  margin-top: -15px;
}
.field {
  width: 330px;
  margin: 0 auto;
}
.form-input {
  width: 100%;
  padding: 10px 14px;
  font-size: 15px;
  border: 1px solid rgba(46,91,255,0.08);
  background-color: rgba(224,231,255,0.2);
  border-radius: 5px;
}
.form-input-label {
  text-align: left;
  color: #69707F;
  font-size: 12px;
  letter-spacing: 1.2px;
  font-weight: 500;
  margin-bottom: 10px;
}
.ilb {
  display: inline-block
}
.submit-button {
  cursor: pointer;
  width: 330px;
  height: 50px;
  margin-top: 25px;
  border-radius: 3px;
  font-size: 15px;
  color: white;
  background-color: #1abc9c;
  border: none;
}
.form-info-text {
  color: #B0BAC9;
  font-size: 15px;
}
.form-info-text a {
  cursor: pointer;
  text-decoration: none;
  color: #1abc9c;
}

/* WIDTH: 768PX - BELOW */
@media (max-width: 768px) {
  .landing-left {
    clear: both;
    width: 100%;
  }
  .landing-image {
    clear: both;
    position: absolute;
    z-index: -1;
    width: 100%;
  }
  .form-container {
    background-color: #FFFFFF;
    border-radius: 5px;
  }
}