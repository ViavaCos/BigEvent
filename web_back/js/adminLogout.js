$('#adminLogout').click(function () {
    // alert(1);
    $('#myModal').modal('show');

    $('#exit').click(function () {
        admin.logout(function () {
            window.location.href = './login.html';
        })
    })


})