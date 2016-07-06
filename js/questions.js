 var question1 = {
    pic: "img/jsnow.jpg",
    hn: ["House Arryn", "House Tyrell", "House Tully", "House Stark", "House Baratheon"],
    cn: ["Jon Snow", "Sir Jorah Mormont", "Sir Davros", "The Hound", "The Mountain"] ,
    correcthn: "House Stark",
    correctcn: "Jon Snow",
    desc: "Ned Stark's bastard son, Jon joined the Night's Watch. On a mission for Lord Commander Mormont, Jon infiltrated the wildlings by pretending to forsake his Night Watch brothers. In doing so, he fell in love with Ygritte, a wildling woman."
  };
  
  var question2 = {
    pic : "img/sclegane.jpg",
    hn : ["House Clegane", "House Targaryen", "House Greyjoy", "House Lannister", "House Stark"],
    cn : ["Podrick Payne", "Robb Stark", "Sandor Clegane - The Hound", "Alliser Thorne", "Theon Greyjoy"],
    correcthn : "House Clegane",
    correctcn : "Sandor Clegane - The Hound",
    desc : "The Hound was the personal bodyguard to King Joffrey and carried out his commands, no matter how monstrous. After abandoning King's Landing during the Battle of the Blackwater, the Hound encountered Arya Stark in the Riverlands and been traveling with her ever since, in the hopes of collecting a ransom from her family."
  };

	var question3 = {
    pic : "img/clannister.jpg",
    hn : ["House Tyrell", "House Tully", "House Stark", "House Lannister", "House Targaryen"],
    cn : ["Arya Stark", "Daenerys Targaryen", "Olenna Tyrell", "Cersei Lannister", "Catelyn Stark"],
    correcthn : "House Lannister",
    correctcn : "Cersei Lannister",
    desc : "Queen Regent of the Seven Kingdoms, Cersei is fiercely protective of her three children. Even before she was married to Robert Baratheon, she was involved in a relationship with her twin brother, Jaime. Like her father, Cersei is interested in maintaining her position of power."
  };
  
  var question4 = {
    pic : "img/jhghar.jpg",
    hn : ["House Tyrell", "The Wildlings", "The Faceless Men", "The Night's Watch", "Brotherhood Without Banners"],
    cn : ["Thoros", "Jaqen H’ghar", "Khal Drogo", "Daario Naharis", "Tormund"],
    correcthn : "The Faceless Men",
    correctcn :  "Jaqen H’ghar",
    desc : "In reality, Jaqen H'ghar is just an assumed identity of one of the Faceless Men of Braavos, a feared order of mysterious assassins with the ability to change their appearance at will. "
     };

  var question5 = {
    pic : "img/hodor.jpg",
    hn : ["Hodor","Hodor","Hodor","Hodor","Hodor"],
    cn : ["Hodor","Hodor","Hodor","Hodor","Hodor"],
    correcthn : "Hodor",
    correctcn : "Hodor",
    desc : "Hodor is incredibly large and strong. While he is slow of wits, he is gentle and loyal to the Starks."
  };

function loadQuestions(count){
    var list = [question1, question2, question3, question4, question5] ; 
    count || list.length;
    return list.slice(0,count);
  };