import LayoutLink from "../components/LayoutLink"
import MainLayout from "../components/layouts/MainLayout"
import styles from "../styles/Home.module.css"

const lista = [
    {
        titulo: "Home",
        parrafo: "Learn about Next.js in an interactive course with quizzes!",
        ruta: "/"
    },
    {
        titulo: "About",
        parrafo: "Find in-depth information about Next.js features and API.",
        ruta: "/about"
    },
    {
        titulo: "Contact",
        parrafo: "Discover and deploy boilerplate example Next.js projects.",
        ruta: "/contact"
    },
    {
        titulo: "Deploy",
        parrafo: "Instantly deploy your Next.js site to a public URL with Vercel.",
        ruta: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    }
]

export default function contact() {
  return (
    <MainLayout> 
    <h1 className={styles.title}>
      Welcome to <a href="https://nextjs.org">Contact Page!</a>
    </h1>
    <p className={styles.description}>
        Get started by editing{" "}
      <code className={styles.code}>pages/index.js</code>
    </p>
    <div className={styles.grid}>
      {lista.map((item, index) => (
        <LayoutLink key={index} titulo={item.titulo} parrafo={item.parrafo} ruta={item.ruta}/>
      ))}
    </div>
  </MainLayout>
  );
}
