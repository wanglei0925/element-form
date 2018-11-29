<template>
  <div style="width:460px;margin:0 auto;">
    <!-- <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="活动名称" prop="name">
        <el-input type="password" v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.date1"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker
              type="fixed-time"
              placeholder="选择时间"
              v-model="ruleForm.date2"
              style="width: 100%;"
            ></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>-->
    <el-form
      :model="dynamicValidateForm"
      ref="dynamicValidateForm"
      label-width="100px"
      class="demo-dynamic"
    >
      <el-form-item
        prop="email"
        label="邮箱"
        :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
      >
        <el-input v-model="dynamicValidateForm.email"></el-input>
      </el-form-item>
      <el-form-item
        v-for="(domain, index) in dynamicValidateForm.domains"
        :label="'域名' + index"
        :key="domain.key"
        :prop="'domains.' + index + '.value'"
        :rules="[{
      required: true, message: '域名不能为空', trigger: 'blur'
    },
    {
      validator: validateDomain
    }]"
      >
        <el-input v-model="domain.value"></el-input>
        <el-button @click.prevent="removeDomain(domain)">删除</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
        <el-button @click="addDomain">新增域名</el-button>
        <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      dynamicValidateForm: {
        domains: [
          {
            value: ""
          }
        ],
        email: ""
      }
    };
  },
  methods: {
    validateDomain(rule, value, callback) {
      var test1 = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
      if (!test1.test(value)) {
         callback(new Error("请不要输入中文大小写字母和数字之外的字符"));
      }
      // else{
      //   this.$refs.dynamicValidateForm.validateField("email");
      // }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now()
      });
    }
  }
};

// export default {
//   data() {
//     var validatePass = (rule, value, callback) => {
//       if (value === "") {
//         callback(new Error("请输入密码"));
//       } else {
//         if (this.ruleForm.checkPass !== "") {
//           this.$refs.ruleForm.validateField("checkPass");
//         }
//         callback();
//       }
//     };
//     var validatePass2 = (rule, value, callback) => {
//       if (value === "") {
//         callback(new Error("请再次输入密码"));
//       } else if (value !== this.ruleForm.pass) {
//         callback(new Error("两次输入密码不一致!"));
//       } else {
//         callback();
//       }
//     };
//     return {
//       ruleForm: {
//         name: "",
//         region: "",
//         date1: "",
//         date2: "",
//         delivery: false,
//         type: [],
//         resource: "",
//         desc: "",
//         password: "",
//         checkPass: ""
//       },
//       rules: {
//         password: [{ validator: validatePass, trigger: "blur" }],
//         checkPass: [{ validator: validatePass2, trigger: "blur" }],
//         name: [
//           { required: true, message: "请输入活动名称", trigger: "blur" },
//           { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
//         ],
//         region: [
//           { required: true, message: "请选择活动区域", trigger: "change" }
//         ],
//         date1: [
//           {
//             type: "date",
//             required: true,
//             message: "请选择日期",
//             trigger: "change"
//           }
//         ],
//         date2: [
//           {
//             type: "date",
//             required: true,
//             message: "请选择时间",
//             trigger: "change"
//           }
//         ],
//         type: [
//           {
//             type: "array",
//             required: true,
//             message: "请至少选择一个活动性质",
//             trigger: "change"
//           }
//         ],
//         resource: [
//           { required: true, message: "请选择活动资源", trigger: "change" }
//         ],
//         desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
//       }
//     };
//   },
//   methods: {
//     submitForm(formName) {
//       this.$refs[formName].validate(valid => {
//         if (valid) {
//           alert("submit!");
//         } else {
//           console.log("error submit!!");
//           return false;
//         }
//       });
//     },
//     resetForm(formName) {
//       this.$refs[formName].resetFields();
//     }
//   }
// };
</script>

