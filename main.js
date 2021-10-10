const pickr1 = Pickr.create({
	el: ".color-picker-one",
	theme: "classic",
	default: "#ff0000",
	autoReposition: true,
	defaultRepresentation: "HEX",
	comparison: false,
	adjustableNumbers: true,
	position: "right-start",

	swatches: [
		"#ff0000",
		"#ffa500",
		"#ffff00",
		"#00ff00",
		"#0000ff",
		"#800080",
		"#ff00ff",
	],

	components: {
		preview: true,
		opacity: true,
		hue: true,

		interaction: {
			hex: true,
			rgba: true,
			input: true,
		},
	},
});

pickr1.on("change", (color, source, instance) => {
	const hexColor = color.toHEXA().toString();
	document.documentElement.style.setProperty("--gradient-color-one", hexColor);
	UpdateCSSCode();
	UpdateGradient();
});

const pickr2 = Pickr.create({
	el: ".color-picker-two",
	theme: "classic",
	default: "#000",
	autoReposition: true,
	defaultRepresentation: "HEX",
	comparison: false,
	adjustableNumbers: true,
	position: "right-start",

	swatches: [
		"#ff0000",
		"#ffa500",
		"#ffff00",
		"#00ff00",
		"#0000ff",
		"#800080",
		"#ff00ff",
	],

	components: {
		preview: true,
		opacity: true,
		hue: true,

		interaction: {
			hex: true,
			rgba: true,
			input: true,
		},
	},
});

pickr2.on("change", (color, source, instance) => {
	const hexColor = color.toHEXA().toString();
	document.documentElement.style.setProperty("--gradient-color-two", hexColor);
	UpdateCSSCode();
	UpdateGradient();
});

function CopyToClipboard(id) {
	var r = document.createRange();
	r.selectNode(document.getElementById(id));
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(r);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
}

function UpdateCSSCode() {
	let root = document.documentElement.style;

	document.getElementById("css-code").innerHTML =
		"background: " +
		root.getPropertyValue("--gradient-color-one") +
		";<br>background: -webkit-linear-gradient(" +
		root.getPropertyValue("--gradient-direction") +
		", " +
		root.getPropertyValue("--gradient-color-one") +
		", " +
		root.getPropertyValue("--gradient-color-two") +
		");<br>" +
		"background: -moz-linear-gradient(" +
		root.getPropertyValue("--gradient-direction") +
		", " +
		root.getPropertyValue("--gradient-color-one") +
		", " +
		root.getPropertyValue("--gradient-color-two") +
		");<br>" +
		"background: linear-gradient(to " +
		root.getPropertyValue("--gradient-direction") +
		", " +
		root.getPropertyValue("--gradient-color-one") +
		", " +
		root.getPropertyValue("--gradient-color-two") +
		");";
}

function UpdateGradient() {
	let root = document.documentElement.style;

	document.getElementById("gradient-container").style =
		"background: " +
		root.getPropertyValue("--gradient-color-one") +
		"\nbackground: -webkit-linear-gradient(" +
		root.getPropertyValue("--gradient-direction") +
		"," +
		root.getPropertyValue("--gradient-color-one") +
		"," +
		root.getPropertyValue("--gradient-color-two") +
		");" +
		"\nbackground: -moz-linear-gradient(" +
		root.getPropertyValue("--gradient-direction") +
		"," +
		root.getPropertyValue("--gradient-color-one") +
		"," +
		root.getPropertyValue("--gradient-color-two") +
		");" +
		"\nbackground: linear-gradient(to " +
		root.getPropertyValue("--gradient-direction") +
		"," +
		root.getPropertyValue("--gradient-color-one") +
		"," +
		root.getPropertyValue("--gradient-color-two") +
		");";
}

function DirectionButtonOnClick(direction) {
	if (direction == "top") {
		document
			.querySelector(".gradient-direction-top-button")
			.classList.add("button-selected");
		document
			.querySelector(".gradient-direction-left-button")
			.classList.remove("button-selected");
		document
			.querySelector(".gradient-direction-right-button")
			.classList.remove("button-selected");
		document
			.querySelector(".gradient-direction-bottom-button")
			.classList.remove("button-selected");
		document.documentElement.style.setProperty("--gradient-direction", "top");
		UpdateCSSCode();
		UpdateGradient();
	} else if (direction == "left") {
		document
			.querySelector(".gradient-direction-left-button")
			.classList.add("button-selected");
		document
			.querySelector(".gradient-direction-top-button")
			.classList.remove("button-selected");
		document
			.querySelector(".gradient-direction-right-button")
			.classList.remove("button-selected");
		document
			.querySelector(".gradient-direction-bottom-button")
			.classList.remove("button-selected");
		document.documentElement.style.setProperty("--gradient-direction", "left");
		UpdateCSSCode();
		UpdateGradient();
	} else if (direction == "right") {
		document
			.querySelector(".gradient-direction-right-button")
			.classList.add("button-selected");
		document
			.querySelector(".gradient-direction-top-button")
			.classList.remove("button-selected");
		document
			.querySelector(".gradient-direction-left-button")
			.classList.remove("button-selected");
		document
			.querySelector(".gradient-direction-bottom-button")
			.classList.remove("button-selected");
		document.documentElement.style.setProperty("--gradient-direction", "right");
		UpdateCSSCode();
		UpdateGradient();
	} else if (direction == "bottom") {
		document
			.querySelector(".gradient-direction-bottom-button")
			.classList.add("button-selected");
		document
			.querySelector(".gradient-direction-top-button")
			.classList.remove("button-selected");
		document
			.querySelector(".gradient-direction-left-button")
			.classList.remove("button-selected");
		document
			.querySelector(".gradient-direction-right-button")
			.classList.remove("button-selected");
		document.documentElement.style.setProperty(
			"--gradient-direction",
			"bottom"
		);
		UpdateCSSCode();
		UpdateGradient();
	}
}

function CopyCSSButtonOnClick() {
	CopyToClipboard("css-code");
	document.getElementById("copy-css-button").innerHTML = "CSS Copied!";
	setTimeout(() => {
		document.getElementById("copy-css-button").innerHTML = "Copy CSS";
	}, 1000);
}
