import { Header } from "./components/header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from './App.module.css'
import './global.css' 

function App() {
  return (

    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Alisson Carvalho"
            content="
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur provident placeat aperiam repellendus, blanditiis exercitationem labore corrupti fugit culpa quas minus, qui porro consequuntur laudantium, assumenda reiciendis! Asperiores, molestiae necessitatibus!"
          />
        </main>

      </div>
    </div>

  )
}

export default App
