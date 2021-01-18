console.log("Closures And Object Oriented Programming");
//Practice
//Write a function makeSafe that accepts one argument safeSize and return a closure function that takes two arguments name and size that adds items in the safe depending on the size of the item, it might fit or not in the safe, return true if the item fits and return false if it doesn't.
/* Solve With Closure */
//كتابة دالة تجعل من الآمن الذي يقبل وسيطة واحدة حجم آمن وإرجاع دالة إغلاق تأخذ وسيطتين اسم وحجم تضعان عناصر في الآمن استناداً إلى حجم العنصر، قد تكون مناسبة أو غير موجودة في الآمن، إرجاع TRUE إذا كان العنصر ملائمًا وإرجاعه FALSE إذا لم يكن كذلك.


  const makeSafe = function (
    _safeSize,
    _attempts,
    _lockDownDuration,
    _alarmDuration
  ) {
    let safeSize = _safeSize;
    let safePassCode;
    const storage = [];
    let attempts = _attempts;
    const lockDownDuration = _lockDownDuration;
    const alarmDuration = _alarmDuration;
  
    let isOpen = false;
    let isLocked = false;
    let alarm = false;
  
    const safe = {
      add: function (name, size) {
        if (isLocked) return "Safe is locked";
        if (!isOpen) return "Please open the safe first";
  
        if (safeSize - size >= 0) {
          storage.push({ name: name, size: size });
          safeSize -= size;
          return true;
        } else {
          return false;
        }
      },
      remove: function (name) {
        if (isLocked) return "Safe is locked";
        if (!isOpen) return "Please open the safe first";
  
        let found = "Not Found";
        storage.forEach(function (element, index) {
          if (element.name === name) {
            safeSize += element.size;
            found = element;
            storage.splice(index, 1);
            return;
          }
        });
        return found;
      },
      setPassCode: function (passCode) {
        if (!safePassCode) {
          safePassCode = passCode;
          return safePassCode;
        } else {
          return "Reset passcode first";
        }
      },
      resetPassCode: function (passCode) {
        if (!safePassCode) return "Set passCode first";
  
        if (safePassCode === passCode) {
          safePassCode = undefined;
          return "PassCode has been reset";
        } else {
          return "PassCode doesn't match";
        }
      },
      openSafe: function (passCode) {
        if (isLocked) return "Safe is locked";
  
        if (safePassCode === passCode) {
          isOpen = true;
          alarm = false;
          return "Safe is open and ready to use";
        } else {
          if (!alarm) {
            alarm = true;
            safe.alarm();
          }
          if (!--attempts) {
            return safe.lockSafe();
          }
          return "Wrong passcode";
        }
      },
      closeSafe: function () {
        isOpen = false;
        return "Safe is now closed";
      },
      lockSafe: function () {
        isLocked = true;
        setTimeout(function () {
          isLocked = false;
        }, lockDownDuration);
        // return "Safe is now locked";
      },
      alarm: function () {
        setTimeout(function () {
          if (alarm) {
            isLocked = true;
            console.log("ALARM ALARM ALARM !!!");
          }
        }, alarmDuration);
      },
    };
  
    return safe;
  };
  
  const safe = makeSafe(10, 2, 5000, 10000);
  



