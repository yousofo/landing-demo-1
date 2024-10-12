const Services = () => {
  const img = "/images/placeholders/cybersecurity.jpg";
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px] bg-white">
      <div className="container mx-auto">
        <div className=" flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className=" flex flex-wrap">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <ServiceCard
                title="Refreshing Design"
                details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
                img={img}
                key={index}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

const ServiceCard = ({ icon, title, details, img }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
      <div className="mb-9 rounded-2xl transition-all cursor-pointer bg-white p-6 shadow-2 drop-shadow hover:shadow-lg dark:bg-dark-2 ">
        <div className="mb-8 flex  items-center justify-center rounded-2xl bg-primary overflow-hidden">
          {/* {icon} */}
          <img src={img} alt="" />
        </div>
        <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
          {title}
        </h4>
        <p className="text-body-color dark:text-dark-6">{details}</p>
      </div>
    </div>
  );
};
