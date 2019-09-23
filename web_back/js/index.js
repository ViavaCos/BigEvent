// 获取管理员账户信息
$(function () {
    admin.getInfo(function (res) {
        // console.log(res);

        if (res.code == 200) {
            $('#nikename').text(res.data.nickname);
            $('.adminImg').prop('src', res.data.user_pic);
        }
    })
})