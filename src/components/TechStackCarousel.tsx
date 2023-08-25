import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import java from "../assets/techstacks/java.svg";
import csharp from "../assets/techstacks/csharp.svg";
import cplusplus from "../assets/techstacks/cplusplus.svg";
import javascript from "../assets/techstacks/javascript.svg";
import php from "../assets/techstacks/php.svg";
import python from "../assets/techstacks/python.svg";
import react from "../assets/techstacks/react.png";
import html from "../assets/techstacks/html.svg";
import css from "../assets/techstacks/css.svg";

const TechStackCarousel = () => {
	const techLogos = [
        cplusplus,
		java,
		csharp,
        python,
        html,
        css,
        javascript,
        php,
        react,
	];

	const settings = {
		dots: false,
		infinite: true,
		speed: 5000, // Slide change speed (in milliseconds)
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 0, // Auto-play speed (set to 0 for infinite loop)
		cssEase: "linear",
		arrows: false,
		centerMode: true,
		variableWidth: true,
	};

	return (
		<div className="carousel-container">
			<Slider {...settings}>
				{techLogos.map((logo, index) => (
					<div key={index} className="carousel-slide">
						<img
							src={logo}
							alt={`Tech Logo ${index}`}
							className="logo"
						/>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default TechStackCarousel;
