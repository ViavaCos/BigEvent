var admin = {
    /**
     * 管理员登录功能
     * @param {*} userName 用户名
     * @param {*} password 密码
     * @param {*} callBack 回调函数
     */
    login: function (userName, password, callBack) {
        $.post(URLList.adminLogin, {
            user_name: userName,
            password: password
        }, function (res) {
            // console.log(res);

            callBack(res);
        })
    },

    logout: function (callBack) {
        $.post(URLList.adminLogout, function () {
            callBack();
        });
    },

    getInfo: function (callBack) {
        $.get(URLList.getAdminInfo, function (res) {
            callBack(res);
        })
    },

    getUserInfo: function (callBack) {
        $.get(URLList.getUserInfo, function (res) {
            callBack(res);
        })
    },

    setUserInfo: function (fd, callBack) {
        $.ajax({
            url: URLList.setUserInfo,
            type: 'post',
            processData: false,
            contentType: false,
            data: fd,
            success: function (res) {
                callBack(res);
            }
        })
    }
}