import { useState } from 'react'
import styles from "./App.module.scss";
import {MessageList} from "./components/MessageList";
import {LoginBox} from "./components/LoginBox";
import {SendMessageForm} from "./components/SendMessageForm";
import {useAuth} from "./hooks/useAuth";

export function App() {

  const {user} = useAuth();

  return (
    <div className={styles.contentWrapper}>
      <MessageList/>
      {!!user ? <SendMessageForm /> : <LoginBox />}
    </div>
  )
}

