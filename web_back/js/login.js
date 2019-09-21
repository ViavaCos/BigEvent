// 为登陆按钮注册点击事件
$('#btnLogin').click(function () {
    // alert(1);

    var userName = $('#userName').val();
    var password = $('#password').val();

    // console.log(userName, password);

    if (userName.trim() === '' || password === '') {
        // alert('用户名或密码不能为空');
        $('#myModal').modal('show');
        $('#tips').text('用户名或密码不能为空!');
    } else {
        admin.login(userName, password, function (res) {
            if (res.code == 200) {
                // alert('登录成功');
                window.location.href = './index.html';
            } else if (res.code == 400) {
                // alert(res.msg);
                $('#myModal').modal('show');
                $('#tips').text(res.msg);
            }
        });
    }
})