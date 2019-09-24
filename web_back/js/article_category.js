// 封装点击编辑的函数
function editTr(obj) {
    $('#tips').hide();
    $('#category-name').val(obj.name);
    $('#category-slug').val(obj.slug);

    type.name = '编辑';
    type.id = obj.id;
}

var delID;

// 封装页面点击删除调用的函数，需要放在入口函数外，否则提示未定义
function deleteTr(id) {
    $('#myModal').modal('show');
    delID = id;
}

// 写在函数内，会导致事件被叠加绑定
$('#exit').click(function () {
    category.delete(delID, function (res) {
        // console.log(res);
        categoryQuery();
        $('#myModal').modal('hide');
    })
})

// 封装页面查询功能
function categoryQuery() {
    category.query(function (res) {
        // console.log(res);
        if (res.code === 200) {
            // var htmlStr = template('tmp', res);
            // $('#categoryWrapper tbody').html(htmlStr);
            // console.log(htmlStr);

            // 利用模板引擎，将数据和模板渲染成html结构
            $('#categoryWrapper tbody').html(template('tmp', res));
        }
    })
}
// 定义一个公共对象
var type = {};

$(function () {
    // 页面载入后获取服务器类别
    categoryQuery();

    // 点击新增分类清空表单内数据
    $('#addNew').click(function () {
        $('#tips').hide();
        $('#category-name').val('');
        $('#category-slug').val('')
        $('#addModal .modal-title').html('新增分类名称');
        $('#addModal #model_add').html('新增');
        type.name = '新增';
    })

    // 设置新增类别功能
    $('#model_add').click(function () {
        // alert(1);
        var name = $('#category-name').val();
        var slug = $('#category-slug').val();

        // console.log(name, slug);

        if (type.name === '新增') {
            category.add(name, slug, function (res) {
                // console.log(res);
                if (res.code === 200) {
                    categoryQuery();
                    $('#addModal').modal('hide');
                    $('#category-name').val('');
                    $('#category-slug').val('')
                } else {
                    $('#tips').show().text(res.msg);
                }
            })
        } else {
            category.edit(type.id, name, slug, function (res) {
                // console.log(res);
                if (res.code === 200) {
                    categoryQuery();
                    $('#addModal').modal('hide');
                } else {
                    $('#tips').show().text(res.msg);
                }
            })

        }
    })


})