import partnerImg from "../assets/companies_logo/hoco.png";

function Partner() {
  const partners = new Array(10).fill(partnerImg); // mock 10 logos

  return (
    <div className="bg-white w-full py-12 flex flex-col items-center px-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Partners</h2>

      <div className="partnerContainer w-full flex items-center justify-center">
        <div className="partnerScroll w-full md:w-[85%] lg:w-[85%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {partners.map((logo, index) => (
            <div
              key={index}
              className="partnerCard w-[160px] h-[100px] bg-gray-50 rounded-xl shadow-sm flex justify-center items-center transition hover:shadow-lg hover:scale-105 duration-300 m-auto"
            >
              <img
                src={logo}
                alt={`partner-${index}`}
                className="max-w-[80%] max-h-[80%] object-contain opacity-70 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partner;
