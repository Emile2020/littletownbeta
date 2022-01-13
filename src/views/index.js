import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './index.module.css'

const Index = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>little TV</title>
        <meta property="og:title" content="little TV" />
      </Helmet>
      <div className={styles['container1']}>
        <iframe
          src="https://embed.emile2021coding.repl.co/"
          className={styles['iframe']}
        ></iframe>
        <h1 className={styles['text']}>
          <span>Welcome to little tv</span>
        </h1>
        <iframe
          src="https://streamkit.discord.com/overlay/status/840623312811327528?icon=true&amp;online=true&amp;logo=white&amp;text_color=%23ffffff&amp;text_size=14&amp;text_outline_color=%23000000&amp;text_outline_size=0&amp;text_shadow_color=%23000000&amp;text_shadow_size=0&amp;bg_color=%231e2124&amp;bg_opacity=0.95&amp;bg_shadow_color=%23000000&amp;bg_shadow_size=0&amp;invite_code=BbXPjeJ2xe&amp;limit_speaking=false&amp;small_avatars=false&amp;hide_names=false&amp;fade_chat=0"
          className={` ${styles['iframe1']} ${projectStyles['discordembed']} `}
        ></iframe>
      </div>
    </div>
  )
}

export default Index
