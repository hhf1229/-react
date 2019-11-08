const appkey = 'huanghoufeng_1560565745828'

/* 获取所有学生 */

export default  async function getAllStudents(){
  return await fetch("/api/student/findAll?appkey=" + appkey)
  .then(resp => resp.json()).then(resp => resp.data);
}
export async function getStudents(page = 1, limit = 10) {
  return await fetch(`/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
      .then(resp => resp.json()).then(resp => resp.data);
}