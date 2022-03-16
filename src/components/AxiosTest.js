import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AxiosTest = () => {
  // state
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // 서버에서 요청해서 데이터 받아옴
  // state에 값 저장
  const loadData = async () => {
    setLoading(true);
    const response = await axios.get('http://jsonplaceholder.typicode.com/todos/1');
    console.log(response.data);
    setData(response.data);
    setLoading(false);
  }

  useEffect(() => {
    loadData();
  },[]);

  // data를 JSON Object로 변환해서 key, value 추출
  const jsonObj = JSON.parse(JSON.stringify(data));
  let result = [];

  for(let key in jsonObj) {
    result.push(
      <tr><td>{key}</td><td>{jsonObj[key]}</td></tr>
    )
  }

  return (
    <div>
      <h3>서버로부터 받아온 값</h3>
      <table border="1">
        {result}
      </table>
    </div>
  );
};

export default AxiosTest;