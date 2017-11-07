define(['jquery','template','./utils'],function($,template){
    // console.log(location.search);
    var size=2;
    var reg=/\?[a-z]+=(\d+)/;

    var search=location.search || '';
    //当前页
    var page=reg.exec(search) && reg.exec(search)[1];
    page=page || 1;
  


    $.ajax({
        url:'/api/product/queryProductDetailList',
        type:'get',
        data:{page:page,pageSize:2},
        success:function(info){
            // console.log(info);
            //总条数
           var total=info.total;
           //总页数
           var pageLen=Math.ceil(total/size);
                  
           var html = template('tpl',info);
           $('.goods').html(html);

           var pagehtml=template('page',{
               pageLen:pageLen,
               page:page
           })
           $('.pagination').html(pagehtml);

        }
    })
})