import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ka3ba from "../assets/images/ka3ba.png"
import madina from "../assets/images/madina.png"
import transperntLogo from "../assets/images/whiteLogo.png"

const Home = () => {
  return (
    <>
      <Helmet>
        <title>الرئيسية</title>
      </Helmet>
      <section className="hero">
        <div className="hero-content">
          <motion.div
            initial={{
              opacity: 0,
              y: -40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            className="info">
            <h2>مراسم السعودية</h2>
            <p>
              شركة نقل تفخر بتقديم خدمات متميزة لعملائها. نهتم بتقديم تجربة
              فريدة ومريحة لزوار بيت الله الحرام والمسجد النبوي وتقديم برامج
              سياحية لمختلف الزوار في جميع أنحاء المملكة العربية السعودية، حيث
              يكون الأمان والراحة في جميع جوانب خدماتنا
            </p>
          </motion.div>
          <Link to="buses" className="hero-btn">استكشف حافلاتنا</Link>
        </div>
      </section>
      <p className="br"></p>
      <p className="br"></p>
      <section className="information">
        <img src={ka3ba} className="ka3ba" />
        <motion.img
          initial={{
            x: 250,
            opacity: 0
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 3,
          }}
          src={transperntLogo}
          className="logo-desgin" />
        <motion.div
          initial={{
            x: 100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <h2>نبذة عن مراسم السعودية</h2>
          <p>تأسست شركة مراسم السعودية للنقل لممارسة أنشطة النقل البري في 
            المدن وضواحيها ويتركز نشاطها في عدة مجالات منها :
          </p>
          <ol>
            <li>
              خدمات نقل المعتمرين خلال موسم العمرة والتنقل بين مكة المكرمة والمدينة
              المنورة.
            </li>
            <li> خدمات نقل الحجاج خلال موسم الحج والتنقل بين المشاعر المقدسة.</li>
            <li>
              خدمات النقل السياحي والبرامج السياحية للركاب القادمين من خارج المملكة
              وكذلك المقيمين داخل المملكة العربية السعودية.
            </li>
            <li>
              خدمات البرامج الرياضية والترفيهية ونقل الضيوف خلال المواسم الرياضية
              والترفيهية والسياحية.
            </li>
            <li>تقديم خدمات البرامج السياحية.</li>
            <li>تقديم خدمات برامج العمرة والحج.</li>
          </ol>
        </motion.div>
      </section>
      <p className="br"></p>
      <p className="br"></p>
      {/* <section dir="rtl" className="information">
        <img src={madina} className="madina" />
        <motion.img
          initial={{
            x: 250,
            opacity: 0
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 3,
          }}
          src={transperntLogo}
          className="logo-desgin" />
        <motion.div
          className="madina-div"
          initial={{
            x: 100,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
        >
          <h2>نبذة عن مراسم السعودية</h2>
          <p>تأسست شركة مراسم السعودية للنقل لممارسة أنشطة النقل البري في 
            المدن وضواحيها ويتركز نشاطها في عدة مجالات منها :
          </p>
          <ol>
            <li>
              خدمات نقل المعتمرين خلال موسم العمرة والتنقل بين مكة المكرمة والمدينة
              المنورة.
            </li>
            <li> خدمات نقل الحجاج خلال موسم الحج والتنقل بين المشاعر المقدسة.</li>
            <li>
              خدمات النقل السياحي والبرامج السياحية للركاب القادمين من خارج المملكة
              وكذلك المقيمين داخل المملكة العربية السعودية.
            </li>
            <li>
              خدمات البرامج الرياضية والترفيهية ونقل الضيوف خلال المواسم الرياضية
              والترفيهية والسياحية.
            </li>
            <li>تقديم خدمات البرامج السياحية.</li>
            <li>تقديم خدمات برامج العمرة والحج.</li>
          </ol>
        </motion.div>
      </section>
      <p className="br"></p>
      <p className="br"></p> */}
    </>
  );
};

export default Home;
