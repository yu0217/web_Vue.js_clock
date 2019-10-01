var clock = new Vue({
    el:'#time',
    data:{
        hour:'',
        minute:'',
        second:''
    },
    methods:{
        // 自訂方法 : 設定時間
        setClock () {
            // 新增一個日期物件放在 data
            var data = new Date ();
            this.hour = data.getHours();
            this.minute = data.getMinutes();
            this.second = data.getSeconds();
        }
    },
    // 執行 : 會在所有元素顯示後執行
    mounted () {
        // 設定間隔(方法，間隔時間)
        setInterval(this.setClock, 1000);
    }
});