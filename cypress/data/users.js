function User(
  first,
  last,
  company,
  mobile,
  cpf,
  birth,
  where,
  sell,
  email,
  password,
  CEPcode,
  address,
  number,
  district,
  city,
  state
) {
  this.firstName = first;
  this.lastName = last;
  this.companyName = company;
  this.mobilephone = mobile;
  this.cpf = cpf;
  this.birthdate = birth;
  this.where_do_you_sell = where;
  this.sell_numbers = sell;
  this.email = email;
  this.password = password;
  this.CEP = CEPcode;
  this.address = address;
  this.number = number;
  this.district = district;
  this.city = city;
  this.state = state;
}

const faker = require("faker");
const CPF = require("cpf");
const where_do_you_sell = [
  "Ainda não vendo online",
  "Redes Sociais e/ou Whatsapp",
  "Loja virtual em plataforma de e-commerce",
  "Loja virtual de desenvolvimento próprio",
  "Marketplaces",
];
const sell_numbers = [
  "Ainda não vendo online",
  "1-10 vendas",
  "11-50 vendas",
  "51-100 vendas",
  "101-300 vendas",
  "Mais de 300 vendas",
];

const randomUser1 = new User(
  faker.name.firstName(),
  faker.name.lastName(),
  faker.company.companyName(),
  faker.phone.phoneNumber("559########"),
  CPF.generate(false),
  "01011990",
  where_do_you_sell[Math.floor(Math.random() * where_do_you_sell.length)],
  sell_numbers[Math.floor(Math.random() * sell_numbers.length)],
  faker.internet.email(),
  faker.internet.password(),
  "96055710",
  "Avenida República Do Líbano",
  "849",
  "Três Vendas",
  "Pelotas",
  "Rio Grande do Sul"
);
const randomUser2 = new User(
  faker.name.firstName(),
  faker.name.lastName(),
  faker.company.companyName(),
  faker.phone.phoneNumber("559########"),
  CPF.generate(false),
  "01011990",
  where_do_you_sell[Math.floor(Math.random() * where_do_you_sell.length)],
  sell_numbers[Math.floor(Math.random() * sell_numbers.length)],
  faker.internet.email(),
  faker.internet.password(),
  "96055710",
  "Avenida República Do Líbano",
  "849",
  "Três Vendas",
  "Pelotas",
  "Rio Grande do Sul"
);

module.exports = {
  randomUser1,
  randomUser2,
};
