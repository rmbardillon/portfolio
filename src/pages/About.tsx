import TechStackCarousel from "../components/TechStackCarousel";

const About = () => {
  return (
		<div className="container" id="about">
			<div className="row">
				<div className="col">
					<b className="text-primary">ABOUT ME</b>
					<p className="fs-5 fw-normal">
						I have successfully completed my Bachelor of Science
						degree in Information Technology from the Polytechnic
						University of the Philippines Santa Rosa Campus.
						Throughout my academic journey, I have cultivated a
						strong foundation in various programming languages,
						including Java, C++, Python, C Sharp, and web
						development technologies like HTML, CSS, JavaScript,
						PHP, ReactJS, and NextJS. I also have experience in
						backend development using Spring Boot, as well as
						database management with SQL and MongoDB. My technical
						proficiency extends to version control systems like Git.
					</p>
					<p className="fs-5 fw-normal">
						Furthermore, I have honed a set of valuable soft skills,
						including problem-solving skills, analytical thinking,
						adaptability, teamwork, communication, time management,
						and a commitment to continuous learning. These soft
						skills complement my technical expertise, allowing me to
						approach software development and problem-solving in a
						holistic and effective manner.
					</p>
					<div className="row">
						<div className="col">
							<strong>NAME</strong>
							<p>ROMEO JR BARDILLON</p>
						</div>
						<div className="col">
							<strong>EDUCATION</strong>
							<p>
								PUP SANTA ROSA - BACHELOR OF SCIENCE IN
								INFORMATION TECHNOLOGY
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<strong>EMAIL</strong>
							<p>
								<a
									href="mailto:romeojrbardillon@gmail.com"
									className="email-link"
								>
									romeojrbardillon@gmail.com
								</a>
							</p>
						</div>
						<div className="col">
							<strong>EMPLOYMENT</strong>
							<p>Infor PSSC</p>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<b className="text-primary">TECH STACK</b>
							<TechStackCarousel />
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default About