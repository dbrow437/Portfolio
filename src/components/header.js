import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.scss"

// HeaderLink component
const HeaderLink = props => (
  <Link className={styles.link} to={props.to}>
    {props.text}
  </Link>
)

//SocialButton component
const SocialButton = props => {
  let style = ""
  let url = ""

  if (props.site === "instagram") {
    style = styles.buttonTwitter
    url = "https://www.instagram.com/" + props.username
  } else if (props.site === "linkedin") {
    style = styles.buttonLinkedin
    url = "https://www.linkedin.com/in/" + props.username
  } else if (props.site === "github") {
    style = styles.buttonGithub
    url = "https://www.github.com/" + props.username
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className={style}>{props.children}&nbsp;</div>
    </a>
  )
}

export default () => (
  <header className={styles.container}>
    <div className={styles.row}>
      <Link to="/">My Gatsby blog</Link>
      <SocialButton site="github" username="dbrow437"></SocialButton>
      <SocialButton site="linkedin" username="damontbrown"></SocialButton>
      <SocialButton
        site="instagram"
        username="everybodylovedamon"
      ></SocialButton>
    </div>

    <div className={styles.row}>
      <HeaderLink to="/" text="ARTICLES" />
      <HeaderLink to="/about" text="ABOUT" />
    </div>
  </header>
)
