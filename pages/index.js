
const Home = (props)=> {
  return (
    <div>
      {props.title}
    </div>
  )
}
export default Home

export async function getStaticProps() {
  return {
    props: {
      title:  "SSG"
    }
  }
}
