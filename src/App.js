import styles from './App.module.scss';
import { Navigation } from "./components/organisms/navigation/Navigation";

function App() {
  return (
    <div className={styles.container}>
      <Navigation />
    </div>
  );
}

export default App;
