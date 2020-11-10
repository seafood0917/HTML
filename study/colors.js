var Links = {
  setColor: function(color) {
    // var alist = document.querySelectorAll('a')
    // var i = 0
    // while (i < alist.length) {
    //   alist[i].style.color = color;
    //   i += 1;
    // }
    $('a').css('color', color);
  }
}
var Body = {
  setColor : function(color) {
    // document.querySelector('body').style.color = color
    $('body').css('color', color)
  },
  setBackgroundColor : function(color) {
    // document.querySelector('body').style.backgroundColor = color
    $('body').css('backgroundColor', color)
  }
}
function dayNightHandler(self) {
  if (self.value === 'night') {
    Body.setColor('white');
    Body.setBackgroundColor('black');
    Links.setColor('powderblue')
    self.value = 'day';
  } else {
    Body.setColor('black');
    Body.setBackgroundColor('white');
    Links.setColor('blue')
    self.value = 'night';
  }
}
