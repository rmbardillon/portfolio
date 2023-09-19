import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface ProjectCardProps {
	name: string;
	description: string;
	images: string[];
	link: string;
	code: string;
	stack: string;
}

const ProjectCard = ({
	name,
	description,
	images,
	link,
	code,
	stack,
}: ProjectCardProps) => {
    const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true, // Set autoplay to true
		autoplaySpeed: 3000, // Set your preferred autoplay speed (in milliseconds)
	};
	return (
		<div className="col" id="project">
			<div
				className="card"
				style={{
					height: "500px",
					overflow: "hidden",
				}}
			>
				<Slider {...settings}>
					{images.map((image, index) => (
						<div key={index}>
							<img
								className="card-img-top w-100 d-block fit-cover"
								style={{ height: "200px" }}
								src={image}
								alt={name}
							/>
						</div>
					))}
				</Slider>
				<div className="card-body p-4">
					<h4 className="card-title">{name}</h4>
					<p
						className="card-text overflow-scroll"
						style={{ height: "100px" }}
					>
						{description}
					</p>
					<b>{stack}</b>
					<br />
					<a
						className="link-primary m-1"
						href={code}
						target="__blank"
					>
						Code
					</a>
					{link && (
						<>
							{" | "}
							<a
								className="link-primary m-1"
								href={link}
								target="__blank"
							>
								Link
							</a>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
