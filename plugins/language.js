export default (context, inject) => {
  inject('tt', (tm, en, ru) => {
    if (context.app.i18n.locale === 'tm') return tm
    else if(context.app.i18n.locale === 'en') return en
    return ru
  })
}
