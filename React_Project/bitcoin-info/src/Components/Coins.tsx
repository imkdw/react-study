import axios from "axios";
import { useEffect, useState } from "react";

interface Coin {
  opening_price: string;
  closing_price: string;
  min_price: string;
  max_price: string;
  units_traded: string;
}

const Coins = () => {
  const [coins, setCoins] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const getCoins = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://api.bithumb.com/public/orderbook/ALL_KRW"
        );
        setCoins(response.data.data);
      } catch (e) {
        setError(e);
      }

      setLoading(false);
    };

    getCoins();
  }, []);

  if (loading) return <h1>로딩중입니다..</h1>;
  if (!coins) return <h1>코인이 없습니다.</h1>;
  if (error) return <h1>에러발생!!!</h1>;

  const krwCoins: any = [];
  for (const coin in coins) {
    const infoObj = Object.assign({ name: coin }, coins[coin]);
    krwCoins.push(infoObj);
  }

  console.log(krwCoins);

  return (
    <ul>
      {krwCoins.slice(0, krwCoins.length - 1).map((coin: any) => {
        const { name, price } = coin;
        return (
          <li key={name}>
            <div>
              <b>{name}</b>
            </div>
            <div>현재가격 : {price}원</div>
            <hr />
          </li>
        );
      })}
    </ul>
  );
};

export default Coins;
