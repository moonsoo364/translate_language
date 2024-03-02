# vue_cli
## 프로젝트 생성
vue-cli를 설치한다.
```
npm install -g @vue/cli
```
원하는 vue project명을 입력하고 생성한다.
```
vue create vue-project
```
개발에 필요한 라이브러리를 선택하고 프로젝트에 설치한다.
```
Vue CLI v5.0.8
? Please pick a preset: (Use arrow keys)
> vue3set ([Vue 3] babel, router, vuex, eslint)
  Default ([Vue 3] babel, eslint)
  Default ([Vue 2] babel, eslint)
  Manually select features
```
# npm run serve
## 명령어 실행
`npm run serve`명령이 실행되면 Webpack은 Vue Project를 Build 하고 http-server를 제공한다. 이 때 http-server가 제공하는 URL은 http://localhost 형식으로 제공된다. http://localhost 는 실제 디렉터리가 아니라 http-server가 선택한 디렉터리이다. 이 디렉터리는 vue project의 dist 디렉터리이다. 
## 예시
예를 들어C:\Users\Admin\Documents\myProject 경로로 Vue Project를 생성했다. `npm run serve` 명령이 실행되면 http-server가 C:\Users\Admin\Documents\myProject\dist 디렉터리로  http://localhost 를 제공한다. 만약 http://localhost/my-custom-sub-folder 와 같이 뒤에 경로를 붙여 나와야하는 경우 `vue.config.js` 에서 다음과 같이 설정 해줘야 한다.
```
module.exports = {
  publicPath: '/my-custom-sub-folder',
};
```
# 프로젝트 시작
터미널 창에서 `npm run serve` 명령어를 실행하면 src 디렉터리 내의 `main.js` 이 실행이 된다.
```
Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        24-03-01  오후 11:47                assets
d-----        24-03-02  오전 12:07                components
d-----        24-03-01  오후 11:52                i18n
d-----        24-03-01  오후 11:09                router
d-----        24-03-02  오전 12:29                views
-a----        24-03-02  오전 12:25            355 App.vue
-a----        24-03-02  오전 12:55            189 main.js
```
## App Instance
`main.js` 에서는 `createApp` 함수를 사용하여 App Instanse를 생성한다.
`createApp` 에 전달하는 객체는 App 전체 컴포넌트의 최상위 컴포넌트다.
```
import { createApp } from 'vue'
import App from './App.vue';
import router from './router';
import i18n from './i18n';

const app = createApp(App);

app.use(i18n).use(router).mount("#app");
```
> `main.js` 에서 사용할 라이브러리의 파일명을 `index.js` 로 지정하면 import 할 때 해당 디렉터리의 파일명을 지정하지 않아도 된다.
## App Mount
App Instanse는 `.monut()` 메서드가 호출될 때 까지 아무 것도 렌더링하지 않는다. 사용할 DOM의 엘리먼트 또는 셀렉터 문자열을 `.moute()` 의 인자로 넘겨주면  해당 DOM 내부에 앱을 마운트한다. 
```
<div id="app"></div>
```
```
app.mount('#app')
```
최상위 컴포넌트 컨텐츠는 컨테이너 엘리먼트 내에서 렌더링되며 컨테이너 엘리먼트 자체는 앱의 일부로 간주되지 않는다. (이 컨테이너는 프로젝트 내 public/index.html 경로에 위치한다.) `.mount()` 메서드는 앱의 환경 설정 및 Asset이 모두 등록이 완료 된 후 호출 되어야 한다.
