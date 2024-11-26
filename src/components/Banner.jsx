const Banner = () => {
  return (
    <div 
      className="hero lg:min-h-[570px] bg-bannerBg"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="w-full hero-content  text-neutral-content text-center">
        <div className="w-full flex justify-start items-start text-start">
          <div>
          <h1 className="mb-5 text-5xl font-normal ">Would you like a Cup of Delicious Coffee?</h1>
          <p className="mb-5 w-3/5">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
          </p>
          <button className="btn bg-highlight text-white hover:text-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
