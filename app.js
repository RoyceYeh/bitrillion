$(document).ready(() => {
        $(".hamBar").click(function (e) {
          
          //避免 a 標籤會觸發
          e.preventDefault();
          //觸發展開收起來
            $(".menu ul").toggleClass("show");

            $("nav .btn_group").toggleClass("show");

        });
        
});
      

