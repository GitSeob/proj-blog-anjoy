export const initialState = {
    mainPosts: [{
        User: {
            id: 1,
            nickname: 'anjoy',
            profileImage: 'https://scontent-icn1-1.cdninstagram.com/vp/559b8a8ece4f07cf6e7a457f600968b4/5E4BC5CB/t51.2885-15/e35/s1080x1080/72695011_515793855687177_6497185184176620114_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com&_nc_cat=1'
        },
        postTitle: '테스트',
        postContent: '대한민국의 가수 겸 탤런트. 본명은 이지은이며, 아이유(IU)는 예명이다. 아이유(IU)는 "음악으로 너와 내가 하나가 된다"라는 뜻을 가지고 있다. 2008년에 데뷔하였다. 국민 여동생이라고도 불렸다. 현 시대 여성 솔로 가수 중에서 독보적인 위치를 점하고 있는 한국 가요계의 현재진행형 레전드이자 그 어떤 장르도 소화해내는 만능형 가수라는 평가를 받는다.[22] 로엔 소속 가수 중에 듀엣이나 콜라보 없이 스스로의 힘으로 1위를 기록한 가수는 아이유가 유일하다.',
        image: 'https://scontent-icn1-1.cdninstagram.com/vp/559b8a8ece4f07cf6e7a457f600968b4/5E4BC5CB/t51.2885-15/e35/s1080x1080/72695011_515793855687177_6497185184176620114_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com&_nc_cat=1',
        k: 1
    }],
}

const ADD_DUMMY = 'ADD_DUMMY';

const ADD_POST = 'ADD_POST';

const addDummy = {
    type: ADD_DUMMY,
    data: {
        postTitle : 'Hello',
        postContent : 'fucking rain',
        UserId: 1,
        User: {
            nickname: 'test user',
            profileImage: 'https://scontent-icn1-1.cdninstagram.com/vp/559b8a8ece4f07cf6e7a457f600968b4/5E4BC5CB/t51.2885-15/e35/s1080x1080/72695011_515793855687177_6497185184176620114_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com&_nc_cat=1'
        }
    }
}

const addPost = {
    type: ADD_POST,
}

const reducer = (state = initialState, action ) => {
    switch(action.type){
        case ADD_POST: {
            return {
                ...state,
            }
        }

        case ADD_DUMMY: {
            return {
                ...state,
                mainPosts: [action.data, ...state.mainPosts]
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

export default reducer;