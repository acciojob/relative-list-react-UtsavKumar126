import React from 'react'

const App = () => {
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol key={"relativeList"}>
                <li key={"relativeListItem1"}>Mama</li>
                <li key={"relativeListItem2"}>Chacha</li>
                <li key={"relativeListItem3"}>Nana</li>
                <li key={"relativeListItem4"}>Dada</li>
               </ol>
    </div>
  )
}

export default App
