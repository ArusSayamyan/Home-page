import styles from "./App.module.scss";
import Header from "./components/Header.component";
import Button from "./button/Button.component";
import { ReactComponent as SearchSVG } from "./assets/search.svg";
import { ReactComponent as LineSVG } from "./assets/line.svg";
import Rotate from "./components/Rotate.component";
import userImg1 from "./assets/user.png";
import userImg2 from "./assets/user2.png";
import userImg3 from "./assets/user3.png";
import addImg from "./assets/add.png";

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>
        <div className={styles.column}>
          <div className={styles.title}>
            <h1>
              Now buy your pin or <span>top up</span> with bank transfer
            </h1>
          </div>
          <div>
            <p>
              We Make international calling simple, relible, and cheap basedon
              your unique calling behavior.
            </p>
          </div>

          <div>
            <Button>Get Started</Button>
          </div>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              placeholder="Where do you want to call?"
            />
            <div className={styles.search}>
              <SearchSVG className={styles.searchSvg} />
              <LineSVG className={styles.lineSVG} />
            </div>
          </div>
          <div className={styles.userImgs}>
            <div className={styles.user1}>
              <img src={userImg1} alt="user" />
            </div>
            <div className={styles.user2}>
              <img src={userImg2} alt="user" />
            </div>
            <div className={styles.user3}>
              <img src={userImg3} alt="user" />
            </div>
            <div className={styles.user4}>
              <img src={addImg} alt="user" />
            </div>
            <div>
              <p>
                45k+ Regular User.<span>View Price Plan</span>
              </p>
            </div>
          </div>
        </div>
        <Rotate />
      </main>
    </div>
  );
};

export default App;
