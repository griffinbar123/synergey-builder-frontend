import React, {useState, useEffect} from 'react'
import "./win-or-load.css"
import {useQuery} from "react-query"
import WinPercantage from '../win-percentage/win-percentage';

async function getWinner(tier, champs) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      xhrFields : {withCredentials: true},
      body: JSON.stringify({"tier":tier, "participants": champs})
  }; // https://synergy-builder-server.onrender.com
  // http://localhost:5000
  var res = await fetch("http://localhost:5000/api/champs", requestOptions)
  return await res.json()
  }
  

function WinOrLoad({tier, champs}) {
    const { isLoading, data } = useQuery({
        queryKey: ['getWin', tier, champs],
        queryFn: () => getWinner(tier, champs),
        throwOnError: true,
        // onError: () => {console.log("erro")}
      })
    // console.log(data)

    // const ref = useRef(null);
    const [width, setWidth] = useState(100);

    useEffect(() => {
        const resizeObserver = new ResizeObserver((event) => {
            // Depending on the layout, you may need to swap inlineSize with blockSize
            // https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize
            setWidth(event[0].contentBoxSize[0].inlineSize);
        });

        resizeObserver.observe(document.getElementById("win-or-load"));
    });

  return (
    <div id="win-or-load" className='win-or-load'>
        {isLoading && <span>loading...</span>}
        {!isLoading && data != null && data.status_code === 200 && <WinPercantage width={width} percentage={data.win}/>}
    </div>
  )
}

export default WinOrLoad