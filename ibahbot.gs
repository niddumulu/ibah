//1460462080:AAHj7qUdERmaptYuaWUHBXu7HUjfX0bLKR44
//@kamparibahbot

//bot resi kampar banter

var urlGetUp = "https://api.telegram.org/bot1460462080:AAHj7qUdERmaptYuaWUHBXu7HUjfX0bLKR44/getupdates";
var urlOffset = "https://api.telegram.org/bot1460462080:AAHj7qUdERmaptYuaWUHBXu7HUjfX0bLKR44/getupdates?offset=";
var sendM = "https://api.telegram.org/bot1460462080:AAHj7qUdERmaptYuaWUHBXu7HUjfX0bLKR44/sendMessage?chat_id=";
var openIDG = SpreadsheetApp.openById("19wGwOvdfmlOLTTbgHNXTu4TWf1Gcdf2bMLhckVJaYO44");

function getUpdates ( ){
  var chuckNorrisJSON = UrlFetchApp.fetch(urlGetUp);
  var chuckNorrisObject = JSON.parse(chuckNorrisJSON);
  var myJSON = JSON.stringify(chuckNorrisObject);
  ubahStatus (); 
    var ss = openIDG;
    var activeSheet = ss.getSheetByName("input");    
    var tempA1 = chuckNorrisObject.result[0].update_id;
    var tempA2 = chuckNorrisObject.result[0].message.from.username;
    var tempA3 = chuckNorrisObject.result[0].message.from.id;
    var tempA4 = chuckNorrisObject.result[0].message.text;
    
    activeSheet.getRange("A2").setValue(tempA3);
    var isiPesan = activeSheet.getRange("B2").setValue(tempA4);
    
    var resi = activeSheet.getRange('E2').getValue();
    var resilink = "https://cekresi.com/?noresi="+resi;  
    var penerima = activeSheet.getRange('E3').getValue();
    var penerima2 = activeSheet.getRange('E4').getValue(); 
    var produk = activeSheet.getRange('E5').getValue();
    var jum = activeSheet.getRange('E6').getValue();
    var sResi = activeSheet.getRange('E7').getValue(); 
    var nPeng = activeSheet.getRange('E8').getValue(); 
    var noPeng = activeSheet.getRange('E9').getValue();   
    var idTele = activeSheet.getRange('A2').getValue();
    var isiPes = activeSheet.getRange('B2').getValue();
  
    var BB3 = activeSheet.getRange('B3').getValue();
    
    activeSheet.getRange('A14').setValue(BB3);
     
     if (isiPes =="/start"){
       var balasbar1 = "Selamat datang, ketik sebuah angka ya kak.\n";
       var chatid = tempA3;
       sendText(chatid,balasbar1);
     }
     else if(isiPes <4999){
       var balasbar1 = "*KP Shope Order*\n\nKurir: J&T Express (COD)\nKode Booking: "+resi+"\n\nPenerima :\n"+penerima+"\n"+penerima2+"\n\nPengirim : Kampar Shope, "+noPeng+"\n\nNama Produk : "+produk+"\nJumlah : "+jum+"\n\nCek Resi silahkan ke group @berlatihbot. \nCopy paste kan disana : Jnt "+resi;
      //var balasbar1 = "*KP Shope Order*\n\nKurir: J&T Express (COD)\nKode Booking: "+resi+"\n\nPenerima :\n"+penerima+"\n"+penerima2+"\n\nPengirim : Kampar Shope, "+noPeng+"\n\nNama Produk : "+produk+"\nJumlah : "+jum+"\n\nCek Resi silahkan ke group @berlatihbot: "+resilink;
      var balasbar2 = "Cek resi silahkan ke group @berlatihbot\nCaranya ketik disana Jnt NoResi\nContoh : Jnt JP8078136190";
      var balasbar3 = sResi;
      var balasbar4 = "Jnt "+resi;
       
      var chatid = tempA3;
      sendText(chatid,balasbar1); 
      sendText3(idTele,balasbar3);
      //sendText4(idTele,balasbar4);
      //sendText2(idTele,balasbar2);
      
  }  
   
  activeSheet.getRange("A2").setValue("");
  activeSheet.getRange("B2").setValue("");
   }

function sendText(chatid, text) {
  var urlOffset = "https://api.telegram.org/bot1460462080:AAHj7qUdERmaptYuaWUHBXu7HUjfX0bLKR44/getupdates?offset=";
  var chuckNorrisJSON = UrlFetchApp.fetch(urlGetUp);
  var chuckNorrisObject = JSON.parse(chuckNorrisJSON);
  var myJSON = JSON.stringify(chuckNorrisObject);
      
  var tempA1 = chuckNorrisObject.result[0].update_id;
  var offSet = tempA1+1;
  
  var response = UrlFetchApp.fetch(urlOffset+offSet);
  var urll = sendM+encodeURIComponent(chatid)+"&text="+encodeURIComponent(text);
  var reply = UrlFetchApp.fetch(urll);
}

function sendText2(idTele, text) {
  var urlOffset = "https://api.telegram.org/bot1460462080:AAHj7qUdERmaptYuaWUHBXu7HUjfX0bLKR44/getupdates?offset=";
  var chuckNorrisJSON = UrlFetchApp.fetch(urlGetUp);
  var chuckNorrisObject = JSON.parse(chuckNorrisJSON);
  var myJSON = JSON.stringify(chuckNorrisObject);
      
  var urll = sendM+encodeURIComponent(idTele)+"&text="+encodeURIComponent(text);
  var reply = UrlFetchApp.fetch(urll);
}

function sendText3(idTele, text) {
  var urlOffset = "https://api.telegram.org/bot1460462080:AAHj7qUdERmaptYuaWUHBXu7HUjfX0bLKR44/getupdates?offset=";
  var chuckNorrisJSON = UrlFetchApp.fetch(urlGetUp);
  var chuckNorrisObject = JSON.parse(chuckNorrisJSON);
  var myJSON = JSON.stringify(chuckNorrisObject);
      
  var urll = sendM+encodeURIComponent(idTele)+"&text="+encodeURIComponent(text);
  var reply = UrlFetchApp.fetch(urll);
}

function sendText4(idTele, text) {
  var urlOffset = "https://api.telegram.org/bot1460462080:AAHj7qUdERmaptYuaWUHBXu7HUjfX0bLKR44/getupdates?offset=";
  var chuckNorrisJSON = UrlFetchApp.fetch(urlGetUp);
  var chuckNorrisObject = JSON.parse(chuckNorrisJSON);
  var myJSON = JSON.stringify(chuckNorrisObject);
      
  var urll = sendM+encodeURIComponent(idTele)+"&text="+encodeURIComponent(text);
  var reply = UrlFetchApp.fetch(urll);
}
var openIDGResi = SpreadsheetApp.openById("1GBEVUtXDQuzlknEMABqO3QGNrocAmCwGzeu-xSavC644");

function ubahStatus (){   
  var sss = openIDGResi;
  var activeSheetresi = sss.getSheetByName("input");    
  var resi = sss.getSheetByName("resi");
  var cellResi = activeSheetresi.getRange('K1').getValue();
  var isiCell = activeSheetresi.getRange('D2').getValue();
  var penandaLanjut = activeSheetresi.getRange('D1').getValue();
  
  var B3R = activeSheetresi.getRange('B3').getValue();
  var B4R = activeSheetresi.getRange('B4').getValue();
  var B5R = activeSheetresi.getRange('B5').getValue();
  var B6R = activeSheetresi.getRange('B6').getValue();  
  var B7R = activeSheetresi.getRange('B7').getValue();
  var B8R = activeSheetresi.getRange('B8').getValue();
  var B9R = activeSheetresi.getRange('B9').getValue();
  var B10R = activeSheetresi.getRange('B10').getValue();
  var B11R = activeSheetresi.getRange('B11').getValue();
  var B12R = activeSheetresi.getRange('B12').getValue();
  var B13R = activeSheetresi.getRange('B13').getValue();
  var B14R = activeSheetresi.getRange('B14').getValue();
  var B15R = activeSheetresi.getRange('B15').getValue();
  var B16R = activeSheetresi.getRange('B16').getValue();
  var B17R = activeSheetresi.getRange('B17').getValue();
  
  if (penandaLanjut > 0){
  resi.getRange(cellResi).setValue(isiCell);
  activeSheetresi.getRange("B2").setValue(B3R);
  activeSheetresi.getRange("B3").setValue(B4R);
  activeSheetresi.getRange("B4").setValue(B5R);
  activeSheetresi.getRange("B5").setValue(B6R);
  activeSheetresi.getRange("B6").setValue(B7R);
  activeSheetresi.getRange("B7").setValue(B8R);
  activeSheetresi.getRange("B8").setValue(B9R);
  activeSheetresi.getRange("B9").setValue(B10R);
  activeSheetresi.getRange("B10").setValue(B11R);
  activeSheetresi.getRange("B11").setValue(B12R);
  activeSheetresi.getRange("B12").setValue(B13R);
  activeSheetresi.getRange("B13").setValue(B14R);
  activeSheetresi.getRange("B14").setValue(B15R);
  activeSheetresi.getRange("B15").setValue(B16R);
  activeSheetresi.getRange("B16").setValue(B17R);
  activeSheetresi.getRange("B17").setValue("");
  }
} 
