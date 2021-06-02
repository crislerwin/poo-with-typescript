## Aula Sobre de introdução a classes

## Escrevendo classes

### Exemplo01 - Construtor deve ser passado quando for instanciar o objeto na classe

```typescript
export class Personagem {
  nome: string,
  energia: number,
  vida: number,
  ataque: number,
  defesa: number
}
```

## Exemplo02 - Construtor na Classe

```typescript
export class Personagem {
  nome: string;
  energia: number,
  vida: number,
  ataque: number,
  defesa: number
  // O constructor é usado para definir os atributos que devem ser declarados obrigatoriamente
 constructor (){
     this.nome = nome;
     this.energia = energia
 }
}
```

## Parametros implícitos no constructor na Classe

```typescript
export class Personagem {
  constructor(
    public nome: string,
    public energia: number,
    public vida: number,
    public ataque: number,
    public defesa: number
  ) {}
}
```
