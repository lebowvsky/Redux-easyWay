export const changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name: name
  }
};

export const changeNickname = (nickname) => {
  return {
    type: 'CHANGE_NICKNAME',
    nickname: nickname
  }
}