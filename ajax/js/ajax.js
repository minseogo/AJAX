$(document).ready(function(){
  $.ajax({
      url : "/ajax/json/data.json",
      type : "GET",
      dataType : "json",

      success : function(data){
          console.log(data, typeof data);
          //JSON.parse(data) > 자바스크립트가 쓸 수 있도록 object로 변경
          let gnbli ="";

          data["menu"].forEach(function(ele, idx){
            console.log(`${idx}번째 데이터는 ${ele}`)
            
          });

          $(".gnb").html()
      
      },
      error : function(a, b, c){
          console.log(a, b, c)
      }
  })
})