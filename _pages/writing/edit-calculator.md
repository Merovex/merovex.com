---
title: "Edit Calculator"
date: 2017-12-09 07:47:15
permalink: /ec/
---

## [Cynthia](http://www.cynthiashepp.com/services/editing-packages/)

<table class='table table-sm'>
  <tr>
    <th colspan="2">
      Novel Length in kwords
    </th>
    <td width='30%'>
      <input type="number" name="kwords" id="kwords" class='form-control'>
    </td>
  </tr>
  <tr><th>Proofreading</th><td class='text-right'><span id="proofread"></span></td><td>@ ($5/1000)</td></tr>
  <tr><th>Detailed</th>    <td class='text-right'><span id="detailed"></span></td><td>@ ($7/1000)</td></tr>
  <tr><th>Deep Edit</th>   <td class='text-right'><span id="deep"></span></td><td>@ ($9/1000)</td></tr>
</table>

<script type="text/javascript">
  function ecval(key,value) { $(key).html('$ ' + value);}
  function getSVal(key) { return $("input[id^='"+key+"']").val(); }
  function dc(k, i) {return Math.round( (k * i * 1.0302111) * 100 ) / 100 }
  function ec_cal() {
    var kwords = getSVal('kwords');
    console.log("HERE: "+kwords);
    
    ecval('#proofread', dc(kwords,5));
    ecval('#detailed',  dc(kwords,7));
    ecval('#deep',      dc(kwords,9));
  }
  $('#kwords').keyup(function(event){ ec_cal(); });
  ec_cal();
</script>
