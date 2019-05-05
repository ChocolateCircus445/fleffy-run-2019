//An asset manager for Fleffy Run
var dir = document.getElementById("images");
addImage = function(src, name, force = false) {
  if (!force) {
    dir.innerHTML += `<img src="${src}" id="${name}">` + '\n';
    return document.getElementById(name);
  } else {
    dir.innerHTML += `<img src="${src}" id="${name}" width="${force.split('-')[0]}" height="${force.split('-')[1]}">` + '\n';
    return document.getElementById(name);
  }
}
addSound = function(src, name) {
  var e = src.split('.');
  e = e[e.length - 1];
  if (e == 'mp3') {
    dir.innerHTML += `
    <audio id="${name}">
      <source src="${src}" type="audio/mpeg">
    </audio>
    `
  } else if (e == 'wav') {
    dir.innerHTML += `
    <audio id="${name}">
      <source src="${src}" type="audio/wav">
    </audio>
    `
  } else if (e == 'ogg') {
    dir.innerHTML += `
    <audio id="${name}">
      <source src="${src}" type="audio/ogg">
    </audio>
    `
  } else {
    throw new Error(`Invalid audio type ${e}`);
  }
  return document.getElementById(name);
}
HTMLAudioElement.prototype.stop = function() {
  this.pause();
  this.load();
}
//Backgrounds
var title = addImage("title.png", "title");
var bg = addImage("bg.png", "bg");
//Sprites
var close_button = addImage("sprites/close_button.png", "close_button");
var fleffy_comic_1 = addImage("fleffy_comic_1.png", "fleffy_comic_1");
var fleffy_run_1 = addImage("sprites/fleffy_run_1.png", "fleffy_run_1");
var fleffy_run_2 = addImage("sprites/fleffy_run_2.png", "fleffy_run_2");
var fleffy_shield_1 = addImage("sprites/fleffy_shield_1.png", "fleffy_shield_1");
var fleffy_shield_2 = addImage("sprites/fleffy_shield_2.png", "fleffy_shield_2");
var gift = addImage("sprites/gift.png", "gift")
var grass_1 = addImage("sprites/grass_1.png", "grass_1");
var grass_2 = addImage("sprites/grass_2.png", "grass_2", '960-43');
var ple = addImage("sprites/ple.png", "ple");
var ranking_0 = addImage("sprites/ranking_0.png", "ranking_0");
var ranking_1 = addImage("sprites/ranking_1.png", "ranking_1");
var ranking_2 = addImage("sprites/ranking_2.png", "ranking_2");
var ranking_3 = addImage("sprites/ranking_3.png", "ranking_3");
var ranking_4 = addImage("sprites/ranking_4.png", "ranking_4");
var ranking_5 = addImage("sprites/ranking_5.png", "ranking_5");
var run_meter_0 = addImage("sprites/run_meter_0.png", "run_meter_0");
var run_meter_1 = addImage("sprites/run_meter_1.png", "run_meter_1");
var run_meter_2 = addImage("sprites/run_meter_2.png", "run_meter_2");
var run_meter_3 = addImage("sprites/run_meter_3.png", "run_meter_3");
var run_meter_4 = addImage("sprites/run_meter_4.png", "run_meter_4");
var run_meter_5 = addImage("sprites/run_meter_5.png", "run_meter_5");
var run_meter_6 = addImage("sprites/run_meter_6.png", "run_meter_6");
var run_meter_7 = addImage("sprites/run_meter_7.png", "run_meter_7");
var run_meter_8 = addImage("sprites/run_meter_8.png", "run_meter_8");
var run_meter_9 = addImage("sprites/run_meter_9.png", "run_meter_9");
var run_meter_10 = addImage("sprites/run_meter_10.png", "run_meter_10");
var spike = addImage("sprites/spike.png", "spike");
//Mobile Buttons
var m_btn_left = addImage("sprites/mobile/m_btn_left.png", "m_btn_left");
var m_btn_right = addImage("sprites/mobile/m_btn_right.png", "m_btn_right");
var m_btn_jump = addImage("sprites/mobile/m_btn_jump.png", "m_btn_jump");
var m_btn_run = addImage("sprites/mobile/m_btn_run.png", "m_btn_run");
//Sounds
var ranking_sound_3 = addSound("sounds/awesome.wav", "awesome");
var boing = addSound("sounds/boing.mp3", "boing");
var ranking_sound_4 = addSound("sounds/explosive.wav", "explosive");
var ranking_sound_5 = addSound("sounds/explosive.wav", "explosive2");  //Long story short, this will make playing rating sounds easier.
var ranking_sound_1 = addSound("sounds/good.wav", "good");
var ranking_sound_2 = addSound("sounds/great.wav", "great");
var imFleffy = addSound("sounds/imFleffy.wav", "imFleffy");
var no = addSound("sounds/no.wav", "no");
var err = addSound("sounds/err.mp3", "err");
//Music
var titleTheme = addSound("title.mp3", "titleTheme");
var regularTheme = addSound("regular.mp3", "regularTheme");
