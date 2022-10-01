var calculateBtn = document.getElementById("calculate");
var result = document.getElementById("result");
var calculate = () => {
    var p = Number(document.getElementById("principal").value);
    var r = Number(document.getElementById("rate").value);
    var t = Number(document.getElementById("time").value);
    var simpleInterest = (p * r * t) / 100;
    var amount = p + simpleInterest;

    result.innerHTML = `<div>The Simple Interest of Rs. <span>${p.toFixed(0)}</span>  at  <span>${r.toFixed(1)}</span>  % p.a for  <span>${t.toFixed(0)}</span>  year is Rs.<span>${simpleInterest.toFixed(0)}</span>.</div>
  <div>  The Accumulated Value is Rs. <span>${amount.toFixed(0)}</span>.</div>`;
};
calculateBtn.addEventListener("click", calculate);
window.addEventListener("load", calculate);