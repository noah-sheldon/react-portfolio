import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <>
      <div className="container contact-div mb-4">
        <h1 id="contactme" className="display-4">
          Contact
        </h1>
        <div className="row mt-3 d-inline text-center justify-content-center align-items-center">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="card">
              <div className="card-body">
                <a
                  role="button"
                  className="btn btn-success rounded-5 fs-5 mx-2 my-2"
                  href="mailto:noahsheldon06@gmail.com"
                >
                  Send Email
                </a>
                <a
                  role="button"
                  className="btn btn-primary rounded-5 fs-5 mx-2 my-2"
                  href="#"
                >
                  +44-7552839576
                </a>
                <a
                  href="https://github.com/noah-sheldon/"
                  title="GitHub"
                  className="btn btn-github btn-lg fs-5 mx-2 my-2"
                >
                  <i className="fa fa-github"></i>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=447552839576"
                  className="btn btn-whatsapp btn-lg fs-5 mx-2 my-2"
                  target="_blank"
                >
                  <i className="fa fa-whatsapp"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/noah--sheldon/"
                  title="LinkedIn"
                  className="btn btn-linkedin btn-lg fs-5 mx-2 my-2"
                >
                  <i className="fa fa-linkedin fa-fw"></i>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
