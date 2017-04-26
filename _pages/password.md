---
layout: page
title: "password"
date: 2013-10-14 12:28
permalink: /password/
---

From [hughperkins / passwordbookmarklet](https://github.com/hughperkins/passwordbookmarklet). You can check out the results with [Intel's Password Tool](https://www-ssl.intel.com/content/www/us/en/forms/passwordwin.html).

Let's put it this way. I have a password I like to use. I ran it through the password tool and they said, "It would take about 0.0184 seconds" to crack. I used this javascript and it pushed the crack time to 172,141,805,203,546,940 years...172 quadrillion years.

<form  onsubmit="go();;return false;">
  <div class='form-group'>
    <label class="col-sm-4 control-label">Domain URL</label><input type="text" id="domain" placeholder="Domain URL" />
  </div>
  <div class='form-group'>
    <label class="col-sm-4 control-label">Master Password</label><input type="password" id="master" placeholder="Master Password" />
  </div>
  <div class='form-group'>
    <label class="col-sm-4 control-label">Site Password</label><input type='text' id='pwd' class='span3' placeholder="Site Password" />
  </div>
  <div class='checkbox'>
    <div class='col-md-offset-4'>
      <input type='checkbox' name='limiting' id='limiting' value='7734'>
      Limit password length to 20 characters for stupid sites.
    </div>
  </div>
  <div class='form-group'>
    <div class='col-md-offset-4'>
      <button id="btn_confirm" onclick="toggleconfirm();" class='btn'>Add Confirmation</button>
      <label id="confirmdiv" style="display: none;"><input type="password" id="txt_confirm" /></label>
    </div>
  </div>
  <div class='form-group'>
    <div class='col-md-offset-4'>
      <button type="submit" class='btn btn-primary'>Get password</button>
    </div>
  </div>
</form>

<script type="text/javascript">
javascript:
/* copyright Hugh Perkins 2013, and all the contributors listed below
   You can use this code under the BSD license

   This is derived from Nic Wolff's original password generator at
   http://angel.net/~nic/passwd.current.html , which was public domain at time
   of derivation

   Contains sha1 implementation with following header:
      A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
      in FIPS PUB 180-1
      Version 2.1 Copyright Paul Johnston 2000 - 2002.
      Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
      Distributed under the BSD License
      See http://pajhome.org.uk/crypt/md5 for details.

   Modifications by Hugh Perkins:
      - changed password length to 16 + the '1a' suffix, which should be secure
        for my lifetime...
      - add 'confirm' password
*/

var b64pad  = "";
var chrsz   = 8;

function core_sha1(x, len) {
  x[len >> 5] |= 0x80 << (24 - len % 32);
  x[((len + 64 >> 9) << 4) + 15] = len;

  var w = Array(80);
  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;
  var e = -1009589776;

  for(var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    var olde = e;

    for(var j = 0; j < 80; j++) {
      if(j < 16) w[j] = x[i + j];
      else w[j] = rol(w[j-3] ^ w[j-8] ^ w[j-14] ^ w[j-16], 1);
      var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)),
                       safe_add(safe_add(e, w[j]), sha1_kt(j)));
      e = d;
      d = c;
      c = rol(b, 30);
      b = a;
      a = t;
    }

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
    e = safe_add(e, olde);
  }
  return Array(a, b, c, d, e);

}

function sha1_ft(t, b, c, d) {
  if(t < 20) return (b & c) | ((~b) & d);
  if(t < 40) return b ^ c ^ d;
  if(t < 60) return (b & c) | (b & d) | (c & d);
  return b ^ c ^ d;
}

function sha1_kt(t) {
  return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
         (t < 60) ? -1894007588 : -899497514;
}

function safe_add(x, y) {
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

function rol(num, cnt) {return (num << cnt) | (num >>> (32 - cnt)); }

function str2binb(str) {
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz) {
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i % 32);
  }
  return bin;
}

function binb2b64(binarray) {
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i += 3) {
    var triplet = (((binarray[i   >> 2] >> 8 * (3 -  i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * (3 - (i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * (3 - (i+2)%4)) & 0xFF);
    for(var j = 0; j < 4; j++) {
      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
    }
  }
  return str;
}

function b64_sha1(s){
    var bin = str2binb(s);
    var sha1 = core_sha1(bin,s.length * chrsz);
    var result = binb2b64(sha1);
    return result;
}

function toggleconfirm() {
    var confirmdiv = document.getElementById("confirmdiv");
    var btn = document.getElementById("btn_confirm");
    if(confirmdiv.style.display == "none") {
        confirmdiv.style.display = "block";
        btn.value = "Remove confirm";
        txt_confirm.focus();
    } else {confirmdiv.style.display = "none"; btn.value = "Add Confirmation"; }
}
function getCkd(key) { return $("input:checkbox[name ='"+key+"']:checked").val(); }
function getVal(key) { return parseFloat( $("input[id^='"+key+"']").val()); }
function setVal(key,value) { $("input[id="+key+"]").val(value); }
function go() {
    var confirmdiv = document.getElementById("confirmdiv");
    if( confirmdiv.style.display != "none" ) {
        if( txt_confirm.value != master.value ) {
            alert("Passwords don't match");
            return;
        }
    }
    d = domain.value.replace(/^https?\:\/\/(?:www\.)?/,'')
    setVal('domain',d);
    var limit = isNaN(getCkd('limiting')) ? 24 : 18;

    pwd.value = b64_sha1(master.value+':'+d).substr(0,limit)+'1a'
}

</script>