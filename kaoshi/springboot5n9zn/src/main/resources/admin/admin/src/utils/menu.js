const menu = {
    list() {
        return [{
            "backMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-copy",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "学生",
                    "menuJump": "列表",
                    "tableName": "xuesheng"
                }],
                "menu": "学生管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-keyboard",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "教师",
                    "menuJump": "列表",
                    "tableName": "jiaoshi"
                }],
                "menu": "教师管理"
            },
                {
                    "child": [{
                        "allButtons": ["新增", "查看", "修改", "删除"],
                        "appFrontIcon": "cuIcon-rank",
                        "buttons": ["新增", "查看", "修改", "删除"],
                        "menu": "论坛管理",
                        "tableName": "forum"
                    }],
                    "menu": "论坛管理"
                },
                {
                "child": [{
                    "appFrontIcon": "cuIcon-camera",
                    "buttons": ["新增", "查看", "修改", "删除", "审核", "准考证"],
                    "menu": "考试报名",
                    "menuJump": "列表",
                    "tableName": "kaoshibaoming"
                }],
                "menu": "考试报名管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-paint",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "考试信息",
                    "menuJump": "列表",
                    "tableName": "kaoshixinxi"
                }],
                "menu": "考试信息管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-album",
                    "buttons": ["新增", "查看", "修改", "删除", "考试成绩"],
                    "menu": "准考证",
                    "menuJump": "列表",
                    "tableName": "zhunkaozheng"
                }],
                "menu": "准考证管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-circle",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "考试成绩",
                    "menuJump": "列表",
                    "tableName": "kaoshichengji"
                }],
                "menu": "考试成绩管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-vip",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "新闻资讯",
                    "tableName": "news"
                }, {
                    "appFrontIcon": "cuIcon-flashlightopen",
                    "buttons": ["查看", "修改"],
                    "menu": "关于我们",
                    "tableName": "aboutus"
                }, {
                    "appFrontIcon": "cuIcon-phone",
                    "buttons": ["查看", "修改"],
                    "menu": "系统简介",
                    "tableName": "systemintro"
                }, {
                    "appFrontIcon": "cuIcon-goodsnew",
                    "buttons": ["新增", "查看", "修改", "删除"],
                    "menu": "轮播图管理",
                    "tableName": "config"
                }],
                "menu": "系统管理"
            }],
            "frontMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-album",
                    "buttons": ["查看", "考试报名"],
                    "menu": "考试信息列表",
                    "menuJump": "列表",
                    "tableName": "kaoshixinxi"
                }],
                "menu": "考试信息模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "否",
            "hasFrontLogin": "否",
            "hasFrontRegister": "否",
            "roleName": "管理员",
            "tableName": "users"
        }, {
            "backMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-camera",
                    "buttons": ["查看", "支付"],
                    "menu": "考试报名",
                    "menuJump": "列表",
                    "tableName": "kaoshibaoming"
                }],
                "menu": "考试报名管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-album",
                    "buttons": ["查看"],
                    "menu": "准考证",
                    "menuJump": "列表",
                    "tableName": "zhunkaozheng"
                }],
                "menu": "准考证管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-circle",
                    "buttons": ["查看"],
                    "menu": "考试成绩",
                    "menuJump": "列表",
                    "tableName": "kaoshichengji"
                }],
                "menu": "考试成绩管理"
            }],
            "frontMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-album",
                    "buttons": ["查看", "考试报名"],
                    "menu": "考试信息列表",
                    "menuJump": "列表",
                    "tableName": "kaoshixinxi"
                }],
                "menu": "考试信息模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "否",
            "hasFrontLogin": "是",
            "hasFrontRegister": "是",
            "roleName": "学生",
            "tableName": "xuesheng"
        }, {
            "backMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-camera",
                    "buttons": ["查看", "审核", "准考证"],
                    "menu": "考试报名",
                    "menuJump": "列表",
                    "tableName": "kaoshibaoming"
                }],
                "menu": "考试报名管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-paint",
                    "buttons": ["查看"],
                    "menu": "考试信息",
                    "menuJump": "列表",
                    "tableName": "kaoshixinxi"
                }],
                "menu": "考试信息管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-album",
                    "buttons": ["查看", "考试成绩"],
                    "menu": "准考证",
                    "menuJump": "列表",
                    "tableName": "zhunkaozheng"
                }],
                "menu": "准考证管理"
            }, {
                "child": [{
                    "appFrontIcon": "cuIcon-circle",
                    "buttons": ["查看", "修改", "删除"],
                    "menu": "考试成绩",
                    "menuJump": "列表",
                    "tableName": "kaoshichengji"
                }],
                "menu": "考试成绩管理"
            }],
            "frontMenu": [{
                "child": [{
                    "appFrontIcon": "cuIcon-album",
                    "buttons": ["查看", "考试报名"],
                    "menu": "考试信息列表",
                    "menuJump": "列表",
                    "tableName": "kaoshixinxi"
                }],
                "menu": "考试信息模块"
            }],
            "hasBackLogin": "是",
            "hasBackRegister": "是",
            "hasFrontLogin": "否",
            "hasFrontRegister": "否",
            "roleName": "教师",
            "tableName": "jiaoshi"
        }]
    }
}
export default menu;
