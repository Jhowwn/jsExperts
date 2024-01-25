export default class Marketing {
    //importante lembrar que o [update] é responsável por gerenciar seus erros/exceptions
    // nao deve-se ter await no notify porque a responsabilidade do notify é só emitir eventos
    // só notificar todo mundo
  update({id, userName}) {
    console.log(`[${id}]: [marketing] will send an welcome email to ${userName}`)
  }
}