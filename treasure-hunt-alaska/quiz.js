/* Evaluate quiz */

function resetQuestion(number)
{
  var s='qw'+number+'_'
  document.getElementById('qc'+number).style.display='none'
  document.getElementById(s+'a1').style.display='none'
  document.getElementById(s+'a2').style.display='none'
  document.getElementById(s+'a3').style.display='none'
  document.getElementById(s+'a4').style.display='none'
  document.getElementById('qn'+number).style.display='none'
}

function checkAnswer(question)
{ 
  switch (question) {
    case 1:
	  resetQuestion(1)
	  if (document.getElementById('q1_a1').checked==true) {document.getElementById('qw1_a1').style.display='block'}
	  else if (document.getElementById('q1_a2').checked==true) {document.getElementById('qw1_a2').style.display='block'}
	  else if (document.getElementById('q1_a3').checked==true) {document.getElementById('qc1').style.display='block'}
	  else if (document.getElementById('q1_a4').checked==true) {document.getElementById('qw1_a4').style.display='block'}
	  else {document.getElementById('qn1').style.display='block'}
	break
    case 2:
	  resetQuestion(2)
	  if (document.getElementById('q2_a1').checked==true) {document.getElementById('qc2').style.display='block'}
	  else if (document.getElementById('q2_a2').checked==true) {document.getElementById('qw2_a2').style.display='block'}
	  else if (document.getElementById('q2_a3').checked==true) {document.getElementById('qw2_a3').style.display='block'}
	  else if (document.getElementById('q2_a4').checked==true) {document.getElementById('qw2_a4').style.display='block'}
	  else {document.getElementById('qn2').style.display='block'}
	break
    case 3:
	  resetQuestion(3)
	  if (document.getElementById('q3_a1').checked==true) {document.getElementById('qc3').style.display='block'}
	  else if (document.getElementById('q3_a2').checked==true) {document.getElementById('qw3_a2').style.display='block'}
	  else if (document.getElementById('q3_a3').checked==true) {document.getElementById('qw3_a3').style.display='block'}
	  else if (document.getElementById('q3_a4').checked==true) {document.getElementById('qw3_a4').style.display='block'}
	  else {document.getElementById('qn3').style.display='block'}
	break
    case 4:
	  resetQuestion(4)
	  if (document.getElementById('q4_a1').checked==true) {document.getElementById('qc4').style.display='block'}
	  else if (document.getElementById('q4_a2').checked==true) {document.getElementById('qw4_a2').style.display='block'}
	  else {document.getElementById('qn4').style.display='block'}
	break
    case 5:
	  resetQuestion(5)
	  if (document.getElementById('q5_a1').checked==true) {document.getElementById('qw5_a1').style.display='block'}
	  else if (document.getElementById('q5_a2').checked==true) {document.getElementById('qw5_a2').style.display='block'}
	  else if (document.getElementById('q5_a3').checked==true) {document.getElementById('qw5_a3').style.display='block'}
	  else if (document.getElementById('q5_a4').checked==true) {document.getElementById('qc5').style.display='block'}
	  else {document.getElementById('qn5').style.display='block'}
	break
    case 6:
	  resetQuestion(6)
	  if (document.getElementById('q6_a1').checked==true) {document.getElementById('qw6_a1').style.display='block'}
	  else if (document.getElementById('q6_a2').checked==true) {document.getElementById('qw6_a2').style.display='block'}
	  else if (document.getElementById('q6_a3').checked==true) {document.getElementById('qw6_a3').style.display='block'}
	  else if (document.getElementById('q6_a4').checked==true) {document.getElementById('qc6').style.display='block'}
	  else {document.getElementById('qn6').style.display='block'}
	break
    case 7:
	  resetQuestion(7)
	  if (document.getElementById('q7_a1').checked==true) {document.getElementById('qw7_a1').style.display='block'}
	  else if (document.getElementById('q7_a2').checked==true) {document.getElementById('qw7_a2').style.display='block'}
	  else if (document.getElementById('q7_a3').checked==true) {document.getElementById('qw7_a3').style.display='block'}
	  else if (document.getElementById('q7_a4').checked==true) {document.getElementById('qc7').style.display='block'}
	  else {document.getElementById('qn7').style.display='block'}
	break
    case 8:
	  resetQuestion(8)
	  if (document.getElementById('q8_a1').checked==true) {document.getElementById('qw8_a1').style.display='block'}
	  else if (document.getElementById('q8_a2').checked==true) {document.getElementById('qc8').style.display='block'}
	  else {document.getElementById('qn8').style.display='block'}
	break
    case 9:
	  resetQuestion(9)
	  if (document.getElementById('q9_a1').checked==true) {document.getElementById('qw9_a1').style.display='block'}
	  else if (document.getElementById('q9_a2').checked==true) {document.getElementById('qw9_a2').style.display='block'}
	  else if (document.getElementById('q9_a3').checked==true) {document.getElementById('qc9').style.display='block'}
	  else if (document.getElementById('q9_a4').checked==true) {document.getElementById('qw9_a4').style.display='block'}
	  else {document.getElementById('qn9').style.display='block'}
	break
    case 10:
	  resetQuestion(10)
	  if (document.getElementById('q10_a1').checked==true) {document.getElementById('qw10_a1').style.display='block'}
	  else if (document.getElementById('q10_a2').checked==true) {document.getElementById('qw10_a2').style.display='block'}
	  else if (document.getElementById('q10_a3').checked==true) {document.getElementById('qw10_a3').style.display='block'}
	  else if (document.getElementById('q10_a4').checked==true) {document.getElementById('qc10').style.display='block'}
	  else {document.getElementById('qn10').style.display='block'}
	break
    case 11:
	  resetQuestion(11)
	  if (document.getElementById('q11_a1').checked==true) {document.getElementById('qw11_a1').style.display='block'}
	  else if (document.getElementById('q11_a2').checked==true) {document.getElementById('qw11_a2').style.display='block'}
	  else if (document.getElementById('q11_a3').checked==true) {document.getElementById('qw11_a3').style.display='block'}
	  else if (document.getElementById('q11_a4').checked==true) {document.getElementById('qc11').style.display='block'}
	  else {document.getElementById('qn11').style.display='block'}
	break
    case 12:
	  resetQuestion(12)
	  if (document.getElementById('q12_a1').checked==true) {document.getElementById('qw12_a1').style.display='block'}
	  else if (document.getElementById('q12_a2').checked==true) {document.getElementById('qw12_a2').style.display='block'}
	  else if (document.getElementById('q12_a3').checked==true) {document.getElementById('qc12').style.display='block'}
	  else if (document.getElementById('q12_a4').checked==true) {document.getElementById('qw12_a4').style.display='block'}
	  else {document.getElementById('qn12').style.display='block'}
	break
    case 13:
	  resetQuestion(13)
	  if (document.getElementById('q13_a1').checked==true) {document.getElementById('qw13_a1').style.display='block'}
	  else if (document.getElementById('q13_a2').checked==true) {document.getElementById('qc13').style.display='block'}
	  else if (document.getElementById('q13_a3').checked==true) {document.getElementById('qw13_a3').style.display='block'}
	  else if (document.getElementById('q13_a4').checked==true) {document.getElementById('qw13_a4').style.display='block'}
	  else {document.getElementById('qn13').style.display='block'}
	break
  }
}