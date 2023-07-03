import { FC } from "react";
import Picture6 from "../../assets/6.jpg";
import BannerImage from "../../assets/banner.avif";
import "@fontsource/montserrat"; // Defaults to weight 400
import "@fontsource/libre-baskerville"; // Defaults to weight 400
import "./styles.scss";

import { BsEnvelopeFill, BsYoutube, BsFacebook } from "react-icons/bs";

const Home: FC = () => {
  return (
    <div className="page">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__image-container">
            <img className="profile__image" src={Picture6} />
          </div>
          <h1 className="profile__name">Ajay Singh</h1>
          <h2 className="profile__description">
            Teacher, Spokesperson, Motivational Speaker
          </h2>
          <div className="contacts">
            <a
              href="mailto:ajaysinghkharb8@gmail.com"
              className="contacts__icon"
            >
              <BsEnvelopeFill />
            </a>
            <a
              href="https://www.facebook.com/AjaySinghKharbJJP"
              className="contacts__icon"
            >
              <BsFacebook />
            </a>
            <a href="youtube.com" className="contacts__icon">
              <BsYoutube />
            </a>
          </div>
          <p className="profile__bio">
            As a teacher and motivational speaker, I am passionate about
            inspiring and guiding others towards success. With a deep love for
            politics and philosophy, I am always eager to share my knowledge and
            insights with others, particularly when it comes to improving the
            lives of those around me. I believe that education is the key to
            unlocking one's potential, and I am committed to empowering students
            to reach their full potential. As a speaker, I strive to make my
            presentations both captivating and inspiring, and I am honored to be
            a positive influence in the lives of so many. I will continue to be
            a passionate advocate for education and motivation, and I am excited
            to see the impact that my work will have on future generations.
          </p>
        </div>
        <div className="profile__banner-container">
          <img
            className="gradient profile__banner easing_gradient"
            src={BannerImage}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
