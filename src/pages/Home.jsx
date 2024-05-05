import { DocumentTitle } from '../components/DocumentTitle';
import css from './Pages.module.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
 
  
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={css.container}>
        <p className={css.link}>Do you want to <NavLink to="/register" className={css.span}>Register</NavLink> or <NavLink to="/login" className={css.span}>Log In</NavLink> ?</p>
      </div>
    </>
  );
}

export default Home;