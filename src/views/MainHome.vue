<template>
  <div class="content">
    <h1>Current Locale: {{currentLocale}}</h1>
    <p>{{t('named',{msg:'named'})}}</p>
    <p>{{t('list',[msg])}}</p>
    <p>{{t('literal')}}</p>
    <p>{{t('linked')}}</p>
    <button @click="changeLocale">Change</button>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, defineComponent, watch } from 'vue'
import { useI18n } from 'vue-i18n'
export default defineComponent({
  setup() {
    const {t, locale, messages  } = useI18n({
      locale: 'en',
      messages: {
        en: {
          msg: 'hello',
          named: '{msg} world!',
          list: '{0} world!',
          literal: "{'hello'} world!",
          the_world: 'the world',
          dio: 'DIO:',
          linked: '@:dio @:the_world !!!!'
        },
        ko: {
          msg: '안녕하세요',
          named: '{msg} 여러분！',
          list: '{0} 여러분！',
          literal: "{'안녕하세요'} 여러분!",
          the_world: '여러분',
          dio: '디오:',
          linked: '@:dio @:the_world !!!!'
        }
      }
    })

    const currentLocale = ref(locale.value)

    watch(locale, (newVal) => {
      currentLocale.value = newVal
    })

    const changeLocale = () => {
      
      locale.value = currentLocale.value === 'en' ? 'ko' : 'en'
    }

    onMounted(() => {
      console.log('Component mounted')
    })

    onUnmounted(() => {
      console.log('Component unmounted')
    })

    return {t,currentLocale,messages,changeLocale};
  },
})


</script>

<style scoped>

</style>
