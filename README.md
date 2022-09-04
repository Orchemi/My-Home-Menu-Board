# 우리집 메뉴판 사이트 프로젝트

## 기획 목적

- 할 줄 아는 요리인데 생각이 나지 않아 못해먹는 사람들을 위한 **개인 맞춤 메뉴판**
- **오늘은 뭘 해먹어야 할 지 식사 메뉴를 고민하시는 엄마를 위해 만들었다.**
- ReactJS 문법 학습내용을 최대한 실무에 활용해서 체득하려 하였다.

<br>

## 사용 기술 스택

- FE : ReactJS, JavaScript, Bootstrap
- BE : Django, Python
- DB : Sqlite3

<br>

## 기능

### 메뉴 사진 및 정보

![메인 ver 0 3 pc](https://user-images.githubusercontent.com/86189596/167109170-9507429d-c192-4103-bb0c-6052f76c72e6.jpg)

- 가장 메인 페이지는 등록된 음식 메뉴들을 모두 보이도록 하였다.
- Django 서버에서 별점, 등록일자, 가나다 순 등 다양한 정렬 기준으로 정렬해서 볼 수 있도록 하였다.
- 추후 카테고리별 계획이다.

<br>

### 상세 페이지

![메뉴 상세페이지 ver 0 3 pc](https://user-images.githubusercontent.com/86189596/167109169-8bdc3920-97cd-46cd-b2be-9dbb7b5ca0bb.jpg)

- 개별 메뉴들의 상세 정보들이 모여있는 페이지이다. 점수부터 등록/수정일이 있다.
- 배경이 심심해서 사진의 확대사진을 backgroundImage의 cover option으로 부여하였다.
- 향후 Update/Delete 기능을 추가할 예정이다. axios의 put과 delete method에 대한 이해와 react/django api 적인 이해가 추가로 필요하다.

<br>

### 메뉴 추가

![메뉴 추가 ver 0 2 pc](https://user-images.githubusercontent.com/86189596/166097978-0e6659f6-ed2d-4e1c-8695-c1442297f19a.jpg)

- 메뉴를 등록하는 화면
- 여러 기준으로 나눈 카테고리를 적극 활용해 정렬 기준으로 활용한다.
- 사진을 등록하여 메인화면에 추가할 수 있도록 하였다.
- 사진 등록의 경우 Django의 static 기능을 활용한다.
- 사진 없이 등록되더라도 no image 사진으로 등록이 되도록 하였다.
- 사진 등록을 위해 dataForm을 사용하였는데, Django 서버에 사진이 등록되지 않은 오류를 해결중이다.

<br>

### 랜덤 메뉴 추천

![랜덤 추천 gif](https://user-images.githubusercontent.com/86189596/167266091-92167778-d218-45c3-9021-17bd9b0062e7.gif)

- 선택에 어려움을 겪는 유저들을 위해 등록되어 있는 메뉴 중 임의로 메뉴를 추천해준다.
- 디자인적으로 PC버전에서 메뉴 사진과 내용을 가로형으로 배치하는 방식으로 개선하는 것이 이후 개선 목표이다.
- 카테고리 선택 기능을 추가하여 추천 메뉴 범위를 설정하는 것을 계획중이다.

<br>

### 로그인

![로그인 ver 0 2 pc](https://user-images.githubusercontent.com/86189596/166097977-eb309851-8e79-4e18-a81d-1f1060cafcef.jpg)

- 메뉴 기록의 개인화를 위한 로그인 기능이다.
- Django의 auth의 로그인 기능을 활용할 계획이다.
- axios의 post method를 위한 crsfToken의 부여는 authenticated 상태에서만 가능하므로 django의 login 페이지로 이동했다가 로그인 성공 후 되돌아온다.
- api로 구현하기에 인증 절차에 문제가 있어 현재는 목업 페이지로 존재한다.

<br>

### 정렬 필터

![정렬 필터 ver 0 3 pc](https://user-images.githubusercontent.com/86189596/167265818-e07aeb3d-a95f-4ce8-a2a8-f36724e7d3ec.gif)

- 메뉴가 많아지면 여러 정렬 필터 기준을 이용해 오름차순/내림차순 정렬할 수 있도록 하였다.
- select 태그의 onChange에 각각의 state를 해당 option의 value로 바꾸는 로직을 React 차원에서 구현하였고, useEffect를 이용해 각 state의 값이 바뀌면 해당 state를 params로 get 요청을 django 서버로 전송하였다.
- django에서는 이를 받아 처리하는데, 오름차순/내림차순, option의 value에 따라 orm의 order_by 기준을 달리 넣어 api로 다시 response하였다.

<br>

## 신경 썼던 점

### 비즈니스 로직과 화면단의 분리

- JS는 서버 개념이 없어서 JS로 비즈니스 로직까지 구현하였다.
- 하지만 React는 프론트 단에 더 집중해서 구현하고 싶었다.
- Django로 서버를 구현해 API를 통해 자체적인 프론트엔드와 백엔드의 분리를 구현하고자 하였다.

<br>

### React Router

- React를 SPA로서 유의미하게 해주고 싶었다.
- 페이지 이동간 새로고침이 없도록 하는 것은 React Router로 구현이 가능했다.
- react-router-dom과 LINK, router parameter를 적극 활용해서 구현하였다.

![화면 전환](https://user-images.githubusercontent.com/86189596/166097388-93be47fa-9425-44da-bbfe-b9da49b72aaf.gif)

<br>

### 반응형 웹사이트

- 이전 JavaScript 프로젝트에서는 JS 문법에 집중하고 싶어서 고정형 레이아웃으로 구현하였다.
- 이번 프로젝트에서는 어떤 방식으로든 반응형으로 작성하여 완성도를 확보하고자 하였다.
- 되도록 CSS 수준에서 구현하고, 필요하다면 부트스트랩 등의 프레임워크도 아끼지 않기로 했다. 

<br>

![반응형 사이트 구현](https://user-images.githubusercontent.com/86189596/166097943-3cccda99-cdbe-41f7-bb42-65c6e53ffc88.gif)

- 레이아웃에 대한 반응형임을 확인해보는 영상이다.
- 메뉴 이미지에 대한 

<br>


## 어려웠던 점

### react-router-dom의 버전 변경

- 기존 학습에서 배웠던 react-router-dom@5.3.0 버전에서는 Router, Switch, Route를 사용했다.
- 이번 프로젝트에 v5으로 적용해보려 하니 에러가 발생했다.(버전을 맞췄는데도)
- v6 문법을 익혀 적용하였다.

<br>

```js
// App.js 

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} exact={true}></Route>
          <Route path='/add-menu' element={<AddMenu />}></Route>
          <Route path='/random-menu' element={<RandomMenu />}></Route>
          <Route path='/login' element={<Login />}></Route>

          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
```

- 현재 페이지 전환을 위해 작성한 라우터 코드이다.
- Nav는 항상 보이게 하기 위해 BrowserRouter 외부에 배치하였다.

<br>

### 랜덤 추천 함수의 미동작

- 랜덤 추천 함수를 만들었는데 버튼과 연결해 어떻게 써야할 지 감을 잡기 어려웠다.

```js
function randomPick() {
  axios.get(`${URL}${PATH}`).then((res) => {
    setRandomMenu(res.data);
  });
}

useEffect(() => {
  randomPick();
}, []);

...

<button className='btn btn-primary btn-quarter' onClick={randomPick}>
  다시 뽑기!!
</button>
```

- axios를 이용해 비동기적으로 데이터를 가져오는 함수 randomPick()을 정의한 뒤, useEffect를 이용해 최초에 자동으로 api를 호출해 한 번 뽑을 수 있도록 하였다.
- 다시 뽑기 버튼에 onClick eventHandler로 randomPick 함수를 지정해 누를 때마다 함수를 호출하도록 하였다.

<br>

### media file의 path가 full url로 나오지 않는 문제

- react component에서 img src로 사용하기 위해서는 full url 형태로 api를 받는 것이 좋다. 하지만 django에서 아무리 serializer나 model을 건드려봐도 해결되지 않았다.

![image](https://user-images.githubusercontent.com/86189596/166266307-a8c6dc60-6080-4d7f-a370-61b05ec9c902.png)

- 꽤나 다양한 공식문서와 StackOverFlow를 참고했음에도 아직 해결하지 못했다. 당장은 임시방편으로 hardcoding 방식으로 결합해 사용하였다.

`axios.get(`${URL}${PATH}`)`

<br>

### axios post에서 csrftoken 문제

- 사진을 formdata를 통해 server로 전달할 때 data를 사용해야 했다. 그러기 위해서는 method가 post여야 하고, django의 csrfToken에 해당하는 headers가 필요했다.

- 인터넷에 온갖 csrf_token을 생성하는 모든 방법들을 조회해 참고했으나 쿠키가 생성되지 않았다.

<br>

> 해결

- csrf_token은 django 서버 차원에서 인증된 사용자에게만 session에 부여된다. 이를 나중에 알아서 로그인을 하는 로직을 django에서 만들었고, 로그인을 통해 구현할 수 있었다.

<br>

## 향후 목표

### 개발 계획

- React 학습 내용을 체득하는 것이 목표인 프로젝트이다.
- 레이아웃이나 디자인, Router, PropType 등 React를 이용한 기능에 초점을 맞춘다.
- 비즈니스 로직 및 FE/BE 간 API 통신은 깊게 고민해 구현 및 개선한다.

<br>

### 구현

- ~~Login 기능~~
- Group 기능
- ~~정렬 기능~~
- 카테고리 및 카테고리 세부 항목 추가 기능
- 메뉴 좋아요 기능
- ~~랜덤 추천 기능~~ 및 추천 딜레이 효과

<br>

### 개선

- 자연스러운 레이아웃
- 이벤트 효과 : 디자인 변화
