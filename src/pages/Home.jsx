import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>الرئيسية</title>
      </Helmet>
      <section className="hero">
        <div className="hero-content">
          <div className="info">
            <h2>مراسم السعودية</h2>
            <p> شركة نقل فاخرة تفخر بتقديم خدمات مميزة لحجاج ومعتمرين والسياح في جميع أنحاء المملكة العربية السعودية. نهتم بتقديم تجربة فريدة ومريحة لزوار بيت الله الحرام وللسياح، حيث يكون الأمان والراحة هما الأساسيان في جميع جوانب خدماتنا</p>
          </div>
          <Link to="about" className="hero-btn">من نحن؟</Link>
        </div>
      </section>
    </>
  );
};

export default Home;
