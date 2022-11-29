class MyTab {
	constructor(el) {
		this.init(el);
		this.bindingEvent();
	}

	init(el) {
		this.tab = document.querySelector(el);
		this.btns = this.tab.querySelectorAll('ul li');
		this.boxs = this.tab.querySelectorAll('article div');
	}

	bindingEvent() {
		this.btns.forEach((el, idx) => {
			el.addEventListener('click', (e) => {
				e.preventDefault();
				this.activation(this.btns, idx);
				this.activation(this.boxs, idx);
			});
		});
	}

	activation(arr, index) {
		for (const item of arr) item.classList.remove('on');
		arr[index].classList.add('on');
	}
}
