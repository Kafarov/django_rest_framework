import React from "react";
import {useState, useEffect} from 'react';
import axios from 'axios';
import {Pagination, Container} from '@mui/material'

import UserList from '../components/User';


const BASE_URL = 'http://127.0.0.1:8000/users/?'


function Userpage() {
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);
  const [users, setUsers] = useState([]);
  const [pageLimit, setPageLimit] = useState(100);

  useEffect(() => {
    axios.get(BASE_URL + `page=${page}`).then(
      ({data}) => {
        console.log(data)
        setPageQty(Math.ceil(data.count / pageLimit))
        setUsers(data.results)
        console.log(users)
        console.log(pageQty)
      }
    )
  },[page,])

  return(
    <siv>
      <Container>
        {pageQty >= 2 && (
        <Pagination
          count={pageQty}
          page={page}
          onChange={(_, num) => setPage(num)}

          sx={{marginY: 3, marginX: 'auto'}}
        />)
        }
        </Container>
      <UserList users={users} />
    </siv>
  )
}

export default Userpage;