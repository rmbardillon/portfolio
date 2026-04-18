import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ExternalLink, Maximize2, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProjectCardProps {
  name: string;
  description: string;
  images: string[];
  link: string;
  code: string;
  stack: string[];
}

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const ProjectCard = ({
  name,
  description,
  images,
  link,
  code,
  stack,
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <Card className="group overflow-hidden hover:border-accent/30 transition-all duration-300 flex flex-col">
        <div className="relative overflow-hidden">
          <Slider {...sliderSettings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  className="w-full h-48 object-cover"
                  src={image}
                  alt={name}
                />
              </div>
            ))}
          </Slider>
          <button
            onClick={() => openModal(0)}
            className="absolute top-3 right-3 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>

        <CardContent className="p-5 flex flex-col flex-1">
          <h3 className="font-semibold text-foreground text-lg leading-tight">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-2">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {stack.map((tech) => (
              <Badge key={tech} variant="default">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2 mt-auto pt-5">
            <Button variant="outline" size="sm" asChild>
              <a href={code} target="_blank" rel="noopener noreferrer">
                <Code className="mr-1.5 h-3.5 w-3.5" />
                Code
              </a>
            </Button>
            {link && (
              <Button variant="ghost" size="sm" asChild>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                  Live
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[70vw] max-h-[80vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
          </DialogHeader>
          <Slider {...sliderSettings} initialSlide={selectedIndex}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={name} className="w-full rounded-lg" />
              </div>
            ))}
          </Slider>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
