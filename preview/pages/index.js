
const Home = (props)=> {
  return (
    <div>
      {props.title}
    </div>
  )
}
export default Home


export async function getServerSideProps() {
  return {
    props: {
      title: "SSR" 
    }
  }
}