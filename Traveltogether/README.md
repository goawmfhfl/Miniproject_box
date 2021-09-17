# **✅ Travel together**

다양한 투어 상품이 쏟아진다! 함께 여행해요 !

# **Stack**

- HTML
- CSS
- JavaScript

# LayOut
![IMG_668E7B33AC02-1 (1)](https://user-images.githubusercontent.com/79143800/133762862-c87763e0-6fe2-4508-93fb-c697944f6671.jpeg)
![IMG_95FCD4964844-1 (1)](https://user-images.githubusercontent.com/79143800/133762871-6762774e-f50a-43d8-862f-598859680dfd.jpeg)

- Main 부분 : 제주도 사진 표시
- Nav 부분 : 카테고리 표시
- Section 부분 : 컨텐츠 부분 표시
- Header 부분 : 트레블 투게더 간판 글씨 표시
# Plan
> 전체적인 계획
![스크린샷 2021-09-17 17 54 00](https://user-images.githubusercontent.com/79143800/133763045-0b432eb4-a6dd-4b92-a2bf-d77d51d1e783.png)

> 세부 계획
> ![스크린샷 2021-09-17 17 52 21](https://user-images.githubusercontent.com/79143800/133763055-4f14842c-a19b-4b46-80ef-18eaca037009.png)

# 기능설명

> JSON을 활용한 Data fetch

```jsx
function loadJSON(){
    return fetch("../TraverTogether/asset/data/data.json")
    .then(respone => respone.json())
    .then(json => json.items)
}
```

- fetch 메서드를 통해서 json 파일을 불러온다.

```jsx
img: "/Delivery_Service/asset/img/tour/가이드-무지개.jpeg"
price: "30,000원"
review: "💬220건의 이용후기"
sale: "27,800원"
star-empty: "far"
star-half: "fa-star-half-alt"
title: "[제주서쪽] 제주도 서부 감성/요트/프리미엄 1일 버스투어"
type: "guide"
```

> 불러온 JSON paingting & SetEventListners Item

```jsx
.then(items => {
    displayItems(items);
    setEventListeners(items)
})
.catch(console.log)
```

> Data.set 설정을 통하여 nav 버튼 key,value 값 지정

```jsx
<button class="contents_btn Gbutton">
                <img
                src="/Delivery_Service/asset/img/btn/guide.png"
                alt="guide"
                class="content_img"
                data-key="type"
                data-value="guide"
                >
<span contents_desc>가이드투어</span>
```

- html 버튼 요소에 key 와 value값 지정
- click이벤트를 활용해 key값과 value값이 json 객체의 key value와 일치할 경우 displayitems
