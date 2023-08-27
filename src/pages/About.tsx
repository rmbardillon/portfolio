import TechStackCarousel from "../components/TechStackCarousel";

const About = () => {
  return (
		<div className="container" id="about">
			<div className="row">
				<div className="col">
					<b className="text-primary">ABOUT ME</b>
					<p className="fs-5 fw-normal">
						I am a fourth-year graduating student at the Polytechnic University of the Philippines Santa Rosa Campus, pursuing a Bachelor of Science degree in Information Technology. Throughout my academic journey, I have acquired a strong foundation in various programming languages, including C++, Java, Python, and C Sharp. These languages have provided me with a solid understanding of software development principles, algorithms, and data structures. I have enjoyed working on projects that involve problem-solving and logic implementation, honing my skills in creating efficient and robust code. With each language, I have gained experience in different paradigms and learned to adapt to various programming styles.
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
                                <a href="mailto:romeojrbardillon@gmail.com" className="email-link">
                                romeojrbardillon@gmail.com
                                </a>
                            </p>
						</div>
						<div className="col">
							<strong>EMPLOYMENT</strong>
							<p>LQTECH SECURITY SOLUTIONS</p>
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