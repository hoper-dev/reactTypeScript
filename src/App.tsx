/** @jsxImportSource @emotion/react */
import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import axios from "axios";

const url =
  "https://developers-api-aizuwakamatsu-p-mylocal.jp/mgmt/trip/spotlist/v1";

const App: React.FC = () => {
  const apiFunc = () => {
    console.log("test");
    const req = url + "?langCode=ja_JP&sortType=1&pageNo=1";
    axios
      .get(req, {
        headers: {
          "Content-Type": "application/json",
          "Ocp-Apim-Subscription-Key": process.env.REACT_APP_SUBSCRIPTION_KEY,
        },
      })
      .then((res) => {
        console.log("res", res);
        //スポットリストのspotNameを配列に格納し、HTMLに表示(forとか使ってリスト表示する)
        // spotname summary
        // spotname summary
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <div>
      <Button
        onClick={apiFunc}
        variant="contained"
        sx={{
          backgroundColor: "red",
          "&:hover": {
            backgroundColor: "red",
          },
        }}
      >
        データを取得する
      </Button>

      <div>
        <ul>ここにリストでデータを表示する</ul>
      </div>
    </div>
  );
};

export default App;
