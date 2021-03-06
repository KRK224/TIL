# HTML- 블록레벨(Block level) 요소(Elements)와 인라인(Inline) 요소(Elements)

    1. 블록 요소
        + DIV, H1, P
        + 사용 가능한 최대 가로 너비를 사용한다.
        + 크기를 지정할 수 있다.
        + 시작 크기 (width: 100%; height: 0;)
            => 원래는 width: auto; height: auto; 이때 블록은 가로 넓이를 다 사용하기 위해 100%, 높이는 크기만큼 지정.
        + 수직으로 쌓임.
        + margin, padding 위, 아래, 좌, 우 각각 조정 가능하다.

        + 레이아웃을 위한 용도.
    
    2. 인라인 요소
        - SPAN, IMG
        - 필요한 만큼의 너비를 사용한다.
        - 크기를 지정할 수 없다.
        - 시작 크기 (width:0; height: 0;)
            => 원래는 width: auto; height: auto; 이때 인라인은 가로 세로 content 크기만큼 배정.
        - 수평으로 쌓임. (인라인 요소를 줄바꿈으로 사용하면 중간에 띄어씌기가 삽입, __줄바꿈 없으면 붙어서 보임__ )
        - margin, padding __위, 아래는 사용 불가능!!__ => 배경은 아래도 적용되는 듯 보이지만, 실제로는 적용 불가능!

        - text용을 위한 용도.


## Display 속성

    각각의 요소의 속성을 변경할 수 있다. 
    초기값
    div, h1, p {display: block;} / span {display: inline;}

## 04. 주요범위 & 메타데이터

    <html lang= "ko"> // lang 속성은 문서의 기본 언어를 설정.
    [ISO 639-1 코드 목록](https://ko.wikipedia.org/wiki/ISO_639-1_%EC%BD%94%EB%93%9C_%EB%AA%A9%EB%A1%9D)

    국가 표시는 KR / 언어 표시는 ko.

    <!DOCTYPE html> // html5 임을 명시함. 
    <html>
        <head>
            문서의 정보.
            - HTML 문서의 제목 <title> content </title>
            - 기타 정보 <meta> e.g. <meta charset="UTF-8"> // 문자열 집합으로 title 및 각종 tag의 content를 좌우.
            - EUC-KR vs UTF-8
            - 스타일 직접 입력
            - 스타일 외부에서 가져와서 연결
        </head>

        <body>
            문서의 구조.
        </body>
    </html>
    

## ps. 모음

    ##### 박스 모델
    ![Box model image](https://upload.wikimedia.org/wikipedia/commons/7/7a/Boxmodell-detail.png)

    ##### EUC-KR vs UTF-8

        EUC-KR : 완성형
        ex) 김 경 륜 이런 식으로 완성된 문자를 인코딩?
        UTF-8: 조합형
        ex) ㄱ ㅣ ㅁ ㄱ ㅕ ㅇ : 이런 식으로 분리된 형태로 인코딩

    ##### 컨텐츠 카테고리 = block/inline 레벨의 연장선으로 개발된 HTML5 개념?

    ##### http-equiv (meta의 속성)

        http 통신 규약의 헤더 부문에서 특정 정보를 담아서 보낼 수 있음, http-equiv가 그 속성이다.
        <meta http-equive="X-UA-Compatible" content="IE=edge"> // IE 브라우저를 지원하기 위한 코드?


    ##### <meta name =??>
        메타데이터 정보의 구분을 위해 사용됨
        ex. description: 페이지에 대한 짧은 요약 / 즐겨찾기 페이지 기본 설명(Firefox or Opera).

    ##### <meta name="viewport" content="width=device-width, initial-scale=1.0">

        반응형 웹사이트를 제공하기 위한 메타. / 화면(viewport)의 렌더링을 위한 메타. 

        viewport, content = "width=device-width" : 기기의 가로 사이즈에 맞추어 출력

## LINK tag 속성
        <p>
        LINK tag 속성 : href, rel(관계), type(MIME type)
        </p>

## FastCampus ch4-10. 메타데이터 - Base tag
---
    Base Tag의 기능은 상대 경로의 시작을 지정해준다.

    e.g.
    
    <base href="./main/css/">

    <link rel="stylesheet href="main.css"> => <link rel="stylesheet href="./main/css/main.css>
    
    와 동일!

__단, 반드시 한번만 쓸 수 있고,__
__*Base 주소를 입력할 때, 기본 href 값과 바로 붙기 때문에 '/'를 잊지 말고 붙여야한다.*__

---







