<template>
  <div v-show="showTable">
    <el-form label-width="500px">
      <el-form-item label="用户名">
        <el-input size="small" style="width: 200px" v-model="editForm.userName" auto-complete="off" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input size="small" style="width: 200px" v-model="editForm.password" auto-complete="off" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="角色">
        <el-select size="small" style="width: 200px" v-model="editForm.roleId" placeholer="请选择角色">
          <el-option label="公司管理员" value="1"></el-option>
          <el-option label="公司管理员" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio v-model="editForm.gender" label="1">男</el-radio>
        <el-radio v-model="editForm.gender" label="2">女</el-radio>
        <el-radio v-model="editForm.gender" label="3">其他</el-radio>
      </el-form-item>
      <el-form-item class="demonstration" label="生日">
        <el-time-picker size="small" type="date" style="width: 200px" v-model="editForm.date" :picker-options="pickerOps1" placeholder="生日"></el-time-picker>
      </el-form-item>
      <el-form-item>
        <el-image-viewer v-if="showImg" :on-close="closeViewer" :url-list="[url]"></el-image-viewer>
      </el-form-item>
      <el-form-item label="头像">
        <el-image :src="url" style="width: 100px"></el-image>
      </el-form-item>
      <el-form-item label="上传文件">
        <el-upload action="/ditto/api/upload"
                   :show-file-list="false"
                   :accept="'image/*'"
                   :on-success="handleSuccess"
                   :on-error="handleError"
                   :before-upload="handleBeforeUpload"
                   :on-progress="handleProgress">
          <el-button type="primary" size="medium">点击上传</el-button>
        </el-upload>
      </el-form-item>
      <!--
        action: 图片上传的地址
        show-file-list: 是否显示文件上传列表
        accept: 可接受的上传类型，image/*为图片
        headers: 头部信息
        on-success: 上传成功事件
        on-error: 上传失败事件
        before-upload: 上传前处理事件，返回一个值，值为false将阻止上传
        on-progress: 上传中事件
  -->
      <el-form-item>
        <el-button size="small" type="primary" @click="sendData">确定</el-button>
        <el-button size="small" type="primary" @click="cancel">取消</el-button>
        <el-button size="small" type="primary" @click="preImg">预览</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import ElImageViewer from "element-ui/packages/image/src/image-viewer";
  export default {
    name: "TestForm2",
    components: {ElImageViewer},
    data(){
      return {
        editForm:{},
        showTable: true,
        showImg: false,
        url: '/static/banner/1.jpg',
        pickerOps1: {
          disabledDate (time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick (picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick (picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date); //子组件触发父组件的事件
            }
          }, {
            text: '一周前',
            onClick (picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
      }
    },
    methods: {
      sendData: function () {
        let _this = this;
        this.$axios.get("/ditto/api/queryInfo?Id=10", {params: this.editForm})
          .then((response) => {
            // console.log(this.editForm)
            console.log(_this.editForm);
            console.log(_this.editForm.roleId);
            console.log(response.data);
          });
      },
      cancel: function () {
        this.showTable = false;
      },
      preImg:function () {
        this.showImg = true;
      },
      closeViewer: function () {
        this.showImg = false;
      },
      handleSuccess(response, file, fileList) {
        this.$success("上传成功");
      },
      handleError() {
        this.$error("上传失败,请重新上传图片!");
      },
      handleBeforeUpload(file) {
        const isImage = file.type.includes("image");
        if (!isImage) {
          this.$message.error("上传文件类型必须是图片!");
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error("上传图片大小不能超过 2MB!");
        }
        return isImage && isLt2M;
      },
      handleProgress(event, file, fileList) {
        this.loading = true;  //  上传时执行loading事件
      }
    },
    mounted:function () {
      this.$axios
        .get('/try/ajax/json_demo.json')
        .then(response => {
          console.log(response.status)
        })
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
      /*this.$axios
        .post('/try/ajax/demo_axios_post.php')
        .then(res=>{
          console.log(res)
        })
        .catch(function (error) {
          console.log(error);
        })*/
    }
  }
</script>
