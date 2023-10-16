import { useState } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
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
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);

	const openModal = (index: number) => {
		setSelectedImageIndex(index);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className="col" id="project">
			<div
				className="card"
				style={{ height: "500px", overflow: "hidden" }}
			>
				<Slider {...settings}>
					{images.map((image, index) => (
						<div key={index} onClick={() => openModal(index)}>
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
						className="card-text overflow-y-scroll no-scrollbar"
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
			<Modal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				style={{
					overlay: {
						backgroundColor: "rgba(0, 0, 0, 0.8)",
					},
					content: {
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: "70vw",
						height: "80vh",
						maxWidth: "90vw",
						maxHeight: "80vh",
						overflow: "hidden",
					},
				}}
			>
				<Slider {...settings} initialSlide={selectedImageIndex}>
					{images.map((image, index) => (
						<div key={index}>
							<img
								src={image}
								alt={name}
								style={{ width: "100%" }}
							/>
						</div>
					))}
				</Slider>
			</Modal>
		</div>
	);
};

export default ProjectCard;
