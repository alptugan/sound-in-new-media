autowatch = 1;
inlets = 1;
outlets = 2;
outlet 
var earthquakesDict = new Dict("weatherChildren");



function bang() {
	var eqs = earthquakesDict.get("children");
	var magnitudes = [];
	var tag_texts = [];
	for(var key in eqs) {
		var magnitude = earthquakesDict.get("children[" + key + "]::tag_name");
		var tag_text = earthquakesDict.get("children[" + key + "]::tag_text");
		
		magnitudes.push(magnitude); 
		tag_texts.push(tag_text); 
	}
	outlet(0, "Tag Names: ", magnitudes);
	outlet(1, tag_texts);

}
