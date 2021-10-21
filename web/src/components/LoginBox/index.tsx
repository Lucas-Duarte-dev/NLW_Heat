import styles from "./styles.module.scss";
import {VscGithubInverted} from "react-icons/vsc"
import {useEffect} from "react";
import {api} from "../../services/api";
import {useAuth} from "../../hooks/useAuth";



export function LoginBox() {

    const {signInUrl, user} = useAuth();

    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signInUrl} className={styles.signInWithGithub}>
               <VscGithubInverted size={24}/>
                Entrar com o github
            </a>
        </div>
    )
}