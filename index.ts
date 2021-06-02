interface IceCream {
  flavor: string;
  scoops: number;
}

let iceCream: IceCream = {
  flavor: "Vanilla",
  scoops: 2,
};
console.log(iceCream.scoops);

function tooManyScoops(dessert: Sundae) {
  if (dessert.scoops >= 4) {
    return `${dessert.scoops} is to many scoops`;
  } else {
    return "You order will be ready soon";
  }
}

console.log(
  tooManyScoops({
    flavor: "Vanilla",
    scoops: 8,
    sauce: "Caramel",
    nuts: true,
    whippedCream: true,
  })
);

interface Sundae extends IceCream {
  sauce: "Chocolate" | "Caramel" | "Strawberry";
  nuts: boolean;
  whippedCream: boolean;
  instructions?: boolean;
}

let myIceCream: Sundae = {
  flavor: "Vanilla",
  scoops: 2,
  sauce: "Caramel",
  nuts: true,
};
