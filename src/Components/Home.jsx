import React from 'react';
/*

const Home = () => {
    const mouseOverFunction = (e)=>{
        console.log(e.clientX);
        console.log(e.clientY)
    }
    useEffect(() => {
    // This area is similar to componentDidMount
    document.addEventListener("mouseover", mouseOverFunction)
      return () => {
        document.removeEventListener("mouseover", mouseOverFunction)
      }
    }, [])
    
  return (
    <div>Home</div>
  )
}
*/
const mouseOverFunction = (e)=>{
    console.log(e.clientX);
    console.log(e.clientY)
}
class Home extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        document.addEventListener("mouseover", mouseOverFunction)
    }
    componentWillUnmount(){
        document.removeEventListener("mouseover", mouseOverFunction)
    }
    render(){
        return(
            <div>Home</div>
        )
    }
}

export default Home