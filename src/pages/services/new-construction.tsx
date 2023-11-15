import React, {useState, useEffect} from "react";
import classes from "@/styles/Service.module.css";

const newconstruction: React.FC = () => {
  // Parallax effect for Header
  const [offsetY, setOffsetY] = useState<number>(0);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={classes["service-page"]}>
      <header
        className={classes["service-hero"]}
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      >
        <div className={classes["service-hero-overlay"]}>
          <div className={classes["hero-text"]}>
            <h1>New Construction</h1>
            <h2>From The Ground Up</h2>
          </div>
        </div>
      </header>
      <section className={classes["service-section"]}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
          pariatur nihil recusandae voluptates soluta rem, id mollitia quisquam,
          quam cum dolores assumenda ullam a itaque autem dolore fugiat
          temporibus ipsam ipsa suscipit laudantium laborum nisi! Iure
          repudiandae, quas, suscipit itaque optio nihil eaque ipsum possimus,
          sunt dolor voluptates tenetur quisquam explicabo magni vel veniam.
          Aliquam delectus fuga voluptas dolorum asperiores. Repudiandae,
          praesentium maiores! Quidem quis fugit ipsam beatae assumenda sequi a,
          voluptatum veniam dignissimos repellendus non alias laboriosam ad
          sint.
        </p>
      </section>
    </div>
  );
};

export default newconstruction;
