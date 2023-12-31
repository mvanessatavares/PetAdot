import styles from "./Square.module.css";
import icon5 from '../../components/assets/icon5.png';
import icon4 from '../../components/assets/icon4.png';
import icon7 from '../../components/assets/icon7.png';
import icon6 from '../../components/assets/icon6.png';
import gatoo from '../../components/assets/gatoo.png';
import dog from '../../components/assets/dog.png';
import { Link } from "react-router-dom";
import { FaCat, FaDog, FaMoneyBillAlt} from 'react-icons/fa';
import Img from "../../components/img";


const Home = () => {

  return (
    <div className={styles.te_container}>

      <Img/>
      <div className={styles.teste_container}>
      <h2>
      <FaDog  size={25} /> Adote <FaCat  size={25}/>
      </h2>

        <img id="imagem" src={icon5}></img>
        <Link Link to="/adote">Acessar</Link>
      
      </div>

      <div className={styles.teste_container2}>
      <h2>
       Poste animal
      </h2>
      <img id="imagem" src={icon6}></img>
      <Link Link to="/posts/create">Acessar</Link>
      </div>

      <div className={styles.teste_container3}>
      <h2>
       Quiz
      </h2>
      <img id="imagem" src={icon4}></img>
      <Link Link to="/quiz">Acessar</Link>
      </div>

      <div className={styles.teste_container4}>
      <h2>
       Ajude <FaMoneyBillAlt size={25}/>
      </h2>
      <img id="imagem" src={icon7}></img>
      <Link Link to="/ajude">Acessar</Link>
      </div>
    </div>

  );
};

export default Home;
