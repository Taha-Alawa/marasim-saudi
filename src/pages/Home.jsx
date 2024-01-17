import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import ka3ba from "../assets/images/ka3ba.png"
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
            <p> شركة نقل فاخرة تفخر بتقديم خدمات مميزة لحجاج ومعتمرين والسياح في جميع أنحاء المملكة العربية السعودية. نهتم بتقديم تجربة فريدة ومريحة لزوار بيت الله الحرام وللسياح، حيث يكون الأمان والراحة هما الأساسيان في جميع جوانب خدماتنا</p>
          </motion.div>
          <Link to="buses" className="hero-btn">استكشف حافلاتنا</Link>
        </div>
      </section>
      <section className="information">
        <img src={ka3ba} className="ka3ba" />
        <img src={transperntLogo} alt="" />
        <div>
          <h2>نبذة عن مراسم السعودية</h2>
          <p>تأسست شركة مراسم السعودية للنقل لممارسة أنشطة النقل البري في 
            المدن وضواحيها ويتركز نشاطها في عدة مجالات منها :
          </p>
          <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem!</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default Home;
