
const Hero = () => {
  return (
    <div className="hero w-2/3 container mx-auto bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://placeimg.com/260/400/arch"
          className="max-w-sm w-72 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="btn btn-primary"> Get Started </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
