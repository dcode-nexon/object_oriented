class FontStyle {
	constructor(el) {
		this.el = document.querySelector(el);
	}
	changeColor(color) {
		this.el.style.color = color;
	}
	changeSize(size) {
		this.el.style.fontSize = size;
	}
}

class BoxStyle extends FontStyle {
	constructor(el) {
		super(el);
	}
	changeWid(wid) {
		this.el.style.width = wid;
	}
	changeHt(ht) {
		this.el.style.height = ht;
	}
	changeBg(bg) {
		this.el.style.backgroundColor = bg;
	}
}
