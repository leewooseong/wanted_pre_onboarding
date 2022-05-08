# wanted_pre_onboarding
1주차 개인 과제

## 1. Toggle.js

### 1-1. 구현 방법

**HTML**

-   `button tag` 2개를 `div tag`로 감싸는 형태로 구현하였습니다.

**CSS**

-   가상 요소 선택자를 이용하여 slide animation을 구현하였습니다.

**JavaScript**

-   state
    -   `active` : 활성화된 버튼의 클래스 이름을 나타냅니다. 버튼을 클릭할 경우 `onClick` 이벤트 핸들러를 이용하여 클릭된 버튼의 클래스 이름으로 state를 변경합니다.
-   버튼 활성화 시키기
    -   state 변화로 인한 리렌더링 시 버튼들의 클래스 이름과 state로 관리하는 클래스 이름을 비교합니다.
    -   버튼과 state의 클래스 이름이 같다면 그 버튼 클래스 이름에는 `active class`가 추가되어 렌더링되고 붙고 같지 않다면 자신의 클래스 이름을 유지하여 렌더링됩니다.
    -   `active class` 유무에 따라 활성화된 css를 가질 수 있습니다.
    -   `active calss`가 붙은 버튼을 클릭하게 된다면 state를 변경하지 않고 이벤트 핸들러 함수를 종료합니다.
-   slider animation
    -   state로 관리되는 변수 따라 `div tag`의 `location props`의 값이 달라지며 이를 통해 가상 요소(slider)가 움직이게 됩니다.

### 1-2. 어려웠던 점

-   처음에는 slider 구현을 하기 위해서는 HTML 요소를 추가해야한다는 판단이 서질 못해서 해매었습니다. 하지만 추후에 `div tag`를 추가하여 slider를 구현하였고 가상 요소를 활용하여 불필요한 HTML tag를 줄일 수 있었습니다.

    <br>

## 2. Tab.js

### 2-1. 구현 방법

**HTML**

-   `button tag` 3개를 `nav tag`로 감싸는 형태로 구현하였습니다.

**CSS**

-   가상 요소 선택자를 이용하여 slide animation을 구현하였습니다.

**JavaScript**

-   Tab information
    -   `nav tag`에 들어갈 버튼들의 정보를 `menuList`라는 배열로 관리합니다.
    -   각 배열의 요소들은 객체로 구성되어 있으며 text는 Tab 내 버튼의 한글 텍스트를 의미하고 class는 버튼들의 class 이름을 의미합니다.
    -   배열과 `map` 함수를 이용하여 `nav tag` 내 버튼들을 생성합니다.
-   state
    -   Toggle의 state와 동일합니다.
-   버튼 활성화 시키기
    -   Toggle의 버튼 활성화 시키는 방법과 동일합니다.
-   slider animation
    -   `moveActiveBox` 함수와 `location props`를 이용하여 slider animation을 구현하였습니다.
    -   `moveActiveBox` 함수는 state와 `menuList`를 이용하여 현재 활성화된 버튼의 위치를 계산합니다.
    -   계산된 값은 `location props`의 값으로 사용됩니다.

### 2-2. 어려웠던 점

-   Toggle을 구현 후 수월하게 구현을 할 수 있었습니다.

    <br>

## 3. Slider.js

### 3-1. 구현 방법

**HTML**

-   크게 보면 `div tag, input tag, button`들로 구성되어 있습니다.
-   `div tag`
    -   `range input`의 값을 나타내는 `div tag`
-   `input tag`
    -   값을 입력받는 `input tag`
-   `button tag`
    -   `input tag`와 미려한 픽셀 매칭을 위하여 `button tag`를 사용합니다.

**CSS**

-   `button`들의 대략적인 위치는 `flex`의 `justify-content: space-between`을 이용하여 지정해주었습니다.

**JavaScript**

-   state
    -   `sliderValue` : `input tag`의 값을 받아오는 state
-   값 받아오기
    -   `onChange` 이벤트 핸드러를 이용해서 값이 변할 때마다 `sliderValue`에 `input tag`의 값을 저장합니다.
    -   가져온 값은 `div tag` 내의 `p tag`에 의해 표시됩니다.
-   버튼으로 값 변경하기
    -   `input tag` 하단의 버튼을 클릭하면 버튼에 적힌 값들로 `input tag` 및 `div tag` 내에 표시되는 `input`의 값이 변경됩니다.

### 3-2. 어려웠던 점

-   `input`을 원하는 UI로 커스컴하는 부분에 있어서 어려움을 겪어 그 부분은 구현을 하지 못했습니다.
-   추후 개인적이라도 완성해볼 예정입니다.

    <br>

## 4. Input.js

### 4-1. 구현 방법

**HTML**

-   `form tag` 안에 `div tag` 2개가 들어있는 방식입니다.
-   각 `div tag`는 email관련 `input` 처리하는 것 1개, password 관련 `input` 처리하는 것 1개로 구성되어 있습니다.

**CSS**

-   `blind class`를 이용하여 에러가 나지 않은 email의 경우 경고 알림을 표시하지 않습니다.

**JavaScript**

-   state
    -   `emailValid` : 이메일 유효성 결과를 `boolean` 값으로 표협합니다.
    -   `showAlert` : 경로 알림을 띄울지 말지를 `boolean` 값으로 표현합니다.
    -   `showPW` : pw를 text로 표시할 지 여부를 `boolean` 값으로 표현합니다.
-   Email 유효성 검사
    -   `email-wrapper class` 내의 `input` 값이 변화하면 입력된 값을 이용해 email이 유효한지 판단합니다.
    -   유효성 검사는 정규식을 이용하여 email 조건을 만족하는 지 검사합니다.
    -   단 입력된 값이 `""`라면 이메일 유효성 검사를 하지 않습니다.
    -   입력된 값이 유효성 검사를 통과한다면 `showAlert` 값을 `false`로 바꾸고 `emailValid`를 `true`로 바꿔줍니다. 이에 따라 `email-wrapper class` 내의 `img`가 활성화된 이미지로 바뀝니다.
    -   입력된 값이 유효성 검사를 통과하지 못한다면 `emailValid`를 `false`로 바꿔줍니다. 이에 따라 `email-wrapper class` 내의 `img`가 비활성화된 이미졸 바뀝니다.
    -   `emailValid` 값이 `false`이더라도 `focus`가 해제되지 않는한 `showAlert` 값이 `true`로 바뀌지 않습니다.
-   경고 알림 표시하기
    -   `showAlert` state 값에 따라 알림이 표시됩니다.
    -   `input`의 입력에 의해 `emailValid`가 `false`인 상태에서 `focus`가 해제되면 `showAlert` 값이 `true`로 바뀌고 경고 알림이 표시됩니다.
    -   `input`의 입력에 의해 `emailValid`가 `true`가되면 `focus` 여부와 상관없이 `showAlert` 값이 `false`로 바뀌고 경고 알림이 사라집니다.
-   비밀번호 표시하기
    -   비밀번호란에 눈 모양 이미지를 클릭하면 `pw-wrapper class` 내의 `input`의 type을 password에서 text로 바꿔주고 눈 모양 이미지를 활 성활된 이미지로 바꿔줍니다.
    -   현재 `input`의 type이 text라면 type을 password로 바꿔주고 눈 모양 이미지를 비활성화된 이미지로 바꿔줍니다.

### 4-2. 어려웠던 점

-   Input을 구현함에 있어서는 이런 로그인을 처음 구현해보는 것이라 로직을 어떻게 할지 명세하는 것이 조금 복잡했었습니다.

    <br>

## 5. Dropdown.js

### 5-1. 구현 방법

**HTML** :

-   선택된 메뉴 표시
    -   `div tag`를 이용하여 선택된 메뉴 항목을 표시합니다.
-   메뉴 고르기
    -   메뉴 항목창은 `ul, li tag`를 이용하여 표시하였습니다. `ul`의 첫 번째 `li`에서는 `input tag`를 이용하여 검색을 할 수 있도록 작성하였습니다.

**CSS**

-   메뉴 항목창
    -   `blind class`를 이용하여 검색하지 않을 때는 보여주지 않습니다.
    -   `hover` 시 `background-color`가 변합니다.

**JavaScript**

-   `menuData`
    -   메뉴들의 목록을 배열로 관리합니다. 필터링되지 않은 메뉴 목록의 원본 역할을 합니다.
-   state
    -   `menuList` : 띄워지는 메뉴창에 나타날 메뉴들의 목록 정보입니다.
    -   `chosenMenu` : 메뉴창에서 선택된 메뉴를 나타냅니다.
    -   `showMenuList` : `true`일 경우 메뉴창을 표시하고, `false`일 경우 메뉴창을 표시하지 않습니다.
-   `div tag`(선택된 메뉴 표시하는 박스)
    -   메뉴 항목창이 띄워지지 않은 상태에서 `div tag`를 클릭할 경우 메뉴창이 나타납니다.
    -   메뉴창이 띄워진 상태라면 클릭 할 때 메뉴 항목창 내 `input tag`의 값을 `""`로 초기화 시키고 메뉴 항목창을 사라지게 합니다.
-   메뉴 항목창
    -   `ul tag`
        -   `showMenuList` state 값에 따라 메뉴 항목창을 띄울지 말지 결정합니다.
    -   `input tag`
        -   `input tag`의 입력 값에 따라 `menuData`에서 입력에 맞는 항목들이 필터링되고 그 값이 `menuList` state로 들어가게 됩니다.
    -   그 외 `li tag`
        -   `input tag`에 의해 필터링된 `menuList` state를 `map`을 이용하여 하나하나 렌더링하게 됩니다.
        -   렌더링된 `li tag` 한 개를 클릭하게 되면 그 항목을 `div tag` 내에 표시하고 `input tag`의 내용을 초기화 한다.

### 5-2. 어려웠던 점

-   `input tag` 안에 가상요소를 적용하지 못한다는 점을 모르고 있어서 관련 해결책을 찾는데 시간을 많이 소요했습니다. 최종적으로 `img tag`를 `position:absolute`를 이용하여 해당 문제를 처리하였습니다.
