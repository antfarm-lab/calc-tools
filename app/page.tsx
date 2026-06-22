"use client";
import { useState } from "react";

export default function Home() {
  const [sellPrice, setSellPrice] = useState("");
  const [buyPrice, setBuyPrice] = useState("");
  const [shipping, setShipping] = useState("");
  const [otherCost, setOtherCost] = useState("");
  const [platform, setPlatform] = useState("mercari");

  const sell = Number(sellPrice);
  const buy = Number(buyPrice);
  const ship = Number(shipping);
  const other = Number(otherCost);

  const feeRate = platform === "mercari" ? 0.1 : 0.06;
const fee = Math.floor(sell * feeRate);
  const profit = sell - fee - buy - ship - other;
  const profitRate = sell > 0 ? ((profit / sell) * 100).toFixed(1) : "0.0";

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold mb-2">メルカリ利益計算ツール</h1>
        <p className="text-gray-600 mb-6">
          販売価格・仕入れ価格・送料から、利益と利益率を自動計算します。
        </p>
<select
  className="border p-3 w-full mb-3 rounded"
  value={platform}
  onChange={(e) => setPlatform(e.target.value)}
>
  <option value="mercari">メルカリ（手数料10%）</option>
  <option value="rakuma">ラクマ（手数料6%）</option>
</select>
        <input className="border p-3 w-full mb-3 rounded" placeholder="販売価格" value={sellPrice} onChange={(e) => setSellPrice(e.target.value)} />
        <input className="border p-3 w-full mb-3 rounded" placeholder="仕入れ価格" value={buyPrice} onChange={(e) => setBuyPrice(e.target.value)} />
        <input className="border p-3 w-full mb-3 rounded" placeholder="送料" value={shipping} onChange={(e) => setShipping(e.target.value)} />
        <input className="border p-3 w-full mb-5 rounded" placeholder="その他費用" value={otherCost} onChange={(e) => setOtherCost(e.target.value)} />

        <div className="bg-gray-50 rounded-xl p-5 space-y-2">
          <p>販売手数料：{fee.toLocaleString()}円</p>
          <p
  className={`text-xl font-bold ${
    profit < 0 ? "text-red-600" : "text-green-600"
  }`}
>
  利益：{profit.toLocaleString()}円
</p>
          <p>利益率：{profitRate}%</p>
        </div>
      </div>
      <button
  className="mt-5 w-full bg-black text-white p-3 rounded-xl"
  onClick={() => {
    setSellPrice("");
    setBuyPrice("");
    setShipping("");
    setOtherCost("");
  }}
>
  リセット
</button>
<section className="mt-10 bg-white rounded-xl p-6">
  <h2 className="text-xl font-bold mb-4">
    メルカリ・ラクマ販売で利益計算が重要な理由
  </h2>

  <p className="mb-3">
    フリマアプリで商品を販売すると、販売手数料や送料が差し引かれるため、
    売上金額そのままが利益になるわけではありません。
  </p>

  <p className="mb-3">
    特にメルカリでは販売手数料10%、ラクマでは手数料が発生するため、
    正確な利益計算をしないと赤字になる可能性があります。
  </p>

  <p>
    この利益計算ツールでは販売価格・仕入れ価格・送料・手数料を入力するだけで、
    最終利益と利益率を自動計算できます。
  </p>
</section>
<section className="mt-10 rounded-xl border bg-white p-5">
  <h2 className="mb-3 text-lg font-bold">ほかの便利ツール</h2>
  <div className="grid gap-2 text-sm">
    <a className="text-blue-600 underline" href="https://shipping-calc-olive.vercel.app/">
  送料計算ツール
</a>
<a className="text-blue-600 underline" href="https://fee-calc-seven.vercel.app/">
  手数料計算ツール
</a>
<a className="text-blue-600 underline" href="https://price-reverse-calc.vercel.app/">
  逆算計算ツール
</a>
  </div>
</section>
<footer className="mt-8 text-center text-sm text-gray-500">
  <a className="underline" href="/privacy">
    プライバシーポリシー
  </a>
</footer>
    </main>
  );
}