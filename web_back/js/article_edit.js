// 获取文章类别
category.query(function (res) {
    // console.log(res);
    $('#categoryContent').html(template('tmp', res));
})

var id = window.location.search.substr(1);

article.query({
    id: id
}, function (res) {
    // console.log(res);
    if (res.code === 200) {
        $('#articleTitle').val(res.data.title);
        $('.article_cover').prop('src', res.data.cover);
        $('#categoryContent').val(res.data.type);
        $('#dateinput').val(res.data.date);
        $('#rich_content').val(res.data.content);
    }
})

$('#saveChange').click(function () {

    var fd = new FormData($('#myform')[0]);
    fd.set('content', tinyMCE.activeEditor.getContent());
    fd.set('id', id);
    // fd.set('date', $("#dateinput").val());
    article.edit(fd, function (res) {
        // console.log(res);
        if (res.code === 200) {
            window.location.href = './article_list.html';
        } else {
            $('#myModal').modal('show');
            $('#tips').text(res.msg);
        }
    })
    console.log($("#dateinput").val());
})