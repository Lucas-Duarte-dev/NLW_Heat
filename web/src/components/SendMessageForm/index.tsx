import styles from "./styles.module.scss";
import {useAuth} from "../../hooks/useAuth";
import {VscGithub, VscSignOut} from "react-icons/all";

export function SendMessageForm() {

    const {signOut, user} = useAuth();

    return (
      <div className={styles.sendMessageWrapper}>
        <button className={styles.signOutButton} onClick={signOut}>
            <VscSignOut size={32} />
        </button>

          <header className={styles.userInformation}>
              <div className={styles.userImage}>
                  <img src={user?.avatar_url} alt={user?.name}/>
              </div>
              <strong className={styles.userName}>{user?.name}</strong>
              <span className={styles.userGithub}>
                  <VscGithub size={16} />
                  {user?.login}
              </span>
          </header>

          <form className={styles.sendMessageForm}>
              <label htmlFor="message">Mensagem</label>
              <textarea
                name="message"
                id="message"
                placeholder="Qual sua expectativa para o evento?"
              />

              <button type="submit">Enviar mensagem</button>
          </form>
      </div>
    );
}