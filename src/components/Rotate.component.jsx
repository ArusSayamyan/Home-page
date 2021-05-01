import styles from "./rotate.module.scss";
import { ReactComponent as GirlSVG } from "../assets/girl.svg";
import flag from "../assets/flag.png";
import Britain from "../assets/Britain.png";
import Italy from "../assets/Italy.png";

const Rotate = () => {
    return (
        <div className={styles.column}>    
        <div className={styles.counterrotate}>
        <div className={styles.item}>
          <img src={flag} alt="flag"/>
        </div>
        <div className={styles.item1}>
          <img src={Britain} alt="flag" />
        </div>
        <div className={styles.item2}>
          <img src={Italy} alt="flag" />
        </div>
        <div className={styles.item3}>
          <img src={flag} alt="flag"/>
        </div>
        <div className={styles.item4}>
          <img src={flag} alt="flag"  className={styles.pulsingImg}  />
        </div>
       
    </div>
      <div className={styles.cyrcle} />
        <GirlSVG className={styles.girlImg} />
</div>

    )
}
export default Rotate;
