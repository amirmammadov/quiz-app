import React, { useEffect, useState } from "react";
import { getServerData } from "../helper/helper";

import { API_URL } from "../constant/index";

export default function ResultTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const results = await getServerData(
          `${API_URL}/api/v1/results`,
          (data) => data
        );
        setData(results);
      } catch (error) {
        throw new Error("No Result Available");
      }
    })();
  }, []);

  return (
    <div>
      <caption className="table-title">Previous results</caption>
      <table>
        <thead className="table-header">
          <tr className="table-row">
            <td>Name</td>
            <td>Attempts</td>
            <td>Earn Points</td>
            <td>Result</td>
          </tr>
        </thead>
        <tbody>
          {!data ?? <div>Not Found Data</div>}
          {data.map((value, i) => (
            <tr className="table-body" key={i}>
              <td>{value?.username || ""}</td>
              <td>{value?.attempts || 0}</td>
              <td>{value?.points || 0}</td>
              <td>{value?.achived || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
