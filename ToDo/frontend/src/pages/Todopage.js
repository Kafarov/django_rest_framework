import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Pagination, Container} from '@mui/material'

import TodoList from '../components/Todo'


const BASE_URL = 'http://127.0.0.1:8000/todo/?'


function Todopage() {
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);
  const [todo, setTodo] = useState([]);
  const [pageLimit, setPageLimit] = useState(4);

  useEffect(() => {
    axios.get(BASE_URL + `limit=${pageLimit}&offset=${(page - 1)*pageLimit}`).then(
      ({data}) => {
        console.log(data)
        setPageQty(Math.ceil(data.count / pageLimit))
        setTodo(data.results)
        console.log(todo)
        console.log(pageQty)
      }
    )
  },[page])


  return(
    <siv>
      <Container maxWidth='md'>
        {pageQty >= 2 && (
        <Pagination
          sx={{marginX: 'auto'}}
          count={pageQty}
          page={page}
          onChange={(_, num) => setPage(num)}

          
        />)
        
        }
        </Container>
      <TodoList todo={todo} />
    </siv>
  )  
}

export default Todopage;