export const ERROR_MESSAGE = {
  SIGNIN: '등록되지 않은 아이디이거나 아이디 또는 비밀번호를 잘못 입력했습니다.',
  SIGNUP: '이미 등록된 아이디입니다.',
  VALIDATION: {
    ID: {
      MIN: '아이디는 5자 이상이어야 합니다.',
      MAX: '아이디는 20자 이하여야 합니다.',
      REQUIRED: '아이디를 입력해주세요.',
      SPACE: '아이디에 공백을 포함할 수 없습니다.',
    },
    PW: {
      MIN: '비밀번호는 5자 이상이어야 합니다.',
      MAX: '비밀번호는 20자 이하여야 합니다.',
      REQUIRED: '비밀번호를 입력해주세요.',
      SPACE: '비밀번호에 공백을 포함할 수 없습니다.',
    },
    PW_CONFIRM: '비밀번호가 일치하지 않습니다.',
  },
  UNAUTHORIZED: '로그인이 필요합니다.',
} as const;

export const SUCCESS_MESSAGE = {
  SIGNIN: '로그인에 성공했습니다.',
  SIGNUP: '회원가입에 성공했습니다.',
  SIGNOUT: '로그아웃에 성공했습니다.',
};
