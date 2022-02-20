import axios from "axios";
import React, { useEffect, useState } from "react";

interface Coin {
  market: string;
  korean_name: string;
  english_name: string;
}

const Coins = () => {
  const [coins, setCoins] = useState<any>(null);
  const [loading, setLoading] = useState<any>(false);
  const [error, setError] = useState<any>(null);

  const upbitURL = "https://api.upbit.com/v1/market/all";

  useEffect(() => {
    const getCoins = async () => {
      console.log("업비트 API 호출..");
      try {
        // 요청 시작시 코인들과 에러를 null로 초기화
        setError(null);
        setCoins(null);
        // 로딩 상태를 true로 변경
        setLoading(true);
        const response = await axios.get(upbitURL);
        setCoins(response.data); // response에 대한 데이터들은 response.data에 저장되어 있음
        console.log(coins);
      } catch (e) {
        setError(e);
      }
      setLoading(false); // 로딩 상태 false로 변경
    };

    getCoins();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (!coins) return <div>코인 정보가 없습니다.</div>;

  return (
    <div>
      <h1>코인 갯수 : {coins.length}</h1>
      <ul>
        {coins.map((coin: Coin, index: number) => {
          const { market, korean_name, english_name } = coin;
          return (
            <li key={index}>
              {market} | {korean_name} | {english_name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Coins;
