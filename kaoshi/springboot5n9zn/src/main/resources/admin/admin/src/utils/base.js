const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot5n9zn/",
            name: "springboot5n9zn",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot5n9zn/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "考试报名系统"
        } 
    }
}
export default base
