import {useState , useEffect} from "react"

// future Currency API => `https://api.frankfurter.app/latest?from=USD&to=INR `

function useCurrencyInfo(currency){
    const [data,setData] = useState({}) ;

    useEffect( () => {
        fetch( `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json` )
        .then( (res) => res.json() )
        .then( (res) => setData(res[currency]) )
    },[currency]
    )
    return data ;
}

export default useCurrencyInfo ;