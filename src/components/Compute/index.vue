<template>
  <div v-if="!signFlg" @click="handleLogin">index1</div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { userApi } from "@/api/user";
import axios from "axios";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["signFlg"])
  },
  methods: {
        handleLogin() {
            var fd = new FormData();
            fd.append("username", 'xss');
            fd.append("password", '123456');
            let That = this;
            axios
            .post(process.env.API_ROOT_URL + "login", fd, { 
              headers: {
                "Content-Type": "multipart/form-data"
              }
            })
            .then(res => {
              if (res.data.code == 200) {
                // this.$message.success("登录成功");
                sessionStorage.setItem('userId',res.data.data.id);
                sessionStorage.setItem('Operator',this.username);
                this.getMenu();
                const loading = this.$loading({
                    lock: true,
                    text: "登陆中...",
                    spinner: "el-icon-loading",
                    background: "rgba(255, 255, 255, 0.7)"
                });
                setTimeout(() => {
                    loading.close();
                  
                }, 500);
              } else {
                this.$message.error(res.data.msg);
              }
            })
            .catch(function(error) {});
        },

        getMenu() {
            const userId = sessionStorage.getItem('userId');
            const params = {
          	    userId:userId
            }
            let That = this;
            userApi.getMenu(params).then(res => {
              console.log(res)
            }).catch(() => {});
        }
  },
  mounted() {
  }
};
</script>

