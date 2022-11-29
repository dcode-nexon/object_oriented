/*
    constructor(생성자함수), prototype(프로토타입)을 활룡한 객체지향 프로그램

    생성자함수 (es5 객체를 생성하기 위한 특별한 함수)
    - 어떤 반복적인 대량의 결과물을 뽑아내기 위한 시스템적인 틀 (붕어빵틀)

    인스턴스, 객체
    - 생성자함수를 통해서 복사된 실제적인 결과물, 복사본 

    프로토타입
    - 생성자함수 생성시 자동으로 만들어지는 저장공간
    - 동일한 생성자함수를 통해서 복사된 인스턴스들은 동일한 프로토타입을 공유
    - 보통 자주쓰는 함수(메서드)의 원형을 프로토타입에 저장해서 추후 모든 인스턴스들이 해당 메서드를 공유하기 위함


    생성자함수로 인스턴스 생성하는 법 (생성자 : new 연산자를 통해서 호출되면 인스턴스 생성가능)
    1. 생성자함수는 무조건 대문자로 시작 
    2. 생성자함수의 전달받은 인수값을 this객체를 통해서 인스턴스로 전달 (생성자 안쪽의 this객체는 해당 생성자를 통해서 앞으로 생성될 인스턴스를 지칭)
    3. 생성자의 전용공간의 prototype에 공통으로 쓰이게될 함수(메서드)들을 등록
*/

function FontStyle(el, color, size) {
	this.el = document.querySelector(el);
	this.changeColor(color);
	this.changeSize(size);
}
FontStyle.prototype.changeColor = function (color) {
	this.el.style.color = color;
};
FontStyle.prototype.changeSize = function (size) {
	this.el.style.fontSize = size;
};
