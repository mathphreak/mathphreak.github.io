/*jshint forin:true, noarg:true, noempty:true, bitwise:true, undef:true, browser:true, devel:true, jquery:true, indent:4, maxerr:50 */

function parseGH(json) {
	if (json === null) {
		window.parseGH = parseGH;
		return;
	}
	var pushedDate = json.data.pushed_at;
	var createdDate = json.data.created_at;
	window.callbackGH({
		name: json.data.owner.login + "/" + json.data.name,
		date: parseISO8601(!pushedDate ? createdDate : pushedDate)
	});
}

function parseSF(json, callback) {
	var contents = json.contents;
	contents = contents.substr(contents.indexOf("<!doctype html>") + "<!doctype html>".length);
	contents = contents.replace(/<!--[\s\S]*?-->/g, "");
	var jq = $(contents);
	// CAUTION: the following code WILL BREAK!!!
	var target = jq.find("#project-primary");
	target = target.find(".project-block:nth-child(2)");
	target = target.find(".project-info:nth-child(2)");
	target = target.find("section.content");
	target = target.find("p");
	if (target.length === 0 && !window.toldAboutSFBroken) {
//		alert("SourceForge grabbing is broken, tell mathph****@gmail.com");
		// I know it's broken; I don't think there's an wasy way to fix it
		window.toldAboutSFBroken = true;
		return;
	}
	var date = target.text();
	var split = date.split("-");
	var _date = new Date;
	_date.setUTCFullYear(Number(split[0]));
	_date.setUTCMonth(Number(split[1]) - 1);
	_date.setUTCDate(Number(split[2]));
	callback(_date);
}

function loadFromSourceforge(repo) {
	xhr.request({
		url: "ba-simple-proxy.php?native=true&url=http://sourceforge.net/projects/" + repo + "/",
		method: "GET"
	}, function(response) {
		parseSF(JSON.parse(response.data), function(date) {
			window.callbackSF({
				name: repo,
				date: date
			});
		});
	});
}

function prepSF() {
	window.xhr = new easyXDM.Rpc({
		remote: "http://juniorgeek.users.sourceforge.net/cors.html"
	}, {
		remote: {
			request: {} // request is exposed by /cors/
		}
	});
}

function loadRepoDetails(repo) {
	$.ajax({
		url: "https://api.github.com/repos/" + repo + "?callback=parseGH",
		method: "GET",
		dataType: "script"
	});
}

function loadAllDetails(repos, callback) {
	window.callbackGH = callback;
	_.each(repos, function(repo) {
		loadRepoDetails(repo);
	});
}

// thanks to anentropic
function parseISO8601(str) {
 // we assume str is a UTC date ending in 'Z'
 // which is INVALID for github so...

 var parts = str.split('T'),
 dateParts = parts[0].split('-'),
 timeParts = parts[1].split('Z'),
 timeSubParts = timeParts[0].split(':'),
 timeSecParts = timeSubParts[2].split('-'), // shameless hack to fix INVALID assumptions...work somewhere that's UTC+04:00 (for example) and this dies
 timeHours = Number(timeSubParts[0]),
 _date = new Date;

 _date.setUTCFullYear(Number(dateParts[0]));
 _date.setUTCMonth(Number(dateParts[1])-1);
 _date.setUTCDate(Number(dateParts[2]));
 _date.setUTCHours(Number(timeHours));
 _date.setUTCMinutes(Number(timeSubParts[1]));
 _date.setUTCSeconds(Number(timeSecParts[0]));
 if (timeSecParts[1]) _date.setUTCMilliseconds(Number(timeSecParts[1]));

 // by using setUTC methods the date has already been converted to local time(?)
 return _date;
}

function addToDetails(length, callback) {
	var finis = _.after(length, callback);
	return function(json) {
		DETAILED_MY_REPOS.push(json);
		finis();
	}
}

function makeRepoLoader(callback) {
	return function(obj) {
		if (obj.indexOf("/") != -1) { // we contain a / and are therefore user/repo => GitHub
			window.callbackGH = callback;
			loadRepoDetails(obj);
		} else {
			window.callbackSF = callback;
			loadFromSourceforge(obj);
		}
	};
}

function loadAllMyRepos() {
	prepSF();
	var opts = {
	  lines: 8, // The number of lines to draw
	  length: 0, // The length of each line
	  width: 7, // The line thickness
	  radius: 10, // The radius of the inner circle
	  color: '#000', // #rgb or #rrggbb
	  speed: 1.2, // Rounds per second
	  trail: 42, // Afterglow percentage
	  shadow: false // Whether to render a shadow
	};
	var target = document.getElementById('softwarelist');
	var spinner = new Spinner(opts).spin(target);
	var callback = makeRepoLoader(addToDetails(MY_REPOS.length, function() {
		var sorted = _.sortBy(DETAILED_MY_REPOS, function(e) {
			return -e.date.getTime(); // negate so that highest is first
		});
		_.each(sorted, function(el) {
			var removedDOM = $("#softwarelist a[data-name='" + el.name + "']").parent();
			removedDOM.remove();
			$("#softwarelist").append(removedDOM);
			removedDOM.append(" (" + el.date.getFullYear() + ")");
		});
		spinner.stop();
	}));
	_.each(MY_REPOS, callback);
}

window.loadAllMyRepos = loadAllMyRepos;

var DETAILED_MY_REPOS = [];

var MY_REPOS = [
	"meta-tourney",
	"acts202",
	"eplanner",
	"genericnuisance",
	"multijsgames",
	"namcap",
	"tarmac",
	"wry-writing",
	"yavp",
	"mathphreak/BigThing",
	"mathphreak/DivisorGameSim",
	"mathphreak/MYGP",
	"mathphreak/Huey-s-Apprentice",
	"mathphreak/Arduinochet",
	"x11km/Temperature-Differential-Sensor",
	"mathphreak/VCRI",
	"mathphreak/Pecan.js",
	"mathphreak/TI85programs",
	"mathphreak/domEvents.backbone.js",
	"mathphreak/keyboard.backbone.js",
	"mathphreak/mathphreak3d",
	"mathphreak/stats.js",
	"mathphreak/Zrczr",
	"mathphreak/mathphreak.github.com"
];
