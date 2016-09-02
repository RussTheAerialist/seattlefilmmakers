(function () {
  /* encode / decode strings to / from base36

   based on: http://snipplr.com/view/12653/
   */

  var base36 = function (str) {
    //assumes one character base36 strings have been zero padded by encodeAscii
    var chunked = [];
    for (var i = 0; i < str.length; i = i + 2) {
      chunked[ i ] = String.fromCharCode(parseInt(str[ i ] + str[ i + 1 ], 36));
    }
    return chunked.join("");
  };

  var element = document.getElementById('reporting-id');
  var realValue = base36(element.innerHTML);
  element.href="mailto:" + realValue;
  element.innerText = realValue;
})();
