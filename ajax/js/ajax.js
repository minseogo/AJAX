$(document).ready(function(){
  // 문서가 준비되면 함수 내부의 코드가 실행됩니다

  $.ajax({
    url: "/ajax/json/data.json",
    type: "GET",
    dataType: "json",
    /// ajax/json/data.json에서 데이터를 GET 방식으로 가져옵니다

    success: function(data){
      console.log(data, typeof data);
      let gnbli = "";
      // 빈 문자열 gnbli를 초기화합니다

      data["menu"].forEach(function(ele, idx){

        console.log(`${idx}번째 데이터는 ${ele}`);
        // ${idx}번째 데이터는 ${ele} 부분은 각 데이터 항목의 인덱스와 내용을 콘솔에 출력하여,
        // 코드 실행 중 데이터를 쉽게 확인하고 디버깅할 수 있도록 도와줍니다
        // 이는 데이터가 올바르게 처리되고 있는지 확인하기 위해 유용한 도구입니다

        gnbli += `<li>${ele["category"]}`;
        gnbli += `<ul>`;
        // menu 배열을 순회하며 각 메인 카테고리에 대해 <li> 태그를 추가하고, 그 안에 서브 카테고리 목록을 포함하기 위해 <ul> 태그를 엽니다

        ele["subcategories"].forEach(function(subele, subidx){
          gnbli += `<li>${subele["name"]}</li>`;
          // 각 서브 카테고리에 대해 <li> 태그를 추가합니다
          // 서브 카테고리 항목이 <ul> 태그 안에 포함됩니다
        });

        gnbli += `</ul>`;
        gnbli += `</li>`;
        // 서브 카테고리 목록을 닫기 위해 </ul> 태그를 추가합니다
        // 메인 카테고리를 닫기 위해 </li> 태그를 추가합니다
      });

      $(".gnb").html(gnbli);
      // 생성된 HTML 목록을 .gnb 클래스 요소에 삽입하여 표시합니다
    },

    error: function(a, b, c){
      console.log(a, b, c);
    }
  });
});