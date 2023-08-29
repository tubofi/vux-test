

export const sign = (data) => {
  return service({
    url: '/api/sign',
    method: 'post',
    data
  })
};
