var now = new Date();
var hour = now.getHours();
if(hour >= 18 || hour<= 6){
    $('head').append('<link href="css/night_css.css" rel="stylesheet" type="text/css" />')
    $(".logo").find("img").attr("src","images/logo_night.png");
    $(".s01").find("img").attr("src","images/n_02.png"); 
    $(".footer_bg").find("img").attr("src","images/jn_04.png");
    $(".line").find("img").attr("src","images/line_blue.png");
    $(".line2").find("img").attr("src","images/line_blue03.png");
    $(".n_icon_bg1").find("img").attr("src","images/mathtsite_5_blue@2x.png");
    $(".n_icon_bg2").find("img").attr("src","images/mathtsite_6_blue@2x.png");

    $(".n_icon_tu1").find("img").attr("src","images/icon_blue2.png");
    $(".n_icon_tu2").find("img").attr("src","images/icon_blue3.png");

    $(".c_img1").find("img").attr("src","images/mathtsite_1_blue@2x.png");
    $(".c_img2").find("img").attr("src","images/mathtsite_2_blue@2x.png");
    $(".c_img3").find("img").attr("src","images/mathtsite_3_blue@2x.png");

    $(".z_night1").find("img").attr("src","images/iocn_a_blue19.png");
    $(".z_night2").find("img").attr("src","images/iocn_a_blue13.png");
    $(".z_night3").find("img").attr("src","images/iocn_a_blue15.png");
    $(".z_night4").find("img").attr("src","images/iocn_a_blue10.png");


     $(".card a").find("img").attr("src","images/cards_night.jpg");


       
} 

$('.navbar-toggle').click(function() {            
        $(this).toggleClass('opened');
        $('nav > .collapse.navbar-collapse').slideToggle();
 })

  
$(".love").click(function(){
      if($(this).find("img").attr("src")=="images/ss.png")
      {
        $(this).find("img").attr("src","images/ss1.png");
      }
      else
      {
        $(this).find("img").attr("src","images/ss.png");
      }
     
    });