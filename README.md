# vuestagram

<div>
    <h3>Recap</h3>
    <ul>
        <li>html에서 중간에 변수나 데이터 집어넣는 방법
            <ul>
                <li>:style="자바스크립트~~" ex) :style="{ fontSize : '20px', marginTop : '10px' }" 사용</li>
            </ul>
        </li>
        <br>
        <li>ajax를 요청하려면
            <ul>
                <li>1. ajax 라이브러리 사용(npm run axios)
                    <ul>
                        <li>axios.get() / axios.post()로 보내고 요청</li>
                    </ul>
                </li>
                <li>2. 기본 fetch 함수 사용</li>
            </ul>
        </li>
        <br>
        <li>동적 UI 만드는 방법
            <ul>
                <li>1. UI 현재 상태를 데이터로 만들기</li>
                <li>2. 상태에 따라 HTML이 어떻게 보일지 만들기</li>
            </ul>
        </li>
        <br>
        <li>커스텀 이벤트 (자식은 부모의 값을 바꿀 수 없기 때문에 커스텀 이벤트를 사용해야 된다)
            <ul>
                <li>1. 문법은 $emit('작명')</li>
            </ul>
        </li>
        <br>
        <li>slot 문법 (1) (부모->자식 데이터 전송)
            <ul>
                <li>1. 자식에 &lt;slot&gt; &lt;/slot&gt;으로 구멍 뚫기</li>
                <li>2. 부모에 컴포넌트 사이에 데이터 넣기</li>
            </ul>
        </li>
        <li>slot 문법 (2) (부모->자식 데이터 전송)
            <ul>
                <li>1. 슬롯을 여러개 쓰고 싶으면 name이라는 속성 사용 ex(&lt;slot name="a"&gt;)</li>
                <li>2. &lt;template v-slot:a&gt;보낼데이터&lt;/template&gt; => HTMl도 전송가능</li>
            </ul>
        </li>
        <li>slot props 문법
            <ul>
                <li>1. &lt;slot :자식데이터="자식데이터"&gt;</li>
                <li>2. 부모는 &lt;template v-slot:default="작명"&gt;&lt;/template&gt; 하고 {{작명.자식데이터}}</li>
            </ul>
        </li>
        <br>
        <li>멀리 있는 컴포넌트간 데이터전송할 땐 mitt
            <ul>
                <li>1. 설치방법
                    <ul>
                        <li>(1) npm install mitt 설치</li>
                        <li>(2) main.js에 셋팅<br>
                            import mitt from "./mitt";
                            let emitter = mitt();
                            let app = createApp(App);
                            app.config.globalProperties.emitter = emitter;<br>
                            app.config.globalProperties = 글로벌 변수 보관(자주쓰는 라이브러리 등록)
                        </li>
                        <li>(3) this.emit 로 사용 가능</li>
                    </ul>                
                </li>
                <li>2.전송방법
                    <ul>
                        <li>(1) this.emitter.emit('작명', '데이터')로 전송</li>
                        <li>(2) mounted(){}안에 this.emitter.on('작명', ()=>{})으로 수신</li>
                        <li>대량 전송에는 사용 안함 양이 많으면 Vuex로 대체</li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>

</div>

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# vuestagram
