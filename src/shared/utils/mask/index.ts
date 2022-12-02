const maskCep = (value?: string) => {
  value = value?.replace(/\D/g, "");
  value = value?.replace(/^(\d{5})(\d)/, "$1-$2");
  return value;
};

const maskPhone = (value?: string) => {
  value = value?.replace(/\D/g, "");
  value = value?.replace(/^(\d{2})(\d)/g, "($1) $2");
  value = value?.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};

const maskCpf = (cpf?: string) => {
  var num = cpf?.replace(/\D/g, "");
  var len = num?.length;
  if (len) {
    if (len <= 6) {
      return (cpf = num?.replace(/(\d{3})(\d{1,3})/g, "$1.$2"));
    } else if (len <= 9) {
      return (cpf = num?.replace(/(\d{3})(\d{3})(\d{1,3})/g, "$1.$2.$3"));
    } else {
      return (cpf = num?.replace(
        /(\d{3})(\d{3})(\d{3})(\d{1,2})/g,
        "$1.$2.$3-$4"
      ));
    }
  }
};

const maskCnpj = (cnpj: string) => {
  if (!cnpj || cnpj === "") return cnpj;
  return cnpj
    .replace(/\D+/g, "") // não deixa ser digitado nenhuma letra
    .replace(/(\d{2})(\d)/, "$1.$2") // captura 2 grupos de número o primeiro com 2 digitos e o segundo de com 3 digitos, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de número
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2") // captura 2 grupos de número o primeiro e o segundo com 3 digitos, separados por /
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1"); // captura os dois últimos 2 números, com um - antes dos dois números
};

export { maskCep, maskPhone, maskCpf, maskCnpj };
