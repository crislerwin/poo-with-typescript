import prompt from "prompt-sync";
export class Personagem {
  constructor(
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number
  ) {}
}

let Pegasus: Personagem = new Personagem("Pegasus Fantasy", 100, 40, 20, 20);

let keyboard = prompt();
let option: number = 0;

while (option != 9) {
  console.log("+========= Personagem =============+");
  console.log("|1. Treinar ataque                 |");
  console.log("|2. Treinar defesa                 |");
  console.log("|3. Imprimir atributos             |");
  console.log("|9. Sair                           |");
  console.log("+================================== +");

  option = +keyboard("Escolha uma ação ");

  switch (option) {
    case 1:
      Pegasus.ataque += 2;
      break;
    case 3:
      console.log("Pegasus :>> ", Pegasus);
      break;
    default:
      break;
  }
}
