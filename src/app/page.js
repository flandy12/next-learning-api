'use client';

import Image from "next/image";
import { useEffect ,useState} from "react";
import CardProduct from "@/components/cards/page";
import {randomIntFromInterval} from "@/helper/halper";

export default function Home() {

  const [dataResults, setDataResults] = useState([]);

  useEffect(() => {
    const data = async () => {
      const response = await fetch('https://dummyjson.com/products', { cache: 'no-store' })
      const data_json = await response.json();
      return data_json;
    }

    data().then((data) => {
      const {products, limit, skip, total} = data;
      setDataResults(products);
    })
  }, []);


  return (
    <div>
      <h1 clasName="text-xl"> Product </h1>

      <div className="grid grid-cols-4 gap-3">
      { dataResults.length > 0 ? dataResults.map((value,key) => (
        <div key={key}>
            <CardProduct 
                url={'/product/'+value.title}
                image={value.images} 
                title={value.title}
                price={'Rp.1200.0000'}
                rating={randomIntFromInterval(1,5)}
            />
        </div>
      )) : 'nj'}

    </div>

       {/* <h1> {dataResults.products[0].title} </h1> */}
    </div>
  );
}
