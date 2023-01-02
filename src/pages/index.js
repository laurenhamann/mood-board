import * as React from "react"
import JSONData from '../../content/mood.json'
import Cells from "../components/cells";
import '../sass/styles.scss'
import Header from "../components/header";
import KeyList from "../components/keys";
const year = 23;
const IndexPage = () => {
  console.log(JSONData);
  const [load, setLoad] = React.useState(false);

  React.useEffect(() => {
    const onPageLoad = () => {
      setLoad(true);
    };

  // Check if the page has already loaded
  if (document.readyState === 'complete') {
    onPageLoad();
  } else {
    window.addEventListener('load', onPageLoad);
    // Remove the event listener when component unmounts
    return () => window.removeEventListener('load', onPageLoad);
  }
}, []);
  return (
    <main>
    <Header year={year} />
    <div className="container">
      <KeyList />
      <ul>
        {JSONData.map((data) => {
          console.log(data.mood);
          if(load){
          const d = /\d{1,2}/g;
          const date = data.date.match(d);
          if(date[2] == year){
            const myElement = document.getElementById('outline');
            for (const child of myElement.children) {
              const id = child.id;
              console.log('in outline')
              if(id === date[0]){
                const monthElement = document.getElementById(id)
                console.log('in month')
                for (const child of monthElement.children) {
                  const id = child.id;
                  if(id === date[1]){
                    console.log('in day', id)
                    const mood = data.mood;
                    child.classList.add(mood);
                    console.log(child);
                    console.log('in day')
                  }
                }
              }
            }
          }else{
            console.log(date[2])
          }}
        })}
        <Cells />
      </ul>
    </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
