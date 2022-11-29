function MyTab(el) {
	this.init(el);
	this.bindingEvent();
}
MyTab.prototype.init = function (el) {
	this.tab = document.querySelector(el);
	this.btns = this.tab.querySelectorAll('ul li');
	this.boxs = this.tab.querySelectorAll('article div');
};
MyTab.prototype.bindingEvent = function () {
	this.btns.forEach(
		function (el, idx) {
			el.addEventListener(
				'click',
				function (e) {
					e.preventDefault();
					this.activation(this.btns, idx);
					this.activation(this.boxs, idx);
				}.bind(this) //이벤트문 안쪽에서의 this객체는 이벤트가 발생한 대상을 지칭하므로 인스턴스 this객체로 내부값을 다시 고정
			);
		}.bind(this) //forEach안쪽에서의 this객체는 반복도는 대상을 지칭하므로 외부의 인스턴스 this객체로 내부 값을 강제 고정
	);
};
MyTab.prototype.activation = function (arr, index) {
	for (var i = 0; i < this.btns.length; i++) {
		arr[i].classList.remove('on');
	}
	arr[index].classList.add('on');
};
