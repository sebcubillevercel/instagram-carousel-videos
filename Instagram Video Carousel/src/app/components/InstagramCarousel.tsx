import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface InstagramVideo {
  id: string;
  embedUrl: string;
}

// Example Instagram video embed URLs
const instagramVideos: InstagramVideo[] = [
  {
    id: "1",
    embedUrl: "https://www.instagram.com/p/C5KqHjsRnXx/embed",
  },
  {
    id: "2",
    embedUrl: "https://www.instagram.com/p/C4_TzGNPqJR/embed",
  },
  {
    id: "3",
    embedUrl: "https://www.instagram.com/p/C48vQZ5P8-h/embed",
  },
  {
    id: "4",
    embedUrl: "https://www.instagram.com/p/C42pQmOyR5t/embed",
  },
  {
    id: "5",
    embedUrl: "https://www.instagram.com/p/C4wTnQGyKpR/embed",
  },
];

export function InstagramCarousel() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    draggable: true,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-center mb-8">Instagram Video Carousel</h1>
      
      <div className="relative">
        {/* Custom Navigation Buttons */}
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous videos"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next videos"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Carousel */}
        <div className="overflow-hidden">
          <Slider ref={sliderRef} {...settings}>
            {instagramVideos.map((video) => (
              <div key={video.id} className="px-3">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  <div className="aspect-[9/16] w-full">
                    <iframe
                      src={video.embedUrl}
                      className="w-full h-full border-0"
                      allowFullScreen
                      scrolling="no"
                      title={`Instagram video ${video.id}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-gray-600">
        <p>Swipe, drag, or use arrows to navigate through Instagram videos</p>
      </div>
    </div>
  );
}