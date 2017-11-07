define(['jquery','template','./utils','uploadify'],function($,template){
    $('form').on('submit',function(){
        var _this = $(this);
        $.ajax({
            url:'/api/product/addProduct',
            type:'post',
            data:_this.serialize(),
            success:function(info){
                if(info.success){
                    alert('添加成功！');
                    location.href='/goods_list.php';
                }
            }

        })
        return false;
    })


    $('#upfile').uploadify({
        buttonText:'',
        width:120,
        height:120,
        fileObjName: 'pic1',
        itemTemplate:'<span></span>',
        swf: '/public/assets/uploadify/uploadify.swf',
        uploader: '/api/product/addProductPic',
        onUploadSuccess:function(file,data){
            var res=JSON.parse(data);
            $('.preview img').attr('src', 'http://localhost:3000' + res.picAddr)

            $('input[name="pic"]').val(res.picAddr);
        }
    });


    $.ajax({
        url:'/api/category/querySecondCategoryPaging',
        type:'get',
        data:{page:1,pageSize:20},
        success:function(info){
            // console.log(info);
            var html=template('brand',info);
            $('.brand').append(html);

        }

    })
})