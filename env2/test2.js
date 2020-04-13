import axios from 'axios'


const test2 = async() => {
  const res = await axios.get("https://virtserver.swaggerhub.com/hongwei0417/stock/1.0.0/inventory")
  console.log(res.data)
}

test2()