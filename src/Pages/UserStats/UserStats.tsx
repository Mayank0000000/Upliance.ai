import Counter from "../../Components/Counter/Counter";
import RichTextEditor from "../../Components/RichTextEditor/RichTextEditor";
import UserData from "../../Components/UserData/UserData";
import styles from './UserStats.module.css'

const UserStats = () => {
    return (
      <div className={styles.container}>
        <Counter />
        <RichTextEditor />
        <UserData />
      </div>
    );
  };
  
  export default UserStats;