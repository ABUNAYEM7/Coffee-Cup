import img1 from "../assets/cups/Rectangle 9.png";
import img2 from "../assets/cups/Rectangle 10.png";
import img3 from "../assets/cups/Rectangle 11.png";
import img4 from "../assets/cups/Rectangle 12.png";
import img5 from "../assets/cups/Rectangle 13.png";
import img6 from "../assets/cups/Rectangle 14.png";
import img7 from "../assets/cups/Rectangle 15.png";
import img8 from "../assets/cups/Rectangle 16.png";

const Instagram = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-12">
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-xs text-secondary">Follow us Now</p>
          <h3 className="text-4xl font-bold text-primary">
            Follow on Instagram
          </h3>
        </div>
      </div>
      <div className="p-4 my-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-5">
        {[img1, img2, img3, img4, img5, img6, img7, img8].map((image, index) => (
          <div
            key={index}
            className="relative rounded-lg shadow-lg"
          > 
            <img
              src={image}
              alt={`image-${index}`}
              className="w-full max-h-[250px]  object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100">
                View More
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instagram;
