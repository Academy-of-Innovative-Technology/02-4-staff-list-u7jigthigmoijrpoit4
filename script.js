//////// DO NOT EDIT BELOW THIS LINE ////////////////
/////////////////////////////////////////////////////

let
	Admin = ["Fowlkes", "Lynch", "Woodham", "Stahl", "Peter"],
	CTE = ["Alphonse", "Donahue", "Santana", "Vaduva", "Woods", "Shams", "Urena"],
	History = ["McQuilkin", "Amell", "Hablenko", "Schmidt", "Headlem", "Lucas", "Smith"],
	Counselor = ["Grant", "Weaver"],
	Maths = ["Freck", , "Ventimiglia"],
	Gym = ["Banta", "Proper", "Moll", "Murray"],
	Dean = ["Frazier", "Vaduva", "Mollison"],
	Language = ["Levystone", "Ortiz", "Stratman", "Vaduva", "Streeter", "Weaver"],
	Science = ["Koelsch", "Willet", "Lagana", "Fonrose"],
	English = ["Brown", "DelValle", "Duran", "Griszell", "King", "Fonrose", "Constant"],
	Office = ["Verley"],
	Support = ["Kabir", "Minto"],
	SSC = ["Stephine"];

const STAFF = [Admin, Office, Counselor, CTE, History, Maths, Gym, Dean, Language, Science, English, Support, SSC];

//////// DO NOT EDIT ABOVE THIS LINE ////////////////
/////////////////////////////////////////////////////

////////// MAKE YOUR UPDATES WITHIN THIS SECTION //// 

Admin.splice(0,5, "Drysdale", "Simpkins", "Woodham");
CTE.splice(0,7, "Alphonse", "Frazer", "Pelzer", "Gomes", "Ramsawak", "Shams", "Pierre");
History.splice(0,7, "Headlam", "Lucas", "Urena", "Smith", "Amell");
Counselor.splice(0,4, "Molina", "Cooper", "Desroches", "Greenberg (intern)", "Jin (intern)");
Maths.splice(0, 6, "Koelsch", "Freck", "Wong", "Minto", "Forth");
Gym.splice(0,4, "Banta", "McCalary");
Dean.splice(0, 5, "Frazer", "Mollison");
Language.splice(0, 6, "Weaver", "Nowakowski", "Vallejo");
Science.splice(0,4, "Davies", "Lynch", "Boswell");
English.splice(0,7, "Griszell", "Grant", "Gomez", "Taveras");
Office.splice(0,3, "Martinez", "Mike", "Tirado", "Gardner");
Support.splice(0,5, "Kabir", "Slater", "Rodriguez", "Steele", "Sherman", "Ward", "David", "Howell");
SSC.splice(0,1, "Ricky");



















































/////////////////////////////////////////////////////
//////// DO NOT EDIT BELOW THIS LINE ////////////////
/////////////////////////////////////////////////////



e("table").innerHTML = createTableCotents();
