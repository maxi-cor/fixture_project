import { useEffect, useState } from "react";
import NavBrowser from "../components/NavBrowser";


export default function Home(){

    const apiKey = `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=a4f5b4223f9e3010cc74e81538e9200e2410e3319a1c21bba5dfb7acc7a8e4bb&from=2024-02-08&to=2024-02-08`;

  const [info, setInfo] = useState(null)

  const bringInfo = async () => {
    try {
      const response = await fetch(apiKey);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setInfo(data.result);

    } catch (error) {
      console.log('Error: ', error)
    }
  }

  useEffect(() => {
    bringInfo()
  },[])

  console.log(info)



    return (
        <div>
            <NavBrowser/>
            <h1>Home</h1>
        </div>
    )
}