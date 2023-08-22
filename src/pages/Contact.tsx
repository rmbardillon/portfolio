
const Contact = () => {
  return (
    <div className="container" id="contact">
      <div className="row">
        <div className="col">
          <iframe
            allowFullScreen
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDHvzMMLX94BYCgHBr-l1DiQW57GTvcpaI&amp;q=Block+7+Lot+2+Rose+Pointe+Subd&amp;zoom=17&amp;maptype=satellite"
            loading="lazy"
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <div className="col-md-6 col-xl-4">
          <div>
            <form className="p-3 p-xl-4" data-bss-recipient="7930df10bfeeae82180aa027002ffe52">
              <b className="text-primary">CONTACT</b>
              <p className="fs-5 fw-normal">
                Feel free to reach out to me through the contact section of my
                portfolio for any inquiries or collaboration opportunities.
              </p>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  className="form-control"
                  type="text"
                  name="name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  className="form-control"
                  type="email"
                  name="email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="form-control"
                  name="message"
                  rows={6}
                ></textarea>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary w-100" type="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact