function loadRepoDetails(repo, callback) {
	$.ajax("https://api.github.com/repos/" + repo, {
		dataType: "json",
		success: function(data, txtStatus, jqXHR) {
			callback(repo, data.pushed_at, data.description);
		},
		error: function(jqXHR) {
			console.log("ERROR loading github stuff");
		}
	});
}

function loadAllDetails(repos, callback) {
	_.each(repos, function(repo) {
		loadRepoDetails(repo, callback);
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
	return function(repo, date, desc) {
		DETAILED_MY_REPOS.push({
			repo: repo,
			date: !date ? new Date(0) : parseISO8601(date),
			desc: desc
		});
		finis();
	}
}

function loadAllMyRepos() {
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
	var target = document.getElementById('githublist');
	var spinner = new Spinner(opts).spin(target);
	loadAllDetails(MY_REPOS, addToDetails(MY_REPOS.length, function() {
		var sorted = _.sortBy(DETAILED_MY_REPOS, function(e) {
			return -e.date.getTime(); // negate so that highest is first
		});
		_.each(sorted, function(el) {
			$("#githublist ul").append("<li><a href='http://github.com/" + el.repo + "/' title=\"" + el.desc.replace("\"", "\\\"") + "\">" + el.repo.split("/")[1] + "</a></li>");
		});
		spinner.stop();
	}));
}

var DETAILED_MY_REPOS = [];

var MY_REPOS = [
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