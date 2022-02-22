import axios from "axios";
import { useEffect, useState } from "react";

interface Coin {
  opening_price: string;
  closing_price: string;
  min_price: string;
  max_price: string;
  units_traded: string;
}

const coinName: any = {
  BTC: "비트코인/BTC",
};

// const fakeData = {
//   timestamp: 0000000000000,
//   payment_currency: 'KRW',
//   BTC :{},
//   ETH: {},
// }

const Coins = () => {
  const [coins, setCoins] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const CORS_PROXY_URL = "https://imkdw-cors.herokuapp.com/";

  useEffect(() => {
    const getCoins = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          CORS_PROXY_URL + "https://api.bithumb.com/public/orderbook/ALL_KRW"
        );
        setCoins(response.data.data);
      } catch (e) {
        setError(e);
      }

      setLoading(false);
    };

    setInterval(getCoins, 1000);
  }, []);

  if (!coins) return <h1>코인이 없습니다.</h1>;
  if (error) return <h1>에러발생!!!</h1>;

  const krwCoins: any = [];
  for (const coin in coins) {
    krwCoins.push(Object.assign({ name: coin, ...coins[coin] }));
  }

  return (
    <ul>
      {krwCoins.slice(2).map((coin: any) => {
        const { name, asks } = coin;
        const price = Number(asks[0].price);
        return (
          <li key={name}>
            <div>{name in coinName ? coinName[name] : name}</div>
            <div>
              현재가격 : {price % 1 ? price : price.toLocaleString("ko-kr")}원
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Coins;
