"use client";
import React, { useEffect, useRef } from "react";
import ScreenWrapper from "@/components/shared/ScreenWrapper";
import { useTranslations } from "next-intl";

const UniversitiesContact = () => {
  const signInRef = useRef(null);
  const signUpRef = useRef(null);
  const universitiesFormRef = useRef(null);
  const companiesFormRef = useRef(null);
  const overlayContainerRef = useRef(null);
  const overlayRef = useRef(null);
  const transleForm = useTranslations("form");
  useEffect(() => {
    signInRef.current?.addEventListener("click", () => {
      overlayContainerRef.current.style.transform = "translateX(100%)";
      overlayRef.current.style.transform = "translateX(-50%)";
      universitiesFormRef.current.classList.add("active");
      companiesFormRef.current.classList.remove("active");
    });
    signUpRef.current?.addEventListener("click", () => {
      overlayContainerRef.current.style.transform = "translateX(0)";
      overlayRef.current.style.transform = "translateX(0)";
      companiesFormRef.current.classList.add("active");
      universitiesFormRef.current.classList.remove("active");
    });

    return () => {
      signInRef.current?.removeEventListener("click", () => {});
      signUpRef.current?.removeEventListener("click", () => {});
    };
  }, []);

  function handleContactSwiper(e, i) {
    e.target.classList.add("active");
    e.target.nextElementSibling?.classList.remove("active");
    e.target.previousElementSibling?.classList.remove("active");
    switch (i) {
      case 1:
        universitiesFormRef.current.classList.add("active");
        companiesFormRef.current.classList.remove("active");
        // overlayContainerRef.current.style.transform = "translateX(100%)";
        // overlayRef.current.style.transform = "translateX(-50%)";
        break;
      case 2:
        companiesFormRef.current.classList.add("active");
        universitiesFormRef.current.classList.remove("active");
        // overlayContainerRef.current.style.transform = "translateX(0)";
        // overlayRef.current.style.transform = "translateX(0)";
        break;
    }
  }
  // "form": {
  //   "name": "الاسم",
  //   "email": "البريد الالكتروني",
  //   "site": "الموقع",
  //   "phone": "رقم الهاتف",
  //   "send": "ارسال",
  //   "role": "المسمى الوظيفي",
  //   "message": "الرسالة"
  // }
  return (
    <ScreenWrapper className="bg-white contact ">
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-20 xl:gap-40">
        <section className="" dir="ltr">
          <div>
            <h2>Partnership Invitation with Universities</h2>
            <p>
              RSAY is pleased to invite universities and academic institutions
              to collaborate with us in providing advanced and professional
              training programs. We believe in the importance of strategic
              partnerships in enhancing the quality of education and vocational
              training. Collaborating with universities presents a unique
              opportunity to achieve our shared goals of developing a qualified
              workforce that meets the changing needs of the job market.
            </p>
          </div>
          <h3>Why Partner with RSAY?</h3>
          <ul>
            <li>
              <span>Achieving Academic Excellence:</span>{" "}
              <span>
                We strive to offer training programs aligned with the latest
                developments in business and technology. By partnering with
                universities, we can integrate academic knowledge with practical
                experience, contributing to comprehensive educational offerings.
              </span>
            </li>
            <li>
              <span>Meeting Job Market Needs:</span>{" "}
              <span>
                Through our collaboration with universities, we gain insights
                into the actual requirements of the job market and develop
                training programs that meet those needs. We work to prepare
                trainees to align with the demands of modern jobs.
              </span>
            </li>
            <li>
              <span>Enhancing Trainer Skills:</span>{" "}
              <span>
                Our partnership with universities allows us to enhance trainers&apos;
                skills through joint workshops and advanced training programs,
                ensuring the delivery of high-quality training content that
                aligns with the latest trends in education and training.
              </span>
            </li>
            <li>
              <span>Enhancing Practical Experiences:</span>{" "}
              <span>
                We aim to provide opportunities for students to engage in
                hands-on projects and field training through our partnerships
                with universities, granting them valuable practical experience
                and enhancing their future employment prospects.
              </span>
            </li>
          </ul>
        </section>
        <hr className="lg:hidden" />
        <section dir="rtl">
          <div>
            <h2>للشراكة مع الجامعات</h2>
            <p>
              يسر شركة رسائي أن تدعو الجامعات والمؤسسات الأكاديمية للتعاون معنا
              في تقديم برامج تدريبية متقدمة ومهنية. نحن نؤمن بأهمية الشركات
              الاستراتيجية في تعزيز جودة التعليم والتدريب المهني، ونعمل في
              التعاون مع الجامعات في صياغة فريدة لاستحداث آفاقًا للشراكة في
              تطوير قوى عاملة ماهرة تلبي احتياجات سوق العمل المتغيرة.
            </p>
          </div>
          <h3>لماذا الشراكة مع رسائي؟</h3>
          <ul>
            <li>
              <span>لماذا الشراكة مع رسائي؟</span>{" "}
              <span>
                نحن نسعى لتقديم برامج تدريبية تتماشى مع أحدث التطورات في مجالات
                الأعمال والتكنولوجيا، من خلال التعاون مع الجامعات، وبذلك ندمج
                المعرفة الأكاديمية مع الخبرات العملية، مما يساهم في تقديم تجربة
                تعليمية شاملة.
              </span>
            </li>
            <li>
              <span>تلبية احتياجات سوق العمل</span>{" "}
              <span>
                من خلال شراكتنا مع الجامعات، يمكننا التعرف على المتطلبات
                الحقيقية لسوق العمل وتطوير برامج تدريبية تلبي تلك الاحتياجات.
                نحن نعمل على إعداد الخريجين ليكونوا أكثر تأهيلاً مع متطلبات
                الأسواق الحديثة.
              </span>
            </li>
            <li>
              <span>تطوير مهارات المدرسين</span>{" "}
              <span>
                من خلال الشراكة مع الجامعات، يمكننا تعزيز مهارات المدرسين من
                خلال ورش عمل مشتركة وبرامج تدريبية متخصصة، مما يضمن تقديم محتوى
                تدريسي متميز يتماشى مع أحدث التوجهات في مجالات التعليم
              </span>
            </li>
            <li>
              <span>تعزيز التجارب العملية</span>{" "}
              <span>
                نحن نعمل على توفير فرص للطلاب للمشاركة في مشاريع عملية وتدريب
                ميداني من خلال شركتنا مع الجامعات، مما يمنحهم خبرة عملية قيّمة
                ويعزز من فرص توظيفهم في المستقبل.
              </span>
            </li>
          </ul>
        </section>
      </div>
      <section className="w-full mt-4 lg:mt-8">
      <form action="" className="w-full">
          {/* name */}
          <div className="input">
            <label htmlFor="">{transleForm("name")}</label>
            <input placeholder={transleForm("namePH")}  type="text" required />
          </div>
          {/*  email */}
          <div className="input">
            <label htmlFor="">{transleForm("email")}</label>
            <input placeholder={transleForm("emailPH")} type="email" required />
          </div>
          {/*  phone */}
          <div className="input">
            <label htmlFor="">{transleForm("phone")}</label>
            <input  placeholder={transleForm("phonePH")} type="text" required />
          </div>
          {/* site */}
          <div className="input">
            <label htmlFor="">{transleForm("site")}</label>
            <input placeholder={transleForm("sitePH")} type="text" required />
          </div>
          {/* role */}
          <div className="input">
            <label htmlFor="">{transleForm("role")}</label>
            <input placeholder={transleForm("rolePH")} type="text" required />
          </div>
          {/* message */}
          <div className="input">
            <label htmlFor="">{transleForm("message")}</label>
            <textarea placeholder={transleForm("messagePH")} name="" id="" cols="30" rows="10" required></textarea>
          </div>
          {/* submit */}
          <input
            type="submit"
            value={transleForm("send")}
            className="bg-primary hover:bg-white border border-transparent hover:border-primary cursor-pointer text-white m-4 hover:text-primary  font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline transition-all"
          />
        </form>
      </section>
    </ScreenWrapper>
  );
};

export default UniversitiesContact;
