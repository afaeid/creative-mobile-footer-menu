var indecetor = document.querySelector('.indecetor')
var home = document.querySelector('.home');
var profile = document.querySelector('.profile');
var message = document.querySelector('.message');
var report = document.querySelector('.report');
var setting = document.querySelector('.setting');

home.onclick = function(){
  indecetor.style.left = '6.4%';
  home.style.transform = 'translateY(-30px)';
    profile.style.transform = 'translateY(0px)';
    message.style.transform = 'translateY(0px)';
    report.style.transform = 'translateY(0px)';
    setting.style.transform = 'translateY(0px)';
}
profile.onclick = function(){
  indecetor.style.left = '24.3%'
  home.style.transform = 'translateY(0px)';
  message.style.transform = 'translateY(0px)';
  report.style.transform = 'translateY(0px)';
  setting.style.transform = 'translateY(0px)';
  profile.style.transform = 'translateY(-30px)';
  
}
message.onclick = function(){
  indecetor.style.left = '42.3%';
  home.style.transform = 'translateY(0px)';
  profile.style.transform = 'translateY(0px)';
  report.style.transform = 'translateY(0px)';
  setting.style.transform = 'translateY(0px)';
  message.style.transform = 'translateY(-30px)';
}
report.onclick = function(){
  indecetor.style.left = '60.3%';
  home.style.transform = 'translateY(0px)';
    profile.style.transform = 'translateY(0px)';
    message.style.transform = 'translateY(0px)';
    setting.style.transform = 'translateY(0px)';
    report.style.transform = 'translateY(-30px)';
}
setting.onclick = function(){
  indecetor.style.left = '78.3%';
  home.style.transform = 'translateY(0px)';
    profile.style.transform = 'translateY(0px)';
    message.style.transform = 'translateY(0px)';
    report.style.transform = 'translateY(0px)';
    setting.style.transform = 'translateY(-30px)';
}
