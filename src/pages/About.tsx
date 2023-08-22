import GroupPicture from '../assets/group.jpg';

const About = () => {
  return (
    <div className="container" id="about">
      <div className="row">
        <div className="col-md-6">
          <img
            className="rounded-circle img-fluid"
            src={GroupPicture}
            width="552"
            height="414"
            id='about-picture'
          />
        </div>
        <div className="col-md-6">
          <b className="text-primary">ABOUT ME</b>
          <p className="fs-5 fw-normal">
            I&#39;m a dedicated software and web developer hailing from the
            picturesque Santa Rosa Laguna, Philippines. With a keyboard as my
            canvas and lines of code as my art, I specialize in crafting digital
            experiences that seamlessly blend creativity and functionality. From
            dynamic web applications to efficient software solutions, I bring
            ideas to life in the digital realm. Join me on a journey through my
            coding adventures, where innovation meets technology, and let&#39;s
            turn your visions into robust realities.
          </p>
          <div className="row">
            <div className="col">
              <strong>NAME</strong>
              <p>ROMEO JR BARDILLON</p>
            </div>
            <div className="col">
              <strong>EDUCATION</strong>
              <p>
                PUP SANTA ROSA - BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <strong>EMAIL</strong>
              <p>romeojrbardillon@gmail.com</p>
            </div>
            <div className="col">
              <strong>EMPLOYMENT</strong>
              <p>LQTECH SECURITY SOLUTIONS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About