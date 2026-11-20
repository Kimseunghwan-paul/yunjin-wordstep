const extraWeeks = [
  [
    {
      "word": "book",
      "meaning": "책",
      "pos": "명사"
    },
    {
      "word": "pencil",
      "meaning": "연필",
      "pos": "명사"
    },
    {
      "word": "eraser",
      "meaning": "지우개",
      "pos": "명사"
    },
    {
      "word": "ruler",
      "meaning": "자",
      "pos": "명사"
    },
    {
      "word": "desk",
      "meaning": "책상",
      "pos": "명사"
    },
    {
      "word": "chair",
      "meaning": "의자",
      "pos": "명사"
    },
    {
      "word": "notebook",
      "meaning": "공책",
      "pos": "명사"
    },
    {
      "word": "backpack",
      "meaning": "책가방",
      "pos": "명사"
    },
    {
      "word": "classroom",
      "meaning": "교실",
      "pos": "명사"
    },
    {
      "word": "teacher",
      "meaning": "선생님",
      "pos": "명사"
    },
    {
      "word": "student",
      "meaning": "학생",
      "pos": "명사"
    },
    {
      "word": "school",
      "meaning": "학교",
      "pos": "명사"
    },
    {
      "word": "exam",
      "meaning": "시험",
      "pos": "명사"
    },
    {
      "word": "grade",
      "meaning": "성적",
      "pos": "명사"
    },
    {
      "word": "page",
      "meaning": "쪽",
      "pos": "명사"
    },
    {
      "word": "sentence",
      "meaning": "문장",
      "pos": "명사"
    },
    {
      "word": "letter",
      "meaning": "글자",
      "pos": "명사"
    },
    {
      "word": "dictionary",
      "meaning": "사전",
      "pos": "명사"
    },
    {
      "word": "project",
      "meaning": "과제",
      "pos": "명사"
    },
    {
      "word": "schedule",
      "meaning": "일정",
      "pos": "명사"
    },
    {
      "word": "read",
      "meaning": "읽다",
      "pos": "동사"
    },
    {
      "word": "write",
      "meaning": "쓰다",
      "pos": "동사"
    },
    {
      "word": "listen",
      "meaning": "듣다",
      "pos": "동사"
    },
    {
      "word": "speak",
      "meaning": "말하다",
      "pos": "동사"
    },
    {
      "word": "study",
      "meaning": "공부하다",
      "pos": "동사"
    },
    {
      "word": "teach",
      "meaning": "가르치다",
      "pos": "동사"
    },
    {
      "word": "ask",
      "meaning": "묻다",
      "pos": "동사"
    },
    {
      "word": "explain",
      "meaning": "설명하다",
      "pos": "동사"
    },
    {
      "word": "repeat",
      "meaning": "반복하다",
      "pos": "동사"
    },
    {
      "word": "spell",
      "meaning": "철자를 쓰다",
      "pos": "동사"
    },
    {
      "word": "count",
      "meaning": "세다",
      "pos": "동사"
    },
    {
      "word": "draw",
      "meaning": "그리다",
      "pos": "동사"
    },
    {
      "word": "erase",
      "meaning": "지우다",
      "pos": "동사"
    },
    {
      "word": "check",
      "meaning": "확인하다",
      "pos": "동사"
    },
    {
      "word": "finish",
      "meaning": "끝내다",
      "pos": "동사"
    },
    {
      "word": "begin",
      "meaning": "시작하다",
      "pos": "동사"
    },
    {
      "word": "borrow",
      "meaning": "빌리다",
      "pos": "동사"
    },
    {
      "word": "lend",
      "meaning": "빌려주다",
      "pos": "동사"
    },
    {
      "word": "solve",
      "meaning": "풀다",
      "pos": "동사"
    },
    {
      "word": "review",
      "meaning": "복습하다",
      "pos": "동사"
    }
  ],
  [
    {
      "word": "family",
      "meaning": "가족",
      "pos": "명사"
    },
    {
      "word": "parent",
      "meaning": "부모",
      "pos": "명사"
    },
    {
      "word": "mother",
      "meaning": "어머니",
      "pos": "명사"
    },
    {
      "word": "father",
      "meaning": "아버지",
      "pos": "명사"
    },
    {
      "word": "sister",
      "meaning": "여자 형제",
      "pos": "명사"
    },
    {
      "word": "brother",
      "meaning": "남자 형제",
      "pos": "명사"
    },
    {
      "word": "cousin",
      "meaning": "사촌",
      "pos": "명사"
    },
    {
      "word": "grandmother",
      "meaning": "할머니",
      "pos": "명사"
    },
    {
      "word": "grandfather",
      "meaning": "할아버지",
      "pos": "명사"
    },
    {
      "word": "neighbor",
      "meaning": "이웃",
      "pos": "명사"
    },
    {
      "word": "house",
      "meaning": "집",
      "pos": "명사"
    },
    {
      "word": "room",
      "meaning": "방",
      "pos": "명사"
    },
    {
      "word": "kitchen",
      "meaning": "부엌",
      "pos": "명사"
    },
    {
      "word": "bathroom",
      "meaning": "욕실",
      "pos": "명사"
    },
    {
      "word": "bedroom",
      "meaning": "침실",
      "pos": "명사"
    },
    {
      "word": "garden",
      "meaning": "정원",
      "pos": "명사"
    },
    {
      "word": "door",
      "meaning": "문",
      "pos": "명사"
    },
    {
      "word": "window",
      "meaning": "창문",
      "pos": "명사"
    },
    {
      "word": "floor",
      "meaning": "바닥",
      "pos": "명사"
    },
    {
      "word": "wall",
      "meaning": "벽",
      "pos": "명사"
    },
    {
      "word": "live",
      "meaning": "살다",
      "pos": "동사"
    },
    {
      "word": "love",
      "meaning": "사랑하다",
      "pos": "동사"
    },
    {
      "word": "help",
      "meaning": "돕다",
      "pos": "동사"
    },
    {
      "word": "share",
      "meaning": "나누다",
      "pos": "동사"
    },
    {
      "word": "care",
      "meaning": "신경 쓰다",
      "pos": "동사"
    },
    {
      "word": "visit",
      "meaning": "방문하다",
      "pos": "동사"
    },
    {
      "word": "meet",
      "meaning": "만나다",
      "pos": "동사"
    },
    {
      "word": "hug",
      "meaning": "껴안다",
      "pos": "동사"
    },
    {
      "word": "smile",
      "meaning": "미소 짓다",
      "pos": "동사"
    },
    {
      "word": "laugh",
      "meaning": "웃다",
      "pos": "동사"
    },
    {
      "word": "clean",
      "meaning": "청소하다",
      "pos": "동사"
    },
    {
      "word": "wash",
      "meaning": "씻다",
      "pos": "동사"
    },
    {
      "word": "cook",
      "meaning": "요리하다",
      "pos": "동사"
    },
    {
      "word": "open",
      "meaning": "열다",
      "pos": "동사"
    },
    {
      "word": "close",
      "meaning": "닫다",
      "pos": "동사"
    },
    {
      "word": "sleep",
      "meaning": "자다",
      "pos": "동사"
    },
    {
      "word": "wake",
      "meaning": "잠에서 깨다",
      "pos": "동사"
    },
    {
      "word": "rest",
      "meaning": "쉬다",
      "pos": "동사"
    },
    {
      "word": "stay",
      "meaning": "머무르다",
      "pos": "동사"
    },
    {
      "word": "move",
      "meaning": "이사하다",
      "pos": "동사"
    }
  ],
  [
    {
      "word": "lunch",
      "meaning": "점심 식사",
      "pos": "명사"
    },
    {
      "word": "dinner",
      "meaning": "저녁 식사",
      "pos": "명사"
    },
    {
      "word": "meal",
      "meaning": "식사",
      "pos": "명사"
    },
    {
      "word": "snack",
      "meaning": "간식",
      "pos": "명사"
    },
    {
      "word": "rice",
      "meaning": "쌀; 밥",
      "pos": "명사"
    },
    {
      "word": "bread",
      "meaning": "빵",
      "pos": "명사"
    },
    {
      "word": "milk",
      "meaning": "우유",
      "pos": "명사"
    },
    {
      "word": "water",
      "meaning": "물",
      "pos": "명사"
    },
    {
      "word": "juice",
      "meaning": "주스",
      "pos": "명사"
    },
    {
      "word": "fruit",
      "meaning": "과일",
      "pos": "명사"
    },
    {
      "word": "vegetable",
      "meaning": "채소",
      "pos": "명사"
    },
    {
      "word": "meat",
      "meaning": "고기",
      "pos": "명사"
    },
    {
      "word": "chicken",
      "meaning": "닭고기",
      "pos": "명사"
    },
    {
      "word": "fish",
      "meaning": "생선",
      "pos": "명사"
    },
    {
      "word": "egg",
      "meaning": "달걀",
      "pos": "명사"
    },
    {
      "word": "soup",
      "meaning": "수프",
      "pos": "명사"
    },
    {
      "word": "salt",
      "meaning": "소금",
      "pos": "명사"
    },
    {
      "word": "sugar",
      "meaning": "설탕",
      "pos": "명사"
    },
    {
      "word": "plate",
      "meaning": "접시",
      "pos": "명사"
    },
    {
      "word": "spoon",
      "meaning": "숟가락",
      "pos": "명사"
    },
    {
      "word": "eat",
      "meaning": "먹다",
      "pos": "동사"
    },
    {
      "word": "drink",
      "meaning": "마시다",
      "pos": "동사"
    },
    {
      "word": "bake",
      "meaning": "굽다",
      "pos": "동사"
    },
    {
      "word": "boil",
      "meaning": "끓이다",
      "pos": "동사"
    },
    {
      "word": "fry",
      "meaning": "기름에 튀기다",
      "pos": "동사"
    },
    {
      "word": "cut",
      "meaning": "자르다",
      "pos": "동사"
    },
    {
      "word": "mix",
      "meaning": "섞다",
      "pos": "동사"
    },
    {
      "word": "pour",
      "meaning": "붓다",
      "pos": "동사"
    },
    {
      "word": "add",
      "meaning": "더하다",
      "pos": "동사"
    },
    {
      "word": "taste",
      "meaning": "맛보다",
      "pos": "동사"
    },
    {
      "word": "smell",
      "meaning": "냄새를 맡다",
      "pos": "동사"
    },
    {
      "word": "order",
      "meaning": "주문하다",
      "pos": "동사"
    },
    {
      "word": "serve",
      "meaning": "음식을 내다",
      "pos": "동사"
    },
    {
      "word": "pass",
      "meaning": "건네주다",
      "pos": "동사"
    },
    {
      "word": "fill",
      "meaning": "채우다",
      "pos": "동사"
    },
    {
      "word": "peel",
      "meaning": "껍질을 벗기다",
      "pos": "동사"
    },
    {
      "word": "slice",
      "meaning": "얇게 썰다",
      "pos": "동사"
    },
    {
      "word": "stir",
      "meaning": "젓다",
      "pos": "동사"
    },
    {
      "word": "chew",
      "meaning": "씹다",
      "pos": "동사"
    },
    {
      "word": "swallow",
      "meaning": "삼키다",
      "pos": "동사"
    }
  ],
  [
    {
      "word": "body",
      "meaning": "몸",
      "pos": "명사"
    },
    {
      "word": "head",
      "meaning": "머리",
      "pos": "명사"
    },
    {
      "word": "face",
      "meaning": "얼굴",
      "pos": "명사"
    },
    {
      "word": "eye",
      "meaning": "눈",
      "pos": "명사"
    },
    {
      "word": "ear",
      "meaning": "귀",
      "pos": "명사"
    },
    {
      "word": "nose",
      "meaning": "코",
      "pos": "명사"
    },
    {
      "word": "mouth",
      "meaning": "입",
      "pos": "명사"
    },
    {
      "word": "tooth",
      "meaning": "치아",
      "pos": "명사"
    },
    {
      "word": "hand",
      "meaning": "손",
      "pos": "명사"
    },
    {
      "word": "foot",
      "meaning": "발",
      "pos": "명사"
    },
    {
      "word": "arm",
      "meaning": "팔",
      "pos": "명사"
    },
    {
      "word": "leg",
      "meaning": "다리",
      "pos": "명사"
    },
    {
      "word": "finger",
      "meaning": "손가락",
      "pos": "명사"
    },
    {
      "word": "heart",
      "meaning": "심장",
      "pos": "명사"
    },
    {
      "word": "stomach",
      "meaning": "위; 배",
      "pos": "명사"
    },
    {
      "word": "health",
      "meaning": "건강",
      "pos": "명사"
    },
    {
      "word": "doctor",
      "meaning": "의사",
      "pos": "명사"
    },
    {
      "word": "nurse",
      "meaning": "간호사",
      "pos": "명사"
    },
    {
      "word": "hospital",
      "meaning": "병원",
      "pos": "명사"
    },
    {
      "word": "medicine",
      "meaning": "약",
      "pos": "명사"
    },
    {
      "word": "walk",
      "meaning": "걷다",
      "pos": "동사"
    },
    {
      "word": "run",
      "meaning": "달리다",
      "pos": "동사"
    },
    {
      "word": "jump",
      "meaning": "뛰어오르다",
      "pos": "동사"
    },
    {
      "word": "sit",
      "meaning": "앉다",
      "pos": "동사"
    },
    {
      "word": "stand",
      "meaning": "서다",
      "pos": "동사"
    },
    {
      "word": "bend",
      "meaning": "구부리다",
      "pos": "동사"
    },
    {
      "word": "stretch",
      "meaning": "몸을 쭉 펴다",
      "pos": "동사"
    },
    {
      "word": "breathe",
      "meaning": "숨 쉬다",
      "pos": "동사"
    },
    {
      "word": "cough",
      "meaning": "기침하다",
      "pos": "동사"
    },
    {
      "word": "sneeze",
      "meaning": "재채기하다",
      "pos": "동사"
    },
    {
      "word": "hurt",
      "meaning": "아프게 하다",
      "pos": "동사"
    },
    {
      "word": "heal",
      "meaning": "낫다",
      "pos": "동사"
    },
    {
      "word": "grow",
      "meaning": "자라다",
      "pos": "동사"
    },
    {
      "word": "feel",
      "meaning": "느끼다",
      "pos": "동사"
    },
    {
      "word": "touch",
      "meaning": "만지다",
      "pos": "동사"
    },
    {
      "word": "see",
      "meaning": "보다",
      "pos": "동사"
    },
    {
      "word": "hear",
      "meaning": "소리가 들리다",
      "pos": "동사"
    },
    {
      "word": "brush",
      "meaning": "솔질하다",
      "pos": "동사"
    },
    {
      "word": "relax",
      "meaning": "긴장을 풀다",
      "pos": "동사"
    },
    {
      "word": "recover",
      "meaning": "회복하다",
      "pos": "동사"
    }
  ],
  [
    {
      "word": "hobby",
      "meaning": "취미",
      "pos": "명사"
    },
    {
      "word": "music",
      "meaning": "음악",
      "pos": "명사"
    },
    {
      "word": "song",
      "meaning": "노래",
      "pos": "명사"
    },
    {
      "word": "piano",
      "meaning": "피아노",
      "pos": "명사"
    },
    {
      "word": "guitar",
      "meaning": "기타",
      "pos": "명사"
    },
    {
      "word": "violin",
      "meaning": "바이올린",
      "pos": "명사"
    },
    {
      "word": "movie",
      "meaning": "영화",
      "pos": "명사"
    },
    {
      "word": "picture",
      "meaning": "그림; 사진",
      "pos": "명사"
    },
    {
      "word": "camera",
      "meaning": "카메라",
      "pos": "명사"
    },
    {
      "word": "art",
      "meaning": "미술",
      "pos": "명사"
    },
    {
      "word": "sport",
      "meaning": "스포츠",
      "pos": "명사"
    },
    {
      "word": "soccer",
      "meaning": "축구",
      "pos": "명사"
    },
    {
      "word": "baseball",
      "meaning": "야구",
      "pos": "명사"
    },
    {
      "word": "basketball",
      "meaning": "농구",
      "pos": "명사"
    },
    {
      "word": "tennis",
      "meaning": "테니스",
      "pos": "명사"
    },
    {
      "word": "team",
      "meaning": "팀",
      "pos": "명사"
    },
    {
      "word": "player",
      "meaning": "선수",
      "pos": "명사"
    },
    {
      "word": "game",
      "meaning": "경기; 게임",
      "pos": "명사"
    },
    {
      "word": "ball",
      "meaning": "공",
      "pos": "명사"
    },
    {
      "word": "concert",
      "meaning": "음악회",
      "pos": "명사"
    },
    {
      "word": "play",
      "meaning": "놀다; 경기하다",
      "pos": "동사"
    },
    {
      "word": "sing",
      "meaning": "노래하다",
      "pos": "동사"
    },
    {
      "word": "dance",
      "meaning": "춤추다",
      "pos": "동사"
    },
    {
      "word": "paint",
      "meaning": "물감으로 그리다",
      "pos": "동사"
    },
    {
      "word": "watch",
      "meaning": "지켜보다",
      "pos": "동사"
    },
    {
      "word": "collect",
      "meaning": "모으다",
      "pos": "동사"
    },
    {
      "word": "swim",
      "meaning": "수영하다",
      "pos": "동사"
    },
    {
      "word": "ride",
      "meaning": "타다",
      "pos": "동사"
    },
    {
      "word": "throw",
      "meaning": "던지다",
      "pos": "동사"
    },
    {
      "word": "catch",
      "meaning": "잡다",
      "pos": "동사"
    },
    {
      "word": "kick",
      "meaning": "발로 차다",
      "pos": "동사"
    },
    {
      "word": "hit",
      "meaning": "치다",
      "pos": "동사"
    },
    {
      "word": "win",
      "meaning": "이기다",
      "pos": "동사"
    },
    {
      "word": "lose",
      "meaning": "지다",
      "pos": "동사"
    },
    {
      "word": "join",
      "meaning": "참가하다",
      "pos": "동사"
    },
    {
      "word": "compete",
      "meaning": "경쟁하다",
      "pos": "동사"
    },
    {
      "word": "clap",
      "meaning": "박수치다",
      "pos": "동사"
    },
    {
      "word": "cheer",
      "meaning": "응원하다",
      "pos": "동사"
    },
    {
      "word": "skate",
      "meaning": "스케이트를 타다",
      "pos": "동사"
    },
    {
      "word": "ski",
      "meaning": "스키를 타다",
      "pos": "동사"
    }
  ],
  [
    {
      "word": "city",
      "meaning": "도시",
      "pos": "명사"
    },
    {
      "word": "town",
      "meaning": "마을",
      "pos": "명사"
    },
    {
      "word": "street",
      "meaning": "거리",
      "pos": "명사"
    },
    {
      "word": "road",
      "meaning": "도로",
      "pos": "명사"
    },
    {
      "word": "park",
      "meaning": "공원",
      "pos": "명사"
    },
    {
      "word": "store",
      "meaning": "가게",
      "pos": "명사"
    },
    {
      "word": "market",
      "meaning": "시장",
      "pos": "명사"
    },
    {
      "word": "bank",
      "meaning": "은행",
      "pos": "명사"
    },
    {
      "word": "museum",
      "meaning": "박물관",
      "pos": "명사"
    },
    {
      "word": "station",
      "meaning": "역",
      "pos": "명사"
    },
    {
      "word": "airport",
      "meaning": "공항",
      "pos": "명사"
    },
    {
      "word": "bus",
      "meaning": "버스",
      "pos": "명사"
    },
    {
      "word": "train",
      "meaning": "기차",
      "pos": "명사"
    },
    {
      "word": "car",
      "meaning": "자동차",
      "pos": "명사"
    },
    {
      "word": "bicycle",
      "meaning": "자전거",
      "pos": "명사"
    },
    {
      "word": "subway",
      "meaning": "지하철",
      "pos": "명사"
    },
    {
      "word": "bridge",
      "meaning": "다리; 교량",
      "pos": "명사"
    },
    {
      "word": "map",
      "meaning": "지도",
      "pos": "명사"
    },
    {
      "word": "ticket",
      "meaning": "표",
      "pos": "명사"
    },
    {
      "word": "traffic",
      "meaning": "교통",
      "pos": "명사"
    },
    {
      "word": "go",
      "meaning": "가다",
      "pos": "동사"
    },
    {
      "word": "come",
      "meaning": "오다",
      "pos": "동사"
    },
    {
      "word": "leave",
      "meaning": "떠나다",
      "pos": "동사"
    },
    {
      "word": "return",
      "meaning": "돌아오다",
      "pos": "동사"
    },
    {
      "word": "cross",
      "meaning": "건너다",
      "pos": "동사"
    },
    {
      "word": "turn",
      "meaning": "방향을 바꾸다",
      "pos": "동사"
    },
    {
      "word": "stop",
      "meaning": "멈추다",
      "pos": "동사"
    },
    {
      "word": "wait",
      "meaning": "기다리다",
      "pos": "동사"
    },
    {
      "word": "follow",
      "meaning": "따라가다",
      "pos": "동사"
    },
    {
      "word": "lead",
      "meaning": "이끌다",
      "pos": "동사"
    },
    {
      "word": "drive",
      "meaning": "운전하다",
      "pos": "동사"
    },
    {
      "word": "fly",
      "meaning": "날다",
      "pos": "동사"
    },
    {
      "word": "sail",
      "meaning": "항해하다",
      "pos": "동사"
    },
    {
      "word": "reach",
      "meaning": "도달하다",
      "pos": "동사"
    },
    {
      "word": "enter",
      "meaning": "들어가다",
      "pos": "동사"
    },
    {
      "word": "exit",
      "meaning": "나가다",
      "pos": "동사"
    },
    {
      "word": "carry",
      "meaning": "나르다",
      "pos": "동사"
    },
    {
      "word": "send",
      "meaning": "보내다",
      "pos": "동사"
    },
    {
      "word": "bring",
      "meaning": "가져오다",
      "pos": "동사"
    },
    {
      "word": "explore",
      "meaning": "탐험하다",
      "pos": "동사"
    }
  ],
  [
    {
      "word": "sun",
      "meaning": "태양",
      "pos": "명사"
    },
    {
      "word": "moon",
      "meaning": "달",
      "pos": "명사"
    },
    {
      "word": "star",
      "meaning": "별",
      "pos": "명사"
    },
    {
      "word": "sky",
      "meaning": "하늘",
      "pos": "명사"
    },
    {
      "word": "cloud",
      "meaning": "구름",
      "pos": "명사"
    },
    {
      "word": "rain",
      "meaning": "비",
      "pos": "명사"
    },
    {
      "word": "snow",
      "meaning": "눈; 눈송이",
      "pos": "명사"
    },
    {
      "word": "wind",
      "meaning": "바람",
      "pos": "명사"
    },
    {
      "word": "storm",
      "meaning": "폭풍",
      "pos": "명사"
    },
    {
      "word": "forest",
      "meaning": "숲",
      "pos": "명사"
    },
    {
      "word": "tree",
      "meaning": "나무",
      "pos": "명사"
    },
    {
      "word": "flower",
      "meaning": "꽃",
      "pos": "명사"
    },
    {
      "word": "leaf",
      "meaning": "잎",
      "pos": "명사"
    },
    {
      "word": "grass",
      "meaning": "풀",
      "pos": "명사"
    },
    {
      "word": "sea",
      "meaning": "바다",
      "pos": "명사"
    },
    {
      "word": "beach",
      "meaning": "해변",
      "pos": "명사"
    },
    {
      "word": "island",
      "meaning": "섬",
      "pos": "명사"
    },
    {
      "word": "lake",
      "meaning": "호수",
      "pos": "명사"
    },
    {
      "word": "animal",
      "meaning": "동물",
      "pos": "명사"
    },
    {
      "word": "bird",
      "meaning": "새",
      "pos": "명사"
    },
    {
      "word": "climb",
      "meaning": "오르다",
      "pos": "동사"
    },
    {
      "word": "plant",
      "meaning": "심다",
      "pos": "동사"
    },
    {
      "word": "bloom",
      "meaning": "꽃이 피다",
      "pos": "동사"
    },
    {
      "word": "shine",
      "meaning": "빛나다",
      "pos": "동사"
    },
    {
      "word": "blow",
      "meaning": "불다",
      "pos": "동사"
    },
    {
      "word": "fall",
      "meaning": "떨어지다",
      "pos": "동사"
    },
    {
      "word": "rise",
      "meaning": "떠오르다",
      "pos": "동사"
    },
    {
      "word": "flow",
      "meaning": "흐르다",
      "pos": "동사"
    },
    {
      "word": "freeze",
      "meaning": "얼다",
      "pos": "동사"
    },
    {
      "word": "melt",
      "meaning": "녹다",
      "pos": "동사"
    },
    {
      "word": "feed",
      "meaning": "먹이를 주다",
      "pos": "동사"
    },
    {
      "word": "hunt",
      "meaning": "사냥하다",
      "pos": "동사"
    },
    {
      "word": "hide",
      "meaning": "숨다",
      "pos": "동사"
    },
    {
      "word": "survive",
      "meaning": "살아남다",
      "pos": "동사"
    },
    {
      "word": "save",
      "meaning": "구하다",
      "pos": "동사"
    },
    {
      "word": "pollute",
      "meaning": "오염시키다",
      "pos": "동사"
    },
    {
      "word": "waste",
      "meaning": "낭비하다",
      "pos": "동사"
    },
    {
      "word": "reduce",
      "meaning": "줄이다",
      "pos": "동사"
    },
    {
      "word": "reuse",
      "meaning": "재사용하다",
      "pos": "동사"
    },
    {
      "word": "disappear",
      "meaning": "사라지다",
      "pos": "동사"
    }
  ],
  [
    {
      "word": "shirt",
      "meaning": "셔츠",
      "pos": "명사"
    },
    {
      "word": "pants",
      "meaning": "바지",
      "pos": "명사"
    },
    {
      "word": "skirt",
      "meaning": "치마",
      "pos": "명사"
    },
    {
      "word": "dress",
      "meaning": "원피스",
      "pos": "명사"
    },
    {
      "word": "coat",
      "meaning": "외투",
      "pos": "명사"
    },
    {
      "word": "jacket",
      "meaning": "재킷",
      "pos": "명사"
    },
    {
      "word": "hat",
      "meaning": "모자",
      "pos": "명사"
    },
    {
      "word": "shoe",
      "meaning": "신발",
      "pos": "명사"
    },
    {
      "word": "sock",
      "meaning": "양말",
      "pos": "명사"
    },
    {
      "word": "glove",
      "meaning": "장갑",
      "pos": "명사"
    },
    {
      "word": "scarf",
      "meaning": "목도리",
      "pos": "명사"
    },
    {
      "word": "umbrella",
      "meaning": "우산",
      "pos": "명사"
    },
    {
      "word": "wallet",
      "meaning": "지갑",
      "pos": "명사"
    },
    {
      "word": "money",
      "meaning": "돈",
      "pos": "명사"
    },
    {
      "word": "price",
      "meaning": "가격",
      "pos": "명사"
    },
    {
      "word": "size",
      "meaning": "크기",
      "pos": "명사"
    },
    {
      "word": "color",
      "meaning": "색깔",
      "pos": "명사"
    },
    {
      "word": "gift",
      "meaning": "선물",
      "pos": "명사"
    },
    {
      "word": "bag",
      "meaning": "가방",
      "pos": "명사"
    },
    {
      "word": "receipt",
      "meaning": "영수증",
      "pos": "명사"
    },
    {
      "word": "buy",
      "meaning": "사다",
      "pos": "동사"
    },
    {
      "word": "sell",
      "meaning": "팔다",
      "pos": "동사"
    },
    {
      "word": "pay",
      "meaning": "지불하다",
      "pos": "동사"
    },
    {
      "word": "spend",
      "meaning": "돈을 쓰다",
      "pos": "동사"
    },
    {
      "word": "cost",
      "meaning": "비용이 들다",
      "pos": "동사"
    },
    {
      "word": "wear",
      "meaning": "입고 있다",
      "pos": "동사"
    },
    {
      "word": "try",
      "meaning": "시도하다",
      "pos": "동사"
    },
    {
      "word": "fit",
      "meaning": "크기가 맞다",
      "pos": "동사"
    },
    {
      "word": "pick",
      "meaning": "고르다",
      "pos": "동사"
    },
    {
      "word": "compare",
      "meaning": "비교하다",
      "pos": "동사"
    },
    {
      "word": "change",
      "meaning": "바꾸다",
      "pos": "동사"
    },
    {
      "word": "wrap",
      "meaning": "포장하다",
      "pos": "동사"
    },
    {
      "word": "pack",
      "meaning": "짐을 싸다",
      "pos": "동사"
    },
    {
      "word": "unpack",
      "meaning": "짐을 풀다",
      "pos": "동사"
    },
    {
      "word": "fold",
      "meaning": "접다",
      "pos": "동사"
    },
    {
      "word": "hang",
      "meaning": "걸다",
      "pos": "동사"
    },
    {
      "word": "repair",
      "meaning": "수리하다",
      "pos": "동사"
    },
    {
      "word": "need",
      "meaning": "필요로 하다",
      "pos": "동사"
    },
    {
      "word": "want",
      "meaning": "원하다",
      "pos": "동사"
    },
    {
      "word": "prefer",
      "meaning": "더 좋아하다",
      "pos": "동사"
    }
  ],
  [
    {
      "word": "friend",
      "meaning": "친구",
      "pos": "명사"
    },
    {
      "word": "person",
      "meaning": "사람",
      "pos": "명사"
    },
    {
      "word": "child",
      "meaning": "아이",
      "pos": "명사"
    },
    {
      "word": "adult",
      "meaning": "어른",
      "pos": "명사"
    },
    {
      "word": "visitor",
      "meaning": "방문객",
      "pos": "명사"
    },
    {
      "word": "guest",
      "meaning": "손님",
      "pos": "명사"
    },
    {
      "word": "member",
      "meaning": "회원",
      "pos": "명사"
    },
    {
      "word": "leader",
      "meaning": "지도자",
      "pos": "명사"
    },
    {
      "word": "partner",
      "meaning": "짝; 동료",
      "pos": "명사"
    },
    {
      "word": "group",
      "meaning": "집단",
      "pos": "명사"
    },
    {
      "word": "name",
      "meaning": "이름",
      "pos": "명사"
    },
    {
      "word": "voice",
      "meaning": "목소리",
      "pos": "명사"
    },
    {
      "word": "idea",
      "meaning": "생각",
      "pos": "명사"
    },
    {
      "word": "opinion",
      "meaning": "의견",
      "pos": "명사"
    },
    {
      "word": "reason",
      "meaning": "이유",
      "pos": "명사"
    },
    {
      "word": "problem",
      "meaning": "문제",
      "pos": "명사"
    },
    {
      "word": "mistake",
      "meaning": "실수",
      "pos": "명사"
    },
    {
      "word": "secret",
      "meaning": "비밀",
      "pos": "명사"
    },
    {
      "word": "message",
      "meaning": "메시지",
      "pos": "명사"
    },
    {
      "word": "conversation",
      "meaning": "대화",
      "pos": "명사"
    },
    {
      "word": "talk",
      "meaning": "이야기하다",
      "pos": "동사"
    },
    {
      "word": "tell",
      "meaning": "말해 주다",
      "pos": "동사"
    },
    {
      "word": "say",
      "meaning": "말하다",
      "pos": "동사"
    },
    {
      "word": "call",
      "meaning": "전화하다",
      "pos": "동사"
    },
    {
      "word": "greet",
      "meaning": "인사하다",
      "pos": "동사"
    },
    {
      "word": "thank",
      "meaning": "감사하다",
      "pos": "동사"
    },
    {
      "word": "welcome",
      "meaning": "환영하다",
      "pos": "동사"
    },
    {
      "word": "trust",
      "meaning": "믿고 의지하다",
      "pos": "동사"
    },
    {
      "word": "believe",
      "meaning": "믿다",
      "pos": "동사"
    },
    {
      "word": "agree",
      "meaning": "동의하다",
      "pos": "동사"
    },
    {
      "word": "disagree",
      "meaning": "동의하지 않다",
      "pos": "동사"
    },
    {
      "word": "argue",
      "meaning": "말다툼하다",
      "pos": "동사"
    },
    {
      "word": "forgive",
      "meaning": "용서하다",
      "pos": "동사"
    },
    {
      "word": "apologize",
      "meaning": "사과하다",
      "pos": "동사"
    },
    {
      "word": "respect",
      "meaning": "존중하다",
      "pos": "동사"
    },
    {
      "word": "support",
      "meaning": "지지하다",
      "pos": "동사"
    },
    {
      "word": "encourage",
      "meaning": "격려하다",
      "pos": "동사"
    },
    {
      "word": "introduce",
      "meaning": "소개하다",
      "pos": "동사"
    },
    {
      "word": "suggest",
      "meaning": "제안하다",
      "pos": "동사"
    },
    {
      "word": "refuse",
      "meaning": "거절하다",
      "pos": "동사"
    }
  ],
  [
    {
      "word": "computer",
      "meaning": "컴퓨터",
      "pos": "명사"
    },
    {
      "word": "phone",
      "meaning": "전화기",
      "pos": "명사"
    },
    {
      "word": "screen",
      "meaning": "화면",
      "pos": "명사"
    },
    {
      "word": "keyboard",
      "meaning": "키보드",
      "pos": "명사"
    },
    {
      "word": "mouse",
      "meaning": "컴퓨터 마우스",
      "pos": "명사"
    },
    {
      "word": "internet",
      "meaning": "인터넷",
      "pos": "명사"
    },
    {
      "word": "website",
      "meaning": "웹사이트",
      "pos": "명사"
    },
    {
      "word": "email",
      "meaning": "이메일",
      "pos": "명사"
    },
    {
      "word": "password",
      "meaning": "비밀번호",
      "pos": "명사"
    },
    {
      "word": "file",
      "meaning": "파일",
      "pos": "명사"
    },
    {
      "word": "science",
      "meaning": "과학",
      "pos": "명사"
    },
    {
      "word": "energy",
      "meaning": "에너지",
      "pos": "명사"
    },
    {
      "word": "light",
      "meaning": "빛",
      "pos": "명사"
    },
    {
      "word": "sound",
      "meaning": "소리",
      "pos": "명사"
    },
    {
      "word": "machine",
      "meaning": "기계",
      "pos": "명사"
    },
    {
      "word": "robot",
      "meaning": "로봇",
      "pos": "명사"
    },
    {
      "word": "space",
      "meaning": "우주",
      "pos": "명사"
    },
    {
      "word": "planet",
      "meaning": "행성",
      "pos": "명사"
    },
    {
      "word": "experiment",
      "meaning": "실험",
      "pos": "명사"
    },
    {
      "word": "information",
      "meaning": "정보",
      "pos": "명사"
    },
    {
      "word": "use",
      "meaning": "사용하다",
      "pos": "동사"
    },
    {
      "word": "make",
      "meaning": "만들다",
      "pos": "동사"
    },
    {
      "word": "build",
      "meaning": "짓다",
      "pos": "동사"
    },
    {
      "word": "create",
      "meaning": "창조하다",
      "pos": "동사"
    },
    {
      "word": "invent",
      "meaning": "발명하다",
      "pos": "동사"
    },
    {
      "word": "discover",
      "meaning": "발견하다",
      "pos": "동사"
    },
    {
      "word": "search",
      "meaning": "찾아보다",
      "pos": "동사"
    },
    {
      "word": "find",
      "meaning": "찾아내다",
      "pos": "동사"
    },
    {
      "word": "click",
      "meaning": "클릭하다",
      "pos": "동사"
    },
    {
      "word": "type",
      "meaning": "타자를 치다",
      "pos": "동사"
    },
    {
      "word": "print",
      "meaning": "인쇄하다",
      "pos": "동사"
    },
    {
      "word": "connect",
      "meaning": "연결하다",
      "pos": "동사"
    },
    {
      "word": "charge",
      "meaning": "충전하다",
      "pos": "동사"
    },
    {
      "word": "record",
      "meaning": "기록하다",
      "pos": "동사"
    },
    {
      "word": "measure",
      "meaning": "측정하다",
      "pos": "동사"
    },
    {
      "word": "observe",
      "meaning": "관찰하다",
      "pos": "동사"
    },
    {
      "word": "test",
      "meaning": "시험하다",
      "pos": "동사"
    },
    {
      "word": "control",
      "meaning": "조절하다",
      "pos": "동사"
    },
    {
      "word": "develop",
      "meaning": "개발하다",
      "pos": "동사"
    },
    {
      "word": "improve",
      "meaning": "향상시키다",
      "pos": "동사"
    }
  ],
  [
    {
      "word": "time",
      "meaning": "시간",
      "pos": "명사"
    },
    {
      "word": "hour",
      "meaning": "시간 단위",
      "pos": "명사"
    },
    {
      "word": "day",
      "meaning": "하루",
      "pos": "명사"
    },
    {
      "word": "week",
      "meaning": "주",
      "pos": "명사"
    },
    {
      "word": "month",
      "meaning": "달; 월",
      "pos": "명사"
    },
    {
      "word": "year",
      "meaning": "해; 년",
      "pos": "명사"
    },
    {
      "word": "morning",
      "meaning": "아침",
      "pos": "명사"
    },
    {
      "word": "afternoon",
      "meaning": "오후",
      "pos": "명사"
    },
    {
      "word": "evening",
      "meaning": "저녁",
      "pos": "명사"
    },
    {
      "word": "night",
      "meaning": "밤",
      "pos": "명사"
    },
    {
      "word": "weekend",
      "meaning": "주말",
      "pos": "명사"
    },
    {
      "word": "holiday",
      "meaning": "휴일",
      "pos": "명사"
    },
    {
      "word": "birthday",
      "meaning": "생일",
      "pos": "명사"
    },
    {
      "word": "future",
      "meaning": "미래",
      "pos": "명사"
    },
    {
      "word": "past",
      "meaning": "과거",
      "pos": "명사"
    },
    {
      "word": "goal",
      "meaning": "목표",
      "pos": "명사"
    },
    {
      "word": "dream",
      "meaning": "꿈",
      "pos": "명사"
    },
    {
      "word": "plan",
      "meaning": "계획",
      "pos": "명사"
    },
    {
      "word": "chance",
      "meaning": "기회",
      "pos": "명사"
    },
    {
      "word": "experience",
      "meaning": "경험",
      "pos": "명사"
    },
    {
      "word": "think",
      "meaning": "생각하다",
      "pos": "동사"
    },
    {
      "word": "know",
      "meaning": "알다",
      "pos": "동사"
    },
    {
      "word": "forget",
      "meaning": "잊다",
      "pos": "동사"
    },
    {
      "word": "decide",
      "meaning": "결정하다",
      "pos": "동사"
    },
    {
      "word": "hope",
      "meaning": "바라다",
      "pos": "동사"
    },
    {
      "word": "wish",
      "meaning": "소망하다",
      "pos": "동사"
    },
    {
      "word": "expect",
      "meaning": "기대하다",
      "pos": "동사"
    },
    {
      "word": "imagine",
      "meaning": "상상하다",
      "pos": "동사"
    },
    {
      "word": "continue",
      "meaning": "계속하다",
      "pos": "동사"
    },
    {
      "word": "keep",
      "meaning": "유지하다",
      "pos": "동사"
    },
    {
      "word": "spare",
      "meaning": "시간 등을 내주다",
      "pos": "동사"
    },
    {
      "word": "happen",
      "meaning": "일어나다",
      "pos": "동사"
    },
    {
      "word": "become",
      "meaning": "~이 되다",
      "pos": "동사"
    },
    {
      "word": "seem",
      "meaning": "~인 것 같다",
      "pos": "동사"
    },
    {
      "word": "achieve",
      "meaning": "성취하다",
      "pos": "동사"
    },
    {
      "word": "succeed",
      "meaning": "성공하다",
      "pos": "동사"
    },
    {
      "word": "fail",
      "meaning": "실패하다",
      "pos": "동사"
    },
    {
      "word": "attempt",
      "meaning": "시도하다; 도전하다",
      "pos": "동사"
    },
    {
      "word": "complete",
      "meaning": "완성하다",
      "pos": "동사"
    },
    {
      "word": "celebrate",
      "meaning": "축하하다",
      "pos": "동사"
    }
  ]
];
