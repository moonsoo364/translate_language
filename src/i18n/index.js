import { createI18n } from 'vue-i18n';
let messages = {
    en:{
        message:{
            hello: '{msg} world'
        }
    },
    ko:{
        message:{
            hello:'여러분 {msg}'
        }
    }
}
const i18n = createI18n({
    locale: 'ko',
    fallbackLocale: 'en',
    legacy:false,
    messages
})
export default i18n;