<template>

  <div class="home">
    <el-form label-width="80px" style="width:400px;margin-top:50px;">
      <el-form-item label="博文标题">
        <el-input v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="博文图片">
        <div class="input_wrap">
          <input type="file" @change="handleChange" />
          <img :src="img" />
        </div>
      </el-form-item>
    </el-form>
    <h3>wangEditor with vue</h3>
    <div id="demo1"></div>
    <button type="button" class="btn" @click="getEditorData">获取当前内容</button>
  </div>
</template>

<script>
// 引入 wangEditor
import Qs from "qs";
import axios from "axios";
import wangEditor from "wangeditor";
export default {
  data() {
    return {
      editor: null,
      editorData: "",
      title: "",
      img: ""
    };
  },
  mounted() {
    const editor = new wangEditor(`#demo1`);
    // 配置 onchange 回调函数，将数据同步到 vue 中
    editor.config.onchange = newHtml => {
      this.editorData = newHtml;
    };
    // 创建编辑器
    editor.create();
    this.editor = editor;
  },
  methods: {
    getEditorData() {
      // 通过代码获取编辑器内容
      let data = this.editor.txt.html();
      alert(data);
    },
    handleChange(e) {
      let file = event.target.files[0];
      let formData = new FormData();
      formData.append("file", file);
      var config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      axios.post("http://localhost:80/?method=login", formData, config).then(res => {

        });
    }
  }
};
</script>

<style lang="scss">
.home {
  width: 1200px;
  margin: auto;
  position: relative;

  h3 {
    margin: 30px 0 15px;
  }
}
.input_wrap {
  position: relative;
  width: 180px;
  height: 180px;
  line-height: 180px;
  text-align: center;
  color: #888;
  cursor: pointer;
  overflow: hidden;
  font-size: 0.35em;
  border-radius: 0.2em;
  background: #fafafa;
  display: block;
  border: 1px dashed #d9d9d9;
  img {
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    position: absolute;
    z-index: 1;
  }
  input {
    display: block;
    opacity: 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    cursor: pointer;
  }
}
.input_wrap::before {
  content: "+";
  font-size: 40px;
  font-weight: lighter;
}
.input_wrap:hover {
  border: 1px dashed #409eff;
}
</style>