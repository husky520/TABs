
(function () {

    // 构造类
    var Tab = function (target) {
        // 保存 this (Tab) , 防止方法调用时改变了 this
        var $this = this;
        console.log(this);

        this.target = target;

        // 属性 参数
        this.config = {
            'event'    : 'click',      // 触发事件类型
            'effect'   : 'default',    // 切换效果
            'position' : 1,            // 初始标签位置
            'autoPlay' : false         // 自动轮播
        };
        
        // 导航
        this.tabNav = this.target.find('.tab-list>li');
        // 内容
        this.tabContent = this.target.find('.tab-content>div');

        // 计数器
        this.cout = this.config.position - 1;
        if(this.cout < 0) {this.cout = this.tabNav.length}
        if(this.cout > this.tabNav.length) {this.cout = 0}

        // 配置用户设置参数  并入默认参数
        if(this.getConfig()) {
            jQuery.extend(this.config, this.getConfig());
            console.log(this.config);
        }


        // 绑定事件
        this.tabNav.on(this.config.event, function () {
            $this.change($(this));    // $(this) 返回值是 jQuery 封装的元素, 这样才能调用 jQuery 方法
        });

        
    };


    // 暴露接口
    window.Tab = Tab;


    // 原型链上附加方法
    Tab.prototype = {

        // 获取节点用户配置参数
        getConfig : function () {
            var config = this.target.attr('config');
            if(!config) {return null;}
            return JSON.parse(config);
        },

        // 切换方法
        change : function (current) {
            var index = current.index();
            var effect = this.config.effect;
            // 切换导航激活样式
            current.addClass('tab-list-active').siblings().removeClass('tab-list-active');
            // 显示相应内容
            if (effect === 'default') {
                this.tabContent.eq(index).addClass('tab-content-active').siblings().removeClass('tab-content-active');
            } else {
                this.tabContent.eq(index).fadeIn().siblings().fadeOut();
            }
        },


        // 初始化
        init : function (tabs) {
            var $this = this;
            console.log($this);
            tabs.each(function () {
                new Tab($(this));
            });
        },


        // 自动播放
        auto : function (time) {
            if (time === false) {return;}
            
        }
        
    };

} ());




























// jquery

// 1. 立即执行函数传参jQuery，即可调用jquery？
// 2. bind( ); 绑定事件？
// 3. siblings( ); 兄弟节点？  eg: obj.addClass( ).siblings( ).removeClass( );
// 4. index( ); 求得索引？
// 5. eq( ); 遍历？
// 6. size( ); 类似于obj.length？
// 7. triggle( ); ？？？
// 8. hover( ); ？？？