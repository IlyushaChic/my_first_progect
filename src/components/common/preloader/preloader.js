import preloader from '../../../assets/images/loading.gif';
import s from './preloader.module.css';

let Preloader = (props) => {
   return <img className={s.loading} src={preloader} />
}

export default Preloader;