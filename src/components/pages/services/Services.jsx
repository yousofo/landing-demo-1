"use client";
import { setCategories } from "@/state/features/categories/categoriesSlice";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const Services = () => {
  const activeCategories = useSelector(
    (store) => store.categories.activeCategories
  );
  const disptach = useDispatch();
  const images = [
    "/images/placeholders/softwareengineering.jpeg",
    "/images/placeholders/ai-training.webp",
    "/images/placeholders/cloud-computing-900x600.jpg",
    "/images/placeholders/quality-management.webp",
    "/images/placeholders/Systems-Network-Management-Training.jpg",
    "/images/placeholders/cybersecurity.jpg",
    "/images/placeholders/risk-management.jpg",
    "/images/placeholders/Digital-transformation-for-organisations-1080x609.jpg",
  ];
  const categories = [
    {
      id: 1,
      name: "Software Engineering",
    },
    {
      id: 2,
      name: "AI Training",
    },
    {
      id: 3,
      name: "Cloud Computing",
    },
  ];
  const handleCategoryClick = (category) => {
    if (activeCategories.includes(category)) {
      disptach(setCategories(activeCategories.filter((c) => c !== category)));
    } else {
      disptach(setCategories([...activeCategories, category]));
    }
  };
  const translate = useTranslations("courses");
  const translateServices = useTranslations("services");
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        {/* header */}
        <div className="flex mb-6 justify-between flex-col items-center w-full gap-6">
          {/* title */}
          <div className=" px-4">
            <div className="mx-auto  max-w-[750px]  text-center">
              {/* <span className="mb-2 block text-lg font-semibold text-primary capitalize">
                {translateServices("title")}
              </span> */}
              <h2 className="mb-3 lg:mb-5 text-3xl font-bold leading-[1.2]  sm:text-4xl md:text-[40px] uppercase">
                {translateServices("title")}
              </h2>
              <p className="text-lg text-body-color">
                {translateServices("info")}
              </p>
            </div>
          </div>
          {/* categories */}
          {/* <div className="flex items-center gap-4">
            {categories.map((category, index) => (
              <button
                href={`/services/${category.name}`}
                className={`inline-block px-4 py-1 transition-all  bg-white hover:bg-primary text-primary hover:text-white rounded border border-primary hover:border-white text-base font-semibold ${
                  activeCategories.includes(category.id)
                    ? "!bg-primary !text-white"
                    : ""
                }`}
                key={index}
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div> */}
        </div>

        {/* services */}
        <div className=" flex flex-wrap">
          {Array(8)
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
    <div className="w-full p-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
      <div className="rounded-2xl transition-all h-full bg-white drop-shadow">
        <div className="flex aspect-video max-h-[300px] items-center justify-center rounded-xl rounded-b-none  bg-primary overflow-hidden w-full">
          {/* {icon} */}
          <img src={img} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="p-4">
          <h4 className="mb-[14px] text-xl font-bold ">{title}</h4>
          <p className="text-body-color text-lg font-medium text-gray-700">
            {details}
          </p>
        </div>
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
