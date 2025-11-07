// Soru5.ts

type User = {
  id: number;
  name: string;
};

const users: User[] = [
  { id: 1, name: "Ahmet" },
  { id: 2, name: "Mehmet" },
  { id: 3, name: "Ali" }
];

// Overload Signature'lar
function search(id: number): User | undefined;
function search(name: string): User[];

// Implementasyon
function search(arg: number | string): User | User[] | undefined {
  if (typeof arg === "number") {
    return users.find(user => user.id === arg);
  } else {
    return users.filter(user => user.name === arg);
  }
}

console.log(search(2));      // { id: 2, name: "Mehmet" }
console.log(search("Ali"));  // [{ id: 1, name: "Ahmet" }, { id: 3, name: "Ali" }]
