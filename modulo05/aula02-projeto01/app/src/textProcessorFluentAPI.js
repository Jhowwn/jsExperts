// o objetivo do Fluent Api é executar tarefas
// como um pipeline, steb by step
// e no fim, chama o build. Muito similar ao padrao Builder
// a diferença que aqui é sobre processo, o Builder sobre construcao
// de objetos
class TextProcessorFluentAPI {
  // proprieda privada!
  #content
  constructor(content) {
    this.#content = content;
  }

  extractPeopleData() {
    // ?<= fala que vai extrair os dados que virao depois desse grupo
    // [contratante|contratada] ou um ou outro, (e tem a flag no fim da expressa para pegar maiusculo e minusculo)
    // :\s{1} vai procurar o caracter literal do dois pontos seguindo de um espaco
    // tudo acima fica dentro de um paranteses para falar "vamos pegar daí para frente"

    // (?!s) negative look around, vai ignorar os contratantes do fim do documento (que tem só espaco a frente deles)
    // .*\n pega qualquer coisa até o primeiro \n
    // .*? non greety, esse ? faz com que ele pare na primeira recorrencia, assim ele evita ficar em loop

    // $ informa que a pesquisa acaba no fim da linha
    // g -> global
    // m -> multiline
    // i -> insensitive

    const matchPerson = /(?<=[contratante|contratada]:\s{1})(?!\s)(.*\n.*?)$/gmi
    // faz o match para encontrar a string inteira que contém os dados que precisamos
    const onlyPerson = this.#content.match(matchPerson)
    // console.log('only person', matchPerson.test(this.#content))
    this.#content = onlyPerson
    return this
  }

  build() {
    return this.#content
  }
}

module.exports = TextProcessorFluentAPI