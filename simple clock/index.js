const setClock = () => {
  const now = new Date();
  const hourDegree = getDegrees(now.getHours(), 12);
  const minuteDegree = getDegrees(now.getMinutes(), 60);
  const secondDegree = getDegrees(now.getSeconds(), 60);

  const hourHand = document.querySelector(".hour-hand");
  hourHand.style.transform = `rotate(${hourDegree}deg)`;

  const minuteHand = document.querySelector(".minute-hand");
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

  const secondHand = document.querySelector(".second-hand");
  secondHand.style.transform = `rotate(${secondDegree}deg)`;
};

setInterval(setClock, 1000);

const getDegrees = (val, max) => {
  return (360 / max) * val.toFixed(2);
};
