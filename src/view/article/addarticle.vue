<template>
  <div class="home">
    <el-form label-width="80px" style="width:400px;margin-top:50px;">
      <el-form-item label="博文标题">
        <el-input v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="博文图片">
        <el-upload
        class="avatar-uploader"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
       >
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
    </el-form>
    <h3>wangEditor with vue</h3>
    <div id="demo1"></div>
    <button type="button" class="btn" @click="getEditorData">获取当前内容</button>
  </div>
</template>

<script>
// 引入 wangEditor
import wangEditor from "wangeditor";
export default {
  data() {
    return {
      editor: null,
      editorData: "",
      title: "",
      img:'',
      imageUrl: ''
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
     handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
  }
};
</script>

<style lang="scss">
.home {
  width: 1200px;
  margin: auto;
  position: relative;
//   .btn {
//     position: absolute;
//     right: 0;
//     top: 0;
//     padding: 5px 10px;
//     cursor: pointer;
//   }
  h3 {
    margin: 30px 0 15px;
  }
}
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>