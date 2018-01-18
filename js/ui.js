//Button bar scroll event
var basic   = $("#contentsPart").children().attr('class');
var company = $("#contentsPart").children().eq(1).attr('class');
var product = $("#contentsPart").children().eq(2).attr('class');
var customer= $("#contentsPart").children().eq(3).attr('class');
var cowork  = $("#contentsPart").children().eq(4).attr('class');

var basicP   =$("." + basic).offset().top ;
var companyP =$("." + company).offset().top;
var productP =$("." + product).offset().top;
var customerP=$("." + customer).offset().top;
var coworkP  =$("." + cowork).offset().top;


function cowork_click()
{
  console.log(coworkP);
  $('.contentsArea').animate({
    scrollTop: coworkP -100
  },800);
  return false;
};
function customer_click()
{
  $('.contentsArea').animate({
    scrollTop: customerP -100
  },800);
  return false;

};
function product_click()
{
  $('.contentsArea').animate({
    scrollTop: productP -100
  },800);
  return false;

};

function company_click()
{
  $('.contentsArea').animate({
    scrollTop: companyP -100
  },800);
  return false;
};

function logo_click()
{
  $('.contentsArea').animate({
    scrollTop: basicP -100
  },800);
  return false;
}


/*image slide*/
var directionX = [
  $(".basicArea").children().eq(0).attr('class'),
  $(".basicArea").children().eq(1).attr('class'),
  $(".basicArea").children().eq(2).attr('class'),
  $(".basicArea").children().eq(3).attr('class'),
];

imageSlideShow();
/*
setTimeout(function(){
  alert("Test");
}, 3000);
*/
var index =1;
setInterval(function(){
  console.log(index);
if(index > directionX.length)
{
  $("#img"+(index-1)).css("display","none");
  index =1;
  $("#img"+index).css("display","block");
  index++;
}else{

  if((index-1)==0)
  {
    $("#img"+index).css("display","block");
    index++;
  }else{
    $("#img"+(index-1)).css("display","none");
    $("#img"+index).css("display","block");
    index++;
  }
}

},1500);

console.log(directionX.length);
function imageSlideShow(){
  var i;

  //image display : none
  for(i=0; i<directionX.length;i++)
  {
    $("."+directionX[i]).css("display", "none");
  }

};

//LeftSide bar
$("#showLeft_side").click(function(){
  if($("div").hasClass("leftSideBar") == true)
  {
    $(".leftSideBar").toggle('slide',{direction:'left'},500);
  }
});

/*leftsidebar button toggle*/
$(".leftSideBar").click(function(){
    $(".leftSideBar").toggle('slide',{direction:'left'},500);
});



//tob bar 버튼 block의 상태가 display none이 아니면, left side bar의 상태를 none으로 하고 refresh
$(window).resize(function(){

  //top bar의 block이 none이냐 아니냐.
  console.log($("#tMenu").css("display"));
  if($("#tMenu").css("display") != "none")
  {
    $("#sideBar").css("display","none");
  }

});

//left side bar : onclick
function leftCompany()
{
  $(".leftSideBar").toggle('slide',{direction:'left'},500);
  company_click();
}

function leftCustomer()
{
  $(".leftSideBar").toggle('slide',{direction:'left'},500);
  customer_click();
}

function leftCowork()
{
  $(".leftSideBar").toggle('slide',{direction:'left'},500);
  cowork_click();
}

function leftProduct()
{
  $(".leftSideBar").toggle('slide',{direction:'left'},500);
  product_click();
}

/*introduce company*/
//text 배열에 저장해서 하나씩 한씩 꺼내자
var CMotto = [
  $(".companyArea").children().eq(0).attr('class'),
  $(".companyArea").children().eq(1).attr('class'),
  $(".companyArea").children().eq(2).attr('class'),
];
console.log("CMotto Length:" + CMotto.length);
var tIndex =1;
setInterval(function(){

  if(tIndex > CMotto.length)
  {
    $("#m"+(tIndex-1)).css("display","none");
    tIndex =1;
    $("#m"+tIndex).css("display","block");
    tIndex++;
  }else{

    if((tIndex-1)==0)
    {
      $("#m"+tIndex).css("display","block");
      tIndex++;
    }else{
      $("#m"+(tIndex-1)).css("display","none");
      $("#m"+tIndex).css("display","block");
      tIndex++;
    }
  }
}, 2000);

/*social icon button*/
function facebookBtn()
{
  location.href ="https://www.facebook.com/PayPulse-329287240907481/?modal=admin_todo_tour";
}

function githubBtn()
{
  location.href ="https://github.com/paypulse";
}

function blogBtn()
{
  location.href ="https://paypulse.github.io";
}

/*Loading Bar*/
var LoadVar;
function loadFunction()
{
  $(".loadingContain").css("display","block");
  loadVar = setTimeout(showPage,800);
}
function showPage()
{
  $(".loadingContain").css("display","none");
}

/*google map*/
function initMap(){
  //create a map object and the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {center:{lat:37.5602913, lng:126.9934309},zoom:18});
}


$('#inputName').click(function(){
  $(this).val("");
});

$('#inputEmail').click(function(){
  $(this).val("");
});

/*formspree : to send email*/
$('#content-form').submit(function(e){
  var user_name = $('#inputName').val();
  var user_email= $('#inputEmail').val();
  var user_message = $('#inputMessage').val();
  var checkEmail = user_email.indexOf('@');

  if(user_name == "" || user_email == "")
  {
    $("#inputName").css("color","red");
    $('#inputName').val("이름을 입력 하세요.");
    $('#inputName').click(function(){
      $(this).val("");
      $("#inputName").css("color","#001640");
    });

    $('#inputEmail').css("color","red");
    $('#inputEmail').val("이메일을 입력 하세요.");
    $('#inputEmail').click(function(){
      $(this).val("");
      $("#inputEmail").css("color", "#001640");
    });

    return false;
  }

  if(checkEmail == -1)
  {
    alertify.alert("정확한 email이 아닙니다. ");
    $('#inputEmail').css("color","red");
    $('#inputEmail').val("이메일을 다시 입력하세요.");
    $('#inputEmail').click(function(){
      $(this).val("");
      $("#inputEmail").css("color", "#001640");
    });
    return false;
  }else{
    $.ajax({
      url:"https://formspree.io/shinapp7@gmail.com",
      method:"POST",
      //data:{message:$(this).serialize()},
      data:$("#inputMessage").serialize(),
      dataType:"json"
    });
    e.preventDefault()
    $(this).get(0).reset()
    alertify.alert("소중한 의견 감사합니다.");
  }
});

/*product button event*/
function mr9270s(){
  location.href ="Product1.html";
}

/*corwork area*/
$("#coImg1").click(function(){
  $("#coMainImg").attr('src','img/cowork1.png');
});
$("#coImg2").click(function(){
  $("#coMainImg").attr('src','img/cowork2.png');
});
$("#coImg3").click(function(){
  $("#coMainImg").attr('src','img/cowork3.png');
});
$("#coImg4").click(function(){
  $("#coMainImg").attr('src','img/cowork4.png');
});

function cleqee()
{
  location.href ="cleeque.html";
}
