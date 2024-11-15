import { useEffect, useRef } from "react";
import styles from "./Result.module.css";

const Result = ({ selectedItem, housepicked, win, setcontent }) => {
  const housePickedRef = useRef(null);

  useEffect(() => {
    const handleAnimationEnd = () => {
      if (housePickedRef.current) {
        housePickedRef.current.classList.remove(styles.animate);
      }
    };

    const node = housePickedRef.current;
    if (node) {
      node.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (node) {
        node.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, []);

  return (
    <section className={styles.wraper}>
      <div className={styles.wrap}>
        <div className={styles.container}>
          <p>You Picked</p>
          <div className={styles.imgwrap} style={{ borderColor: selectedItem.bordercolor }}>
            <img src={selectedItem.img} alt={selectedItem.name} width={70} height={70} />
          </div>
        </div>

        <div className={styles.container}>
          <p>The House Picked</p>
          <div
            ref={housePickedRef}
            className={`${styles.imgwrap} ${styles.animate}`}
            style={{ borderColor: housepicked.bordercolor }}
          >
            <span className={styles.extraring}></span>
            <span className={styles.extraring2}></span>
            <img src={housepicked.img} alt={housepicked.name} width={70} height={70} />
          </div>
        </div>
      </div>

      <div className={styles.results}>
        <p className={styles.wins}>You {win}</p>
        <button type="button" onClick={() => setcontent(false)}>Play again</button>
      </div>
    </section>
  );
};

export default Result;
