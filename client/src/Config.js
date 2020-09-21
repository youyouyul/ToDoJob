export const USER_SERVER = '/api/users';
export const TODO_SERVER = '/api/todos';
export const CARD_SERVER = '/api/cards';

// export const PREPARING = 0;
// export const WAITING = 1;
// export const DONE = 2;

export const DOING = 0;
export const WAITING = 1;
export const IN = 2;
export const OUT = 3;

export const RESUME = 0;
export const TEST = 1;
export const INTERVIEW = 2;
export const FINAL = 3;

export function processCode(code) {
    switch(code) {
        case 0:
            return "서류";
        case 1:
            return "시험";
        case 2:
            return "면접";
        case 3:
            return "최종";
        default:
            break;
    }
}

export function stateCode(code) {
    switch(code) {
        case 0:
            return "준비 중";
        case 1:
            return "결과 대기";
        case 2:
            return "결과";
        default:
            break;
    }
}

export function resultCode(code) {
    switch(code) {
        case 0:
            return "진행 중";
        case 1:
            return "대기 중";
        case 2:
            return "합격";
        case 3:
            return "탈락";
        default:
            break;
    }
}