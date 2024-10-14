"use client";
import React, { useEffect, useRef } from "react";
import ScreenWrapper from "@/components/shared/ScreenWrapper";
import { useTranslations } from "next-intl";

const CompaniesContact = () => {
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
            <h2>Invitation for Partnership with Companies in Training</h2>
            <p>
              Rasay expresses its desire to establish strategic partnerships
              with companies across various sectors to deliver specialized
              training programs aimed at enhancing the skills and competencies
              necessary to meet market challenges. We believe in the importance
              of collaboration with companies to achieve common goals in
              workforce development and improve institutional performance.
            </p>
          </div>
          <h3>Importance of Partnering with Rasay:</h3>
          <ul>
            <li>
              <span>Customized Training Programs:</span>{" "}
              <span>
                Through collaboration with companies, we can design specialized
                training programs that meet your unique needs. We work to
                understand your requirements and provide tailored training
                solutions that enhance your employees' skills and achieve your
                strategic objectives.
              </span>
            </li>
            <li>
              <span>Improving Employee Performance:</span>{" "}
              <span>
                Our training programs are designed to enhance employee
                performance by providing the knowledge and skills necessary to
                keep pace with developments in their fields. This contributes to
                increasing work efficiency and productivity.
              </span>
            </li>
            <li>
              <span>Developing Organizational Culture:</span>{" "}
              <span>
                By offering continuous training, we assist companies in
                fostering a culture of lifelong learning within the workplace.
                This motivates employees and increases their loyalty and
                commitment to the company’s goals.
              </span>
            </li>
            <li>
              <span>Meeting Changing Market Demands:</span>{" "}
              <span>
                In the face of rapid changes in the job market, partnerships
                with companies play a crucial role in continuously updating and
                developing training programs, ensuring that employees acquire
                the skills needed to adapt to new
              </span>
            </li>
            <li>
              <span>Enhancing Innovation:</span>{" "}
              <span>
                Our training programs provide opportunities for employees to
                develop new ideas and innovative solutions, contributing to
                driving innovation and growth within the company.
              </span>
            </li>
          </ul>
          <h5 className="mt-2 text-xl font-bold text-gray-800 ">
            We invite you to explore collaboration opportunities with us and
            look forward to discussing how we can work together to achieve your
            goals and enhance the efficiency of your workforce.
          </h5>
          <p className="mt-2 text-gray-800 text-lg font-medium">
            If you represent a company and wish to learn more about our
            partnership, please do not hesitate to contact us using the
            information below.
          </p>
        </section>
        <hr className="lg:hidden" />
        <section dir="rtl">
          <div>
            <h2>دعوة للشراكة مع الشركات في تقديم التدريب</h2>
            <p>
              تعبر شركة وسامي عن رغبتها في إقامة شراكات استراتيجية مع الشركات في
              مختلف القطاعات لتقديم برامج تدريبية متخصصة تهدف إلى تعزيز المهارات
              والكفاءات اللازمة لمواجهة تحديات السوق. نحن نؤمن بأهمية التعاون مع
              الشركات لتحقيق أهداف مشتركة في تطوير القوى العاملة ورفع مستوى
              الأداء المؤسسي.
            </p>
          </div>
          <h3>أهمية الشراكة مع وسامي</h3>
          <ul>
            <li>
              <span>تخصيص البرامج التدريبية:</span>{" "}
              <span>
                من خلال التعاون مع الشركات، يمكننا تصميم برامج تدريبية متخصصة
                تلبي احتياجاتكم الفريدة. نحن نعمل على فهم متطلباتكم ونقدم حلولًا
                تدريبية متخصصة تركز على مهارات فرق عملكم وتحقق أهدافكم
                الاستراتيجية.
              </span>
            </li>
            <li>
              <span>تحسين أداء الموظفين:</span>{" "}
              <span>
                يتم التدريب بالتزامن مع متطلبات السوق لرفع كفاءة الموظفين في
                أداء المهام الموكلة إليهم. هذا يسهم في دفع كفاءة العمل وزيادة
                الإنتاجية.
              </span>
            </li>
            <li>
              <span>تطوير البرامج التدريبية المستمرة:</span>{" "}
              <span>
                في ظل التغيرات التي يشهدها سوق العمل، نسعى إلى العمل المستمر مع
                الشركات لتحديث وتطوير برامج التدريب بشكل دائم.
              </span>
            </li>
            <li>
              <span>تلبية متطلبات السوق المتغيرة</span>{" "}
              <span>
                برامج التدريب المستمر تساعد على تزويد الموظفين بالمهارات التي
                يحتاجونها للتكيف مع المتغيرات الجديدة.
              </span>
            </li>
            <li>
              <span>تعزيز الابتكار</span>{" "}
              <span>
                توفر برامجنا التدريبية فرصًا للموظفين لتطوير أفكار جديدة وحلول
                مبتكرة، مما يسهم في دفع عجلة الابتكار والنمو داخل الشركة.
              </span>
            </li>
          </ul>
          <h5 className="mt-2 text-xl font-bold text-gray-800 ">
            ندعوكم لاستكشاف فرص التعاون معنا ونتطلع إلى مناقشة كيفية العمل معًا
            لتحقيق أهدافكم ورفع مستوى كفاءة العمل لديكم.
          </h5>
          <p className="mt-2 text-gray-800 text-lg font-medium">
            إذا كنتم ممثلين عن شركة وترغبون في معرفة المزيد عن شراكتنا، نرجو
            التواصل معنا.
          </p>
        </section>
      </div>
      <section className="w-full mt-4 lg:mt-8">
        <form action="" className="w-full">
          {/* name */}
          <div className="input">
            <label htmlFor="">{transleForm("name")}</label>
            <input type="text" required />
          </div>
          {/*  email */}
          <div className="input">
            <label htmlFor="">{transleForm("email")}</label>
            <input type="email" required />
          </div>
          {/*  phone */}
          <div className="input">
            <label htmlFor="">{transleForm("site")}</label>
            <input type="text" required />
          </div>
          {/* site */}
          <div className="input">
            <label htmlFor="">{transleForm("site")}</label>
            <input type="text" required />
          </div>
          {/* role */}
          <div className="input">
            <label htmlFor="">{transleForm("role")}</label>
            <input type="text" required />
          </div>
          {/* message */}
          <div className="input">
            <label htmlFor="">{transleForm("message")}</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          {/* submit */}
          <input
            type="submit"
            value={transleForm("send")}
            className="bg-primary hover:bg-white text-white m-4 hover:text-primary  font-bold py-2 px-10 rounded focus:outline-none focus:shadow-outline"
          />
        </form>
      </section>
    </ScreenWrapper>
  );
};

export default CompaniesContact;
