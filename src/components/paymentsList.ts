const images = {
  offline: require("../assets/icons/payments/offline.png"),
  wiretransfer: require("../assets/icons/payments/wiretransfer.png"),
  stripe: require("../assets/icons/payments/logos_stripe.png"),
  paypal: require("../assets/icons/payments/paypall.png"),
  razoplay: require("../assets/icons/payments/razoplay.png"),
  alipay: require("../assets/icons/payments/alipay.png"),
  paystack: require("../assets/icons/payments/paystack.png"),
};

// color constants
const greenText = "#00C48C";
const greenBG = "#E0FFF6";

const greyText = "#7D8A99";
const greyBG = "#E7E9EC";

const purpleText = "#6979F8";
const purpleBG = "#F0F2FE";

const paymentsList = [
  {
    image: images.offline,
    btnText: "Disable",
    btnTextColor: greenText,
    btnBgColor: greenBG,
    cardText: "Cash",
  },
  {
    image: images.wiretransfer,
    btnText: "Disable",
    btnTextColor: greyText,
    btnBgColor: greyBG,
    cardText: "Wire Transfer",
  },
  {
    image: images.stripe,
    btnText: "Disable",
    btnTextColor: greyText,
    btnBgColor: greyBG,
    cardText: "Stripe",
  },
  {
    image: images.paypal,
    btnText: "Disable",
    btnTextColor: greyText,
    btnBgColor: greyBG,
    cardText: "Paypal",
  },
  {
    image: images.razoplay,
    btnText: "Disable",
    btnTextColor: greyText,
    btnBgColor: greyBG,
    cardText: "Razoplay",
  },
  {
    image: images.alipay,
    btnText: "Coming Soon",
    btnTextColor: purpleText,
    btnBgColor: purpleBG,
    cardText: "AliPay",
  },
  {
    image: images.paystack,
    btnText: "Coming Soon",
    btnTextColor: purpleText,
    btnBgColor: purpleBG,
    cardText: "Paystack",
  },
];

export default paymentsList;
