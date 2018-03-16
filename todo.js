function add() {
		var val = document.getElementById("input-text").value;
		var b = document.getElementById("items");

		var tag = document.createElement("li");
		tag.innerHTML = val;
		b.append(tag);

		document.getElementById("input-text").value=" ";
	}