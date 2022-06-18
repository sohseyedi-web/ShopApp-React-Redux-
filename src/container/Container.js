import Navbar from "../components/Layout/Navbar/Navbar"


const Container = ({children}) => {
  return (
    <>
        <Navbar/>
        {children}
    </>
  )
}

export default Container