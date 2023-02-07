import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Hugo Prado"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex quis ipsum quo commodi labore nam minima, quia deleniti et excepturi exercitationem nemo tempore, quidem suscipit quos corporis distinctio aperiam!"
          />

          <Post
            author="Jonatas Rodrigues"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ex quis ipsum quo commodi labore nam minima, quia deleniti et excepturi exercitationem nemo tempore, quidem suscipit quos corporis distinctio aperiam!"
          />
        </main>
      </div>
    </div>
  )
}

