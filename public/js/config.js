  //公共配置
  require.config({
        baseUrl:'/public',
        paths:{
            jquery:'assets/jquery/jquery.min',
            template:'assets/artTemplate/template-web',
            uploadify:'assets/uploadify/jquery.uploadify.min'
        },
        shim: {
            uploadify: {
                deps: ['jquery']
            }
        }    
    })

    
