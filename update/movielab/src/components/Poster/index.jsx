import React from 'react'
import { BiArrowFromLeft } from 'react-icons/bi'

import Note from 'assets/Note.png'
import Relevance from 'assets/Relevance.png'
import styles from './Poster.module.scss'

export default function Poster() {
  return (
    <div className={styles.poster}>
      <img
        className={styles.thumbnail}
        src="https://podpop.com.br/PodPOP/wp-content/uploads/2019/01/capa-podcast-vidro_00000.png"
        alt="Thumbnail"
      />

      <div className={styles.info}>
        <h1>titulo</h1>

        <div className={styles.note}>
          <span>
            <img src={Note} alt="" />
          </span>
          <span>
            <img src={Relevance} alt="" />
          </span>
        </div>

        <p className={styles.description}></p>

        <a className={styles['btn-detail']} href="#fodasse">
          <BiArrowFromLeft className={styles.icon} /> Detalhes
        </a>
      </div>
    </div>
  )
}
