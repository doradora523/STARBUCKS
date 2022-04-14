/* search 검색창 제어 */
// 검색창 요소(.search)를 변수로 선언
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// 검색창 요소를 클릭하면 함수 실행
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


/* footer 현재 년도 삽입 */
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2022 현재 년도 삽입