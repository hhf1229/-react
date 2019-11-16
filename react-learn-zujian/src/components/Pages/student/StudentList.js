import React from 'react'
import StudentSearchBar from '../studentSearchBar'
import StudentTable from '../studentTable/index'
import { searchStudents } from '../../../services/student'
import { useState, useEffect } from 'react'
import qs from 'query-string'
function getQuery(search) {
  const queryDefault = {
    page: 1,
    limit: 10,
    key: "",
    sex: -1
  };
  let query = qs.parse(search);
  query = Object.assign({}, queryDefault, query);
  query.limit = +query.limit;
  query.page = +query.page;
  query.sex = +query.sex;
  return query;
}
function useResp(query) {
  const [resp, setResp] = useState({
    cont: 0,
    datas: []
  })
  useEffect(() => {
    searchStudents({
      page: query.page,
      limit: query.limit,
      key: query.key,
      sex: query.sex,
    }).then(r => {
      setResp(r);
    })
  }, [query.key, query.limit, query.sex, query.page])
  return resp;
}
function changeLocation(query, history) {
  //根据条件对象，改变地址
  const search = qs.stringify(query)
  history.push("?" + search);
}
export default function StudentList(props) {
  const query = getQuery(props.location.search)
  const resp = useResp(query);
  return (
    <div>
      <StudentSearchBar defaultValue={{
        key: query.key,
        sex: query.sex
      }}
        onSearch={cod => {
          const newQuery = {
            ...query,
            key: cod.key,
            sex: cod.sex,
            page: 1
          }
          changeLocation(newQuery, props.history);
        }}
      ></StudentSearchBar>
      <StudentTable stu={resp.datas}></StudentTable>
    </div>
  )
}
