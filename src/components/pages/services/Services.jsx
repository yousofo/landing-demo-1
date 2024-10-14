"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useSelector } from "react-redux";

const Services = () => {
  const images = [
    "/images/placeholders/softwareengineering.jpeg",
    "/images/placeholders/ai-training.webp",
    "/images/placeholders/cloud-computing-900x600.jpg",
    "/images/placeholders/quality-management.webp",
    "/images/placeholders/Digital-transformation-for-organisations-1080x609.jpg",
    "/images/placeholders/cybersecurity.jpg",
    "/images/placeholders/risk-management.jpg",
  ]
  const translate = useTranslations("courses");
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
          {Array(7)
            .fill(0)
            .map((_, index) => (
              <ServiceCard
                title={translate(`course${index + 1}.title`)}
                details={translate(`course${index + 1}.content`)}
                img={images[index]}
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
  const swiper = useSelector((store) => store.swiper.swiper);
  // function handleLinkClick(e, i) {
  //   e.preventDefault();
  //   swiper.slideTo(i);
  // }
  return (
    <div className="w-full p-4 md:w-1/2 lg:w-1/3">
      <div className="rounded-2xl transition-all h-full bg-white p-6 drop-shadow hover:drop-shadow-lg  ">
        <div className="mb-8 flex aspect-video max-h-[300px] items-center justify-center rounded-2xl bg-primary overflow-hidden">
          {/* {icon} */}
          <img src={img} className="w-full h-full object-cover" alt="" />
        </div>
        <h4 className="mb-[14px] text-2xl font-semibold ">{title}</h4>
        <p className="text-body-color text-xl font-medium text-gray-700">{details}</p>
        {/* <Link
          onClick={(e) => handleLinkClick(e, 5)}
          href="/service"
          className="px-2 py-0.5 mt-4 border-primary border rounded text-sm font-semibold inline-block text-primary hover:bg-primary hover:text-white transition-all"
        >
          show more
        </Link> */}
      </div>
    </div>
  );
};
