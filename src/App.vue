<template>
  {{ filter }}
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <ContainerView
    :postData="postData"
    :step="step"
    :url="url"
    @write="writePost = $event"
  />

  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input
        @change="upload"
        multiple
        accept="image/*"
        type="file"
        id="file"
        class="inputFile"
      />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!-- 탭UI -->
  <!-- <div v-if="step === 0">내용0</div>
  <div v-if="step === 1">내용1</div>
  <div v-if="step === 2">내용2</div>
  <button @click="step = 0">버튼0</button>
  <button @click="step = 1">버튼1</button>
  <button @click="step = 2">버튼2</button> -->
</template>

<script>
import ContainerView from "./components/ContainerView.vue";
import postData from "./assets/data/postData.js";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      writePost: "",
      step: 0,
      clickBtn: 0,
      postData: postData,
      url: "",
      filter: "",
    };
  },
  mounted() {
    this.emitter.on("작명", (a) => {
      this.filter = a;
    });
  },
  components: {
    ContainerView,
  },
  methods: {
    more() {
      // axios.post('URL', {name: 'kim'}).then().catch((err)=>{
      //   err
      // })
      axios
        .get(`https://codingapple1.github.io/vue/more${this.clickBtn}.json`)
        .then((result) => {
          this.postData.push(result.data);
          this.clickBtn++;
        });
    },
    upload(e) {
      let file = e.target.files;
      console.log(file[0].type);
      let url = URL.createObjectURL(file[0]);
      console.log(url);
      this.step = 1;
      this.url = url;
    },
    publish() {
      let myPost = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.url,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.writePost,
        filter: "perpetua",
      };
      this.postData.unshift(myPost);
      this.step = 0;
    },
  },
};
</script>

<style>
@import url(style.css);
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
  overflow: hidden;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputFile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
</style>
