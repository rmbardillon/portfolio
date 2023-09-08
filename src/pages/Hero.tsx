import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import HeroPicture  from "../assets/heroPicture.jpg";
import resume from "../assets/resume.pdf";

const Hero = () => {
	return (
		<div className="container py-4 py-xl-5" id="hero">
			<div className="row gy-4 gy-md-0" id="hero">
				<div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-md-flex justify-content-center align-items-center justify-content-md-start align-items-md-center justify-content-xl-center">
					<div>
						{/* <div className="wrapper">
							<svg>
								<text
									x="50%"
									y="50%"
									dy=".35em"
									textAnchor="middle"
									className="svg-text"
								>
									BARDILLON
								</text>
							</svg>
						</div> */}
						<h6 className="fst-italic">Hello, I'm </h6>
						<h1 className="text-uppercase fw-bold">
							ROMEO JR BARDILLON
						</h1>
						<h6 className="fst-italic"> from Santa Rosa Laguna, Philippines.</h6>
						<a
							className="btn btn-primary btn-lg me-2"
							role="button"
							href="https://www.linkedin.com/in/romeo-jr-b-45bb0012a/"
							target="_blank"
						>
							<FontAwesomeIcon icon={faLinkedinIn} />
						</a>
						<a
							className="btn btn-dark btn-lg me-2"
							role="button"
							href="https://github.com/rmbardillon"
							target="_blank"
						>
							<FontAwesomeIcon icon={faGithub} />
						</a>
						<a
							className="btn btn-outline-dark btn-lg"
							role="button"
							href={resume}
							target="_blank"
						>
							Resume
						</a>
						<div className="text-animation-1">WEB DEVELOPER</div>
						<div className="text-animation-2">
							SOFTWARE ENGINEER
						</div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="d-flex justify-content-center align-items-center">
						<img
							className=""
							src={HeroPicture}
							alt="hero"
							id="hero-picture"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
