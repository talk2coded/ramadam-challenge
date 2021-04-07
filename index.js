
                      function init() {

                      getRamadanTimeTable();

                      TweenMax.set("#timeCounter", {perspective:1500, scale:0.7125})
                      TweenMax.set(".upper", {rotationX:0.01, transformOrigin:"50% 100%"})
                      TweenMax.set(".lower", {rotationX:0.01, transformOrigin:"50% 0%"})

                      var t, ss, mm, hh;
                      setTimeVars();

                      function setTimeVars(){
                      t = new Date();
                      t = new Date();
                      ss = String(t.getSeconds());
                      mm = String(t.getMinutes());
                      hh = String( (t.getHours()>12) ? t.getHours()-12 : t.getHours() );
                      if (ss.length==1) ss = "0"+ss;
                      if (mm.length==1) mm = "0"+mm;
                      if (hh.length==1) hh = "0"+hh;
                      }

                      h10.childNodes[3].innerHTML = h10.childNodes[7].innerHTML = "<span>"+Number(hh.substr(0,1))+"</span>";
                      h0.childNodes[3].innerHTML = h0.childNodes[7].innerHTML = "<span>"+Number(String(hh).substr(1,1))+"</span>";

                      m10.childNodes[3].innerHTML = m10.childNodes[7].innerHTML = "<span>"+Number(mm.substr(0,1))+"</span>";
                      m0.childNodes[3].innerHTML = m0.childNodes[7].innerHTML = "<span>"+Number(mm.substr(1,1))+"</span>";

                      s10.childNodes[3].innerHTML = s10.childNodes[7].innerHTML = "<span>"+Number(ss.substr(0,1))+"</span>";
                      s0.childNodes[3].innerHTML = s0.childNodes[7].innerHTML = "<span>"+Number(ss.substr(1,1))+"</span>";


                      var interval = setInterval(function(){
                      setTimeVars();

                      tick(s0, Number(ss.substr(1,1)) )

                      if (ss.substr(1,1)=="9"){
                      tick(s10, Number(ss.substr(0,1)) ) 
                      if (ss=="59"){
                      tick(s10, 5, true)
                      tick(m0, Number(mm.substr(1,1)))
                      if (mm.substr(1,1)=="9"){
                      tick(m10, Number(mm.substr(0,1)))
                      if (mm=="59") {
                      tick(m10, 5, true)
                      tick(h0, Number(hh.substr(1,1)))
                      if (hh.substr(1,1)=="9") tick(h10, Number(hh.substr(0,1)))
                      if (hh=="12") {
                      tick(h0, Number(hh.substr(0,1)), true)
                      tick(h10, Number(hh.substr(1,1)), true)
                      }
                      }
                      }
                      }
                      }

                      }, 1000)

                      function tick(mc,i, toZero=false){

                      mc.childNodes[3].innerHTML = "<span>"+i+"</span>"; //start upper
                      mc.childNodes[5].innerHTML = "<span>"+i+"</span>"; //start lower
                      if ( i==9 || toZero ) i=-1;
                      mc.childNodes[1].innerHTML = "<span>"+(i+1)+"</span>"; //end upper
                      mc.childNodes[7].innerHTML = "<span>"+(i+1)+"</span>"; //end lower

                      TweenMax.fromTo(mc.childNodes[1], .3, {alpha:0},{alpha:1, ease:Power4.easeIn})  
                      TweenMax.fromTo(mc.childNodes[3], .3, {rotationX:0, background:"linear-gradient(0deg, rgba(200,200,200,1), rgba(255,255,255,1) 15%)"},{rotationX:-90, ease:Power1.easeIn})
                      TweenMax.fromTo(mc.childNodes[7], .5+.2*Math.random(), {rotationX:90},{rotationX:0, ease:Bounce.easeOut, delay:.3})
                      TweenMax.fromTo(mc.childNodes[5], .6, {alpha:1},{alpha:0, ease:Bounce.easeOut, delay:.3})  
                      }


                      }

                      function getRamadanTimeTable() {
                      $.get('https://api.aladhan.com/v1/calendarByCity?city=Dhaka&country=Bangladesh&method=1&month=02&year=2021&tune=1', function (data, textStatus) {
                      if(textStatus === 'success') {
                      console.log('DATA', data)
                      }
                      });
                      }

                      // var object = document.getElementById('object');

                      // object.addEventListener('mouseover', function(event){
                      //   const can = document.querySelectorAll(".objects");

                      //   const randomX = random(10, 20);
                      //   const randomY = random(20, 30);
                      //   const randomDelay = random(0, 1);
                      //   const randomTime = random(3, 5);
                      //   const randomTime2 = random(5, 10);
                      //   const randomAngle = random(8, 12);
                        
                      //   TweenLite.set(can, {
                      //     x: randomX(-1),
                      //     y: randomX(1),
                      //     rotation: randomAngle(-1)
                      //   });
                        
                      //   moveX(can, 1);
                      //   moveY(can, -1);
                      //   rotate(can, 1);
                        
                      //   function rotate(target, direction) {
                          
                      //     TweenLite.to(target, randomTime2(), {
                      //       rotation: randomAngle(direction),
                      //       // delay: randomDelay(),
                      //       ease: Sine.easeInOut,
                      //       onComplete: rotate,
                      //       onCompleteParams: [target, direction * -1]
                      //     });
                      //   }
                        
                      //   function moveX(target, direction) {
                          
                      //     TweenLite.to(target, randomTime(), {
                      //       x: randomX(direction),
                      //       ease: Sine.easeInOut,
                      //       onComplete: moveX,
                      //       onCompleteParams: [target, direction * -1]
                      //     });
                      //   }
                        
                      //   function moveY(target, direction) {
                          
                      //     TweenLite.to(target, randomTime(), {
                      //       y: randomY(direction),
                      //       ease: Sine.easeInOut,
                      //       onComplete: moveY,
                      //       onCompleteParams: [target, direction * -1]
                      //     });
                      //   }
                        
                      //   function random(min, max) {
                      //     const delta = max - min;
                      //     return (direction = 1) => (min + delta * Math.random()) * direction;
                      //   }
                      // })


                       init();